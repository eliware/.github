---
name: qa-review
description: Hand off a release checklist issue for QA inspection using its skills.
---

# QA operations handoff

Run this skill only when the user explicitly invokes `$qa-review` and supplies a release checklist issue URL.

Use the supplied issue URL as the Operations handoff for this role.

Read and follow the [QA release readiness skill](https://github.com/eliware/qa/blob/main/skills/qa-release-readiness-review/SKILL.md). Use that skill as the source of truth for the procedure.
Read the [QA handoff skill](https://github.com/eliware/qa/blob/main/skills/qa-review-chain/SKILL.md) when it applies.

Do not copy procedure steps into this skill.

## Release restrictions

Do not create or push Git tags. Do not publish container images. Do not run 'tagit release'.
