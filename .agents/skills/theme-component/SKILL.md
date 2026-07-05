---
name: theme-component
description: Add complete theme support for one Recharts component. Invoke with the component name, for example `theme-component XAxis`.
---

# Add theme support to one component

## Context

Recharts is a popular charts library. Currently it allows configuring dozens of props across dozens of components. A new feature is in development where a developer will be able to use a new `RechartsThemeProvider` React component which sets visual styles for all charts inside the React tree.

As this feature is still under active development, not all Recharts components consume the theme. Your task is to implement theme support for one more component. This includes the implementation itself, plus tests. And, if appropriate, documentation too.

## Input and scope

The invocation must name exactly one component. Implement only that component's theme integration and the shared theme contract changes it requires. Do not expand the scope to related components merely because they have similar props.

If the component name does not resolve unambiguously to a public Recharts component, stop and ask for the intended source file. Do not guess.

The completed change must include:

1. Theme contract and runtime integration.
2. Focused unit coverage of the rendered result and precedence rules.
3. A focused Playwright visual-regression test and its three browser snapshots.

`src/cartesian/CartesianGrid.tsx` and `test/cartesian/CartesianGrid/CartesianGrid.theme.spec.tsx` are the current reference implementation. Use them to understand the established API, but adapt the design to the target instead of copying their tests or implementation mechanically.

## Before editing

Read `DEVELOPING.md`, `CONTRIBUTING.md`, and `test/README.md`. Then inspect all of:

- The target component and the code that renders its styled output.
- Its existing unit tests and closest visual-regression tests.
- Files in `src/theme` and `test/theme` folders.
- The `CartesianGrid` implementation and theme test.
- `test-vr/README.md` and `.agents/skills/vr-test/SKILL.md`.

Determine which public props actually control visible styling. Include visual attributes and style objects that reach rendered output. Exclude data, layout, identifiers, event handlers, callbacks, accessibility props, custom render functions/elements, and behavioral configuration.

Reuse an existing semantic theme section when the target shares its visual contract. Add a component-specific section only when the styles are genuinely distinct. Search `RechartsTheme` first; do not create duplicate keys such as separate X- and Y-axis style sections when an `axis` section is the intended shared contract.

## Implement the theme contract

1. The `RechartsTheme` type should already contain all relevant types. It is intentionally a bit generic - and the target component should aim to reuse shared properties instead of focusing narrowly. To give a more specific example, an XAxis tick labels should reuse font size and font weight from the `typography` section. If you can't find any relevant properties then explain the gap and exit early.
2. The built-in themes (`legacyTheme`, `lightTheme`, `darkTheme`) are already populated and likewise should have all properties available and ready to use. If you see a gap, explain and exit early.
3. Read the theme through `useRechartsTheme` at the component's final styling-resolution boundary. Preserve this order for every themed field:
   - explicit component prop;
   - provider theme value;
   - legacy/default behavior.

Do not merge theme values after a user prop in JSX, and do not allow a resolved default to hide an omitted prop before the theme is considered. When the component has nested style objects, merge them field-by-field so explicit user fields win while omitted fields can still come from the theme.

Keep custom renderers and component/element props intact. A theme supplies defaults for Recharts' own output; it must not mutate or replace user-provided custom output.

## Unit tests

Create or extend `test/<component-path>/<Component>.theme.spec.tsx`, using the target's real chart wrapper and `rechartsTestRender` when appropriate. Use deterministic data and existing test helpers. Query the actual DOM/SVG output, not implementation details. Use `assertNotNull` for required queried nodes; do not use type assertions.

Cover each distinct rendered style surface concisely:

- no provider: preserves the legacy/default rendered appearance;
- a custom provider: every supported themed field reaches the correct output;
- an explicit prop conflicting with the provider: the prop wins;
- if styles are objects or independently merged fields, an omitted prop field still receives the theme value.

Group related attributes in one test. Do not create a four-case test for every individual field, and do not test configuration that cannot affect the rendered target. Use visibly distinct values for the theme and conflicting prop values so precedence failures are unmistakable.

## Visual-regression test

Add a target-focused test under `test-vr/tests/theme/`, reusing and extending an existing shared themed fixture only when it already covers this component. Otherwise create:

- `test-vr/tests/theme/<Component>ThemeComponents.tsx` for reusable fixture components;
- `test-vr/tests/theme/<Component>Theme.spec-vr.tsx` for Playwright assertions.

The fixture must render the target in a real, minimal chart context with deterministic data and animations disabled. Include an unthemed rendering and a custom themed rendering that visibly exercises all newly themed surfaces. Import public API from `recharts` in fixtures.

Playwright component tests cannot render a React fixture component declared in the test file. Put such fixtures in the companion `.tsx` file and import them. Directly mounting JSX in a spec is fine only when no locally declared fixture component is needed.

Use `toHaveScreenshot()` for each rendering.

The screenshot generation is done via Docker setup. Your environment does not have docker available; instead, alert the user that they should run `npm run test-vr:update -- --grep <filename>` to update the screenshot on their end.

## Validate

Run the target unit test:

```sh
npm run test -- test/<component-path>/<Component>.theme.spec.tsx
```

## Completion checklist

- The target's visual props are available from an appropriately named, precise theme section.
- Existing output remains unchanged without a provider.
- Explicit component props win over themed values.
- Unit tests verify rendered behavior, not only types.
- A deterministic VR test demonstrates the target's themed appearance.
- User has been informed to run the appropriate `npm run test-vr:update` command
