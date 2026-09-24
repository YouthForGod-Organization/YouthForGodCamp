# November Camp Website

This repository contains a React, TypeScript, and Vite website for YouthForGod Camp. The current implementation applies the provided v9 youth camp template from `Christian Youth Camp Templates` with its supplied structure, copy, schedule, FAQ, colors, hero image, confirmed YouthForGod Camp logo, confirmed theme, and registration destination.

Template-provided details are treated as unconfirmed production facts until they are explicitly approved. Do not add or change dates, pricing, schedules, addresses, registration details, testimonials, or contact information without updating `docs/REQUIREMENTS.md` first. The currently confirmed dates are November 25-29, and the currently confirmed address is `12725 La Porte Rd, Strawberry Valley, CA 95981`.

## Stack

- React, TypeScript strict mode, and Vite
- pnpm 12.3.4
- Tailwind CSS with CSS variables and design tokens
- shadcn/ui-style component primitives and Lucide React icons
- Vitest, React Testing Library, user-event, jest-dom, and vitest-axe
- Playwright with axe accessibility smoke coverage
- ESLint, Prettier, Husky, and lint-staged

Corepack activated pnpm `12.3.4` for this workspace. The project does not set a `packageManager` field because pnpm 12 attempts package-manager self-resolution from the registry on every command in this restricted environment.

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
pnpm lint
pnpm format
pnpm format:check
pnpm typecheck
pnpm test
pnpm test:coverage
pnpm test:e2e
pnpm validate
```

`pnpm validate` runs formatting checks, linting, TypeScript checking, unit/component tests, coverage, end-to-end tests, and a production build through the e2e script.

## Local Development

1. Install dependencies with `pnpm install`.
2. Start the dev server with `pnpm dev`.
3. Keep changes small and test-driven.
4. Update documentation whenever requirements, architecture, commands, or decisions change.

## Current Scope

The app currently includes:

- A responsive YouthForGod Camp home view using the provided black-and-white hero photo and compact logo.
- The confirmed camp theme, "Grace That Transforms," with Titus 2:11-14 ESV as the home-page main verse.
- In-app Home, Schedule, and FAQ views.
- A typed schedule day selector for November 25-29 with the Wednesday-Sunday teaching outline and November 25 selected by default.
- A keyboard-operable FAQ accordion.
- Register links pointing to `https://app.camp-paradise.org/` and opening in a new tab.
- The confirmed Strawberry Valley address in the footer and FAQ location answer.
- Unconfirmed price, phone, arrival/departure times, transportation, and carpool details are not shown as confirmed facts.
- Desktop, mobile, and iPad Playwright smoke coverage with accessibility and overflow checks.

# YouthForGodCamp
