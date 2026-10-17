---
name: fix-perf-violation
description: Remove one class of react-perf violation (a new object, array, function or JSX element passed as a React prop) from one file in Recharts and open a pull request. If the fix fails, record the target as skipped so the next run picks something else.
---

# Fix one react-perf violation target

This skill removes one class of react-perf violation from one file. Each run picks a **target**,
which is one ESLint rule in one file, and ends with exactly one pull request.

**Follow the procedure in `.agents/shared/suppression-targets/WORKFLOW.md`,** with `<skill>` set to
`fix-perf-violation`. Read it first. This file only adds what is specific to react-perf rules: what the
rules forbid, steps 4 and 5, the give-up criteria, and the PR titles.

The four rules come from `eslint-plugin-react-perf-x`. Each one reports a prop value that gets a new
reference on every render, when it is passed to a React component (native elements like `<div>` and
`<path>` are exempt, see `nativeAllowList` in `eslint.config.mjs`):

| Rule                                     | Forbids, as a prop value                            |
| ---------------------------------------- | --------------------------------------------------- |
| `react-perf/jsx-no-new-object-as-prop`   | `{ ... }`, including spreads like `{ ...props, y }` |
| `react-perf/jsx-no-new-array-as-prop`    | `[ ... ]`, including fallbacks like `value ?? []`   |
| `react-perf/jsx-no-new-function-as-prop` | `() => ...`, `function () {}`, and `fn.bind(...)`   |
| `react-perf/jsx-no-jsx-as-prop`          | `<Element />`, for example `shape={<Custom />}`     |

The rules also follow local variables: `const style = { ... }; <Foo style={style} />` is reported at the
`const` line, because `style` is still created in the same render.

## Why it matters in Recharts

A new reference on every render defeats `React.memo`, makes `useMemo` and `useEffect` dependencies change
on every render, and makes Redux selectors recompute. Many Recharts components dispatch their props to the
Redux store in an effect (for example `SetTooltipEntrySettings`, `SetLegendPayload`), so a new object can
mean a store update, and another render of every chart part, on every render.

Fixes in `src/` improve the library. Fixes in tests, stories and website examples matter less for speed,
but website examples are copied by users, so there they also teach the right pattern.

## Extra hard rules

In addition to the rules in `WORKFLOW.md`:

1. **Do not move the problem.** All of these are forbidden in lines you add:
   - another value that is new on every render under a different name, for example moving
     `{ a: 1 }` into a helper function that is called during render and returns a new object;
   - `useMemo` or `useCallback` with a dependency that is itself new on every render, because then the
     memo never hits (the rule cannot see this, so check it yourself);
   - a missing or wrong dependency in `useMemo` or `useCallback`. `react-hooks/exhaustive-deps` checks
     this; never silence it;
   - `as`, `!`, `any`: the type-safety rules still apply to every line you write.
2. **Keep the rules of hooks.** Never call a hook conditionally, in a loop, in a callback, or after an
   early `return`. Move the hook above the early return, or extract a component (see recipes).
3. **Same output.** The rendered DOM, the props a custom component receives, and the order and content of
   event callbacks must stay the same. Only the identity of the values may change.
4. **Do not change public API.** Do not change prop types of exported components to make a fix easier.

## Step 4: Understand each violation

For each entry in `violations`:

1. Open `file` and read the whole component that contains the line, not just the line.
2. Find what the value depends on: nothing (a constant), props, state, context, values from a hook, or
   the item of a `.map()` loop.
3. Find what receives the value. Open that component and check what it does with the prop: does it pass it
   to `React.memo`, `useMemo`, `useEffect`, a selector, or dispatch it to the store? This tells you whether
   the fix also changes how often something runs (it should only ever run less often, never more).
4. If the file is a test or a story, read the test name and assertions. Some tests create new references
   on purpose (for example `*.rerenderStability.spec.tsx`, or tests that check that Recharts copes with
   new props on rerender). Hoisting those values would make the test pass for the wrong reason.

## Step 5: Fix the violations

Pick the first recipe that fits. Prefer the simplest one.

### The value is a constant: hoist it to module scope

If the value does not depend on anything from render, move it out of the component. This is the best fix,
and the usual one in tests, stories and website examples.

```tsx
// Before
function Example() {
  return <Bar radius={[10, 10, 0, 0]} label={<CustomLabel />} />;
}

// After
const radius: [number, number, number, number] = [10, 10, 0, 0];
const customLabel = <CustomLabel />;

function Example() {
  return <Bar radius={radius} label={customLabel} />;
}
```

Give the constant a name that says what it is. Add a type annotation when TypeScript would otherwise infer
a wider type than the prop accepts (like `number[]` instead of a tuple). Do not use `as const` to get a
readonly tuple if the prop type is mutable; annotate instead.

For empty fallbacks, hoist an empty constant:

