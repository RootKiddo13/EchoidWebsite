# Spec 07 — User-Directed Copy and Type-Scale Refresh

## Context

This is a user-requested preview refinement to the Home presentation in Spec 03 and About dialog in Spec 04. It does not reorder the standard Specs 01–06 or clear their review gates.

## User direction

- Make the marked Home column and About paragraph a little larger.
- Make the copy sound warmer and more conversational.
- Replace the “TÜRKÇE TEKNOLOJİ KANALI” kicker with a friendlier line chosen by the agent.

## Proposed copy

- Home kicker: **“TEKNOLOJİYE MERAKLI MISIN?”**
- Home description: **“Yapay zekâdan yazılıma, aklımıza takılan konuları beraber araştırıyoruz. Öğrendiklerimizi de seninle paylaşıyoruz.”**
- About copy: **“Echoid’de teknolojiye şöyle bir bakıp geçmiyoruz; nasıl çalıştığını da merak edip kurcalıyoruz. Yapay zekâdan yazılıma, aklımıza takılan konuları beraber araştırıyor, öğrendiklerimizi de sade ve keyifli bir dille seninle paylaşıyoruz. Aklına takılan bir şey varsa, gel beraber keşfedelim.”**

## Scope

- Update Home and About preview copy in the central `src/data/site.ts` module only.
- Increase the typography and link-row scale in the red-marked Home content column modestly (about 4–7%), including responsive overrides.
- Increase About body copy slightly (about 5–7%) while preserving comfortable line length and dialog fit.
- Keep copy and layout in Turkish, retain the approved hero and exact confirmed destinations, and preserve existing behavior and motion.
- Keep the full design marked as a preview pending review.

## Out of scope

- Changing the hero artwork/crop, navigation, destination URLs/order, contact details, About behavior, or page structure.
- Adding sections, effects, or new interactions.
- Marking the preview as publication-ready.

## Acceptance criteria

- The old “TÜRKÇE TEKNOLOJİ KANALI” line is absent from the rendered Home page and the proposed kicker appears.
- Home and About copy match the text above and use a direct, warm voice.
- Text and link rows in the marked Home column are modestly larger at desktop and mobile sizes; the About paragraph is visibly but slightly larger.
- The Home column remains readable without overlap or horizontal overflow at 320 px, 390 px, and desktop width.
- The About dialog remains readable and scrollable at narrow widths; existing dialog behavior and reduced-motion rules remain intact.
- `npm run check:data` and `npm run build` pass; a reviewer checks rendered desktop and narrow previews.

## Evidence

- Builder handoff with changed files and commands.
- Desktop Home and About previews plus a narrow-width fit check.
- Reviewer report distinguishing visual/runtime evidence from source-only checks.
