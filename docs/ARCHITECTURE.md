# Architecture

## Foundation

The project is a Vite application using React and TypeScript in strict mode. The app entry is `src/main.tsx`, which renders `src/app/App.tsx` and imports global tokens from `src/styles/globals.css`.

The current product surface is YouthForGod Camp, implemented from the provided v9 camp template as a single-page React experience. It uses local React state for view selection, schedule day selection, and FAQ expansion. Registration is a direct link to the confirmed external destination and opens in a new browser tab.

## Directory Structure

- `src/app`: application shell and top-level app composition
- `src/components`: shared components
- `src/components/ui`: shadcn/ui-style primitives
- `src/features`: feature-specific modules
- `src/pages`: route-level pages when routing is introduced
- `src/layouts`: shared layout components
- `src/hooks`: reusable React hooks
- `src/lib`: typed utilities
- `src/types`: shared TypeScript types
- `src/assets`: local source assets
- `src/styles`: global CSS and design tokens
- `src/test`: test setup and test-only utilities
- `tests/e2e`: Playwright tests
- `docs`: requirements, decisions, plans, and handoffs

## Data Flow

There is no app-level data layer or remote API.

- `src/features/camp-site/content.ts` is the typed source for the confirmed theme, main verse, camp date range, camp address, registration URL, teaching schedule days, and FAQs.
- `src/features/camp-site/CampSite.tsx` renders the template and owns only UI state.
- `src/features/camp-site/AboutSection.tsx` renders the semantic "What we are about?" section with four named articles covering sound preaching, Christian fellowship, prayer, and music. It imports four user-supplied photos as local 1200 × 800 WebP derivatives with intrinsic dimensions, lazy loading, and CSS grayscale; source records are in `docs/ASSET_INVENTORY.md`.
- `src/app/App.tsx` is a thin composition layer that renders the camp-site feature.
- `src/assets/transforming-grace-updated-1920.webp` and `transforming-grace-updated-960.webp` are pre-optimized hero artwork imported for Vite fingerprinting. A responsive `img` with `srcSet`, `sizes="100vw"`, intrinsic 1920 × 1080 dimensions, and high fetch priority displays the complete artwork without cropping. HTML copy follows in the same hero section. Previous hero derivatives remain locally but are not imported.
- `src/assets/updatedLogo2.png` is imported by the feature component for YouthForGod Camp logo placements in the header and footer.
- `public/favicon.png` is copied from `src/assets/favicon2.png` for browser favicon use.

## Routing

React Router is not installed. Home, Schedule, and FAQ are in-page views because the provided v9 template models them as local page state, not separate URLs. Add React Router only after multiple confirmed routes or shareable URLs are required.

All three navigation buttons use a shared `navigateTo` handler that sets the active page and calls `window.scrollTo({ top: 0, left: 0, behavior: 'instant' })`. This also resets scroll on current-page activation and overrides global smooth scrolling. It does not run on initial mount, schedule day changes, FAQ toggles, or external registration links; day and accordion state remain intact.

## Schedule Content

The active Schedule view uses the confirmed November 25-29 date range and the user-provided daily timetable translated into English (see `docs/SCHEDULE.md`). A typed helper builds the shared Thursday-Saturday routine from exactly three lesson objects (title and speaker). Teaching entries omit scripture references and summaries. Evening services have no church attributions; morning prayer events have no assignment details. Existing row details display lesson speakers, Sunday's main speaker, and next-day clarification. User corrections supersede PDF names where specified. An optional day note preserves Wednesday's introductory sermon title and unconfirmed teaching time. Wednesday arrivals begin at 3:00 PM; Sunday departure is at 3:00 PM. The PDF's different Wednesday times, Saturday order, and year are not applied to the UI. Prices, contact number, transportation, and carpool details remain unconfirmed.

## FAQ Content

The FAQ accordion contains only four confirmed entries: audience (youth church members), what to expect, what to bring, and the camp address. The audience answer explains that church members are individuals who have been baptized and are committed to a local church. The legacy template FAQs and open-house promotion have been removed.

## Styling

Tailwind CSS is wired through the Vite plugin. CSS variables in `src/styles/globals.css` define the current camp design tokens and shadcn/ui-compatible theme values.

The v9 template palette is preserved with one documented accessibility adjustment: the filled gold button background is slightly lightened from the original `#b08d2c` to `#bd9833` so dark text passes WCAG AA contrast in browser axe checks.

The layout is mobile-first. The hero artwork retains its full 16:9 composition at every width, without a diagonal clip, grayscale, or cropping. A dark forest panel beneath keeps the Russian h1, English description, "Church Members Only" notice, and registration link clear of embedded lettering. The artwork supplies the visible English title; it is not duplicated in the HTML copy panel.

## Package Manager

The repository is managed with pnpm and includes `pnpm-lock.yaml`. The `packageManager` field is intentionally omitted from `package.json` because pnpm 12 resolves that field as a package-manager dependency, which requires registry access before every command in restricted environments.
