# [![eliware.org](https://eliware.org/logos/brand.png)](https://discord.gg/M6aTR9eTwN)

@eliware/.github [![License](https://img.shields.io/github/license/eliware/.github)](https://github.com/eliware/.github/blob/main/LICENSE) [![CI](https://github.com/eliware/.github/actions/workflows/ci.yaml/badge.svg)](https://github.com/eliware/.github/actions/workflows/ci.yaml)

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
- [License](#license)
- [Links](#links)

## Features

This repository provides reusable, organization-wide GitHub community health files and profile content for Eliware repositories. Each target repository remains responsible for project-specific requirements, implementation, and settings.

Package description: Eliware organization-wide GitHub community health files and profile. Author: Eliware <eliware@eliware.org>. License: MIT.

## Requirements

Node.js 26 and npm 12 or later are required for repository validation.

## Setup

Run `npm ci` from the repository root to install the validation tooling.

## Usage

Use the organization-wide community health content maintained here as reusable defaults for Eliware repositories. Keep project-specific guidance in the repository that owns the project, and follow its local instructions where they apply.

Documentation: [specifications](specs/README.md)

## Development

Read [AGENTS.md](AGENTS.md), this README, the applicable specifications, and the authoritative documentation before changing files. Keep organization-wide defaults concise and reusable; link to the owning repository for detailed requirements and procedures.

## Testing

Run `npm test` for aggregate validation. Use `npm run lint`, `npm run audit`, `npm run format`, or `npm run format:check` for focused stages. The scripts run through `eliware-test`.

## Troubleshooting

Use Node.js 26 and run `npm ci` after dependency changes. Review the rule and file path reported by `eliware-test` when validation fails.

## Security

Keep credentials, secrets, decrypted data, private information, runtime output, and machine-specific state outside version control. Do not place secret values in community health files or structured records.

## Support

[![Discord](https://eliware.org/logos/discord_96.png)](https://discord.gg/M6aTR9eTwN)

**[eliware.org on Discord](https://discord.gg/M6aTR9eTwN)**

Use the [Eliware Discord community](https://discord.gg/M6aTR9eTwN), [GitHub issues](https://github.com/eliware/.github/issues), or eliware@eliware.org. Include the relevant file path and a concise description of the issue when requesting help.

## License

[license](LICENSE)

## Links

Documentation: [specifications](specs/README.md)

- [Home Page](https://github.com/eliware/.github#readme)
- [GitHub repository](https://github.com/eliware/.github.git)
- [Eliware](https://eliware.org)
- [GitHub organization](https://github.com/eliware)
- [Discord](https://discord.gg/M6aTR9eTwN)
- [Eliware Docs](https://github.com/eliware/docs)
- [Canonical repository profile specifications](https://github.com/eliware/test/blob/main/specs/conventions/README.md)
- [specifications](specs/README.md)
