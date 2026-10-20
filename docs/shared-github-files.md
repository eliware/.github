# Using Eliware shared GitHub files

## Purpose

The public `eliware/.github` repository supplies default community health files for Eliware repositories.
It also supplies the public Eliware organization profile README.

GitHub uses an organization default when a repository does not provide a file of that type.
GitHub can use these defaults for repositories with any visibility.
The `.github` repository itself must remain public.

GitHub does not copy default files into target repositories or their clones.
Each target repository owns its project rules, code, and settings.

## Available files

This repository currently provides these shared files:

- `.github/ISSUE_TEMPLATE/release-checklist.yml` provides a release checklist template.
- `profile/README.md` provides the public Eliware organization profile text.

This repository does not currently provide default contribution, safety, or support policy files.

## How GitHub selects default files

GitHub uses a supported file from the target repository when that file exists.
For supported files with more than one valid location, GitHub checks `.github/`, the repository root, then `docs/`.
If the target repository has no matching file, GitHub uses the default from `eliware/.github`.

Issue templates follow a special rule.
If a target repository has an issue template or `config.yml` in its own `.github/ISSUE_TEMPLATE/` folder, GitHub does not use this repository's templates.
GitHub reads issue templates from the target repository's default branch.

## Override shared content

Add a supported community file to a target repository when that project needs different guidance.
Use a file location that GitHub supports for that file type.
Keep project-specific rules in the target repository.

For a local issue template, add a valid template or `config.yml` to the target repository's `.github/ISSUE_TEMPLATE/` folder.
GitHub then uses the target repository's templates rather than this repository's templates.

## Use the release checklist

Use the release checklist to record readiness and link to release records.
The checklist does not grant release or deployment authorization.

1. Open the target repository's issue chooser.
2. Select the release checklist when GitHub offers it.
3. Record the repository, version, owner, target, and release scope.
4. Record the candidate commit and check results as the release work proceeds.
5. Follow [Eliware Operations directives](https://github.com/eliware/operations/blob/main/specs/directives.yaml) for release roles, approval, and handoff.

If GitHub does not offer the checklist, check if the target repository has its own issue templates or template configuration.
If the target repository needs a project-specific release checklist, maintain that checklist in the target repository.

## View the organization profile

GitHub shows `profile/README.md` on the public Eliware organization Overview page.
The README must remain in the `profile/` folder of this public repository.
GitHub shows the public profile after a maintainer commits the file to the default branch.

## Troubleshoot missing content

If GitHub does not show a default file, check that the target repository has no file of that type in a higher-priority location.
If an issue template does not appear, check the target repository's `.github/ISSUE_TEMPLATE/` folder for valid templates or `config.yml`.
If GitHub does not show the organization README, check that `profile/README.md` is nonempty and exists on the default branch.

## References

- [GitHub default community health files](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)
- [GitHub issue templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)
- [GitHub issue forms](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)
- [GitHub organization profile README](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile)
