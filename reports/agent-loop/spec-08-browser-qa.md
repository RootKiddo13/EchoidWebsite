# Spec 08 Browser QA

- **Date:** 2026-09-17
- **Preview:** `http://127.0.0.1:4323/`

## Orchestrator visual check

- At the desktop preview (1920 × 984), the Contact row remains aligned with the destination list and `rootkiddo00@gmail.com` is readable.
- At the narrow preview (about 622px viewport width), the single-column Contact row remains visible and the email wraps within the card.
- Clicking the static Contact row did not navigate or trigger an action; the preview URL stayed on the Home page.

## Hover measurement

The builder handoff reports a live computed-style check on the Contact row: amber border `rgb(238, 181, 106)`, 1px upward transform, darkened background, soft shadow, and a small envelope lift/rotation. These computed values are builder-provided evidence; the orchestrator's CUA screenshot check did not independently read computed styles.

## Reduced motion and limits

- The reviewer verified the row/icon transform reset and short transition override in source.
- Runtime emulation of reduced motion was not performed for this Spec 08 browser check. The existing Phase 04 About-dialog reduced-motion runtime blocker remains open and unchanged.
