#!/usr/bin/env node

import { readdir, readFile, stat } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseDocument } from "yaml";

const skillsDirectory = resolve(dirname(fileURLToPath(import.meta.url)), "..", "skills");
const allowedFrontmatterKeys = new Set([
  "name",
  "description",
  "license",
  "allowed-tools",
  "metadata",
]);
const maxSkillNameLength = 64;
const maxDescriptionLength = 1024;

function validateSkillName(name, directoryName, errors) {
  if (typeof name !== "string") {
    errors.push("Frontmatter name must be a string.");
    return;
  }

  if (!/^[a-z0-9-]+$/.test(name)) {
    errors.push("Frontmatter name must use lowercase letters, digits, and hyphens.");
  }
  if (name.startsWith("-") || name.endsWith("-") || name.includes("--")) {
    errors.push("Frontmatter name cannot start or end with a hyphen or use consecutive hyphens.");
  }
  if (name.length > maxSkillNameLength) {
    errors.push(`Frontmatter name exceeds ${maxSkillNameLength} characters.`);
  }
  if (name !== directoryName) {
    errors.push(`Frontmatter name "${name}" does not match folder "${directoryName}".`);
  }
}

function parseYaml(source, label, errors) {
  const document = parseDocument(source, { uniqueKeys: true });
  for (const issue of document.errors) {
    errors.push(`${label}: ${issue.message}`);
  }
  if (document.errors.length > 0) {
    return null;
  }

  try {
    return document.toJS();
  } catch (error) {
    errors.push(`${label}: ${error.message}`);
    return null;
  }
}

function validateDescription(description, errors) {
  if (typeof description !== "string") {
    errors.push("Frontmatter description must be a string.");
    return;
  }

  const value = description.trim();
  if (value.startsWith("[TODO:")) {
    errors.push("Frontmatter description contains an unfinished TODO placeholder.");
  }
  if (value.includes("<") || value.includes(">")) {
    errors.push("Frontmatter description cannot contain angle brackets.");
  }
  if (value.length > maxDescriptionLength) {
    errors.push(`Frontmatter description exceeds ${maxDescriptionLength} characters.`);
  }
}

function findTodoOutsideCode(body) {
  let fenceCharacter = null;
  let fenceLength = 0;

  for (const line of body.split(/\r?\n/)) {
    const fence = /^[ \t]*(?:(?:[-+*]|\d+[.)])[ \t]+)?(`{3,}|~{3,})(.*)$/.exec(line);
    if (fence) {
      const marker = fence[1];
      if (fenceCharacter === null) {
        fenceCharacter = marker[0];
        fenceLength = marker.length;
      } else if (
        marker[0] === fenceCharacter &&
        marker.length >= fenceLength &&
        fence[2].trim() === ""
      ) {
        fenceCharacter = null;
        fenceLength = 0;
      }
      continue;
    }

    if (fenceCharacter === null && /^[ ]{0,3}\[TODO:[^\n]*\][ \t]*$/.test(line)) {
      return true;
    }
  }

  return false;
}

async function validateSkill(skillPath) {
  const directoryName = skillPath.split(/[\\/]/).at(-1);
  const errors = [];
  let content;

  try {
    content = await readFile(join(skillPath, "SKILL.md"), "utf8");
  } catch {
    return ["SKILL.md is missing or unreadable."];
  }

  const normalized = content.replace(/^\uFEFF/, "");
  const lines = normalized.split(/\r?\n/);
  if (lines[0] !== "---") {
    errors.push("SKILL.md must start with YAML frontmatter.");
    return errors;
  }

  const closingIndex = lines.findIndex((line, index) => index > 0 && line.trim() === "---");
  if (closingIndex < 0) {
    errors.push("YAML frontmatter has no closing delimiter.");
    return errors;
  }

  const frontmatter = parseYaml(lines.slice(1, closingIndex).join("\n"), "Frontmatter", errors);
  if (frontmatter === null || typeof frontmatter !== "object" || Array.isArray(frontmatter)) {
    errors.push("Frontmatter must be a YAML mapping.");
    return errors;
  }

  for (const key of Object.keys(frontmatter)) {
    if (!allowedFrontmatterKeys.has(key)) {
      errors.push(`Frontmatter contains unsupported key "${key}".`);
    }
  }
  if (!Object.hasOwn(frontmatter, "name")) {
    errors.push('Frontmatter is missing required key "name".');
  } else {
    validateSkillName(frontmatter.name, directoryName, errors);
  }
  if (!Object.hasOwn(frontmatter, "description")) {
    errors.push('Frontmatter is missing required key "description".');
  } else {
    validateDescription(frontmatter.description, errors);
  }

  const body = lines.slice(closingIndex + 1).join("\n");
  if (findTodoOutsideCode(body)) {
    errors.push("Skill instructions contain an unfinished TODO placeholder.");
  }

  const agentMetadataPath = join(skillPath, "agents", "openai.yaml");
  try {
    const agentMetadata = await readFile(agentMetadataPath, "utf8");
    const metadata = parseYaml(agentMetadata, "agents/openai.yaml", errors);
    if (metadata !== null) {
      if (metadata?.policy?.allow_implicit_invocation !== false) {
        errors.push("agents/openai.yaml must set policy.allow_implicit_invocation to false.");
      }
    }
  } catch {
    errors.push("agents/openai.yaml is missing or unreadable.");
  }

  return errors;
}

async function main() {
  let entries;
  try {
    entries = await readdir(skillsDirectory);
  } catch (error) {
    console.error(`Cannot read skills directory ${skillsDirectory}: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  const skillFolders = [];
  for (const entry of entries) {
    const entryPath = join(skillsDirectory, entry);
    try {
      if ((await stat(entryPath)).isDirectory()) {
        skillFolders.push(entryPath);
      }
    } catch {
      console.error(`FAIL ${entry}: cannot inspect skill folder.`);
      process.exitCode = 1;
    }
  }

  if (skillFolders.length === 0) {
    console.error(`No skill folders found in ${skillsDirectory}.`);
    process.exitCode = 1;
    return;
  }

  let invalidCount = 0;
  for (const skillPath of skillFolders.sort()) {
    const skillName = skillPath.split(/[\\/]/).at(-1);
    const errors = await validateSkill(skillPath);
    if (errors.length === 0) {
      console.log(`PASS ${skillName}`);
      continue;
    }

    invalidCount += 1;
    console.error(`FAIL ${skillName}`);
    for (const error of errors) {
      console.error(`  - ${error}`);
    }
  }

  const validCount = skillFolders.length - invalidCount;
  console.log(
    `Validated ${skillFolders.length} skills: ${validCount} passed, ${invalidCount} failed.`,
  );
  if (invalidCount > 0) {
    process.exitCode = 1;
  }
}

await main();
