---
name: "\u0062ump"
description: Prepare npm releases with dependency updates, a package version, release notes, tests, commits, pushes, and TagIt preflight.
---

# Prepare an npm release

Use this skill only when the user invokes `$bump` or requests this skill by name.

## Inspect the repository

1. Confirm that the repository has `package.json`, an npm lockfile, and the `tagit` command. Read repository instructions and inspect Git status.
2. List Git tags. Identify the latest stable semantic version tag. Inspect the package version, lockfile version, and newest release notes section.
3. Preserve unrelated user changes. Stage only release changes and fixes from this task.
4. If the latest tag or package version is unclear, stop and report the problem. If `tagit` is unavailable, stop and report the problem. If you cannot safely restore release notes, stop and report the problem.

## Update dependencies

1. Run `npm outdated`. Include development dependencies. Use its nonzero exit code as an outdated-package report.
2. Install the `@latest` version of every outdated package declared in `package.json`. Include development dependencies and `eliware/test`.
3. Run `npm update`. Then run `npm install`.
4. Read the installed `eliware/test` version. Check the resulting `package.json` and lockfile.

## Select the package version

Use semantic versions in `MAJOR.MINOR.PATCH` format. Let `T` be the latest stable Git tag. Let `E` be the installed `eliware/test` version.

- If `T` and `E` share major and minor numbers, use `T`'s major and minor numbers. Increase `T`'s patch by one.
- If the major or minor numbers do not match, use the full `E` version.
- If `package.json` currently has the target version, keep it. If not, set `package.json` and the npm lockfile to the target, regardless of its current version.
- If the target sorts lower than `T`, stop and describe the conflict before changing the version.
- Report `T`, `E`, and the target version in the final summary.

## Refresh release notes

1. Restore `RELEASE_NOTES.md` to its contents at `T`. Follow the repository's heading and date format.
2. Run `tagit notes`. Inspect its result. Include every change since `T`. Compare the notes with Git history and the diff.
3. Add or update one unreleased section above the tagged sections. Use the target version and today's local date.
4. If `RELEASE_NOTES.md` does not exist at `T`, stop and report the problem. If `tagit notes` lacks sufficient information, stop and report the missing information.

## Test and fix

1. Run `npm test` after dependency updates and after you update `RELEASE_NOTES.md`.
2. If tests fail, read their output. Fix issues caused by updated dependencies or new `eliware/test` requirements. Follow fixes described by the test output.
3. After each fix, run `npm test` again. Continue until tests pass or the failure lacks a safe, evidence-based fix.
4. Do not commit or push while `npm test` fails.

## Commit, push, and preflight

1. After tests pass, stage the package manifest, lockfile, release notes, and related fixes. Keep unrelated changes unstaged.
2. Create a commit that follows the repository's message style. Push the current branch.
3. Run `tagit preflight`. It runs tests and checks CI. Do not check CI separately when preflight succeeds.
4. If preflight reports a CI failure, inspect the CI logs. Fix the cause, run `npm test`, commit and push the fix, then run preflight again.
5. Continue when each failure has an actionable fix. If CI fails externally, logs are unavailable, or the same failure repeats, stop and report the blocker.
6. Summarize the target version, dependency updates, test result, commit and push result, and preflight result.

## Release restrictions

Do not create or push Git tags. Do not publish container images. Do not run 'tagit release'.
