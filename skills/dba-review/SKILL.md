---
name: dba-review
description: Hand off a release checklist issue for DBA inspection using the DBA runbook.
---

# DBA operations handoff

Run this skill only when the user explicitly invokes `$dba-review` and supplies a release checklist issue URL.

Use the supplied issue URL as the Operations handoff for this role.

Read and follow the [DBA candidate inspection runbook](https://github.com/eliware/dba/blob/main/runbooks/dba-release-candidate-review.yaml). Use that runbook as the source of truth for the procedure.
Do not copy runbook steps into this skill.

## Release restrictions

Do not create or push Git tags. Do not publish container images. Do not run 'tagit release'.
