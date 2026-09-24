# Plan

## Current Milestone: Phase 0 Engineering Foundation

Status: Complete

Owner: Main Agent

## Tasks

- Complete: Inspect workspace and confirm it was empty.
- Complete: Initialize Git.
- Complete: Scaffold React, TypeScript, Vite, and pnpm.
- Complete: Configure tooling, placeholder app, tests, and docs.
- Complete: Run the full quality gate.
- Complete: Testing Agent review and approval.
- Pending: Receive camp files and design references.

## Acceptance Criteria

- All required scripts exist and run.
- Placeholder is accessible, responsive, and intentionally content-neutral.
- Unit/component and Playwright smoke tests cover the placeholder.
- Documentation source-of-truth files exist and describe the foundation.
- Full quality gate passes before Phase 0 is marked complete.

## Dependencies

- Camp files and design references are required before final website design or content work can begin.

## Completed Milestone: Camp Template Implementation

Status: Complete

Owner: Main Agent

## Tasks

- Complete: Inspect provided Christian Youth Camp Templates folder.
- Complete: Planning Agent handoff for v9 implementation.
- Complete: Write RED tests for template behavior and responsive smoke coverage.
- Complete: Implement typed content and React components.
- Complete: Update design tokens and asset inventory.
- Complete: Run full quality gate.
- Complete: Testing Agent review and approval.
- Pending: Ask for confirmation of template content and final camp files before further production content work.

## Acceptance Criteria

- The provided v9 template replaces the foundation placeholder.
- Home, Schedule, and FAQ views are keyboard-operable and screen-reader friendly.
- Schedule day selector and FAQ accordion expose state.
- Desktop, mobile, and iPad layouts avoid horizontal overflow.
- Playwright checks accessibility, console errors, page errors, hero image visibility, and core interactions.
- Documentation reflects provided assets, design decisions, and open questions.

## Current Milestone: YouthForGod Camp Branding Update

Status: Complete

Owner: Main Agent

## Tasks

- Complete: Record YouthForGod Camp as the confirmed camp name in requirements.
- Complete: Planning Agent handoff for logo/name update.
- Complete: Write RED tests for YouthForGod Camp logo and branding.
- Complete: Replace text emblem with the provided logo asset.
- Complete: Update metadata and favicon.
- Complete: Update documentation and run full quality gate.
- Complete: Testing Agent review and approval.

## Acceptance Criteria

- Primary visible brand is YouthForGod Camp.
- The provided compact Youth For God logo appears in the header and footer with accessible alt text.
- Current-product metadata uses YouthForGod Camp.
- Registration behavior uses the confirmed destination when one is provided.
- Mobile and iPad navigation remain readable, tappable, and free of horizontal overflow.
- Unconfirmed dates, prices, schedule, phone, address, and policies remain unchanged unless explicitly confirmed.

## Current Milestone: Camp Theme And Main Verse

Status: Complete

Owner: Main Agent

## Tasks

- Complete: Record "Grace That Transforms" and Titus 2:11-14 ESV as confirmed requirements.
- Complete: Record the confirmed registration destination.
- Complete: Planning Agent handoff for home-page theme implementation.
- Complete: Write RED tests for the home-page theme, main verse, and registration URL.
- Complete: Implement typed theme content, registration URL, and home-page rendering.
- Complete: Update documentation and run full quality gate.
- Complete: Testing Agent review and approval.

## Acceptance Criteria

- The home page shows "Grace That Transforms" as the camp theme.
- The home page shows Titus 2:11-14 ESV as the main camp verse.
- The verse is readable, semantically marked up, and responsive without horizontal overflow.
- Existing Home, Schedule, FAQ, and logo behavior remains intact.
- Register Now links point to `https://app.camp-paradise.org/`.
- The Wednesday-Sunday teaching outline is documented without replacing the schedule until explicitly confirmed.
