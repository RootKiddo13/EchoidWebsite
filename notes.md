# Echoid Website — Design Kickoff

**Date:** 2026-09-16  
**Status:** Hero artwork and all four destinations are approved; page layout, copy, and interaction details remain open for design review.

## Product idea

A compact website companion for Echoid's Turkish technology channel, using the same simple hub logic as RootKiddo's website while preserving Echoid's independent voice and visual identity. The link area adds X alongside YouTube, Projects, and Contact.

## First visual direction — proposal

- Build the Home page around one distinctive Echoid-focused technology-room hero, with a short identity statement and a small number of direct links.
- Use the canonical Echoid character and its matte, flat-shaded 3D style. Keep the midnight-blue environment and warm amber practical lights from the locked channel artwork.
- Treat the YouTube banner as a reference for palette and atmosphere; explore a website-specific composition so the character and text have clear space at desktop and mobile sizes.
- On desktop, consider a spacious split composition with the character/room as the visual anchor and the Turkish intro plus links in a readable column. On mobile, let the content flow into a single column without relying on hover.
- Keep the tone friendly, witty, calm, and analytical, with technical topics explained in an inviting way.
- Proposed first-version structure: Home hero, concise About interaction, YouTube, Projects, X, Contact, and a short footer. No content feed or video API is proposed for the first version.

## Link set

1. YouTube — https://www.youtube.com/@Echoid00 — confirmed.
2. Projects / GitHub — https://github.com/RootKiddo13 — confirmed.
3. X — https://x.com/Echoid00 — confirmed.
4. Contact — rootkiddo00@gmail.com — confirmed; display and click behavior remain a design decision.

## Decisions for the design review

- Use the selected website-specific hero; decide its final crop and relationship to the page text.
- Decide how prominent Echoid is in the first viewport relative to the wordmark and channel description.
- Set the exact Turkish hero copy and About copy.
- YouTube, GitHub, X, and Contact destinations are confirmed; decide how Contact is displayed and whether it is clickable.
- Review the proposed Home/About structure and desktop-to-mobile flow before locking it.

## Reference

- Echoid channel dashboard: `../SecondBrain/09-YouTube/01-Channels/02-Echoid/00-Channel Dashboard/README.md`
- Canonical brand brief: `../SecondBrain/09-YouTube/01-Channels/02-Echoid/01-Design/Echoid-Locked-Brief.md`
- Canonical banner: `../SecondBrain/09-YouTube/01-Channels/02-Echoid/01-Design/Echoid-banner-locked.png`
- Structural reference: `../RKWebsite/`

## Two-feet review candidates

- `design/concepts/echoid-hero-concept-two-feet-v1.png` — website hero concept with two separate feet visible under the desk.
- `design/concepts/echoid-banner-two-feet-review-v1.png` — non-canonical review copy of the banner with both feet visible.
- The original canonical banner in SecondBrain was not replaced. These are visual candidates for review, not locked assets.

## Computer-focus revision

- `design/concepts/echoid-hero-computer-focus-v2.png` — subtle head/eye turn toward the laptop, slight forward shoulder angle, and soft screen reflection.
- The two visible feet and wide right-side copy space are retained. This remains a review concept, not a locked asset.

## Selected hero asset

- `public/assets/brand/echoid-website-hero-selected-v1.png` is the user-approved hero image, copied from `design/concepts/echoid-hero-computer-focus-v2.png`.
- This approval selects the hero artwork only; it does not lock the page layout, copy, or Contact presentation.

## Confirmed destinations and specification status

- User confirmed YouTube, X, GitHub, and Contact targets; const.md is their source of truth.
- The six phased implementation specs and a clean IDLE agent-loop protocol are drafted from reusable RKWebsite patterns.
- The whole design is not yet locked: layout, final copy, and About/Contact behavior still need review.

## About description motion request — 2026-09-17

- User asked to bring the RootKiddo About/description panel's restrained entrance animation and hover response to Echoid.
- Scope is limited to the existing About dialog surface: backdrop fade, a short panel fade-and-rise, and a small hover lift/amber edge-shadow response.
- Keep Echoid's navy/amber treatment, preserve dialog content and layout, and remove movement for `prefers-reduced-motion`.
- Implementation is a reversible preview proposal pending the broader design review.

## Home and About copy/scale feedback — 2026-09-17

