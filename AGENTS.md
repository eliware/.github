# AGENTS.md

## Project

Read [README.md](README.md) for the purpose, owner, and scope of this repository.

## Scope and boundaries

Keep each requirement in its owning specification.

## Layout

Read [README.md](README.md) and [specs/README.md](specs/README.md) to find maintained files.

## Development

Give each source and test module one cohesive purpose.
Split a module when it has more than one cause for change.

## Validation

Use Node.js 26 or later.
Use native ESM for maintained JavaScript modules.

Run `npm test` for aggregate checks.
Run `npm run lint` for lint checks.
Run `npm run audit` for dependency checks.
Run `npm run format` to format files.
Run `npm run format:check` to check file format.

## Security

Keep credentials, secrets, private data, and runtime state out of Git.

## Changes

Keep changes in this repository's scope.
