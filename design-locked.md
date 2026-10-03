# Echoid Website — Design Decisions

**State: APPROVED — the current website design, copy, interactions, and destinations were reviewed and approved for publication on 2026-09-18.**

This file records the status of design decisions. Entries marked **Approved** are user-approved. Entries marked **Preview proposal** may be implemented as a reversible review draft after the user authorizes implementation; they are not final or publication-approved.

## Approved

- **Hero artwork:** public/assets/brand/echoid-website-hero-selected-v1.png
  - Subtle gaze and posture toward the laptop.
  - Both feet visible.
  - Wide negative space is retained for page content.
- **Brand direction:** follow Echoid's canonical matte, flat-shaded 3D identity. Preserve the established fedora, grey high-collar coat, simple face, night-blue atmosphere, and restrained amber lighting.
- **Destinations:** use the YouTube, X, GitHub, and Contact values in const.md.

## Approved design decisions

- Exact desktop composition, text placement, and hero crop.
- Mobile composition and art positioning.
- Final Turkish hero and About copy.
- About trigger and panel presentation.
- Contact display and click behavior.
- Wordmark and footer treatment.

## Reference

- Product scope: brief.md
- Design exploration and decision history: notes.md
- Canonical Echoid brief: path in const.md
- Structural reference: ../RKWebsite/

## Approved website design — 2026-09-18

The user reviewed the current implementation and explicitly approved publishing it. The following implemented layout, copy, and interaction choices are approved for release:

- Desktop: keep Echoid and the desk artwork on the left; place the readable content and destination list in the open right side of the selected hero.
- Mobile: keep the artwork focal point near the top and let the content flow below it in one column.
- Hero kicker: “TEKNOLOJİYE MERAKLI MISIN?”
- Tagline: “Teknolojiye başka bir açıdan bak.”
- Description: “Yapay zekâdan yazılıma, aklımıza takılan konuları beraber araştırıyoruz. Öğrendiklerimizi de seninle paylaşıyoruz.”
- About title: “Echoid hakkında”
- About copy: “Echoid’de teknolojiye şöyle bir bakıp geçmiyoruz; nasıl çalıştığını da merak edip kurcalıyoruz. Yapay zekâdan yazılıma, aklımıza takılan konuları beraber araştırıyor, öğrendiklerimizi de sade ve keyifli bir dille seninle paylaşıyoruz. Aklına takılan bir şey varsa, gel beraber keşfedelim.”
- Footer: “MERAK ETMEYE DEVAM.”
- Contact: show the confirmed email as readable text, following the static contact-row pattern from RKWebsite.
- About interaction: add a compact “Hakkında” text button at the right side of the header; open a centered, dark-navy dialog with a restrained amber edge, a small eyebrow, the existing About title and paragraph, and a top-right close control. Close with the control, Escape, or a click outside the panel. Approved as part of the reviewed release.
- About panel motion: adapt RootKiddo's About description treatment to Echoid: a short backdrop fade and roughly 8px panel fade-and-rise on opening, plus a slight panel lift with a restrained amber edge/shadow on hover-capable devices. Disable movement for reduced-motion users. Preserve Echoid's palette and identity. Approved as part of the reviewed release.
- User-directed copy/scale refinement (Spec 07): use the warmer Home and About wording above, replace the channel-category kicker with “TEKNOLOJİYE MERAKLI MISIN?”, and raise the marked Home typography/link-row scale and About copy size modestly. Preserve the current composition. Approved as part of the reviewed release.
- User-directed Contact hover refinement (Spec 08): on hover-capable devices, give the static Contact row the other links' amber border response, with a small card lift/shadow and envelope-icon motion. Reduced-motion users get no movement. Preserve the readable email and non-interactive `<address>` behavior. Approved as part of the reviewed release.

The implementation above is the reviewed release version. Future changes still require review before their production commit is pushed.

## Approved copy for the next visual review — 2026-10-03

The user approved concise keyword descriptors for the four destination rows:

- YouTube — `teknoloji · yapay zekâ · merak`
- Projeler — `deneyler · araçlar · üretim`
- X — `notlar · keşifler · gündem`
- İletişim — `soru · öneri · iş birliği`

These labels are approved copy; the refreshed layout remains pending review.

## Visual refresh direction 01 — Preview proposal, 2026-10-03

- Promote “Teknolojiye başka bir açıdan bak.” to the main editorial headline; keep Echoid as the compact header wordmark.
- Pair a serif display face with a sans-serif body/UI face.
- Show the selected hero artwork in a contained frame instead of using it as a full-viewport background.
- Place the approved keyword descriptors under each destination label in a two-column card grid.
- Preserve the night-blue and amber palette, existing introduction, footer, confirmed destinations, and contact email.
- Review preview at `reports/previews/echoid-redesign-direction-01.png` before implementing website changes. Proposal is not publication-approved.

## Visual refresh direction 02 — Preview proposal, 2026-10-03

- The user rejected direction 01 and asked for the selected photograph to return as a full-viewport background while retaining the text/button arrangement they liked.
- Direction 02 keeps the introductory copy above the same two-by-two destination card grid and places the group over the photograph's open right side.
- This remains a visual proposal only. Review `reports/previews/echoid-redesign-direction-02.png` before any site implementation.

## Layout approved, typography open — 2026-10-03

The user approved visual direction 02's full-viewport Echoid photograph and the right-side introduction with a two-by-two destination grid. Approval covers this composition and the previously approved keyword labels; type styling remains under review.

## Echoid type direction 01 — Preview proposal, 2026-10-03

- Use a tall, condensed, uppercase display style for the main statement, with the key words “BAŞKA” and “AÇIDAN” in Echoid amber.
- Pair it with a clean, restrained sans-serif for body copy and link details.
- Repeat a small amber focus mark/line as the page's typographic signature, drawing on Echoid's curious investigator character without copying the supplied creators' thumbnail styles.
- Preview: `reports/previews/echoid-type-direction-01.png`. The corrected image uses Bahnschrift SemiCondensed Bold, which supports the Turkish uppercase glyphs in the specimen; production font/asset choice remains open until visual approval.
- No website source changes are approved yet.

## Echoid type direction 02 — Preview proposal, 2026-10-03

- Direction 01 was rejected: the user disliked the display font and found the text too large.
- Use IBM Plex Sans as the single font family site-wide. The same family applies to the logo, header, headline, body, destination cards, About dialog, and footer; express hierarchy only through weight, size, width, and color.
- Reduce the headline to a restrained desktop scale and keep body/link text compact and readable.
- Create Echoid's signature with a two-tone ivory/amber headline and a small amber focus marker, without adding another typeface.
- Preview: `reports/previews/echoid-type-direction-02.png`. No website source changes until review.

## Destination card size revision — Preview proposal, 2026-10-03

- The user asked to enlarge the destination boxes by 50% while retaining the two-column placement.
- Preview direction 03 increases card height from 78px to 117px and vertically centers each card's contents. The two-column width remains fixed to preserve the approved right-side composition.
- Preview: `reports/previews/echoid-type-direction-03.png`. This is not implemented in the website source yet.

## Approved implementation — 2026-10-03

The user approved preview direction 03 for implementation. The approval covers the full-bleed selected photograph, right-side text placement, one IBM Plex Sans family site-wide, the smaller two-tone heading, approved link keywords, and 117px-tall two-column desktop cards. The site source may now be updated within Spec 09. Deployment still requires a separate review and explicit request.

## Final headline color correction — 2026-10-03

The user approved the final color treatment: **only “AÇIDAN” is amber**; “BAŞKA” uses the standard headline color. This overrides earlier preview iterations that highlighted both words.
