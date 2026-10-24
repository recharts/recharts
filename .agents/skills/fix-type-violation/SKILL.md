---
name: fix-type-violation
description: Remove one class of type-safety violation (`any`, `as`, or `!`) from one file in Recharts and open a pull request. If the fix fails, record the target as skipped so the next run picks something else.
---

# Fix one type-safety violation target

This skill removes one class of type-safety violation from one file. Each run picks a **target**,
which is one ESLint rule in one file, and ends with exactly one pull request.

**Follow the procedure in `.agents/shared/suppression-targets/WORKFLOW.md`,** with `<skill>` set to
`fix-type-violation`. Read it first. This file only adds what is specific to type-safety rules: what the
rules forbid, steps 4 and 5, the give-up criteria, and the PR titles.

The three rules, and what they forbid:

| Rule                                            | Forbids                                  |
| ----------------------------------------------- | ---------------------------------------- |
| `@typescript-eslint/no-non-null-assertion`      | `value!` (the `!` non-null assertion)    |
| `@typescript-eslint/consistent-type-assertions` | `value as Type` (but `as const` is fine) |
| `@typescript-eslint/no-explicit-any`            | the `any` type, anywhere it is written   |

Read `.agents/skills/typescript/SKILL.md` once before you start. It explains why these patterns are
dangerous and what to use instead.

## Extra hard rules

In addition to the rules in `WORKFLOW.md`:

1. **Do not move the problem.** You must not replace a violation with any other way of turning off the
   type checker. All of these are forbidden in lines you add:
   - `as` (except `as const`), `!`, `any`, in any file
   - a type predicate (`value is Foo`) that does not really check what it claims (see "Type guards" below)
   - swapping one escape hatch for another, for example `as` → `!`, or `any` → `Function`/`Object`/`{}`
2. **Do not change runtime behavior.** This is a type refactor. If a fix needs a runtime check (for
   example `if (x == null) return;`), the check must keep the same behavior for every input that can
   actually happen. If you cannot convince yourself of that, give up on that violation.
3. **Tests:** only the type-only changes needed for this target are allowed.

## Step 4: Understand each violation

For each entry in `violations`:

1. Open `file` and read the whole function or component that contains the line, not just the line.
2. Find where the value comes from. If it is a function parameter, find the callers
   (search for the function name). If it is a type, find where the type is defined and used.
3. Answer these questions in your notes before you change anything:
   - What type does the code _assume_ the value has?
   - Can the value really be something else at runtime (for example `undefined`, `null`, an empty
     array, a different object shape)? How do you know?
   - Is the type exported from the file? If yes, is it public API (see "Public API" below)?

If you cannot answer these questions for a violation, that violation is a candidate for giving up.
It is fine to fix the others and give up on that one (partial success).

## Step 5: Fix the violations

Pick the matching recipe below. Prefer the simplest fix that keeps the behavior the same.

### Recipes for `!` (`no-non-null-assertion`)

The code says "trust me, this is not `null` or `undefined`". Make TypeScript _see_ that instead.

**Map lookups after `has` or `set`.** Use the value from `get` directly:

```ts
// Before
if (!map.has(key)) {
  map.set(key, []);
}
map.get(key)!.push(item);

// After
const list = map.get(key) ?? [];
list.push(item);
map.set(key, list);
```

**Array access with a known index.** The repository uses `noUncheckedIndexedAccess`, so `array[0]` is
`T | undefined`. Handle the `undefined` case in the same way the surrounding code would expect:

```ts
// Before
const first = points[0]!;
return first.x;

// After, when an empty array is possible and the function already returns undefined elsewhere
const first = points[0];
if (first == null) {
  return undefined;
}
return first.x;
```

Only add an early return if the function already has a matching "nothing to do" result (for example it
returns `null`, `undefined`, an empty array, or renders nothing). Do not invent new fallback values like
`0` or `''` unless the surrounding code clearly already uses that value for the empty case.

**Values checked earlier but in a different scope** (for example inside a callback): copy the value to a
`const` after the check, so that TypeScript keeps the narrowed type.

```ts
// Before
if (ref.current == null) return;
items.forEach(item => ref.current!.append(item));

// After
const element = ref.current;
if (element == null) return;
items.forEach(item => element.append(item));
```

**In tests** (files under `test/`): use `assertNotNull` from `test/helper/assertNotNull.ts`. It throws a
clear error if the value is missing, which is what a test should do:

```ts
import { assertNotNull } from '../helper/assertNotNull'; // fix the relative path

// Before
const bar = container.querySelector('.recharts-bar')!;

// After
const bar = container.querySelector('.recharts-bar');
assertNotNull(bar);
```

`expect(value).not.toBeNull()` does **not** narrow the type. Use `assertNotNull`.

### Recipes for `as` (`consistent-type-assertions`)

The code says "trust me, this is type X". Prove it with a runtime check, or make the types line up so that
no assertion is needed.

**Object literals.** Annotate the variable or use `satisfies`:

```ts
// Before
const style = { fill: 'red' } as React.CSSProperties;

// After
const style: React.CSSProperties = { fill: 'red' };
```

