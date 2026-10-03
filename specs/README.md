# Echoid Website Specs

Bu klasör, Echoid Website implementation kapsamını ve kabul ölçütlerini tanımlar. Spec’ler uygulama kodu değildir.

## Project references

- [Agent instructions](../agents.md) and [Claude instructions](../claude.md)
- [Constants](../const.md)
- [Product brief](../brief.md)
- [Design decisions](../design-locked.md)
- [Backlog](../backlog.md)
- [Backlog log](../backloglog.md)

## Phased spec order

1. [Phase 01 — Project Bootstrap](01-project-bootstrap.md)
2. [Phase 02 — Content and Data Layer](02-content-data-layer.md)
3. [Phase 03 — Home Build](03-home-build.md)
4. [Phase 04 — About Interaction](04-about-modal.md)
5. [Phase 05 — Responsive and Accessibility](05-responsive-accessibility.md)
6. [Phase 06 — Polish and Performance](06-polish-performance.md)

Each phase starts after the previous phase meets its acceptance criteria. Phase scope must not be silently expanded.

## User-directed preview revisions

- [Spec 07 — Copy and type-scale refresh](07-user-directed-copy-and-scale-refresh.md) revises only the Home copy/scale and About copy/scale from Specs 03 and 04. It is an explicit user-requested review iteration, not a new standard phase or a bypass for phase gates.
- [Spec 08 — Contact card hover](08-contact-card-hover.md) adds restrained amber border, card, and envelope hover feedback to the static Contact row. It is a user-directed preview refinement and does not clear or bypass Phase 04's outstanding reduced-motion runtime check.
- [Spec 09 — Global typography and home links](09-global-typography-and-home-links.md) implements the user-approved global font, headline treatment, keyword labels, and larger destination grid.

## Implementation loop

Each phase follows the builder → reviewer → fixer verification flow in [agent-loop/README.md](../agent-loop/README.md). The reviewer must issue PASS before the next phase begins. Record findings and completed work in backloglog.md, and unfinished work in backlog.md.

## Shared boundaries

- Specs 01–06 cover the static first release.
- Do not add a CMS, database, account, form, analytics, YouTube API, or live video feed.
- Read all channel destinations from const.md through one site-data layer.
- Use only the user-selected Echoid hero asset.
- Use only approved decisions or the preview proposals recorded in design-locked.md; keep proposals marked pending review.
- Do not deploy, host, or configure a domain.
- agents.md and claude.md must remain identical.

## Current status

- Spec set: **Approved for implementation order by user on 2026-09-17**
- Full design: **Direction 03 approved for implementation on 2026-10-03**; deployment still requires a separate review.
- Implementation: **Phases 01–06 PASS; Specs 07–08 PASS.** Phase 04 reduced-motion runtime behavior and all dialog close/focus paths passed at desktop and narrow widths. Phase 05 passed four viewport, keyboard, focus, and overflow checks. Phase 06 build, link, asset, and console checks passed. Evidence: `reports/agent-loop/phase-04-final-review.md`, `reports/agent-loop/phase-05-review.md`, and `reports/agent-loop/phase-06-review.md`.
- Spec 09 — Global Typography and Home Links: **PASS for source/build review; deployment authorized and pending push**. Only `AÇIDAN` is amber. Browser-rendered/runtime checks remain unverified.
- Production: current release remains at `https://echoid.pages.dev/`; do not push or deploy this revision without a fresh human review.
- Hosting constraint: **$0 total cost**. Planned target is a private GitHub repository connected to Cloudflare Pages Free, using only the provider-assigned `pages.dev` hostname. No domain purchase or paid service.
- Start condition: implementation was explicitly authorized on 2026-09-17; publication still requires full user review.
