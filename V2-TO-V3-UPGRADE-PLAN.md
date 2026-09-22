# Plan: unblocking the 2.x → 3.x upgrade

> Status: proposal, not yet implemented.
> Evidence gathered 22 September 2026 from the npm registry, the GitHub code search API, and the
> Recharts issue tracker.

v3.0.0 shipped on 23 June 2025. Fifteen months later **v2 is still 60.3% of weekly downloads and
2.15.4 alone is 54%**. That is not a slow rollout; that is a stall, and the evidence says the cause
is mostly _not_ the documented breaking changes.

The single most telling data point: in [#7355](https://github.com/recharts/recharts/issues/7355) we
asked directly, "If you are still using 2.x branch, what is preventing you from updating?" It has
**zero comments**. People who are stuck do not answer surveys — they pin a version and move on. Every
real blocker below was recovered from bug reports filed for other reasons.

## What is actually blocking people

Ranked by evidence weight, not by position in the migration guide.

### A. Packaging failures, not API changes — the biggest bucket

v3 added `@reduxjs/toolkit`, `react-redux`, `immer` and `reselect` as hard runtime dependencies.
That is an internal architecture decision that leaked into consumers' build systems.

| Issue                                                     | Comments | Symptom                                                                                                       |
| --------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------- |
| [#6117](https://github.com/recharts/recharts/issues/6117) | 65       | `ERR_REQUIRE_ESM` on `@reduxjs/toolkit` under Next.js webpack dev; triggered by switching to `next.config.ts` |
| [#6316](https://github.com/recharts/recharts/issues/6316) | 22       | `_toolkit.createSlice` error on Next.js 15 + React 19, `output: standalone`                                   |
| [#6112](https://github.com/recharts/recharts/issues/6112) | 12       | Charts empty in print view since 3.1.0                                                                        |
| [#5562](https://github.com/recharts/recharts/issues/5562) | —        | Earlier instance of the same dual-package resolution problem                                                  |

Both of the top two are labelled `next specific`. This matters disproportionately because Next.js is
where a large share of React charting lives, and because the failure mode is a hard build error with
a stack trace pointing at `node_modules` — the user cannot fix it, cannot work around it, and the
fastest resolution available to them is `npm install recharts@2`.

A related class, from [#7361](https://github.com/recharts/recharts/issues/7361): under Preact +
`preact/compat`, `immer`'s autofreeze produces ~45 console throws of
`Cannot assign to read only property 'current'` in production builds. Charts render, but the console
is full of errors — which reads as "this library is broken" to anyone evaluating an upgrade.

**No codemod can fix any of this.** It is our packaging, not their code.

### B. Silent visual changes — expensive because nothing warns

These produce no error. The chart renders, looks subtly wrong, and someone has to notice.

- **Render order replaces z-index.** JSX order now determines layering; `Tooltip` must come before `Legend`.
- **Multiple Y axes sort alphabetically by `yAxisId`**, not by render order — [#6255](https://github.com/recharts/recharts/issues/6255), 8 comments.
- **`connectNulls` on `Area`** now treats null datapoints as 0.
- **Axis lines display even without ticks.**
- **`CartesianGrid` requires matching `x/yAxisId`**; a mismatch renders nothing at all.

For a team with a hundred dashboards, this bucket is the real cost: the upgrade is not "fix the build
errors," it is "visually re-verify every chart we own." That is a sprint nobody has budget for, which
is exactly why the version pin persists.

### C. Removed escape hatches — small group, loud, high goodwill cost

Users who did advanced things lost their mechanism: the `displayName` matching hack, internal props
on `<Customized />`, `activeIndex`, `CategoricalChartState`. In
[#7361](https://github.com/recharts/recharts/issues/7361) one user found a clean replacement using
the new hooks (`useChartWidth`, `useChartHeight`, `useMargin`) — **but only after asking in an
issue**. The replacement path exists and is good; it is simply not discoverable from the migration
guide.

### D. Mechanical prop removals — the cheapest bucket, and the rarest

Measured across public `.tsx` files with the GitHub code search API:

| Removed / renamed                      | Files matched | Recharts-specific?                            |
| -------------------------------------- | ------------- | --------------------------------------------- |
| `TooltipProps` → `TooltipContentProps` | 146,688       | Partly — common name, but Recharts exports it |
| `activeIndex`                          | 217,088       | No — inflated, generic name                   |
| `alwaysShow`                           | 17,824        | Partly                                        |
| `isFront`                              | 7,504         | Partly                                        |
| `blendStroke`                          | 138           | **Yes**                                       |
| `animateNewValues`                     | 97            | **Yes**                                       |

Read this carefully: the two tokens that are unambiguously ours are the two rarest. The migration
guide leads with the mechanical removals, but almost nobody is actually hitting them. **The guide is
ordered by what was easy to document, not by what hurts.**

## What to do about it

Ordered by expected repos unblocked per day of work.

| #   | Action                                                                  | Addresses | Effort   |
| --- | ----------------------------------------------------------------------- | --------- | -------- |
| 1   | Add `next dev` webpack + `next.config.ts` scenarios to `recharts-integ` | A         | ~1 day   |
| 2   | Resolve the dual-package / ESM interop problem at the root              | A         | ~1 week  |
| 3   | Disable `immer` autofreeze in production builds                         | A         | ~2 hours |
| 4   | Ship `@recharts/codemod`                                                | B, C, D   | ~1 week  |
| 5   | Dev-mode upgrade diagnostic                                             | B         | ~3 days  |
| 6   | Rewrite the migration guide in blocker order                            | B, C      | ~2 days  |
| 7   | PRs to the top ~6 actively-maintained wrappers pinning v2               | —         | ~3 days  |

**1 — Close the integration-test gap first.** [`recharts-integ`](https://github.com/recharts/recharts-integ)
already runs 20 scenarios on every PR, including `nextjs-standalone`. It does not appear to cover
plain `next dev` under webpack, or a `next.config.ts` project — which is precisely the combination in
#6117. Adding those two turns the most-discussed open bug into a regression test. This is the highest
leverage item in the document and it is a day's work.

**2 — Then fix it properly.** Options worth evaluating, in rough order of preference: bundle the
Redux internals into the published artifact so consumers never resolve `@reduxjs/toolkit` themselves;
or ship a correct dual CJS/ESM build with explicit `exports` conditions; or drop the Redux dependency
for a hand-rolled store. The third is the most work and the most permanent. Whichever we choose,
scenario coverage from step 1 is what proves it.

**3 — The autofreeze fix is nearly free.** Enable `immer` autofreeze in dev and test, disable it in
production. The maintainer already indicated agreement with this approach in #7361.

**4 — The codemod is worth building, but it is not the bottleneck.** No `recharts-codemod` package
exists on npm today, so the name is free. It can mechanically handle the whole of bucket D, the
`TooltipProps` rename, and `ResponsiveContainer`'s `ref.current.current` — and, importantly, it can
_detect and report_ bucket B rather than fixing it: "3 charts use multiple Y axes; verify ordering",
"2 charts render `Legend` before `Tooltip`; layering changed". A codemod that prints an honest
to-verify list is more valuable here than one that silently rewrites.

**5 — Make bucket B self-announcing.** A dev-only diagnostic that warns when a chart hits a
changed-behaviour case gives the visual regressions an error message they currently lack. This shares
its entire mechanism with the `warnings` array in `FEEDBACK-AND-TELEMETRY.md` — build the warnings
once and both projects get paid.

**6 — Reorder the migration guide** so it opens with "will my build break?", then "what will look
different?", then the prop table. Add the `useChartWidth`/`useMargin` recipe that #7361 uncovered;
right now that answer exists only in an issue thread.

## Can we send PRs?

**Yes, and this is worth real effort.** Roughly 84 actively-maintained packages pin recharts to 2.x,
together worth about **156,000 weekly downloads**, and the single largest — `@tremor/react` at
**288,000 weekly** — pins `^2.13.3`.

### The ranking

Verified against npm, 1,233 packages currently depend on recharts. Top of the list by weekly
downloads:

| Package                           | Weekly  | Range     | Field   | Status     |
| --------------------------------- | ------- | --------- | ------- | ---------- |
| `jest-html-reporters`             | 296,588 | `^2.3.2`  | devDep  | bundled    |
| `@tremor/react`                   | 288,196 | `^2.13.3` | dep     | **blocks** |
| `@mantine/charts`                 | 256,596 | `>=3.2.1` | peerDep | on v3      |
| `@chakra-ui/charts`               | 88,523  | `>=3`     | peerDep | on v3      |
| `@openuidev/react-ui`             | 39,412  | `^2.15.4` | dep     | **blocks** |
| `@lobehub/charts`                 | 35,568  | `^2.15.4` | dep     | **blocks** |
| `@ui5/webcomponents-react-charts` | 20,262  | `2.15.4`  | dep     | **blocks** |
| `@subframe/core`                  | 16,783  | `^2.15.1` | dep     | **blocks** |
| `@vendure-io/ui`                  | 16,249  | `2.15.4`  | dep     | **blocks** |
| `@vendure/dashboard`              | 14,349  | `^2.15.4` | dep     | **blocks** |

Two things stand out. First, the large blockers are **actively maintained** — `@openuidev/react-ui`
shipped 3 days ago, `@lobehub/charts` 5 days, `@ui5/webcomponents-react-charts` (SAP) 7 days,
`@vendure/dashboard` 20 days. These are not dormant repos; a well-made PR would be read. Second,
several pin **exactly `2.15.4`** or `^2.15.4`, which is part of why that one version is 54% of all
downloads — it is not only application lockfiles, it is packages hard-pinning it.

The good news is that the two biggest chart wrappers already migrated: `@mantine/charts` (`>=3.2.1`,
published yesterday) and `@chakra-ui/charts` (`>=3`). Where a design-system team has actually looked
at v3, they have shipped it. That is evidence the upgrade is tractable when someone is paid to do it.

### The PR list, in order

1. **`@tremor/react`** — by far the largest, at 288k weekly. Caveat: last published 617 days ago, so
   check whether it is still maintained before investing; if it is dormant, its users are the ones to
   reach, not the package.
2. **`@openuidev/react-ui`, `@lobehub/charts`, `@ui5/webcomponents-react-charts`, `@subframe/core`,
   `@vendure/dashboard` + `@vendure-io/ui`** — all shipped within the last quarter, 16k–39k weekly
   each. This is the high-yield tier: active maintainers, meaningful reach, a version-range bump plus
   whatever bucket-B verification their charts need.
3. **Everything below ~5k weekly** — not worth individual PRs. Publish the codemod and let them come.

Send these as real PRs: run the target through `recharts-integ` first, include the codemod output,
and list explicitly what needs visual verification (bucket B). Do **not** mass-PR the 27,093
dependent repositories — at that volume it reads as spam regardless of intent.

### How to enumerate dependents, and why it is harder than it looks

**ecosyste.ms alone is not sufficient.** Its `dependent_packages` endpoint returned 1,091 names and
omitted `@tremor/react`, `@mantine/charts`, `@chakra-ui/charts`, `@saas-ui/charts` and
`recharts-to-png` — that is, most of the packages that actually matter. deps.dev counts 1,375 direct
dependents; GitHub's dependency graph lists more still. The omissions are not random: the list skews
toward small abandoned packages and under-represents popular maintained ones, which is exactly the
bias that will make a wrapper survey look like a graveyard when it is not.

Use a union of sources:

1. **ecosyste.ms** `dependent_packages` — free, no key, ~1,091 names.
2. **npm text search** (`registry.npmjs.org/-/v1/search?text=recharts&size=250`, several phrasings,
   paginated) — catches wrappers that describe themselves as built on recharts.
3. **A hand-curated list** of known ecosystem packages. Unglamorous, and it is what caught Tremor.
4. Optionally **GitHub's dependency graph** (`/network/dependents?dependent_type=PACKAGE`) — the most
   complete, but unsorted and ~46 pages to scrape.

Then verify every candidate against npm:

- **Fetch the packument** for the _current_ range and the true publish date of `dist-tags.latest`;
  ecosyste.ms's release data lags, sometimes by years.
- **Scan all four dependency fields** and **record which matched**. `devDependencies` means the
  package bundles chart code into its own output — it installs nothing downstream and blocks nobody,
  but it is not "no longer uses recharts" either. `jest-html-reporters`, the largest dependent of
  all, is exactly this case.
- **Test the range with real semver** (`semver.satisfies('3.10.1', range)`). Do not pattern-match:
  `^2.3.2` contains the substring `3.`, which silently marks blockers as safe.
- **Read `downloads_period`** if ranking on ecosyste.ms figures — they are `last-month`, and
  comparing them to npm's `last-week` inflates everything ~4×. Prefer npm's own endpoint, and expect
  throttling: concurrency ≤ 4 with backoff.

## How we will know it worked

Track weekly, from the free npm API described in `FEEDBACK-AND-TELEMETRY.md`:

- **v2 share of downloads** — the headline number; 60.3% today.
- **2.15.4 specifically** — 54.0% today. This single number is the clearest signal, because it is
  almost entirely lockfile pins rather than fresh installs.
- **`next specific` open issue count** — the proxy for bucket A.
- **Share of v3 downloads on the newest two minors** — measures whether upgraders keep upgrading.

Re-measure at 30, 90 and 180 days. If v2 share has not moved after the packaging fixes ship, the
blocker is bucket B and the answer is tooling, not documentation.

## Limits of this measurement

Stated so the numbers above are not over-read:

- **The candidate pool is a union, not a census.** 3,288 candidates were gathered and 1,233 verified
  as depending on recharts; deps.dev counts 1,375 direct dependents and GitHub's graph more still.
  Packages that neither ecosyste.ms lists nor npm text search surfaces are missing, and Tremor showed
  that the missing ones can be the largest.
- **829 of 1,233 returned download figures.** The rest failed against npm's throttled downloads API
  and are unranked.
- Dependency ranges were read from `dist-tags.latest` only. A package could have an unreleased fix on
  `main`, or ship v3 support on a `next` tag.
- Private registries and vendored copies are invisible here. A large enterprise design system on a
  private registry would not appear at all.
- **This section replaces two earlier and wrong versions of this analysis**, recorded because the
  failure modes are worth avoiding. The first scanned only `dependencies` and `peerDependencies`, so
  packages bundling recharts as a `devDependency` were misread as having dropped it, and it compared
  ecosyste.ms's `last-month` downloads to npm's `last-week`, inflating everything ~4×. The second
  fixed those but still enumerated from ecosyste.ms alone, which omits most of the significant
  wrappers — and so concluded there were only 2 live blockers worth ~12k downloads a month. The real
  figure is roughly 84 live blockers and ~156k weekly. The lesson is in the plan above: verify the
  enumeration before trusting anything ranked from it.
