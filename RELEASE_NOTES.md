# Release Notes

## 15.0.0 — 2026-10-21

### Changed

- Align package metadata and repository directives with Convention 15. Update `@eliware/test` to version 15.0.0 and refresh the dependency lockfile.
- Update the release checklist for v15. Allow Eli or Operations to start Marketing inspection after project readiness.
- Expand Marketing checks to cover tracked Markdown files, presentations, links, images, badges, package fields, and repo-map fields. Record metadata sync, prior issues, and the full candidate SHA.
- Require Operations to send DevOps one handoff after Eli confirms publication. Record the checklist link, repository, version, full candidate SHA, Marketing and QA results, TagIt preflight result, and Eli's publication decision.
- Require DevOps to verify the handoff and record the reviewed candidate separately from the release commit and tag target. Record the npm version and workflow result or the GHCR workflow result, image digest, registry digest match, and immutable-digest inspection.
- Require GitOps to check the candidate and image data. GitOps reports the deployment diff, checks, risks, and proposed action. Eli must accept the exact change before GitOps commits or pushes it.
- Require each inspection role to report all blockers together. Close the checklist after publication with DevOps when GHCR does not apply, or after rollout with Operations when GHCR applies.

## 14.0.0 — 2026-10-20

### Added

- Add an end-user guide for shared GitHub files, release checklists, and the organization profile.

### Changed

- Align package metadata and repository directives with Convention 14.
- Update `@eliware/test` to version 14.0.0.
- Align the root README and AGENTS.md with the maintained documentation and repository conventions.
- Open the release checklist before readiness checks and record results as work proceeds.
- Allow checklist creation before a candidate commit exists.
- Keep approval records tied to the full candidate commit and repeat inspections when that commit changes.
- Require complete readiness, Marketing, QA, and DevOps results before Operations closes the checklist.
- Record coverage, status, blockers, corrective issues, and pre-publication checks.
- Separate nonblocking suggestions from release blockers.
- Replace private Operations links with organization-neutral release guidance.

## 13.0.0 — 2026-10-19

### Added

- Add a complete release checklist with readiness, Marketing, QA, authorization, publication, deployment, and required records.
- Require Marketing to record its first inspection and the candidate commit before QA inspection.
- Require full Git history in CI so repository checks can inspect tags and prior commits.

### Changed

- Align package metadata and repository directives with Convention 13.
- Update `@eliware/test` to version 13 and refresh the npm dependency lockfile.
- Align the CI workflow with Eliware Test and use `actions/checkout@v7`.
- Update the Knit deployment command to pull the configured branch.
- Update the organization profile heading to “Community.”
- Align the README and AGENTS.md files with required repository guidance.
- Restore contributor context and development guidance in AGENTS.md.
- Simplify the shared CI workflow formatting.
- Align the release checklist with project readiness gates and Operations-led cross-role inspections and closure.
- Give Marketing, QA, and DevOps separate checklist records.
- Expand Marketing inspection to all Markdown files and public package metadata.
- Add curated public project links and a public documentation link to the organization profile.
