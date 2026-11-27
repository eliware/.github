---
name: marketing-review
description: Hand off a release checklist issue for Marketing inspection using its skills.
---

# Marketing operations handoff

Run this skill only when the user explicitly invokes `$marketing-review` and supplies a release checklist issue URL.

Use the supplied issue URL as the Operations handoff for this role.

Read and follow the [Marketing public repository inspection skill](https://github.com/eliware/marketing/blob/main/skills/marketing-public-repository-review/SKILL.md). Use that skill as the source of truth for the procedure.
Read the [Marketing task handoff skill](https://github.com/eliware/marketing/blob/main/skills/marketing-review-chain/SKILL.md) when it applies.

Do not copy procedure steps into this skill.

## Release restrictions

Do not create or push Git tags. Do not publish container images. Do not run 'tagit release'.
