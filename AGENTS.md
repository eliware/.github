# AGENTS.md

## Project

This repository supplies shared GitHub community health files and the Eliware organization profile. Eliware owns this repository.

## Scope and boundaries

Maintain shared files and the public organization profile here. Keep project-specific rules in each target repository.

## Layout

Read [README.md](README.md), [docs/README.md](docs/README.md), and [specs/README.md](specs/README.md) to find maintained files.

## Development

Keep the shared-file guide accurate when the provided files or their GitHub behavior change.

## Validation

Use Node.js 26 or later.
Use native ESM for maintained JavaScript modules.

Run `npm test` for aggregate checks.
Run `npm run lint` for lint checks.
Run `npm run audit` for dependency checks.
Run `npm run format` to format files.
Run `npm run format:check` to check file format.

## Security

Keep credentials, secrets, private data, runtime state, and machine-specific state out of Git.

## Changes

Keep changes in this repository's scope.
