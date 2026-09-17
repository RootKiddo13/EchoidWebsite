# Phase 02 Review — Content and Data Layer

**Verdict: FAIL — fixes required before Phase 02 PASS.**

Reviewed `specs/02-content-data-layer.md`, `const.md`, `src/data/site.ts`, and the current source tree. No production files were changed. No UI components are present in this phase; component implementation remains out of scope.

| Check | Result | Evidence |
|---|---|---|
| Confirmed destinations match `const.md` | PASS | YouTube, X, GitHub, and email values match exactly. |
| Contact behavior stays undecided | PASS | Email is plain data; no `mailto:` behavior is introduced. |
| Draft copy is marked as a proposal | PASS | Module documentation and `home`/`about` comments say preview proposal, pending user review; copy matches the marked proposals in `design-locked.md`. |
| Data is centralized without duplicate constants | FAIL | Each external URL is stored in `publicUrls` and repeated as a literal `links[].href` value in the same module. Keep one source of each URL and derive the link records from it (or remove the duplicate URL map). |
| Labels/accessibility names are Turkish | FAIL | `accessibleName` values are English (`Echoid on YouTube`, `Echoid projects on GitHub`, `Echoid on X`); visible `Projects` is also English. Use Turkish names such as “Echoid'in YouTube kanalı”, “Echoid'in GitHub projeleri”, and “Echoid'in X profili”; localize the project label too. |
| Required destinations represented by types | PASS, static only | `EchoidSiteData` requires all three URL fields and a three-entry link tuple with distinct IDs. There is no configured type-check script or installed `typescript` / `@astrojs/check`, so compiler-level rejection was not independently exercised. |
| Build | PASS | `npm run build` completed successfully and generated the static `/` route. |
| Placeholder/fake destination | PASS | No placeholder or fake URL/email appears in `site.ts`. |

## Required fixes

1. Remove the duplicate URL literals so each destination has one canonical value in the data module.
2. Localize the accessible names and the `Projects` label to Turkish, including their type definitions.
3. Rerun the build (and add/run a type check if the project intends to claim compiler-verified type coverage).

Phase 03 should wait until the fixes are reviewed and this phase receives PASS.
