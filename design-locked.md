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
