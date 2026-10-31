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

This repository does not provide other default community health files.

## How GitHub selects default files

GitHub uses a supported file from the target repository when that file exists.
For supported files with more than one valid location, GitHub checks `.github/`, the repository root, then `docs/`.
If the target repository has no matching file, GitHub uses the default from `eliware/.github`.
GitHub applies the same location order in this repository.

Issue templates follow a special rule.
If a target repository has a valid issue template or template configuration in its `.github/ISSUE_TEMPLATE/` folder, GitHub does not use this repository's issue templates.
GitHub reads issue templates from the target repository's default branch.

## Override shared content

Add a supported community file to a target repository when that project needs different guidance.
Use a file location that GitHub supports for that file type.
Keep project-specific rules in the target repository.

For a local issue template, add a valid template or `config.yml` to the target repository's `.github/ISSUE_TEMPLATE/` folder.
GitHub then uses the target repository's templates rather than this repository's templates.

## Use the release checklist

Use the [release checklist](../.github/ISSUE_TEMPLATE/release-checklist.yml) to record readiness and link to release records.
The checklist does not grant release or deployment authorization.

1. Open the target repository's issue chooser.
2. Select the release checklist when GitHub offers it.
3. Set the issue type to Release when GitHub offers issue types.
4. Record the repository, project owner, version, target, and release scope.
5. Record the full candidate commit and project check results.
6. Keep inspection and publication fields with their listed owners.
7. Follow your organization's release process for roles, approval, and handoff.

For a GHCR release, the checklist asks DevOps to open and link a separate GitOps issue.
Include the source SHA, image digest, image pin, and deployment request.
DevOps closes the release checklist after publication and records deployment results on that issue.

If a release does not publish a GHCR image, select the matching checklist option.
The GitOps steps do not apply.

If GitHub does not offer the checklist, check for templates or template configuration in the target repository.
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
