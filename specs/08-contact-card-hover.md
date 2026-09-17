# Spec 08 — Contact Card Hover

**Type:** User-directed preview refinement  
**Status:** Authorized for implementation by the user on 2026-09-17

## Goal

Give the static Contact row the same restrained hover feedback as the other destination rows: an Echoid amber border, a subtle card lift, and a small envelope-icon motion.

## Scope

- Apply hover styling only to `.home-contact-row` on devices that support hover.
- On hover, transition the border to `--amber`, deepen the existing background slightly, and lift the row by at most 2px with a restrained shadow.
- Give the envelope SVG a small lift and rotation consistent with the card's motion.
- Keep the email readable and the contact row static; do not add a link, click action, focus behavior, or new content.
- Respect `prefers-reduced-motion: reduce` by removing transforms and suppressing transition duration.
- Preserve existing layout, colors outside the hover state, responsive sizing, and all other links.

## Acceptance criteria

1. On a hover-capable pointer, the Contact row's border becomes Echoid amber, and the card and envelope icon move subtly.
2. Hover transitions are short and do not change layout or cause content reflow.
3. The Contact row remains a non-interactive `<address>` with visible email text.
4. Under reduced motion, the row and icon do not translate or rotate.
5. At desktop and narrow mobile widths, the Contact content remains legible without horizontal overflow.
6. `npm run check:data` and `npm run build` pass.

## Out of scope

- Making the email a `mailto:` link.
- Changing the About dialog or clearing its outstanding Phase 04 reduced-motion runtime blocker.
- Changing copy, row order, or destination data.
- Starting Phase 05 or publishing/deploying the site.
