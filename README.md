# [![eliware.org](https://eliware.org/logos/brand.png)](https://discord.gg/M6aTR9eTwN)

## @eliware/.github [![License](https://img.shields.io/github/license/eliware/.github)](https://github.com/eliware/.github/blob/main/LICENSE) [![CI](https://github.com/eliware/.github/actions/workflows/ci.yaml/badge.svg)](https://github.com/eliware/.github/actions/workflows/ci.yaml)

Eliware organization-wide GitHub community health files and profile.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Setup](#setup)
- [Usage](#usage)
- [Development](#development)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Security](#security)
- [Support](#support)
- [Links](#links)
- [License](#license)

## Features

This repository provides reusable, organization-wide GitHub community health files and profile content for Eliware repositories.
Each target repository remains responsible for project-specific requirements, implementation, and settings.

## Requirements

Use Node.js 26 or later and npm 12 or later for repository validation.
This repository has no application runtime settings or configuration files.
Package metadata and CLI arguments are not runtime configuration.

## Setup

Run `npm ci` to install the validation CLI.
Run `npm test` to validate the repository.

## Usage

Use the organization-wide community health content maintained here as reusable defaults for Eliware repositories.
Use the [release checklist issue form](.github/ISSUE_TEMPLATE/release-checklist.yml) when you track a release.
Keep project-specific guidance in the repository that owns the project.
Use [specifications](specs/README.md) for this repository's directives.

## Development

Read [AGENTS.md](AGENTS.md), applicable specifications, and authoritative documentation before you change files.
Keep organization-wide defaults concise and reusable.
Link to the owning repository for detailed requirements and procedures.

## Testing

Run `npm test` for aggregate validation.
Run `npm run lint`, `npm run audit`, `npm run format`, or `npm run format:check` for individual stages.

## Troubleshooting

Use Node.js 26 or later.
Run `npm ci` after dependency changes.
Review the reported rule and file path when validation fails.

## Security

Keep credentials, secrets, decrypted data, private information, runtime output, and machine-specific state outside version control.
Do not place secret values in community health files or structured records.

## Support

For help, questions, or to chat with the author and community, visit:

[![Discord](https://eliware.org/logos/discord_96.png)](https://discord.gg/M6aTR9eTwN)[![eliware.org](https://eliware.org/logos/eliware_96.png)](https://discord.gg/M6aTR9eTwN)

**[eliware.org on Discord](https://discord.gg/M6aTR9eTwN)**

## Links

- [Home Page](https://eliware.org)
- [GitHub Org](https://github.com/eliware)
- [GitHub Repo](https://github.com/eliware/.github)
- [Bug Reports](https://github.com/eliware/.github/issues)
- [Discord](https://discord.gg/M6aTR9eTwN)

## License

[MIT © Eliware](LICENSE)
