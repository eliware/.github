# Release Notes

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
- Align the release checklist with Operations E-12.6 and source-commit records.
- Give Marketing, QA, and DevOps separate checklist records.
- Set Marketing scope to README presentation, branding, links, and public copy.
