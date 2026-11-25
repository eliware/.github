---
name: refactor
description: Run Codescope refactoring recommendations and apply actionable changes with a full npm test and commit between runs.
---

# Apply Codescope refactoring

Use this skill only when the user explicitly invokes $refactor or asks to use the refactor skill.

1. Read repository instructions and inspect Git status. Preserve unrelated changes.
2. Run 'codescope refactor'.
3. Inspect every result. Apply each actionable recommendation. Do not change unrelated code.
4. If no findings are actionable, stop and report that result.
5. If changes were made, run the full 'npm test' command. If tests fail, inspect the results, fix related failures, and rerun the full test command.
6. After tests pass, commit only this iteration's refactoring changes. Use the repository's commit message style.
7. Run 'codescope refactor' again only after the prior iteration passes the full test and has a commit.
8. Continue until Codescope reports no actionable findings or no remaining result can be acted on safely.
9. Report the findings, changes, test results, and commits.

Do not push changes unless the user asks.

## Release restrictions

Do not create or push Git tags. Do not publish container images. Do not run 'tagit release'.
