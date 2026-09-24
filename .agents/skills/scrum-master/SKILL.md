---
name: scrum-master
description: >
  Maintain honest, product-specific Scrum records for this workspace.
  Use when planning or reviewing an iteration, checking sprint status,
  handling a blocker, closing a delivery cycle, or improving the work
  process, or routing a suggestion into a product backlog. Select the affected
  website and read only its planning area.
---

# Scrum Master

## Scope in this workspace

This repository contains two independent websites and two independent Scrums:

- Neuron Mesh: websites/neuron-mesh/planning/
- Agent: websites/agent/planning/

Choose the product from the requested work and read its planning records before editing. The product areas are separate sources of truth. Never create or use a shared backlog, sprint, status file, or retrospective at the repository root. Never update the other website's Scrum as a side effect.

The root AGENTS.md assigns deployment-selector and GitHub Pages protection work to Neuron Mesh. The Agent Scrum owns its app scaffold, future editor interface, profile content, and reader-facing features. If one request genuinely spans both products, record each product's own deliverable in its own backlog or sprint; do not copy a shared task table between them.

## Suggestion intake

`SUGERENCIAS.md` at the repository root is a temporary input inbox, not a third Scrum, shared backlog, or status history. At the start of workspace work, inspect its entries and determine whether each suggestion belongs to Neuron Mesh, Agent, or both. Before routing a suggestion, read the affected product's planning README, current sprint, and relevant backlog entries. For work spanning both, write distinct product-specific outcomes in each backlog. If it fits an existing item, refine that item instead of duplicating it. Otherwise, add one or more reviewable items to the affected `BACKLOG.md` using that product's conventions.

Ask Juan only when a material ambiguity affects product routing, scope, acceptance, evidence, or priority. Do not infer a priority or select the work into a sprint on his behalf. Leave an entry in `SUGERENCIAS.md` while it awaits clarification; after recording it in the product backlog, or after Juan decides not to pursue it, remove it from the inbox so the product backlog remains the source of truth. If an entry is about workspace-level work that belongs to neither website, clarify its destination with Juan rather than creating a shared Scrum.

## Working agreement

Juan is the Product Owner and makes scope, priority, editorial, and acceptance decisions. Work in reviewable increments. A sprint is tied to a concrete delivery goal; do not invent a fixed duration, daily ceremony, team roster, capacity, estimate, velocity, burndown, or percentage complete.

Use evidence in the repository and the user's messages. Report only counts that can be read from task records, and label the source. Distinguish code complete, locally checked, and remotely published. Do not claim that a person was consulted, a message was sent, or a deployment succeeded unless there is evidence that it happened.

## Product planning records

Each product's planning directory owns its own records:

- README.md: product scope, Scrum rules, and the locations of its source-of-truth files.
- BACKLOG.md: unselected work, priority, status, dependencies, and acceptance notes.
- SPRINT_ACTUAL.md: the active increment, or a clear pointer to the latest closed sprint and the next decision.
- VERSIONES.md: released or locally verified product increments and their limits.
- sprints/: dated or numbered records for closed increments. Keep a concise, auditable history.

Do not add a second status register, shared planning directory, or tracker without an explicit product decision. Existing records take precedence over memory. If historical material conflicts, record the discrepancy and use the current user-approved plan.

## Re-entry

At the beginning of Scrum work:

1. Inspect `SUGERENCIAS.md`; identify the product or products each entry may affect and note any material ambiguity that needs Juan.
2. Identify the affected website or websites for the requested work.
3. Read the planning README, current sprint, and relevant backlog entries for each product involved in a suggestion or the requested work. Read the latest closed sprint or version record when relevant.
4. Review and route ready suggestions using the suggestion-intake rules above. Leave entries awaiting Juan's clarification in the inbox; continue independent requested work when possible.
5. Reflect the goal and any unresolved decision, blocker, or external verification in each affected product's terms.
6. Keep every Scrum edit inside its product's planning directory unless the user asks to change shared workspace guidance.

The script at scripts/init-scrum.sh can create missing skeleton files for exactly one known product. It is write-if-absent. It does not migrate records or create a shared workspace. The current repository already has both Scrum areas initialized; do not run it unless a product planning area is genuinely missing.

## Planning and execution

- A backlog item says what outcome is wanted, why it matters, what it depends on, and how Juan can review it. Do not add estimates just to make it look like Scrum.
- A sprint has one clear goal and a bounded set of selected tasks. Keep unrelated discoveries in the backlog.
- A scope change during an increment is recorded with its date, reason, and effect on the goal. Do not silently rewrite the original commitment.
- If work is blocked, name the missing decision, evidence, access, or dependency and who can resolve it. Do not invent an owner or date.
- At closure, update the sprint record, backlog status, and version history consistently. Record checks and limits separately from implementation status. Return unfinished work to the backlog with its reason.
- Review the previous retrospective action when one exists. Close it, continue it, or record why it was dropped. Retrospectives are useful when the cycle surfaced process friction; do not force a ceremony or manufacture an improvement item.

## Honest reporting

Never infer completion from a plan, a build from an installed dependency, or a remote deployment from a local build. Do not invent metrics. State missing data plainly. If the user asks for a Scrum change that would mix the products, point out the conflict and propose a product-scoped record; Juan decides the scope.

Finish Scrum sessions by updating the affected product's sprint or backlog record when the work changes its state. In the reply, summarize the actual files changed and any remaining external check. Do not claim to have modified the other product's Scrum.

## Upstream and license

This project-local skill is adapted from Hieu T. Luu's scrum-master skill in tronghieu/agent-skills. The upstream MIT license and adaptation notes are included in this directory. The product-specific workspace rules above replace the upstream shared _project namespace and team-ceremony assumptions.
