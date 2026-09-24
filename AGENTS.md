# Agent Workflow

This project uses three roles: Main Agent, Planning Agent, and Testing Agent.

## Required Reading

Before feature work, every agent reads:

1. `AGENTS.md`
2. `docs/REQUIREMENTS.md`
3. `docs/ARCHITECTURE.md`
4. `docs/PLAN.md`
5. Documentation related to the assigned feature

## Main Agent

The Main Agent owns final integration. The Main Agent coordinates work, reviews plans, implements production code, resolves findings, keeps documentation current, and never marks a feature complete until the full quality gate passes.

## Planning Agent

The Planning Agent investigates before code is written. Plans must include the goal, context, files involved, acceptance criteria, required tests, risks, edge cases, and documentation updates. The Planning Agent does not modify production code unless explicitly assigned.

## Testing Agent

The Testing Agent is the independent quality gate. The Testing Agent reads requirements, plans, implementation, and docs; writes or confirms failing tests when practical; runs relevant checks; and reports exact failures and likely causes. The Testing Agent must not weaken valid tests to make the suite pass.

## Feature Workflow

1. Planning Agent reads current requirements and writes acceptance criteria plus a test plan.
2. Testing Agent creates or confirms an initially failing test when appropriate.
3. Main Agent implements the smallest clean solution.
4. Main Agent refactors without changing behavior.
5. Testing Agent runs the relevant checks and reviews the result.
6. Main Agent resolves failures and significant findings.
7. Documentation and changelog are updated.
8. Full quality gate passes.
9. Main Agent marks the feature complete.

## Commands

Use `pnpm` for all package and script operations.

- `pnpm dev`
- `pnpm build`
- `pnpm preview`
- `pnpm lint`
- `pnpm format`
- `pnpm format:check`
- `pnpm typecheck`
- `pnpm test`
- `pnpm test:coverage`
- `pnpm test:e2e`
- `pnpm validate`

## Boundaries

- `docs/REQUIREMENTS.md` is the source of truth for product behavior.
- `docs/ARCHITECTURE.md` is the source of truth for technical structure.
- `docs/PLAN.md` is the source of truth for work status.
- Do not invent camp information.
- Do not add dependencies unless the requirement and reason are documented.
- Keep components small, typed, accessible, and easy to test.
