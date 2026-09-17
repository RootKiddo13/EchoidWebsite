# Spec 05 — Responsive and Accessibility

## Purpose

Preserve Echoid's visual identity and usable content across screen sizes, pointer and keyboard input, and reduced-motion settings.

## Scope

- Responsive behavior follows the approved desktop and mobile compositions.
- Preserve hero focal point and readable text across sizes.
- Flow content into a single-column arrangement where the approved design requires it.
- Provide a skip link, semantic landmarks and headings, visible keyboard focus, and adequate contrast.
- Ensure links and buttons have clear accessible names.
- Do not rely on hover to reveal information or actions.
- Respect prefers-reduced-motion for all transitions.
- Check the About dialog at narrow widths if it is included.

## Test viewports

- Desktop: 1440 × 900
- Tablet: 1024 × 768
- Mobile: 390 × 844
- Narrow mobile: 320 × 700

## Acceptance criteria

- Hierarchy and approved crop remain intentional at all four sizes.
- Headings, copy, destinations, and footer are not clipped.
- No horizontal scrolling.
- All primary actions work with keyboard only and focus is visible.
- Contrast and text sizing remain readable.
- Dialog stays inside the viewport on narrow screens if present.
- Reduced-motion preference disables nonessential movement.

## Evidence

- Four viewport captures.
- Keyboard-only navigation results.
- Overflow, focus, contrast, and reduced-motion checks.