- User marked the About paragraph and the full Home content column for a warmer voice and a modest size increase.
- User asked to replace “TÜRKÇE TEKNOLOJİ KANALI” and delegated the new wording; Spec 07 proposes “TEKNOLOJİYE MERAKLI MISIN?”.
- The updated Home and About copy is recorded in `design-locked.md` and `specs/07-user-directed-copy-and-scale-refresh.md`.
- Preserve the hero composition and link destinations; review responsive fit before considering the preview ready.

## Contact row hover feedback — 2026-09-17

- User asked for the Contact row to gain hover and animation feedback, including the same border color change used by the other destination rows.
- Spec 08 applies a restrained amber border, slight lift/shadow, and a small envelope-icon movement on hover-capable devices.
- Contact remains static text in an `<address>`; reduced-motion users receive no movement. This refinement does not change the separate Phase 04 gate.

## RKWebsite integration audit

- Reuse the Astro static-site setup, the central site-data module pattern, and the small component separation for header, hero, link rows, contact, and About dialog.
- Adapt the responsive layout, skip link, visible focus, reduced-motion handling, modal focus management, Escape/backdrop closing, and viewport QA patterns.
- Adapt the spec and agent-loop workflow as a clean Echoid-specific project process; do not copy RootKiddo-specific states or reports.
- Echoid-specific changes: set the document language to Turkish, use Echoid's selected hero and canonical matte 3D identity, add an X link and glyph, and replace RootKiddo copy, colors, logos, and gecko motion overlays.

## 2026-10-03 — Visual refresh preview

- The user approved short keyword descriptors for YouTube, Projects, X, and Contact; the canonical copy is recorded in `design-locked.md`.
- A visual-only redesign proposal is ready in `reports/previews/echoid-redesign-direction-01.png` (editable layout source: `reports/previews/echoid-redesign-direction-01.html`).
- Proposal: editorial serif headline, compact Echoid wordmark, contained hero artwork, and keyword cards. Existing site code is untouched; await user review before implementation.

## 2026-10-03 — Visual preview revision

- The user rejected direction 01's contained-artwork treatment and liked the text/button arrangement.
- Direction 02 uses the selected Echoid photograph full bleed, keeping the introduction above the two-by-two keyword cards on the open right side. Review `reports/previews/echoid-redesign-direction-02.png`.
- Site implementation remains untouched pending visual review.

## 2026-10-03 — Echoid typography preview

- User approved direction 02's full-background photograph and right-side copy/card placement; type identity remains open.
- Proposed Echoid treatment: condensed uppercase display, ivory/amber keyword contrast, a restrained focus-line marker, and quiet sans-serif supporting text.
- Visual specimen: `reports/previews/echoid-type-direction-01.png`. No website source implementation yet; awaiting the user's typography review.

## 2026-10-03 — Typography revision 02

- User rejected the previous font and size, and requested a single font family for every site element.
- New visual proposal uses IBM Plex Sans globally, smaller type, and a two-tone headline/focus-marker signature. Preview: `reports/previews/echoid-type-direction-02.png`.
- Site source remains unchanged pending review.

## 2026-10-03 — Destination card scale revision

- User requested boxes 50% larger. Direction 03 raises card height from 78px to 117px and centers the content, preserving the two-column placement and type sizes.
- Preview: `reports/previews/echoid-type-direction-03.png`; site implementation remains pending.

## 2026-10-03 — Spec 09 implementation

- The user approved preview direction 03 and asked to integrate it without changing the existing page structure.
- Implementation scope: self-hosted IBM Plex Sans throughout; smaller two-tone tagline heading; approved keyword copy; 2×2 desktop destination grid with larger cards and a narrow one-column layout.
- Keep the existing hero asset, external destinations, About dialog, contact email/static address behavior, and footer.
- Implementation and source/build review passed. The required `npm run check:data` and `npm run build` commands passed; the reviewer found and parent fixed a missing amber accent on “AÇIDAN.” Browser-rendered/runtime checks remain unverified.

## 2026-10-03 — Final headline color

- User requested only “AÇIDAN” remain amber; “BAŞKA” uses the normal headline color. The approved preview and site heading treatment were updated; `npm run check:data`, `npm run build`, and independent source/build review passed. The user authorized publication, and the site is live at `https://echoid.pages.dev/` from commit `624726cb79cd3802c252914210037e2fa1f3140c`.
