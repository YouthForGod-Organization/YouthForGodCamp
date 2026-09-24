# Decisions

## ADR 001: React, TypeScript, Vite, and pnpm Foundation

Status: Accepted

The project uses React, TypeScript strict mode, Vite, and pnpm because these are required by the project brief and provide a fast, typed foundation for a static camp website.

## ADR 002: Tailwind CSS With CSS Variables

Status: Accepted

Tailwind CSS is configured through the Vite plugin. Design values are exposed as CSS variables so the approved camp brand can replace the neutral foundation tokens without broad component rewrites.

## ADR 003: shadcn/ui-Style Primitives

Status: Accepted

Shared UI primitives live in `src/components/ui` and use shadcn/ui-compatible conventions, Radix Slot, `class-variance-authority`, `clsx`, and `tailwind-merge`. This keeps accessible primitives local and avoids a large component library.

## ADR 004: No React Router In Phase 0

Status: Accepted

React Router is intentionally not installed because there is only one placeholder route. It will be added when multiple confirmed pages or routes exist.

## ADR 005: Omit packageManager Field For pnpm 12 Runtime Stability

Status: Accepted

The project uses pnpm and commits `pnpm-lock.yaml`, but `package.json` does not include a `packageManager` field. pnpm 12 treats that field as a package-manager dependency and attempts registry resolution before running scripts. Omitting it keeps local validation usable in restricted environments while preserving pnpm as the required package manager.

## ADR 006: Implement Template Views Without React Router

Status: Accepted

The provided v9 template models Home, Schedule, and FAQ as local view state, not separate URLs. The React implementation follows that model with `CampPage` state in `src/features/camp-site/CampSite.tsx`. React Router remains uninstalled until confirmed requirements call for route-level URLs, deep links, or multiple pages.

## ADR 007: Typed Template Content Module

Status: Accepted

Template copy, pillars, schedule rows, and FAQs live in `src/features/camp-site/content.ts` with explicit TypeScript types. This keeps provided template content separate from presentation code and makes future replacement with confirmed production content lower risk.

## ADR 008: Accessibility Contrast Adjustment To Source Palette

Status: Accepted

The v9 source template uses gold `#b08d2c`. Browser axe checks found that dark text on that gold missed WCAG AA contrast by a narrow margin. The implementation uses `#bd9833` for filled gold CTA backgrounds while retaining `#7a6112` for gold text accents. This preserves the visual direction while satisfying the project accessibility requirement.

## ADR 009: YouthForGod Camp Branding Assets

Status: Accepted

The camp name is confirmed as YouthForGod Camp. The header and footer use `src/assets/updatedLogo2.png` because it is the compact Youth For God logo and is less likely than the wider `logo.png` to cause mobile navigation overflow. `src/assets/favicon2.png` is copied to `public/favicon.png` for browser favicon use. `src/assets/favicon.png` is not used because its contents are JPEG data despite the `.png` extension.

## ADR 010: External Registration Links Open In New Tabs

Status: Accepted

The confirmed registration destination is an external system at `https://app.camp-paradise.org/`. Every Register Now link opens it with `target="_blank"` and `rel="noopener noreferrer"` so visitors keep the camp site available while moving to registration, and the new tab cannot access the originating page through `window.opener`.

## ADR 011: Confirmed Dates Replace Sample Schedule Logistics

Status: Accepted

The confirmed camp date range is November 25-29, but the year and exact daily logistics are not confirmed. The Schedule view therefore uses the provided Wednesday-Sunday teaching outline for November 25-29 and removes sample template date labels, arrival/departure times, visitor-night copy, sample price, and sample phone number from active UI.
