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

- `src/features/camp-site/content.ts` is the typed source for the confirmed theme, main verse, camp date range, camp address, registration URL, provided template pillars, teaching schedule days, and FAQs.
- `src/features/camp-site/CampSite.tsx` renders the template and owns only UI state.
- `src/app/App.tsx` is a thin composition layer that renders the camp-site feature.
- `src/assets/camp-selah-photo.jpg` is imported by the feature component so Vite fingerprints and optimizes it for production builds.
- `src/assets/updatedLogo2.png` is imported by the feature component for YouthForGod Camp logo placements in the header and footer.
- `public/favicon.png` is copied from `src/assets/favicon2.png` for browser favicon use.

## Routing

React Router is not installed. Home, Schedule, and FAQ are in-page views because the provided v9 template models them as local page state, not separate URLs. Add React Router only after multiple confirmed routes or shareable URLs are required.

## Schedule Content

The active Schedule view uses the confirmed November 25-29 date range and the user-provided Wednesday-Sunday teaching outline. Exact year, arrival/departure times, prices, phone/contact number, transportation, and carpool details remain unconfirmed, so the app does not present those sample template values as facts.

## Styling

Tailwind CSS is wired through the Vite plugin. CSS variables in `src/styles/globals.css` define the current camp design tokens and shadcn/ui-compatible theme values.

The v9 template palette is preserved with one documented accessibility adjustment: the filled gold button background is slightly lightened from the original `#b08d2c` to `#bd9833` so dark text passes WCAG AA contrast in browser axe checks.

The layout is mobile-first. The diagonal hero image is disabled at tablet portrait and narrower widths to prevent awkward crops and horizontal overflow.

## Package Manager

The repository is managed with pnpm and includes `pnpm-lock.yaml`. The `packageManager` field is intentionally omitted from `package.json` because pnpm 12 resolves that field as a package-manager dependency, which requires registry access before every command in restricted environments.
