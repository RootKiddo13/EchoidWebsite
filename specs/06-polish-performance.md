# Spec 06 — Polish and Performance

## Purpose

Verify the completed static site before considering it ready for human publication review.

## Scope

- Check the selected hero file's dimensions, format, size, and loading behavior.
- Remove unnecessary CSS, JavaScript, and dependencies.
- Check font fallbacks and initial content visibility.
- Check browser console, asset loading, and broken links.
- Verify the YouTube, X, GitHub, and Contact values against const.md.
- Run production build and local preview.
- Update README/backlog only where such project files exist and report the actual result.

## Out of scope

- Deployment, hosting, or domain setup.
- Analytics, CMS, API, or database.
- New images or animation.

## Acceptance criteria

- Production build succeeds and local preview renders the approved design.
- No critical console errors or broken assets.
- All destinations match const.md and no placeholder remains.
- The four viewports in Spec 05 pass.
- No secret or local environment file is tracked.
- No unapproved design or copy has been introduced.
- The result is ready for human review; this phase does not publish the site.

## Evidence

- Build and preview result.
- Link, asset, console, and responsive QA summary.
- Builder/reviewer/fixer reports and any remaining limits.
