---
title: "Docs readability for agents: publish a machine-readable docs index"
labels: ["agentic", "documentation", "website"]
---

## Problem

Agents must infer site structure from rendered pages and TypeScript source instead of consuming a stable docs index.

## Root cause

Navigation/source-of-truth is encoded in runtime TS structures intended for the website UI, not for external machine consumers.

## Seam

Navigation and information architecture.

## Proposed change

Generate a versioned machine-readable docs index (JSON) during website build that includes:

- page title
- canonical URL
- section/category
- locale mapping
- last-updated timestamp

## Acceptance criteria

- A generated docs index artifact is published with the site.
- The artifact is documented and considered a stable interface for agent ingestion.
- Build/test coverage verifies index generation for new/renamed pages.