**DOM elements and events.** Use `instanceof`:

```ts
// Before
const target = event.target as SVGElement;
target.getBBox();

// After
const { target } = event;
if (target instanceof SVGGraphicsElement) {
  target.getBBox();
}
```

**`unknown` or wide values.** Narrow with `typeof`, `Array.isArray`, `in`, or a helper:

```ts
// Before
const n = value as number;

// After: use the existing helper from src/util/isWellBehavedNumber.ts
if (isWellBehavedNumber(value)) {
  // value is number here
}
```

Useful existing helpers:

- `isNotNil` and `isNullish` in `src/util/DataUtils.ts`, for example `array.filter(isNotNil)` turns
  `Array<T | undefined>` into `Array<T>`.
- `isWellBehavedNumber` and `isPositiveNumber` in `src/util/isWellBehavedNumber.ts`.

**Arrays after `.map` or `.filter`.** Use `.filter(isNotNil)` instead of `as T[]`.

**Mismatched function or component types.** Often the assertion exists because a type further up is too
loose or too strict. Look at the type definitions involved. Fixing the definition so that the assertion is
not needed is the best fix, as long as it does not touch public API.

**`as unknown as T`.** This is a double assertion that ignores all types. It usually means the types are
really incompatible. Fix it only if you find the real type mismatch; otherwise give up on it.

**Generic React components wrapped in `React.memo` or `forwardRef`** (for example
`React.memo(Component) as <T>(props: Props<T>) => ReactElement`). TypeScript cannot express this without an
assertion. Give up on these. Do not try to work around it.

### Recipes for `any` (`no-explicit-any`)

**Parameters and variables that hold "anything".** Use `unknown` and narrow before use:

```ts
// Before
function getLabel(value: any): string {
  return value.name;
}

// After
function getLabel(value: unknown): string {
  if (typeof value === 'object' && value !== null && 'name' in value && typeof value.name === 'string') {
    return value.name;
  }
  return '';
}
```

Check that the new fallback (here `''`) matches what the old code did for unexpected input. If the old
code would have thrown or returned `undefined`, keep that behavior. If that is not possible, give up.

**Values with a known shape.** Use the real type. Search the codebase for an existing type before you
create a new one (for example in `src/util/types.ts`).

**Records and dictionaries.** `Record<string, any>` → `Record<string, unknown>`, then narrow on read.

**Callbacks that accept any function.** `(...args: any[]) => any` → `(...args: never[]) => unknown`.
`(...args: unknown[]) => unknown` does not accept functions with typed parameters, so use `never[]`.

**Generics.** If a function passes values through without looking at them, make it generic:

```ts
// Before
function first(items: any[]): any {
  return items[0];
}

// After
function first<T>(items: ReadonlyArray<T>): T | undefined {
  return items[0];
}
```

**Generic defaults in public types** (for example `<DataPointType = any>` on a chart component): changing
these to `unknown` breaks user code. Give up on these. See "Public API".

**In tests:** use the real type of the value, or `unknown`. Mocks created with `vi.fn()` can be typed with
`vi.fn<(arg: Foo) => Bar>()`.

### Type guards

A type predicate `function isFoo(value: unknown): value is Foo` is only allowed if the function body really
checks every property of `Foo` that the calling code uses. TypeScript does not verify this. If you add or
change a type predicate, add unit tests for it that cover both `true` and `false` results. If the check
would need to be large or uncertain, give up instead.

## Public API

See "Public API" in `WORKFLOW.md` for what counts as public.

Rules for public API:

- Changing a type the user _receives_ (a return type, a callback argument) from `any` to a specific type is
  a **breaking change** if the user's code relied on `any`. Give up.
- Changing a type the user _passes in_ (a prop) to something narrower is a **breaking change**. Give up.
- Fixes that only change code _inside_ a function body (most `!` and `as` fixes) do not change the public
  API. These are fine.

To check whether a name is public, search for it:

```sh
grep -n "<Name>" src/index.ts
```

## Step 7: Give up criteria

Give up on a violation (not necessarily the whole target) when any of these is true:

- You tried three different approaches and type checks or tests still fail.
- The fix would change public API (see "Public API").
- The fix needs `as`, `any`, `!`, a `@ts-` comment or an `eslint-disable` comment somewhere else.
- The fix would change runtime behavior and you cannot show that the change is unreachable.
- The fix needs changes to more than 8 files other than the target file.
- The violation matches one of the "give up on these" cases in the recipes above.
- You cannot explain, in one or two sentences, why the new code is correct.

Examples of good skip reasons:

- Good: `Line 27: generic default DataPointType = any is public API of AreaChart; unknown would break users.`
- Good: `Lines 40-52: point.payload comes from user data with no runtime shape check; narrowing needs a validator for ChartData.`

## Step 8: Commit message and PR title

| Outcome         | Title                                             |
| --------------- | ------------------------------------------------- |
| Success         | `refactor(types): remove <what> from <file>`      |
| Partial success | `refactor(types): remove some <what> from <file>` |
| Failure         | `chore(types): skip <shortRule> in <file>`        |

`<what>` is `non-null assertions`, `type assertions`, or `any`.
