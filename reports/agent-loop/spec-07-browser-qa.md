# Spec 07 — Browser QA

- **Preview:** `http://localhost:4323/`
- **Date:** 2026-09-17
- **Result:** PASS for Spec 07 rendered copy/scale and the browser-tested Phase 04 interactions below.

## Rendered Home

- **1440 × 900:** New kicker and warmer Home description are visible; the full text/link column fits. `documentElement.scrollWidth` was 1440. The content column measured 576 × 568 px and stayed within the hero.
- **390 × 844:** Copy and all links fit the responsive column. Page width was 375 CSS px within a 390 px viewport; no horizontal overflow. Page height was 903 px, so normal vertical scrolling is expected.
- **320 × 700:** Kicker, heading, description, and link rows fit without horizontal overflow. Page width was 305 CSS px within the 320 px viewport; the difference is the browser's vertical-scrollbar gutter. Page height was 882 px, so normal vertical scrolling is expected.
- Visual screenshots were inspected in the browser at desktop and mobile sizes. The temporary viewport override was reset afterward.

## About dialog

- At **1440 × 900**, opening exposed the native dialog, set `aria-expanded="true"`, and moved focus to `#about-dialog-title`. The copy was 16.96 px and the panel fit the viewport.
- At **320 × 700**, the dialog measured 288 × 474 px; its copy fit in the panel, with `scrollHeight` equal to `clientHeight` (472 px). No horizontal overflow occurred.
- Close button, Escape, and outside-backdrop clicks each closed the dialog and returned focus to the trigger with `aria-expanded="false"`.
- Two additional open/close cycles both completed; the dialog ended closed with focus on the trigger.
- With the pointer over the open panel, computed hover transform was `matrix(1, 0, 0, 1, 0, -2.4)` (a 2.4 px lift), with the Echoid amber border and hover shadow.
- Browser console error log: empty.

## Limits

- `prefers-reduced-motion: reduce` was not emulated in this browser session. The independent static review confirmed the reduced-motion CSS removes dialog movement and reduces transitions; runtime behavior under that preference remains unverified.
- The resized viewports were temporary and have been reset to the browser default.
