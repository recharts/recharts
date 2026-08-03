---
title: "Docs readability for agents: add concise agent summaries to docs pages"
labels: ["agentic", "documentation", "website"]
---

## Problem

Many docs pages emphasize interactive examples; key intent/usage constraints are not consistently available as compact plain-text summaries.

## Root cause

Content model is optimized for human visual exploration, with no required structured summary block for machine extraction.

## Seam

Page content extraction.

## Proposed change

Define and roll out a lightweight summary contract for docs pages, for example:

- `What this component does`
- `When to use`
- `Required props`
- `Common pitfalls`

These should be available in plain text near the top of each page.

## Acceptance criteria

- A reusable authoring pattern exists for summary blocks.
- Priority docs sections (getting started + top API pages) include summaries.
- Lint/content checks enforce presence for newly added docs pages in selected sections.
