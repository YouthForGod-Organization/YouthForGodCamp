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
- `src/features/camp-site/AboutSection.tsx` renders the semantic "What we are about?" section with four named articles covering sound preaching, Christian fellowship, prayer, and music. It imports four local stock photos with intrinsic dimensions and lazy loading; source credits are in `docs/ASSET_INVENTORY.md`.
- `src/app/App.tsx` is a thin composition layer that renders the camp-site feature.
- `src/assets/camp-selah-photo.jpg` is imported by the feature component so Vite fingerprints and optimizes it for production builds.
- `src/assets/updatedLogo2.png` is imported by the feature component for YouthForGod Camp logo placements in the header and footer.
- `public/favicon.png` is copied from `src/assets/favicon2.png` for browser favicon use.

## Routing

React Router is not installed. Home, Schedule, and FAQ are in-page views because the provided v9 template models them as local page state, not separate URLs. Add React Router only after multiple confirmed routes or shareable URLs are required.

## Schedule Content

The active Schedule view uses the confirmed November 25-29 date range and the user-provided daily timetable translated into English (see `docs/SCHEDULE.md`). A typed helper builds the shared Thursday-Saturday routine from exactly three lessons. Evening services have no church attributions. Each row has a time, event, and optional detail for teaching summaries, references, prayer-hour speakers, or next-day clarification. Wednesday arrivals begin at 3:00 PM; the intro teaching remains in the day summary without an invented time. Sunday departure is at 3:00 PM. The exact year, prayer-hour speakers, prices, phone/contact number, transportation, and carpool details remain unconfirmed.

## Styling

Tailwind CSS is wired through the Vite plugin. CSS variables in `src/styles/globals.css` define the current camp design tokens and shadcn/ui-compatible theme values.

The v9 template palette is preserved with one documented accessibility adjustment: the filled gold button background is slightly lightened from the original `#b08d2c` to `#bd9833` so dark text passes WCAG AA contrast in browser axe checks.

The layout is mobile-first. The diagonal hero image is disabled at tablet portrait and narrower widths to prevent awkward crops and horizontal overflow.

## Package Manager

The repository is managed with pnpm and includes `pnpm-lock.yaml`. The `packageManager` field is intentionally omitted from `package.json` because pnpm 12 resolves that field as a package-manager dependency, which requires registry access before every command in restricted environments.
