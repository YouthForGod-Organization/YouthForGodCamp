# Testing

## Strategy

Each feature follows RED, GREEN, REFACTOR, VERIFY. Tests focus on user-visible behavior, accessibility, keyboard interaction, critical journeys, and regressions.

The template implementation, YouthForGod Camp branding updates, camp theme, and registration destination were introduced with failing component tests first, then production code was added to pass those tests. Browser checks run the same critical visitor path on desktop Chromium, iPhone WebKit, and iPad Pro 11.

## Tools

- Vitest for unit and component tests
- React Testing Library for DOM behavior
- `@testing-library/user-event` for interaction
- `@testing-library/jest-dom` for DOM assertions
- `vitest-axe` and `axe-core` for component accessibility checks
- Playwright and `@axe-core/playwright` for browser smoke and accessibility checks

## Commands

```bash
pnpm test
pnpm test:coverage
pnpm test:e2e
pnpm validate
```

`pnpm validate` is the full local quality gate.

## Current Coverage

- `src/app/App.test.tsx`
  - Verifies the home view uses the provided template copy, YouthForGod Camp logo, Grace That Transforms theme, and Titus 2:11-14 ESV main verse.
  - Verifies the Schedule view is reachable, defaults to Monday, and switches to Tuesday.
  - Verifies the FAQ view is reachable, the accordion exposes `aria-expanded`, and answers appear on toggle.
  - Verifies Register Now controls link to the confirmed registration destination.
  - Runs `vitest-axe` for component-level accessibility.
- `tests/e2e/foundation.spec.ts`
  - Opens the production preview build.
  - Exercises Home, Schedule, FAQ, day selection, FAQ expansion, and Register Now link behavior.
  - Runs `@axe-core/playwright`.
  - Fails on browser console errors and page errors.
  - Fails if the document has horizontal overflow.
- `playwright.config.ts`
  - Runs Chromium desktop, iPhone 13 WebKit, and iPad Pro 11 projects.

## Conventions

- Test behavior through roles, labels, visible text, and accessible names.
- Prefer the smallest valuable test set over arbitrary 100 percent coverage.
- Do not skip, weaken, or delete a valid failing test to make the build pass.
- Add Playwright coverage for critical navigation, responsive behavior, forms, and browser-only risks as features are added.
- Playwright smoke tests should fail on page errors and browser console errors.
