# EchoidWebsite — Agent Instructions

## Project references

- [agents.md](agents.md) and [claude.md](claude.md) — mirrored instructions; contents must remain identical.
- [const.md](const.md) — canonical project, brand, and confirmed destination constraints.
- [brief.md](brief.md) — product purpose, scope, and non-goals.
- [design-locked.md](design-locked.md) — design decisions and their approval state.
- [notes.md](notes.md) — design drafts, decisions, and open questions.
- [backlog.md](backlog.md) — active work and its next step.
- [backloglog.md](backloglog.md) — append-only work history.
- [specs/README.md](specs/README.md) — implementation spec index and phase order.
- [agent-loop/README.md](agent-loop/README.md) — implementation loop protocol.

## Session start

Before working, read const.md, brief.md, design-locked.md, notes.md, and backlog.md. Read relevant backloglog.md entries when historical context is needed. Before implementation, read specs/README.md and the current phase spec.

## File responsibilities

- Put permanent, user-approved identity constraints and confirmed destinations in const.md.
- Keep product scope in brief.md.
- Record design decisions and mark each approved, proposed, or open in design-locked.md and notes.md.
- Keep unfinished work and a concrete next step in backlog.md.
- Append completed work, decisions, and blockers to backloglog.md; do not erase history.
- Keep claude.md and agents.md identical after every edit.
- Specs define implementation scope and acceptance checks. Do not silently expand a phase.

## Design-first and implementation gate

The approved hero artwork and user-confirmed destinations are locked inputs. If the user explicitly authorizes implementation while other design choices remain open, build a reversible preview using clearly marked proposals in design-locked.md. Do not present proposed layout or copy as user-approved. Review the full design before publication. Do not publish or deploy without an explicit request and human review.

## Brand, links, and publishing

Echoid is an independent Turkish technology channel, not a Turkish translation of RootKiddo. Use the canonical Echoid identity source referenced by const.md and the selected hero asset recorded in design-locked.md. Use only the confirmed YouTube, X, GitHub, and Contact values in const.md; do not replace or guess them. Do not publish or deploy without an explicit user request and human review.
