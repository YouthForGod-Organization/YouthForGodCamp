# Design System

## Current State

The active design is YouthForGod Camp, adapted from the provided v9 camp template. It uses a warm cream ground, forest green primary color, gold accent, script-style display heading, clean sans body type, centered sticky navigation, the provided Youth For God logo, and a diagonal hero image on wider screens.

The home page presents the confirmed theme "Grace That Transforms" and a long Titus 2:11-14 ESV blockquote. Long scripture text should stay constrained to a readable line length and must not be uppercased.

## Tokens

CSS variables are defined in `src/styles/globals.css` for:

- Cream background and white-warm surface colors
- Forest primary colors
- Gold accent and link colors. The filled gold CTA uses `#bd9833`, a slight accessibility adjustment from the source template's `#b08d2c`, so dark text passes WCAG AA contrast.
- Ink text and muted text
- Divider and focus ring colors
- Script and sans font stacks
- Zero radius, matching the provided flat template style

## Component Rules

- Use shadcn/ui-style primitives in `src/components/ui` for shared controls.
- Use Lucide React icons when an icon is needed.
- Keep cards and controls at `8px` radius or less unless a future approved brand system requires otherwise.
- Prefer semantic HTML and accessible names over decorative wrappers.
- Use `src/assets/updatedLogo2.png` for compact header/footer logo placement.
- Keep the logo on cream or white-warm surfaces unless contrast is separately verified.
- Preserve the provided v9 visual language unless new approved brand references supersede it.

## Responsive Rules

- Build mobile-first.
- Use stable layout constraints for repeated items and controls.
- Ensure text fits inside its container at mobile and desktop widths.
- Avoid hidden interactions that require pointer-only input.
- Disable the diagonal hero image clip on narrow mobile and iPad portrait widths.
- Sticky navigation may wrap, but controls must remain readable and tappable.
- Do not use viewport-based font scaling; adjust type sizes at explicit breakpoints so phone and iPad text remains predictable.
