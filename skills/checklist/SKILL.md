---
name: checklist
description: Create this repository's release checklist issue with verified project readiness proof, then mark it prepared for Marketing inspect.
---

# Create the release checklist issue

Use this skill only when the user explicitly invokes $checklist or asks to use the checklist skill.

## Create the issue

1. Read repository instructions and inspect Git status. Identify the GitHub repository, repository name, package name, current release version, target branch, and full candidate commit SHA.
2. Read '.github/ISSUE_TEMPLATE/release-checklist.yml'. Use that issue format and its exact field labels and choices. If the file is unavailable, stop and report the problem.
3. Open a new issue in the current repository. Include the release version in the title. Set the issue type to Release and verify the type.
4. Set Project owner to eliware/<repo-name>, using the current repository's name.
5. Preserve the format's scope and release gates. Keep the issue open for Operations to complete later.

## Record project readiness

1. Verify each project readiness item from repository proof and the current task context. Mark a checkbox only when the proof supports it.
2. Record that Eli confirmed 'codescope refactor' and 'codescope all' passed. Attribute this confirmation to Eli. Do not rerun one or command solely for this issue.
3. Include the passed 'npm test', CI, and 'tagit preflight' proof. Record the full candidate SHA and link to the CI run when available.
4. If proof is missing, run the related check when the current environment supports it. Do not mark a check complete when it fails or remains unverified.
5. Record dependency, documentation, issue inspect, release notes, Codescope, test, CI, and TagIt results in Project readiness records.
6. Mark the issue prepared for Marketing only after all project readiness checks pass. If any check is incomplete, list the blocker and Keep the issue not prepared.

## Record Marketing and QA conditions

1. Keep Marketing inspection checkboxes incomplete. State that the issue is prepared for Marketing inspect.
2. Keep QA inspection incomplete until QA records its result for the same full candidate SHA.
3. Record that Eli approves the release only if both Marketing and QA pass. Use this as conditional approval.
4. Do not mark publication authorization or publication complete. This issue does not authorize publication or deployment.
5. Add the candidate SHA, proof links, check results, and any blocker links to their matching format fields.
6. Verify the saved issue's type, project owner, title, candidate SHA, readiness checks, and inspect conditions. Report the issue link and any missing proof.

If GitHub issue creation or issue type assignment is unavailable, do not claim that the issue was created or typed. Report the blocker.

## Release restrictions

Do not create or push Git tags. Do not publish container images. Do not run 'tagit release'.
