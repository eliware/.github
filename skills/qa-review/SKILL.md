---
name: qa-review
description: Hand off a release checklist issue for QA inspection using its runbooks.
---

# QA operations handoff

Run this skill only when the user explicitly invokes `$qa-review` and supplies a release checklist issue URL.

Use the supplied issue URL as the Operations handoff for this role.

Read and follow the [QA release readiness runbook](https://github.com/eliware/qa/blob/main/runbooks/qa-release-readiness-review.yaml). Use that runbook as the source of truth for the procedure.
Read the [QA handoff runbook](https://github.com/eliware/qa/blob/main/runbooks/qa-review-chain.yaml) when it applies.

Do not copy runbook steps into this skill.

## Release restrictions

Do not create or push Git tags. Do not publish container images. Do not run 'tagit release'.
