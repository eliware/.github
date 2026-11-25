---
name: release-notes
description: Write release notes from the previous Git tag, run npm tests, commit and push the release notes, and run TagIt preflight.
---

# Prepare release notes

Use this skill only when the user explicitly invokes $release-notes or asks to use the release notes skill.

1. Read repository instructions and inspect Git status. Preserve changes outside RELEASE_NOTES.md.
2. Identify the latest stable release tag. Use that tag as the previous release.
3. Restore RELEASE_NOTES.md to its contents at that tag. Follow the existing section format.
4. Run 'tagit notes'. Inspect its output and compare it with the Git history and changes since the tag.
5. Update RELEASE_NOTES.md with today's local date and every change since the tag. Do not change unrelated files.
6. Run 'npm test'. If tests fail, inspect the results and fix release-related problems. Rerun the full test command until it passes or a safe fix is unavailable.
7. After tests pass, commit the release notes and any related fixes. Use the repository's commit message style.
8. Push the commit to the current branch.
9. Run 'tagit preflight' after the push. Report its test and CI results.
10. Do not publish an npm package unless the user asks.

If a required command, tag, or release notes file is unavailable, stop and report the blocker. Do not commit or push while tests fail.

## Release restrictions

Do not create or push Git tags. Do not publish container images. Do not run 'tagit release'.
