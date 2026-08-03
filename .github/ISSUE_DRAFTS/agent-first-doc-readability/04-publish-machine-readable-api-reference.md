---
title: "Docs readability for agents: publish machine-readable API reference data"
labels: ["agentic", "documentation", "omnidoc"]
---

## Problem

API reference data is primarily exposed as generated React/TS artifacts for website rendering; this is not an optimal ingestion format for LLM tools.

## Root cause

The omnidoc pipeline is focused on UI consumption, with no explicit external API-doc export format.

## Seam

API reference data contract.

## Proposed change

Extend omnidoc/build to publish a machine-readable API dataset (JSON) with:

- component/hook name
- prop signatures and defaults
- deprecation metadata
- related examples links

## Acceptance criteria

- API dataset is generated automatically from existing source-of-truth (types + JSDoc).
- Dataset is versioned and published alongside website docs.
- Tests verify schema stability and fail on breaking shape changes.
