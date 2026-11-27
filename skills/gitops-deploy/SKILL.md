---
name: gitops-deploy
description: Hand off a release checklist issue for GitOps deployment using the GitOps skill.
---

# GitOps operations handoff

Run this skill only when the user explicitly invokes `$gitops-deploy` and supplies a release checklist issue URL.

Use the supplied issue URL as the Operations handoff for this role.

Read and follow the [GitOps desired-state promotion skill](https://github.com/eliware/gitops/blob/main/skills/desired-state-promotion/SKILL.md). Use that skill as the source of truth for the procedure.
Do not copy the skill steps into this skill.

## Release restrictions

Do not create or push Git tags. Do not publish container images. Do not run 'tagit release'.
