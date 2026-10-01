# Plan

## Current Update: FAQ Membership Explanation

Status: Complete

- Planning approved appending the supplied definition of church members to the first FAQ answer; no other eligibility copy or accordion behavior changes.
- Files: typed content, existing exact-answer component assertion, requirements, architecture, plan, and changelog.
- Acceptance: first answer retains the youth audience statement and explains baptism and commitment to a local church. Other answers remain unchanged.
- Verification: exact-answer assertion confirmed RED before implementation. Independent review approved without findings; full `pnpm validate` passed (9 component tests and 3 browser checks). No new dependency or standalone test required.

## Current Update: Hero Membership Notice

Status: Complete

- Planning approved removing the repeated English heading, promoting the Russian translation to the hero h1, and adding "Church Members Only" before registration.
- Preserve artwork, English description, CTA, and English theme in the Schedule. Scope: hero markup/styles, existing assertions, and affected documentation.
- Acceptance: single Russian h1 with `lang="ru"`, no repeated English DOM title in the hero, exact membership notice, readable responsive layout, and unchanged navigation.
- Verification: updated component assertion confirmed RED before implementation. Independent testing review approved without findings. Full `pnpm validate` passed (9 component tests and 3 responsive browser checks); mobile hero screenshot visually reviewed.

## Current Update: Supplied Hero Artwork

Status: Complete

- Planning approved full-width, uncropped 16:9 artwork above a compact dark forest copy panel; preserve readable English/Russian titles and registration.
- Files: CampSite, hero CSS, two WebP assets, existing component/browser assertions, requirements, architecture, design, asset, testing, and changelog docs.
- Acceptance: complete full-color artwork, successful responsive image loading, intrinsic dimensions and high priority, no overlapping lettering, no overflow, and unchanged navigation/About/schedule.
- Risks: cropping embedded lettering, image weight, contrast, and duplicate title presentation. Use uncropped responsive 1920/960 WebP, keep HTML copy separate, and review screenshots.
- Verification: Main confirmed RED before implementation; independent testing review approved without findings and passed all 9 component tests. Full `pnpm validate` passed, including 3 desktop/phone/tablet browser checks. All three hero screenshots visually reviewed for complete artwork and readable copy.

## Current Update: Transforming Grace Title

Status: Complete

- Planning approved renaming the shared theme to "Transforming Grace" and reusing it in the Schedule subtitle.
- Scope: theme content, Schedule subtitle, existing tests, and current requirements/design/schedule/testing/changelog documentation. Historical records remain unchanged.
- Acceptance: home heading and Schedule subtitle use the new title; Russian translation and YouthForGod Camp branding remain unchanged.
- Risks: stale duplicated copy and responsive heading wrapping. Verify existing component and desktop/phone/tablet browser checks.
- Verification: updated home assertion confirmed RED before implementation; independent review approved without findings. Full `pnpm validate` passed (9 component tests and 3 desktop/phone/tablet browser checks).

## Current Update: User-Supplied About Photos

Status: Complete

- Planning approved replacing the four stock images with supplied photos: image 2 preaching, image 3 fellowship, image 1 prayer, and image 4 music.
- Scope: four optimized 1200 × 800 WebP assets, About image imports/alt text/dimensions, and related documentation. Preserve original files and existing CSS grayscale.
- Acceptance: correct photo mapping, undistorted subjects, successful local loading, and unchanged responsive layout.
- Verification: existing image-loading/alt/dimension tests, visual screenshot review, independent review, and full `pnpm validate`. No new test or dependency is needed for this asset replacement.
- Completed: full `pnpm validate` passed (9 component tests, 3 browser checks), desktop/mobile screenshots visually confirmed correct images and grayscale, and independent review approved without findings.

## Current Update: Sermon Titles and Confirmed FAQs

Status: Complete

