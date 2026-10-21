# Release Notes

## 15.0.0 — 2026-10-21

### Changed

- Align package metadata and repository directives with Convention 15.
- Update `@eliware/test` to version 15.0.0 and refresh the dependency lockfile.
- Update the release checklist for v15 and allow Eli or Operations to start Marketing inspection after project readiness.
- Require Marketing to record Markdown, links, images, badges, metadata, sync results, issues, and the candidate commit.

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
