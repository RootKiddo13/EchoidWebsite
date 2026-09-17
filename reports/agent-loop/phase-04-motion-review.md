# Phase 04 Motion Review — About Dialog

**Overall Phase 04 status: BLOCKED**  
**Motion/hover CSS scope: PASS (source and static-build review only)**  
**Review date:** 2026-09-17

## Scope and verdict

Reviewed `agents.md`, `const.md`, `brief.md`, `design-locked.md`, `specs/04-about-modal.md`, `agent-loop/README.md`, `agent-loop/roles/reviewer.md`, `agent-loop/active-run.md`, `reports/agent-loop/phase-04-builder-handoff.md`, `src/styles/home.css`, and `src/components/AboutModal.astro`.

The requested CSS update matches the amended Spec 04 motion treatment in source: the dialog/backdrop use a 220 ms reveal, the panel starts 8 px below its open position, hover lift and amber edge/shadow are limited to hover-capable devices, and reduced motion resets the panel transform. The selectors are scoped to the About dialog. A fresh static build includes these rules. This passes the CSS implementation scope; it does not establish that the behavior works in a browser.

Phase 04 remains **BLOCKED** because no live browser interaction evidence is available for the required close paths, focus return, repeated cycles, narrow-screen fit, hover, or reduced-motion behavior. `http://localhost:4323/` returning HTTP 200 confirms an HTTP response only; it is not interaction evidence. No live browser checks were performed or inferred.

## Acceptance checks

| Spec 04 criterion | Result | Evidence and limit |
|---|---|---|
| About dialog semantics and accessible name | **Source PASS; runtime unverified** | `AboutModal.astro` uses a native `<dialog>` with `aria-labelledby="about-dialog-title"`. The builder handoff reports an accessibility-tree name, but this reviewer could not inspect a live browser tree. |
| Open/close via close button, Escape, and backdrop | **BLOCKED** | Source wires the close button and backdrop click; native modal dialog behavior is expected to handle Escape. The handoff says these paths were not runtime-tested. |
| Focus enters and returns to the trigger | **BLOCKED** | Source focuses the title on open and the trigger on the dialog `close` event. The handoff reports focus entry, but neither observation was independently repeated here and focus return remains untested. |
| Repeated open/close cycles preserve state and focus | **BLOCKED** | Source has an already-open guard and resets `aria-expanded` on close. No repeated-cycle runtime test is recorded. |
| Readable, usable panel on narrow screens | **BLOCKED** | CSS constrains width/height and permits scrolling. There is no rendered narrow-viewport check; source inspection cannot establish fit or usability. |
| Reveal: 220 ms fade, 8 px rise, fading backdrop | **CSS PASS; runtime unverified** | Confirmed in source and compiled CSS. No browser timing/render check was performed. |
| Hover: subtle lift, amber edge/shadow, no new functionality | **CSS PASS; runtime unverified** | The open-dialog hover rule is inside `@media (hover: hover)` and only changes transform, border, and shadow. No live hover test was performed. |
| Reduced motion removes movement | **CSS PASS; runtime unverified** | Reduced-motion rules set dialog transforms to `none` and reduce transition duration to `0.01ms`. No emulated-preference browser check was performed. |
| About interaction removed after design review | **N/A** | The interaction remains a reversible preview proposal in `design-locked.md`; it has not been removed. |

## Static checks rerun

- `npm run check:data` — **PASS**, exit code 0.
- `npm run build` — **PASS**, exit code 0; Astro generated one static route, `/index.html`.
- `agents.md` and `claude.md` SHA-256 hashes match: `3149C56A6F998B4385F8C6B7EC5A6F1D63460A8F2AAC4FC433238BA1A10D792C`.

These checks confirm type/data validation and successful static generation. They do not validate browser interaction, visual fit, or motion preference behavior.

## Findings and next checks

**[P1 — Phase 04 release gate] Required browser acceptance remains unverified.**  
**Paths:** `src/components/AboutModal.astro`, `src/styles/home.css`  
**Impact:** Do not mark Phase 04 PASS or begin Phase 05 until runtime checks cover the outstanding criteria.  
**Action when a browser surface is available:** open the preview and check close-button, Escape, and outside-backdrop close independently; confirm `aria-expanded="false"` and focus restoration after each. Repeat open/close cycles. Check the open dialog at narrow widths (including 320 px), then exercise hover on a hover-capable device and `prefers-reduced-motion: reduce`, confirming no panel movement under reduced motion.

**Tracking note:** `agent-loop/active-run.md` still labels the current state `BUILDING`, while the Phase 04 handoff and prior Phase 04 review label the phase `BLOCKED`. Reconcile the state record when orchestrator-document edits are in scope.

## Limits

- CUA reported no browser available for this review; no live browser checks were attempted.
- The handoff's screenshot, accessibility-tree, and focus-entry observations are recorded evidence only and were not independently reproduced.
- `EchoidWebsite` has no Git metadata, so a repository diff was unavailable. The CSS scope verdict is based on the requested spec versus the current source and generated CSS, not an independent before/after diff.
- No production code or orchestrator documents were edited. This review report is the only file created.
