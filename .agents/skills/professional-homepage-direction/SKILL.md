---
name: professional-homepage-direction
description: Define or review the content hierarchy, information architecture, visual brief, responsive behavior, interaction, motion, and quality criteria for a distinctive personal homepage or technical portfolio. Use after professional positioning and evidence priorities are sufficiently clear. Do not use to invent positioning, verify claims, select a technology stack, implement the site, deploy it, or generate a generic style preset.
---

# Professional homepage direction

Direct a personal technical homepage from its real subject matter, audiences, and evidence. The page should help a visitor recognize the person, understand the focus, inspect proof, and take an appropriate next action. It should not behave like a decorated CV or a gallery of fashionable components.

## Check readiness

Before visual direction, require enough clarity on:

- the homepage's primary job;
- primary and secondary audiences;
- current identity, demonstrated focus, and direction;
- selected proof and its accurate maturity;
- primary call to action;
- available public content and assets;
- language, accessibility, privacy, performance, and cost constraints.

If these are unresolved, identify the blocking decisions and route positioning to `it-professional-marketing` and evidence selection to `technical-portfolio-evidence`. Do not hide a strategy gap with visual polish.

## Build the visitor path

For each important audience, describe:

1. likely entry point;
2. first question;
3. signal that answers it;
4. proof they may inspect next;
5. final action.

Use this path to order content. A section exists because it answers a question or enables an action, not because portfolios conventionally contain it.

## Define the hierarchy

Create a page architecture with, for each element:

- purpose;
- audience question;
- real content required;
- proof or destination;
- visual priority;
- interaction or motion, if any;
- responsive behavior;
- removal condition.

A compact homepage often needs a recognizable opening, selected work, routes to deeper cases, concise context, and clear contact links. Add skills, experience, writing, testimonials, photography, or a complete chronology only when the content and audience justify them.

## Develop visual directions

When visual exploration is requested, produce two or three coherent directions only when a decision genuinely remains open. Each direction must derive from the person's subject matter and content rather than a named trend or preset. This skill has no dependency on a separate design skill.

For each direction specify:

- central concept and audience fit;
- hero treatment using real content;
- typography roles and reading density;
- color and contrast logic;
- layout rhythm and project presentation;
- imagery, diagrams, code, or absence of imagery;
- interaction and motion principles;
- mobile adaptation;
- advantages, risks, and maintenance cost.

Recommend one direction and explain the evidence behind the choice. A user's aesthetic preference is an input; test it against communication, accessibility, performance, distinctiveness, and maintenance.

## Present technical work clearly

Design project presentation around the audience question and strongest evidence. The visual hierarchy should distinguish:

- what the project is and why it matters;
- actual maturity and current state;
- personal contribution;
- key decision or tradeoff;
- result, limitation, or learning;
- route to technical depth.

Avoid equal-sized project grids when the work has different strategic weight. Do not use logos, badges, mock metrics, terminal decoration, or architecture diagrams as generic signals of technical credibility.

## Use interaction and motion deliberately

Every interaction or animation must serve orientation, comprehension, hierarchy, feedback, or character. Document:

- trigger and intended effect;
- keyboard and pointer behavior;
- mobile behavior;
- reduced-motion alternative;
- performance budget or risk;
- fallback when scripting fails.

Remove effects that delay reading, obscure navigation, depend on hover, compete with evidence, or exist mainly to demonstrate implementation effort.

## Prepare an implementation handoff

When the direction is accepted, produce a specification containing:

1. page and route map;
2. section order and content contract;
3. design tokens or token decisions still pending;
4. component responsibilities without dictating unnecessary abstractions;
5. responsive states and breakpoints by behavior;
6. keyboard, focus, contrast, motion, and semantic requirements;
7. asset list and provenance;
8. performance priorities;
9. link, language, metadata, and empty-state behavior;
10. acceptance criteria and unresolved decisions.

Do not select or change the technology stack through this skill. If Astro implementation is later authorized, follow the approved handoff, inspect the app's own documentation, and consult official Astro documentation when needed; no separate implementation skill is required.

## Review the rendered result

Use [homepage-review-gate.md](references/homepage-review-gate.md) for independent review. Inspect actual desktop and mobile rendering; do not infer visual quality from source code. Separate automated checks, visual inspection, keyboard testing, performance evidence, and untested areas.

## Release gate

Reject a direction when:

- visual style precedes purpose and content;
- the opening could belong to any developer or AI professional;
- the page reproduces the CV instead of guiding investigation;
- all projects receive equal weight without reason;
- technology names or decorative interfaces substitute for evidence;
- motion lacks a communication job or accessible fallback;
- mobile is merely a compressed desktop layout;
- private context or unlicensed assets enter the design;
- the recommendation mirrors the user's first aesthetic suggestion without comparison;
- implementation begins before the required decisions are reviewable.
