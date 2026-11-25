---
name: fix-blockers
description: Fix release issues, test and push fixes, run TagIt preflight, close resolved issues, and prepare the release checklist for Marketing inspection.
---

# Resolve release blockers

Use this skill only when the user explicitly invokes $fix-blockers or asks to use the blocker-fix skill.

## Find and fix blockers

1. Read repository instructions and inspect Git status. Preserve unrelated changes.
2. List open issues in the current repository. Identify issues that prevent this release. Keep unrelated work open.
3. Inspect each blocker and its reproduction details. Fix issues that repository proof supports. Do not claim a fix without a change or a verified resolution.
4. If no open issue prevents the release, report that result and stop. Continue only if the user requests new validation proof.
5. After fixes, run the full 'npm test' command. If tests fail, inspect the results, fix related failures, and rerun the full test command.
6. After tests pass, commit only the blocker fixes. Use the repository's commit message style.
7. Push the commit to the current branch. Run 'tagit preflight' and inspect its test and CI results.
8. If preflight fails, inspect its output and CI logs. Fix actionable failures, run the full 'npm test', commit and push the fixes, then run preflight again.
9. Continue while each failure gives an actionable and safe fix. If a failure repeats without a new fix or comes from an external cause, stop and report the blocker.

## Close resolved issues

1. Close an issue only after its fix has a pushed commit and the full test and TagIt preflight pass.
2. Update each resolved issue with the fix commit and test proof before closing it.
3. Keep unresolved issues and unrelated open issues open. Report their links and remaining work.

## Refresh the release checklist

1. Find the open release checklist issue for this repository. If none exists, use '.github/ISSUE_TEMPLATE/release-checklist.yml' to create one.
2. Update the checklist with the new full candidate SHA, resolved issue links, passed 'npm test' result, CI proof, and 'tagit preflight' result.
3. Keep project readiness checks complete only when verified proof supports them.
4. Mark prior Marketing checks incomplete. Remove their saved results so Marketing can inspect the new candidate.
5. If the candidate SHA changed, mark prior QA results incomplete too. The template requires Marketing and QA to inspect the same candidate.
6. Keep publication and deployment authorization incomplete. Keep the release checklist open.
7. Verify the saved issue and report its link, the candidate SHA, the checks, and any unresolved blockers.

If GitHub issue access, issue updates, or issue closure is unavailable, report the access problem. Do not claim that issues or the checklist were updated.

## Release restrictions

Do not create or push Git tags. Do not publish container images. Do not run 'tagit release'.
