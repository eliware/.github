---
name: marketing-review
description: Hand off a release checklist issue for Marketing inspection using its runbooks.
---

# Marketing operations handoff

Run this skill only when the user explicitly invokes `$marketing-review` and supplies a release checklist issue URL.

Use the supplied issue URL as the Operations handoff for this role.

Read and follow the [Marketing public repository inspection runbook](https://github.com/eliware/marketing/blob/main/runbooks/marketing-public-repository-review.yaml). Use that runbook as the source of truth for the procedure.
Read the [Marketing task handoff runbook](https://github.com/eliware/marketing/blob/main/runbooks/marketing-review-chain.yaml) when it applies.

Do not copy runbook steps into this skill.

## Release restrictions

Do not create or push Git tags. Do not publish container images. Do not run 'tagit release'.
