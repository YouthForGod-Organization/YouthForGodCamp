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
- Added the confirmed Strawberry Valley camp address to typed content.
- Added the confirmed November 25-29 date range to typed content.

### Changed

- Expanded "Who is camp for?" to explain that church members are individuals who have been baptized and are committed to a local church.
- Removed the repeated English title beneath the hero artwork, kept the Russian translation as the h1, and added "Church Members Only" above registration.
- Replaced the old building hero with the supplied full-color Transforming Grace artwork, optimized into responsive 1920/960 WebP files. Kept its complete composition and placed bilingual copy and registration below on a dark forest panel; original PNG retained.
- Renamed the camp theme to "Transforming Grace" on Home and Schedule, sharing one title source and preserving the Russian translation.
- Replaced the four About stock photos with user-supplied photos, optimized to 1200 × 800 WebP (about 247 KB combined), retaining CSS grayscale and the original files.
- Simplified schedule teaching entries to sermon titles without scripture references or summaries; replaced template FAQs with the four confirmed answers about audience, expectations, packing, and location.
- Removed the obsolete FAQ open-house promotion.
- Changed the hero theme to a readable sans-serif heading with "Преображающая благодать" directly below the English title.
- Applied a black-and-white CSS filter to the four About photos.
- Expanded "What we are about?" into four responsive subsections with locally hosted Unsplash photos, short descriptions, and accessible headings for sound preaching, Christian fellowship, prayer, and music.
- Removed all "Led by" church attributions from the schedule while retaining evening-service events and times.
- Added Wednesday's evening service, dinner, fellowship, tea and sauna, and next-morning lights out at the supplied times.
- Translated and summarized the supplied daily program in English, attached all nine preaching topics to their lesson times, and added evening-service church assignments and confirmed arrival/departure times.
- Simplified the home page into one "What we are about?" section about sound preaching, Christian fellowship, prayer, and music, removing the numbered template pillars.
- Replaced the Phase 0 placeholder UI with the Home, Schedule, and FAQ views.
- Updated metadata, design tokens, architecture docs, testing docs, decisions, and asset inventory for the template implementation.
- Adjusted the filled gold CTA color from the source template so browser axe contrast checks pass.
- Updated the active site brand from Camp Selah to YouthForGod Camp.
- Replaced the circular text emblem with the provided compact Youth For God logo.
- Removed the unconfirmed Selah Fellowship organization reference from the footer.
- Replaced the home-page placeholder theme verse with Titus 2:11-14 ESV.
- Changed Register Now controls from status buttons to links pointing to `https://app.camp-paradise.org/`.
- Updated Register Now links to open in a new tab with `rel="noopener noreferrer"`.
- Replaced the old template address in the footer and FAQ location answer with `12725 La Porte Rd, Strawberry Valley, CA 95981`.
- Replaced the sample Sunday-Saturday schedule with the confirmed November 25-29 Wednesday-Sunday teaching outline.
- Replaced sample price and phone copy with unconfirmed-status copy.

### Removed

- Removed unused Vite scaffold files and assets.

### Verification

- FAQ membership explanation: RED confirmed, independent review approved, and full `pnpm validate` passed (9 component tests and 3 browser checks).
- Hero membership notice: RED confirmed, independent review approved, and full `pnpm validate` passed (9 component tests and 3 browser checks).
- Supplied hero artwork: RED confirmed before implementation, independent review approved, and full `pnpm validate` passed (9 component tests and 3 browser checks). Desktop, phone, and tablet screenshots visually verified.
- Transforming Grace title: RED confirmed before implementation, independent review approved, and full `pnpm validate` passed (9 component tests and 3 browser checks).
- User-supplied About photos: full `pnpm validate` passed (9 component tests and 3 browser checks), independent review approved, and desktop/mobile screenshots visually verified.
- Sermon titles and confirmed FAQs: Testing Agent confirmed RED and reviewed with no findings; full `pnpm validate` passed (9 component tests and 3 browser checks).
- Readable bilingual hero and grayscale About photos: full `pnpm validate` passed (9 component tests and 3 browser checks), independent review approved, and screenshots visually verified.
- Illustrated About subsections: RED confirmed, independent review approved, and full `pnpm validate` passed (9 component tests and 3 desktop/iPhone/iPad checks), including successful image loading. Desktop and mobile screenshots visually reviewed.
- Service attribution removal: existing tests confirmed RED; independent review and full `pnpm validate` passed (9 component tests and 3 browser checks).
- Wednesday evening schedule: confirmed RED before implementation, independent review approved, and full `pnpm validate` passed (9 component tests and 3 browser checks).
- Full English schedule: Testing Agent approved all five days, nine lesson assignments, service leaders, arrival/departure times, and next-day lights out. Full `pnpm validate` passed, including 9 component tests and 3 responsive browser checks.
- Simple about section: Testing Agent confirmed RED and approved the change; `pnpm validate` passed, including all 5 component tests and 3 browser checks.
- `pnpm test`: Passed, 9 component tests.
- `pnpm lint`: Passed.
- `pnpm typecheck`: Passed.
- `pnpm test:coverage`: Passed.
- `pnpm build`: Passed.
- `pnpm test:e2e`: Passed with Chromium, iPhone 13 WebKit, and iPad Pro 11 after allowing the local preview server.
- `pnpm validate`: Passed after allowing the local preview server.
- Testing Agent review: Approved with no blocking findings for the template implementation, YouthForGod Camp branding update, camp theme/main verse update, confirmed address/registration tab behavior, and confirmed November 25-29 teaching schedule update.

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
