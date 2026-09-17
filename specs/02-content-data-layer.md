# Spec 02 — Content and Data Layer

## Purpose

Separate Echoid identity, approved copy, contact information, and destinations from UI component code.

## Scope

- Add one typed data module at src/data/site.ts.
- Keep channel identity, metadata, hero/About copy, and navigation destinations in that module.
- Use these user-confirmed values, matching const.md exactly:
  - YouTube: https://www.youtube.com/@Echoid00
  - X: https://x.com/Echoid00
  - Projects / GitHub: https://github.com/RootKiddo13
  - Contact: rootkiddo00@gmail.com
- Give the three external destinations clear labels and accessible names.
- Keep Contact display and click behavior consistent with the approved design.
- Use approved copy or the marked preview proposals in design-locked.md; keep proposals as drafts pending review. Never show generic placeholder text.

## Out of scope

- Rewriting or inventing the final Turkish hero/About copy.
- CMS or markdown-based content management.
- YouTube API or dynamic video data.
- Home layout implementation.

## Acceptance criteria

- Components do not hard-code channel URLs or email.
- Link data and approved copy are read from the single site-data module.
- All three external destinations exactly match const.md and open safely in a new tab if the final design uses that behavior.
- Contact uses the confirmed email; no unapproved mailto behavior is introduced.
- No placeholder text or fake URL remains.
- The module's types reject missing required destinations.

## Evidence

- Data module path and exported shape.
- Rendered-copy and target checks.
- Type check and build result.
