---
title: "Docs readability for agents: add llms.txt and explicit crawl entrypoints"
labels: ["agentic", "documentation", "website"]
---

## Problem

LLM crawlers do not have a first-class machine-readable entrypoint for Recharts docs. Discovery relies on generic crawling of interactive pages.

## Root cause

The website currently ships human-oriented navigation and sitemap metadata, but no dedicated `llms.txt`/agent-focused crawl contract.

## Seam

Discovery and crawl bootstrap.

## Proposed change

Add and publish:

- `/llms.txt` at the website root with stable pointers to:
  - getting started guide
  - API reference index
  - examples index
  - changelog/release notes
- a minimal docs-specific crawl policy section for canonical URLs and locale behavior

## Acceptance criteria

- `llms.txt` exists in production website output.
- It points to canonical docs entrypoints and avoids duplicate locale paths where possible.
- Documentation explains how to keep `llms.txt` updated when navigation changes.
