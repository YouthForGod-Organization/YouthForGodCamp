# Changelog

## Unreleased

### Added

- Initialized the React, TypeScript, Vite, and pnpm foundation.
- Added Tailwind CSS tokens, a shadcn/ui-style button primitive, and Lucide React.
- Added Vitest, Testing Library, vitest-axe, Playwright, ESLint, Prettier, Husky, and lint-staged configuration.
- Added a minimal accessible placeholder and tests.
- Added the project documentation system.
- Implemented the provided v9 camp template as a responsive React feature.
- Added typed template content for pillars, schedule days, schedule rows, and FAQs.
- Added the provided template hero photo as a local Vite-managed asset.
- Added desktop, iPhone, and iPad Playwright coverage for the critical path.
- Added YouthForGod Camp logo assets to the asset inventory.
- Added `public/favicon.png` from the provided Youth For God favicon mark.
- Added the confirmed "Grace That Transforms" camp theme and Titus 2:11-14 ESV main verse to typed content.
- Added the confirmed registration URL to typed content.

### Changed

- Replaced the Phase 0 placeholder UI with the Home, Schedule, and FAQ views.
- Updated metadata, design tokens, architecture docs, testing docs, decisions, and asset inventory for the template implementation.
- Adjusted the filled gold CTA color from the source template so browser axe contrast checks pass.
- Updated the active site brand from Camp Selah to YouthForGod Camp.
- Replaced the circular text emblem with the provided compact Youth For God logo.
- Removed the unconfirmed Selah Fellowship organization reference from the footer.
- Replaced the home-page placeholder theme verse with Titus 2:11-14 ESV.
- Changed Register Now controls from status buttons to links pointing to `https://app.camp-paradise.org/`.

### Removed

- Removed unused Vite scaffold files and assets.

### Verification

- `pnpm test`: Passed, 5 component tests.
- `pnpm lint`: Passed.
- `pnpm typecheck`: Passed.
- `pnpm test:coverage`: Passed.
- `pnpm build`: Passed.
- `pnpm test:e2e`: Passed with Chromium, iPhone 13 WebKit, and iPad Pro 11 after allowing the local preview server.
- `pnpm validate`: Passed after allowing the local preview server.
- Testing Agent review: Approved with no blocking findings for the template implementation, YouthForGod Camp branding update, and camp theme/main verse update.

## Phase 0 Verification Archive

- `pnpm format:check`: Passed during Phase 0.
- `pnpm lint`: Passed.
- `pnpm typecheck`: Passed.
- `pnpm test`: Passed, 3 component tests.
- `pnpm test:coverage`: Passed.
- `pnpm build`: Passed.
- `pnpm test:e2e`: Passed with Chromium and mobile WebKit after allowing the local preview server.
- `pnpm validate`: Passed after allowing the local preview server.
- Testing Agent review: Approved with no findings.
- Browser console errors and page errors: Checked by Playwright smoke test.
