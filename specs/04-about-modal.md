# Spec 04 — About Interaction

## Purpose

Present the approved concise About copy without navigating away from the home page, if the final design retains an About interaction.

## Scope

- Follow the approved trigger and panel style recorded in design-locked.md.
- Use approved or explicitly marked preview proposal Turkish About copy from the central site-data module; keep proposals as drafts pending review.
- Provide a semantic dialog, labelled by its title.
- Move focus into the dialog on open and return it to the trigger on close.
- Support close button, Escape, and backdrop behavior as specified by the approved design.
- Prevent background interaction while the dialog is open.
- Match the RootKiddo About panel's restrained reveal: fade in while rising about 8px, with a softly fading backdrop (about 220ms).
- On pointer-capable devices, let the open dialog surface lift slightly on hover, with a modest amber border and shadow shift. Hover must reveal no content or functionality.
- Keep entrance and hover motion subtle and compatible with reduced-motion preference; reduced motion removes movement.

## Out of scope

- A separate About route.
- Long biography, timeline, social cards, backend, or form.
- Unapproved copy or interaction variants.

## Acceptance criteria

- If included, the dialog opens and closes reliably by pointer and keyboard.
- Dialog semantics, accessible naming, and background inertness are present.
- Focus enters the dialog and returns to the trigger.
- Repeated open/close actions do not leave stale state or lost focus.
- Content fits the panel and remains readable on narrow screens.
- Opening uses a brief fade-and-rise for the panel and a fade for the backdrop; the dialog's contents and page layout do not shift.
- Hovering the open panel on a hover-capable device gives a subtle lift and Echoid-amber border/shadow response; touch and reduced-motion modes do not depend on hover or movement.
- If design review removes the About interaction, this phase is recorded as not applicable rather than inventing one.

## Evidence

- Open-dialog preview.
- Close-button, Escape, backdrop, and focus-return checks.
- Accessibility-tree/dialog inspection.
