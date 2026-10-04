# AGENTS.md

## Project

Repository: `eliware/.github`. Purpose: provide Eliware-wide default GitHub community health files and reusable contribution profile content.

## Scope and boundaries

These instructions apply repository-wide; a nearer `AGENTS.md` may add guidance for its subdirectory. Repository scope: this repository owns reusable organization-wide GitHub community health content and its configuration. Its boundaries exclude target repositories' project-specific requirements, implementation, runtime settings, and repository settings. This repository includes shared defaults; it does not own or override the local requirements of target repositories. Follow the shared requirements in [Eliware Test conventions](https://github.com/eliware/test/tree/main/specs/conventions), documentation guidance in [Eliware Docs](https://github.com/eliware/docs), and cross-cutting procedures in [Eliware Operations](https://github.com/eliware/operations). Before changing files, read the root README.md, applicable AGENTS.md instructions, and documentation relevant to the change.

## Layout

Required structure and files: `README.md` is the repository entry point. `AGENTS.md` contains contributor instructions. `specs/README.md` indexes repository directives under `specs/`. `.github/ISSUE_TEMPLATE/release-checklist.yml` provides the minimal shared release checklist form. `.github/workflows/ci.yaml` validates this repository. `.knit/deploy.yaml` defines the repository's Knit validation and dev deployment configuration. Keep indexes and links aligned with files on disk.

## Development

Before changing files, read README.md, applicable AGENTS.md instructions, and applicable documentation relevant to the change. Keep organization-wide defaults reusable and within this repository's scope; link to authoritative requirements and procedures instead of copying them. These instructions apply repository-wide; nearer AGENTS.md instructions apply within subdirectories. Every source and test module has a single responsibility: one cohesive purpose and one reason to change. Business-logic modules and coordinators, including coordinators of coordinators, are valid when each module does only its own responsibility. For every distinct responsibility, add a focused submodule with a mirrored test, wire it through its owner, and do not add the new responsibility to an existing module. During ordinary review, refactor them when mixed responsibilities are found. Line counts do not establish single responsibility; passing them does not prove cohesion or permit mixed responsibilities below any applicable blocking maxima. Project-specific instructions may add requirements without weakening shared requirements unless authorized. Keep instructions actionable, current, and concise.

## Validation

Use Node.js 26 and npm 12 or later with native ESM `.mjs` validation scripts. This repository has no application runtime commands, environment variables, or runtime configuration; package metadata and command-line arguments are not runtime configuration. Run `npm ci` after dependency changes and `npm test` for aggregate validation. Use `npm run lint`, `npm run audit`, `npm run format`, and `npm run format:check` for focused stages; use `format:check` for read-only formatting validation. The scripts route through `eliware-test`. CI runs `npm ci` followed by `npm test` on Ubuntu. Run `git diff --check` before handoff.

## Security

Keep credentials, secrets, decrypted data, runtime output, private information, and machine-specific state outside version control. Do not include secret values or private operational details in community health files or structured records.

## Changes

Keep changes focused on reusable organization-wide GitHub community health content. Link to the repository that owns project-specific requirements or procedures. Record approved deviations with their reason, approver, and expiry. Do not publish, release, deploy, synchronize, tag, or push changes without explicit authorization; this file does not grant that authorization.
