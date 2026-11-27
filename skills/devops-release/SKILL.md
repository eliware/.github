---
name: devops-release
description: Hand off a release checklist issue for DevOps release using the DevOps skill.
---

# DevOps operations handoff

Run this skill only when the user explicitly invokes `$devops-release` and supplies a release checklist issue URL.

Use the supplied issue URL as the Operations handoff for this role.

Read and follow the [DevOps release skill](https://github.com/eliware/devops/blob/main/skills/devops-release-chain/SKILL.md). Use that skill as the source of truth for the procedure.
Do not copy the skill steps into this skill.

## Release restrictions

Do not create or push Git tags. Do not publish container images. Do not run 'tagit release'.