```tsx
// Before
<SetPolarLegendPayload legendPayload={legendPayload ?? []} />;

// After, at module scope
const noLegendPayload: ReadonlyArray<LegendPayload> = [];
// ...
<SetPolarLegendPayload legendPayload={legendPayload ?? noLegendPayload} />;
```

If the prop type is a mutable array, the constant must use that type, and the component must not mutate
it. Check that before you share one array between renders.

A function that does not use anything from the component can be hoisted the same way:

```tsx
// Before
<XAxis tickFormatter={value => `${value}%`} />;

// After
const formatPercent = (value: number) => `${value}%`;
// ...
<XAxis tickFormatter={formatPercent} />;
```

### The value depends on props or state: `useMemo` and `useCallback`

In a function component, memoize with the exact values the expression reads:

```tsx
// Before
const tooltipEntrySettings: TooltipPayloadConfiguration = {
  dataDefinedOnItem: data,
  positions: undefined,
  settings: { dataKey, name, fill, stroke, hide },
};
return <SetTooltipEntrySettings tooltipEntrySettings={tooltipEntrySettings} />;

// After
const tooltipEntrySettings: TooltipPayloadConfiguration = useMemo(
  () => ({
    dataDefinedOnItem: data,
    positions: undefined,
    settings: { dataKey, name, fill, stroke, hide },
  }),
  [data, dataKey, name, fill, stroke, hide],
);
```

Depend on the primitive values you read (`props.fill`), not on the whole `props` object, which is new on
every render. If the expression needs `...props`, the memo cannot help; see "Give up" below.

Event handlers use `useCallback`:

```tsx
// Before
<Layer onClick={() => onClick(entry, index)} />;

// After
const handleClick = useCallback(() => onClick(entry, index), [onClick, entry, index]);
<Layer onClick={handleClick} />;
```

Remember the rules of hooks: put the hook before any early `return`.

### The value is created inside `.map()`: extract a component

Hooks cannot run inside a loop. Move the body of the loop into a small component that receives the item
and its index as props, and memoize there:

```tsx
// Before
{
  nodes.map((node, i) => <Shape key={node.id} onClick={() => handleClick(node, i)} />);
}

// After
function NodeShape({ node, index, handleClick }: NodeShapeProps) {
  const onClick = useCallback(() => handleClick(node, index), [handleClick, node, index]);
  return <Shape onClick={onClick} />;
}
// ...
{
  nodes.map((node, i) => <NodeShape key={node.id} node={node} index={i} handleClick={handleClick} />);
}
```

Keep the new component in the same file and do not export it, unless the file already exports its
internal parts for tests. Check that `handleClick` itself is stable (hoisted, `useCallback`, or a prop),
otherwise the memo never hits.

### Class components

Class components cannot use hooks.

- Replace `this.method.bind(this, a)` and inline arrow functions with a class field arrow function
  (`handleClick = () => { ... }`) when the handler does not need loop variables.
- When the handler needs loop variables, extract a function component for the loop body (see above).
- Do not convert the whole class to a function component in this skill. That is a larger refactor; give up
  on the violation instead and say so in the skip reason.

### Tests, stories and website examples

- Hoist constant values to module scope (or to the `describe` block if the value is only used there).
- In tests, never change what the test checks. If the test needs a new value on each render (see step 4),
  give up on that violation.
- In website examples (`www/src/docs/exampleComponents`), keep the example easy to read: hoisting a
  constant is fine; adding `useMemo` or `useCallback` to an example is fine only when the value really
  depends on state. Do not add explicit colors.

## Step 7: Give up criteria

Give up on a violation (not necessarily the whole target) when any of these is true:

- The value depends on something that is new on every render and that you cannot stabilize in this file,
  for example `{ ...props, y }` where `props` is the whole props object.
- The fix needs hooks in a class component, or converting a class component to a function component.
- The fix needs changes to more than 3 files other than the target file.
- The test creates a new value on purpose (see step 4).
- The fix would change the rendered output, the props passed to a user's custom component, or the
  arguments of an event callback.
- You tried three different approaches and type checks or tests still fail.
- You cannot explain, in one or two sentences, why the new code renders the same output and why the
  memoized value only changes when its inputs change.

Examples of good skip reasons:

- Good: `Line 1048: otherProps spreads this.props of the Brush class; needs Brush converted to a function component.`
- Good: `Line 123: rerenderStability test passes a new fills array on purpose to check that Bar keeps its cells.`

## Step 8: Commit message and PR title

| Outcome         | Title                                         |
| --------------- | --------------------------------------------- |
| Success         | `perf: stabilize <what> props in <file>`      |
| Partial success | `perf: stabilize some <what> props in <file>` |
| Failure         | `chore(perf): skip <shortRule> in <file>`     |

`<what>` is `object`, `array`, `function`, or `JSX`. For files outside `src/`, use `refactor` instead of
`perf` in the success titles (for example `refactor: stabilize array props in <file>`), because the change
does not affect the library.
