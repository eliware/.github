---
name: devops-release
description: Hand off a release checklist issue for DevOps release using the DevOps runbook.
---

# DevOps operations handoff

Run this skill only when the user explicitly invokes `$devops-release` and supplies a release checklist issue URL.

Use the supplied issue URL as the Operations handoff for this role.

Read and follow the [DevOps release runbook](https://github.com/eliware/devops/blob/main/runbooks/devops-release-chain.yaml). Use that runbook as the source of truth for the procedure.
Do not copy runbook steps into this skill.

## Release restrictions

Do not create or push Git tags. Do not publish container images. Do not run 'tagit release'.
