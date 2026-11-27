---
name: dba-review
description: Hand off a release checklist issue for DBA inspection using the DBA skill.
---

# DBA operations handoff

Run this skill only when the user explicitly invokes `$dba-review` and supplies a release checklist issue URL.

Use the supplied issue URL as the Operations handoff for this role.

Read and follow the [DBA candidate inspection skill](https://github.com/eliware/dba/blob/main/skills/dba-release-candidate-review/SKILL.md). Use that skill as the source of truth for the procedure.
Do not copy the skill steps into this skill.

## Release restrictions

Do not create or push Git tags. Do not publish container images. Do not run 'tagit release'.