- Scope: simplify typed teaching entries to titles, make day notes optional, replace FAQs with the four supplied answers, and remove the obsolete FAQ open-house promotion.
- Acceptance: all schedule times/events remain; no scripture references or sermon summaries appear in Schedule; home scripture stays; FAQ contains exactly the supplied audience, expectations, packing, and address answers.
- Files: content, Schedule/FAQ rendering, existing component/browser tests, and requirements/architecture/schedule/testing/changelog documentation.
- Risks: obsolete assertions still requiring reference text; accidentally deleting logistical details or the home verse. Update only superseded assertions while preserving times, navigation, and accordion tests.
- Verification: Planning Agent review, Testing Agent RED confirmation, independent review, and full `pnpm validate` gate.
- Completed: Testing Agent confirmed RED and reviewed production/docs with no findings. Full `pnpm validate` passed: formatting, lint, types, 9 component tests, coverage, production build, and 3 desktop/iPhone/iPad browser checks.

## Current Update: Readable Bilingual Hero Theme

Status: Complete

- Planning approved a sans-serif English hero h1 with "Преображающая благодать" directly underneath in a Russian-language paragraph.
- Scope: theme data, hero rendering and responsive CSS, existing home/browser assertions, screenshots, and requirements/design/changelog documentation.
- Acceptance: readable English and Russian theme, correct language annotation, no overflow on phones/tablets/desktop, and unchanged English description.
- Verification: existing home assertion confirmed RED for missing Russian text; full `pnpm validate` passed (9 component tests, 3 browser checks), desktop/mobile screenshots visually reviewed, and independent review approved with no findings.

## Current Update: Black-and-White About Photos

Status: Complete

- Scope: apply a CSS grayscale filter to the four About photos.
- Acceptance: all four photos appear black and white across screen sizes; layout and source image files stay intact.
- Verification: existing full `pnpm validate` gate, screenshot inspection, and independent review. No new test is needed for this reversible styling change.
- Completed: independent review approved, all 9 component tests and 3 browser checks passed, and grayscale was visually confirmed.

## Current Update: Illustrated About Subsections

Status: Complete

Owner: Main Agent

- Planning approved four semantic subsections with short copy and distinct local photos; the user authorized sourced photos as an alternative to generation.
- Files: new AboutSection component, CampSite composition, CSS, four local JPEGs, existing home/browser tests, and requirements/design/architecture/asset/testing docs and changelog.
- Acceptance: preserve heading and dates; display Sound preaching, Christian fellowship, Prayer, and Music with relevant images; use two columns at 700px and above and one column on phones.
- Risks: image weight and layout shift, misleading stock-photo descriptions, poor crops, and overflow. Use compressed 960 × 640 local images, truthful alt text, fixed dimensions, lazy loading, and documented source credits.
- Testing Agent confirmed RED before implementation. Verify loaded images, heading structure, accessibility, and responsive layout, then run the full `pnpm validate` gate.
- Completed: independent review approved without findings; full `pnpm validate` passed (9 component tests and 3 browser checks). Desktop and mobile section screenshots were visually reviewed. Screenshot capture hides the sticky navigation only during capture so all subsection content is visible.

## Current Update: Remove Service Attributions

Status: Complete

Owner: Main Agent

- Plan: remove the evening-service leader parameter, church arguments, and "Led by" detail from typed schedule content; update existing assertions and affected docs.
- Acceptance: every evening service retains its time and event name, with no church attribution. Teaching references and prayer-hour placeholders remain intact.
- Verification: planning review approved; updated existing tests confirmed RED for the three attributions; independent review approved with no findings. Full `pnpm validate` passed, including 9 component tests and 3 browser checks.

## Current Update: Wednesday Evening Schedule

Status: Complete

Owner: Main Agent

- Scope: add the five supplied Wednesday evening events to typed content and update schedule documentation and the existing Wednesday test.
- Acceptance: arrival remains from 3:00 PM; service at 6:30 PM, dinner at 8:00 PM, fellowship at 9:00 PM, tea and sauna at 11:00 PM, and lights out at 12:59 AM appear in order.
- Edge cases: keep the next-day lights-out detail and untimed introduction; do not invent a Wednesday service leader.
- Verification: Planning Agent approved the plan; Main Agent confirmed RED and implemented the change; independent testing review approved with no findings. Full `pnpm validate` passed, including 9 component tests and 3 browser checks.

## Current Update: Full English Camp Schedule

Status: Complete

Owner: Main Agent

