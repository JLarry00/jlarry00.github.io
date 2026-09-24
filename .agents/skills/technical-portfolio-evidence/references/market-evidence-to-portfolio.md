# Market evidence to portfolio

## Sampling protocol

Use a sample large enough to reveal recurrence without pretending to represent the whole market. Six to twelve current roles is often practical, but relevance and source quality matter more than a fixed count.

Record:

- research date;
- role, company, level, location, and work arrangement;
- canonical vacancy URL;
- whether the application flow is functioning;
- role family;
- explicit requirements;
- responsibilities and success signals;
- ambiguous or inferred signals.

Prefer employer vacancy pages or their official applicant tracking system. Remove duplicates, aggregators without a live source, expired roles, and inaccessible application flows.

## Capability clustering

Normalize vocabulary into stable capabilities. For example, LangGraph, an internal orchestrator, and another agent framework may all support a broader capability in stateful orchestration. Preserve framework names as observations, not the cluster itself.

Useful cluster dimensions may include:

- software and backend engineering;
- APIs, tool integration, and structured interfaces;
- state, orchestration, and workflow control;
- retrieval and context engineering;
- evaluation, testing, and observability;
- reliability, retries, fallback, and human control;
- data, cloud, deployment, platform, and operations;
- security, permissions, privacy, and governance;
- collaboration, communication, and product judgment.

Use only dimensions supported by the sample. Do not force every role into an Agentic AI template.

## Recurrence table

| Capability cluster | Roles showing it | Typical wording | Level dependency | Stability | Confidence |
|---|---:|---|---|---|---|

Frequency in a small directed sample is evidence about that sample, not the entire market. Report counts, not unsupported percentages.

## Portfolio question conversion

Turn a cluster into a question the portfolio should answer:

- Capability: evaluation and observability.
- Audience question: how does this person know the agent works, fails, or regresses?
- Evidence needed: eval set, success criteria, traces, test results, failure analysis.
- Candidate project: the strongest real project containing those artifacts.
- Portfolio treatment: a case section or linked technical note.

The question should invite proof and judgment rather than a yes/no technology claim.

## Selection scorecard

Assess candidate proof units on:

- market relevance;
- strength and publicability of evidence;
- ownership clarity;
- depth of decisions and tradeoffs;
- verification quality;
- complementarity with other selected work;
- explanation cost for the audience.

Use qualitative ratings with reasons. Do not manufacture a numeric precision that the evidence cannot support.
