# Phase 04 Builder Handoff — About Interaction

**Spec:** `specs/04-about-modal.md`  
**Status:** BLOCKED — implementation and static checks are complete; required browser interaction checks remain outstanding.  
**Design status:** Trigger and panel are preview proposals pending user review.

## Motion and hover update — 2026-09-17

Updated only the About dialog motion rules in `src/styles/home.css`:

- Set the backdrop fade and panel opacity/transform transition to 220 ms.
- Set the panel entrance offset to 8 px, with the existing fade-and-rise behavior.
- Added a 2.4 px panel hover lift, stronger Echoid amber border, and modest shadow shift inside `@media (hover: hover)` only.
- Explicitly reset panel transforms for the open, closed, and hovered dialog states under `prefers-reduced-motion: reduce`.
- Preserved dialog content, layout, behavior, palette, and unrelated styles.

## Changed files

- `src/components/AboutModal.astro` — native labelled dialog, copy from `siteData.about`, focus entry, close button, Escape via native dialog behavior, backdrop click handling, `aria-expanded` updates, focus restoration.
- `src/components/SiteHeader.astro` — compact “Hakkında” dialog trigger.
- `src/components/HomeHero.astro` — includes the dialog component.
- `src/styles/home.css` — panel, close control, trigger, subtle motion and reduced-motion handling.
- `design-locked.md` — records the reversible trigger/panel proposal.
- `agent-loop/active-run.md`, `backlog.md`, `backloglog.md`, `specs/README.md` — phase tracking.

## Checks and evidence

- `npm run check:data` — PASS after this update (TypeScript data check exited 0).
- `npm run build` — PASS after this update; Astro generated one static route (`/index.html`).
- Source inspection confirms 220 ms backdrop/panel reveal timing, 8 px entrance offset, hover styling gated by `@media (hover: hover)`, and no panel transform under reduced motion.
- Rendered accessibility tree showed a dialog named “Echoid hakkında”, its close button, and the About copy.
- The opened preview screenshot showed the panel centered, readable, and within the captured viewport.
- On opening, focus moved to the dialog heading (`#about-dialog-title`).
- No browser interaction checks were run for this motion/hover update. Close-button, Escape, backdrop, focus-return, repeated-cycle, and narrow-viewport checks remain pending; do not infer runtime results from source inspection or build output.

## Remaining review items

- Inspect the implementation against each Spec 04 acceptance criterion.
- Complete browser checks for close button, Escape, backdrop, focus return, repeated open/close, and hover/reduced-motion behavior once a browser is available.
- Confirm the panel fits at narrow width; responsive coverage continues in Phase 05.
