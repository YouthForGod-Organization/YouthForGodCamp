# Testing

## Strategy

Each feature follows RED, GREEN, REFACTOR, VERIFY. Tests focus on user-visible behavior, accessibility, keyboard interaction, critical journeys, and regressions.

The template implementation, YouthForGod Camp branding updates, camp theme, registration destination, confirmed address, registration new-tab behavior, and confirmed November 25-29 teaching schedule were introduced with failing component tests first, then production code was added to pass those tests. Browser checks run the same critical visitor path on desktop Chromium, iPhone WebKit, and iPad Pro 11.

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
  - Verifies all page navigation, including current-page activation, requests an instant scroll reset; schedule day and FAQ controls do not. JSDOM scrollTo is stubbed per test and mocks are restored afterward.
  - Checks the Russian hero h1 and language annotation, absence of a repeated English text title, and the "Church Members Only" notice.
  - Checks the supplied hero artwork's accessible image, intrinsic dimensions, responsive candidates, and high fetch priority.
  - Verifies "What we are about?" has four h3 subsections covering sound preaching, Christian fellowship, prayer, and music, each with a named lazy-loaded image and intrinsic dimensions; old pillar titles stay absent.
  - Verifies the home view uses the provided template copy, YouthForGod Camp logo, Transforming Grace theme, and Titus 2:11-14 ESV main verse; the Schedule subtitle uses the same theme title.
  - Verifies the Schedule view is reachable, displays November 25-29, defaults to November 25, switches to November 27, and excludes stale template date/logistics copy.
  - Checks all five days of the English timetable, nine sermon titles with user-corrected speaker names and existing times, Sunday's main speaker, absence of prayer assignments and the removed repentance attribution, no scripture references or evening-service church attributions, and next-day lights out. Scripture assertions distinguish the book of John with a chapter number from the speaker's name John.
  - Verifies the FAQ view contains exactly the four confirmed questions and answers, the accordion exposes `aria-expanded`, answers appear on toggle, and stale template FAQs and open-house copy are absent.
  - Verifies the confirmed Strawberry Valley address renders in the site chrome and FAQ location answer.
  - Verifies Register Now controls link to the confirmed registration destination, open a new tab, and include `rel="noopener noreferrer"`.
  - Runs `vitest-axe` for component-level accessibility.
- `tests/e2e/foundation.spec.ts`
  - Opens the production preview build.
  - Starts genuinely scrolled down before navigation to Home, Schedule, and FAQ, then checks scroll resets to zero; also verifies keyboard activation of the current Home page.
  - Checks hero artwork decoding, uncropped 16:9 proportions, and responsive hero screenshots on desktop, iPhone, and iPad.
  - Checks all four About photos load successfully and the section has no horizontal overflow on desktop, iPhone, and iPad.
  - Exercises Home, Schedule, FAQ, day selection, FAQ expansion, confirmed date/address rendering, stale sample-content absence, and Register Now link behavior.
  - Runs `@axe-core/playwright`.
  - Checks accessibility and horizontal overflow on the expanded Friday schedule and verifies Sunday departure.
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
