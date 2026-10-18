# AGENTS.md

## Project

This repository provides shared GitHub files for Eliware repositories.

## Scope and boundaries

This repository owns shared defaults. Each target repository owns its project rules, code, and settings.

## Layout

Read [specs/README.md](specs/README.md) to find repository directives.

## Development

Keep each source and test module focused on one purpose.

## Validation

Use Node.js 26 or later and npm 12 or later.
Use native ESM for maintained JavaScript modules.

Run `npm test` for aggregate checks.
Run `npm run lint` for lint checks.
Run `npm run audit` for dependency checks.
Run `npm run format` to format files.
Run `npm run format:check` to check file format.

## Security

Keep credentials, secrets, private data, and runtime state out of Git.

## Changes

Receive approval through Eliware Operations before external changes.
Do not use validation as approval to release or deploy.
