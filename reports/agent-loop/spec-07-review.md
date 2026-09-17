# Spec 07 — Independent Review

- **Spec 07 result: PASS.** Static and browser evidence satisfy the copy/scale preview refinement.
- **Phase 04 result: BLOCKED.** The `prefers-reduced-motion: reduce` behavior has not been exercised at runtime. The stylesheet implements the reduced-motion override, but the remaining About dialog acceptance needs browser evidence before Phase 04 can pass.
- **Scope:** This report evaluates Spec 07 and summarizes the separate browser QA. It does not alter the phase order or clear the Phase 04 gate.

## Static review

- **Copy — PASS.** `src/data/site.ts` matches the Spec 07 kicker, Home description, and About paragraph exactly. The generated `dist/index.html` contains the requested wording and no old `TÜRKÇE TEKNOLOJİ KANALI` kicker.
- **Scope — PASS.** The builder handoff lists the central site data and home stylesheet. The reviewed source retains the selected artwork, layout structure, destination order/URLs, and About dialog behavior. `AboutModal.astro` retains its open/close handlers.
- **Responsive CSS — PASS, with historical-delta limit.** The stylesheet provides Home/About type rules and responsive overrides at `max-width: 900px` and `max-width: 520px`. About copy is `1.06rem`; narrow-screen link rows and labels have explicit sizing. The builder handoff records a roughly 5–6% Home scale increase. This directory has no Git metadata, so the exact CSS percentage changes could not be independently recalculated against a pre-change version.
- **Motion/reduced-motion source — PASS.** The dialog retains its 220ms fade/rise, hover lift with amber edge/shadow, backdrop transition, and `prefers-reduced-motion` rules that remove panel movement and reduce transitions. Runtime behavior under that preference remains unverified (see Phase 04 status).
- **Instruction parity — PASS.** `agents.md` and `claude.md` are byte-identical (2,474 bytes each).
- `npm run check:data` — **PASS**.
- `npm run build` — **PASS**; Astro generated the static `/index.html` route.

## Browser evidence

Source: [spec-07-browser-qa.md](spec-07-browser-qa.md), preview `http://localhost:4323/`, 2026-09-17.

- **Home, 1440 × 900:** updated kicker and description visible; content/link column measured 576 × 568px and stayed within the hero; no horizontal overflow.
- **Home, 390 × 844:** copy and links fit; no horizontal overflow. Vertical scrolling is expected.
- **Home, 320 × 700:** kicker, heading, description, and links fit; no horizontal overflow. Vertical scrolling is expected.
- **About, desktop and 320px:** dialog opened; `aria-expanded` changed to `true`, focus moved to the title, and content fit the viewport. At 320 × 700 the panel measured 288 × 474px with no horizontal overflow.
- **Close and repeat behavior:** close button, Escape, and outside-backdrop click each closed the dialog and returned focus to the trigger with `aria-expanded="false"`; two more open/close cycles completed.
- **Hover:** browser computed a 2.4px panel lift and the expected amber border/hover shadow.
- **Console:** no browser errors.

## Phase 04 gate

The browser QA closes the previously missing close-path, focus-return, repeat-cycle, narrow-fit, and hover evidence. The static review confirms the reduced-motion CSS is present and removes dialog movement. However, QA did not emulate `prefers-reduced-motion: reduce`, so its runtime effect has not been observed. **Keep Phase 04 BLOCKED until that preference is enabled in a browser and the open/hover dialog is confirmed not to move.** This outstanding check does not change the Spec 07 PASS for the requested copy/scale refinement.