- Planning Agent approved translating the supplied timetable and attaching all nine preaching topics to their lesson slots.
- Files: typed schedule content, Schedule view, schedule detail styling, component/browser tests, and related documentation.
- Acceptance: Wednesday arrivals from 3:00 PM; Thursday-Saturday's 12 events, three lessons per day, correct references and evening-service churches; Sunday's five events and 3:00 PM departure.
- Edge cases: Wednesday teaching has no assigned time; blank prayer speakers remain to be announced; lights out stays 12:59 AM with next-day clarification; no year or additional logistics invented.
- Verification: Testing Agent confirms RED, checks all days and lesson assignments, then runs the full `pnpm validate` quality gate with responsive and accessibility checks on the expanded schedule.
- Documentation: update requirements, architecture, translated program, testing coverage, and changelog.
- Completed: Testing Agent confirmed RED and approved the implementation with no findings. Full `pnpm validate` passed: formatting, lint, types, 9 component tests, coverage, production build, and 3 desktop/iPhone/iPad browser checks.

## Current Update: Simple About Section

Status: Complete

Owner: Main Agent

- Planning Agent approved replacing the introduction and numbered pillars with one semantic "What we are about?" section.
- Acceptance: sound preaching, Christian fellowship, prayer, and music are visible; old numbered pillars are removed; camp dates, theme, verse, and navigation remain intact.
- Scope: home rendering, unused pillar data/styles, existing home assertion, and affected documentation. No dependencies or new camp details.
- Verification: Testing Agent confirms the updated assertion fails before implementation, then reviews the change and runs `pnpm validate`.
- Risk: avoid duplicate about sections and preserve responsive spacing and accessible heading structure.
- Completed: Testing Agent confirmed RED, approved the implementation with no findings, and passed the full `pnpm validate` gate, including desktop, iPhone, and iPad browser checks.

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

## Completed Milestone: Confirmed Address And Registration Tab Behavior

Status: Complete

Owner: Main Agent

## Tasks

- Complete: Record the confirmed Strawberry Valley address in requirements.
- Complete: Planning Agent handoff for address and registration behavior.
- Complete: Add RED tests for the confirmed address and new-tab registration links.
- Complete: Implement the smallest code change.
- Complete: Update affected documentation and changelog.
- Complete: Run full quality gate.
- Complete: Testing Agent review and approval.

## Acceptance Criteria

- The footer displays `12725 La Porte Rd, Strawberry Valley, CA 95981`.
- The FAQ location answer uses the confirmed address.
- Old Black Mountain and North Carolina location copy is removed from active UI.
- Every Register Now link keeps `https://app.camp-paradise.org/` as its destination.
- Every Register Now link opens in a new tab with `target="_blank"`.
- Every Register Now link includes `rel="noopener noreferrer"`.
- No directions, carpool logistics, phone number, or schedule/place details are invented.

## Completed Milestone: Confirmed Camp Dates And Teaching Schedule

Status: Complete

Owner: Main Agent

## Tasks

- Complete: Record November 25-29 as the confirmed camp date range.
- Complete: Planning Agent handoff for date and schedule update.
- Complete: Add RED tests for confirmed date range and schedule labels.
- Complete: Replace stale template schedule dates with confirmed Wednesday-Sunday teaching outline.
- Complete: Remove sample price, phone, and schedule logistics from active UI.
- Complete: Update affected documentation and changelog.
- Complete: Run full quality gate.
- Complete: Testing Agent review and approval.

## Acceptance Criteria

- The active UI displays `November 25-29`.
- The visible Schedule view uses `Nov 25`, `Nov 26`, `Nov 27`, `Nov 28`, and `Nov 29`.
- The Schedule view defaults to `Nov 25`.
- The old sample date labels such as `Mon 22`, `Tue 23`, and `Fri-Sat` are removed from active UI.
- The Schedule view no longer says `Sunday to Saturday · repeated all five weeks`.
- The sample phone number, sample price, and sample arrival/departure/visitor logistics are removed from active UI.
- The visible Schedule view uses only the confirmed Wednesday-Sunday teaching outline for daily content.
- No year, exact arrival/departure times, prices, transportation details, or phone number are invented.
