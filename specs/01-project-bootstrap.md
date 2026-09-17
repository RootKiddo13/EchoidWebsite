# Spec 01 — Project Bootstrap

## Purpose

Create a minimal, buildable Astro static site foundation for the next five phases.

## Scope

- Initialize the Astro project with a minimal dependency set.
- Provide npm scripts for development, production build, and local preview.
- Create the basic structure:
  - src/pages/
  - src/components/
  - src/layouts/
  - src/data/
  - src/styles/
  - public/assets/brand/
- Keep the selected hero at public/assets/brand/echoid-website-hero-selected-v1.png and make it addressable by the site.
- Set the document language to Turkish.
- Keep secrets and local environment files out of version control; no secret or environment variable is needed for this site.
- Add a minimal home route sufficient to smoke-test the production build.

## Out of scope

- Final home composition, copy, or About interaction.
- Responsive polish or animation.
- CMS, backend, API, or deployment setup.

## Acceptance criteria

- A clean dependency install completes.
- The development server starts and serves the home route.
- Production build and local preview complete.
- No unnecessary UI framework, CMS, or backend dependency is added.
- Existing project documents and selected asset are preserved.
- agents.md and claude.md remain identical.

## Evidence

- Install/build output.
- Created source tree.
- Home route response and asset-path check.
- Git status and secret-file check.
