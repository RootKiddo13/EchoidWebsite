# Spec 09 — Global Typography and Home Links

**Type:** User-approved visual refresh
**Status:** PASS for source/build review; user-authorized deployment pending
**Approved preview:** `reports/previews/echoid-type-direction-03.png`

## Goal

Implement the approved full-bleed Echoid home design while preserving the existing Astro component structure, destinations, About interaction, contact semantics, and responsive behavior.

## Scope

- Self-host IBM Plex Sans Variable and its OFL license under `public/fonts/`.
- Use one IBM Plex Sans family site-wide. Apply its weight/width axes and size/color styles for hierarchy; remove local monospace or serif family overrides.
- Use the approved tagline as the compact, two-line uppercase home heading, with only `AÇIDAN` emphasized in amber; `BAŞKA` uses the standard paper color.
- Show the user-approved keyword descriptors beneath YouTube, Projects, X, and Contact labels.
- Keep a two-column destination grid at desktop widths and one column at narrow widths.
- Set destination cards to the approved larger scale, with 117px desktop height; retain their contents, visible focus, existing hover feedback, and reduced-motion behavior.
- Keep the current full-bleed selected photograph, page component hierarchy, exact destinations, visible contact email, static `<address>` behavior, About dialog, header, and footer.

## Approved copy

- YouTube: `teknoloji · yapay zekâ · merak`
- Projeler: `deneyler · araçlar · üretim`
- X: `notlar · keşifler · gündem`
- İletişim: `soru · öneri · iş birliği`

## Out of scope

- New pages, feeds, APIs, CMS, forms, destination URLs, contact actions, or artwork.
- New hosting/domain configuration or paid services.
- Pushing before final checks and independent review.
- Additional font families or externally hosted font requests.

## Acceptance criteria

1. Site text, including the header, home content, cards, About dialog, and footer, uses the same IBM Plex Sans family.
2. Turkish uppercase glyphs render correctly from the self-hosted font asset.
3. The home heading and keyword cards follow the final approved treatment: only `AÇIDAN` is amber, and the previous oversized type scale remains reduced.
4. Desktop cards form a 2×2 grid at 117px minimum height; narrow layouts stack without horizontal overflow.
5. Existing destination URLs/order, About dialog behavior, contact email/static semantics, focus states, and reduced-motion behavior remain intact.
6. `npm run check:data` and `npm run build` pass. After the independent review, publish the user-approved revision through the existing `main` → Cloudflare Pages integration; do not change hosting or domain settings.
