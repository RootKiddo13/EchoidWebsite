# Spec 09 — Builder Handoff

- Phase: User-directed visual refresh
- Spec: `specs/09-global-typography-and-home-links.md`
- Agent role: Builder / orchestrator
- Status: PASS — final color adjustment, checks, independent source/build review, and production deployment complete.
- Summary: Integrated the approved visual direction in the existing Astro component tree. Typography now inherits one self-hosted IBM Plex Sans variable family; the approved two-tone heading and keyword descriptors appear in larger destination cards.

## Files changed

- `src/styles/home.css`
- `src/components/HomeHero.astro`
- `src/components/HomeLinkRow.astro`
- `src/components/HomeContactRow.astro`
- `src/layouts/BaseLayout.astro`
- `src/data/site.ts`
- `public/fonts/ibm-plex-sans-var.woff2`
- `public/fonts/IBM-Plex-Sans-OFL.txt`
- `specs/09-global-typography-and-home-links.md`
- `specs/README.md`
- `design-locked.md`
- `notes.md`
- `backlog.md`
- `agent-loop/active-run.md`

## Acceptance criteria

- [x] One global font family. CSS declares IBM Plex Sans at `:root`; other text selectors inherit it. The new font is self-hosted and preloaded.
- [x] Turkish glyphs and approved text. Type specimen and built HTML include the Turkish copy and keyword descriptors.
- [x] Approved smaller heading and larger cards. Only “AÇIDAN” uses the amber accent; “BAŞKA” uses the paper color; desktop cards have 117px minimum height; mobile switches to one column.
- [x] Existing structure and behavior retained. `HomeHero` still owns the page and composes the existing header, link, contact, and About components; destinations stay in `siteData`; Contact remains a static `<address>` with its hover/reduced-motion behavior.
- [x] Existing destinations and page copy retained; approved keywords are stored in the central data module.

## Checks run

- `npm run check:data` — PASS after the color adjustment, exit 0.
- `npm run build` — PASS after the color adjustment, exit 0; Astro generated the static home route.
- Built output inspection — PASS; exactly one `.hero-title-accent` span wraps `açıdan`, and both font assets are present.
- Reviewer — PASS for final source/build review; `reports/agent-loop/spec-09-review.md`.
- `git diff --check` — PASS; no whitespace errors. Git emitted only expected working-copy LF/CRLF normalization warnings.
- Production desktop page visually confirmed in the in-app browser at its default 1280×720 viewport; “AÇIDAN” is amber and “BAŞKA” is paper colored.
- Mobile viewport and live-console checks were not repeated after deployment.

## Open issues / limits

- Browser-rendered desktop/mobile comparison, live console, and runtime font/glyph rendering were not verified.
- Deployment is live at `https://echoid.pages.dev/`, commit `624726cb79cd3802c252914210037e2fa1f3140c`.

## Recommended next step

No further action; retain the local uncommitted user changes outside this release.
