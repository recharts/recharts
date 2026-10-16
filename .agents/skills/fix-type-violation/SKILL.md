---
name: fix-type-violation
description: Remove one class of type-safety violation (`any`, `as`, or `!`) from one file in Recharts and open a pull request. If the fix fails, record the target as skipped so the next run picks something else.
---

# Fix one type-safety violation target

This skill removes one class of type-safety violation from one file. Each run picks a **target**,
which is one ESLint rule in one file, and ends with exactly one pull request:

- **Success:** a PR that removes every violation of that rule from that file.
- **Partial success:** a PR that removes some of them and records the rest as skipped.
- **Failure:** a PR that changes no code and only records the target as skipped, so that the next run
  does not get stuck on it.

The three rules, and what they forbid:

| Rule                                            | Forbids                                  |
| ----------------------------------------------- | ---------------------------------------- |
| `@typescript-eslint/no-non-null-assertion`      | `value!` (the `!` non-null assertion)    |
| `@typescript-eslint/consistent-type-assertions` | `value as Type` (but `as const` is fine) |
| `@typescript-eslint/no-explicit-any`            | the `any` type, anywhere it is written   |

Existing violations are listed in `eslint-suppressions.json` at the repository root. That file
is a ratchet: counts may only go down. Read `.agents/skills/typescript/SKILL.md` once before you
start. It explains why these patterns are dangerous and what to use instead.

## Hard rules

Breaking any of these makes the run a failure, even if lint passes.

1. **One target per run.** Fix only the rule and file that `pick-target.mjs` printed. Do not pick a
   different target yourself, and do not run the picker again to get a second target in the same run.
2. **Do not move the problem.** You must not replace a violation with any other way of turning off the
   type checker. All of these are forbidden in lines you add:
   - `// eslint-disable...` comments
   - `// @ts-expect-error`, `// @ts-ignore`, `// @ts-nocheck`
   - `as` (except `as const`), `!`, `any`, in any file
   - a type predicate (`value is Foo`) that does not really check what it claims (see "Type guards" below)
   - swapping one escape hatch for another, for example `as` → `!`, or `any` → `Function`/`Object`/`{}`
3. **Never edit `eslint-suppressions.json` by hand,** and never run `eslint --suppress-all` or
   `--suppress-rule`. The only allowed command that changes it is `npm run lint -- --prune-suppressions`.
4. **Do not change runtime behavior.** This is a type refactor. If a fix needs a runtime check (for
   example `if (x == null) return;`), the check must keep the same behavior for every input that can
   actually happen. If you cannot convince yourself of that, give up on that violation.
5. **Do not break the public API.** Do not change the type of anything a Recharts user can import or pass
   as a prop in a way that could make their code fail to compile. See "Public API" below.
6. **Do not change tests to make them pass,** other than the type-only changes needed for this target.
   Never delete or weaken an assertion.
7. **Stop instead of guessing.** When the "Give up" criteria below are met, stop, revert, and record the
   skip. A skip is a good outcome. A wrong fix is a bad outcome.

## Step 1: Start from a clean, current `main`

```sh
git status --short
git fetch origin main
git checkout --detach origin/main
```

If `git status --short` lists modified or staged files (any line that does not start with `??`), stop and
ask the user what to do. Do not stash, reset, or delete them. Untracked files (lines starting with `??`)
are fine; leave them alone and never commit them.

Save the list of untracked files that exist before you start, so that the failure path in step 7 can tell
your new files apart from the user's files. The list is stored inside the `.git` folder, so it does not show
up as a change:

```sh
git ls-files --others --exclude-standard > "$(git rev-parse --git-dir)/fix-type-violation-untracked-before.txt"
```

If `node_modules` does not exist, run `npm ci` in the repository root. Never run `npm ci` or
`npm install` inside `www`.

## Step 2: Pick the target

```sh
node .agents/skills/fix-type-violation/pick-target.mjs
```

The user may ask you to narrow the choice. Pass the matching options:

- `--rule no-explicit-any` (or `consistent-type-assertions`, `no-non-null-assertion`)
- `--path src/` to only consider files whose path starts with `src/`

Exit codes:

- `0`: it printed a JSON object. Continue.
- `1`: there is nothing left to fix. Report that to the user and stop.
- `2`: it could not ask GitHub about existing PRs. Run `gh auth status` and report the problem to the user.
  Do not use `--offline` unless the user tells you to, because without GitHub you may pick a target that
  someone else is already working on.

Example output:

```json
{
  "file": "src/animation/easing.ts",
  "rule": "@typescript-eslint/no-non-null-assertion",
  "shortRule": "no-non-null-assertion",
  "count": 4,
  "branch": "fix-type-violation/no-non-null-assertion/src-animation-easing-ts",
  "violations": [{ "line": 12, "column": 5, "message": "Forbidden non-null assertion.", "source": "const x = y!;" }],
  "remainingTargets": 255
}
```

Write down `file`, `rule`, `shortRule`, `count`, and `branch`. You need them in later steps.
`violations` lists every place you have to fix.

The picker already leaves out targets that are in `skipped.json`, targets that have an open PR or a PR
that was closed without merging, and files in `omnidoc/` and `scripts/` (no tsconfig type checks them, so a
fix there cannot be verified). You do not need to check that yourself.

## Step 3: Create the branch

Use the branch name from the JSON exactly as printed. The picker relies on this name to find PRs.

```sh
git checkout -b <branch> origin/main
```

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

Pick the matching recipe below. Prefer the simplest fix that keeps the behavior the same. Change as
little as possible: no renames, no reformatting of unrelated code, no "while I'm here" refactors.

Fixing one file may require changing types in other files. That is allowed, but each change in another
file must be needed for this target, and the hard rules apply to every file you touch.

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

A type is **public API** if a Recharts user can see it. That includes:

- anything exported from `src/index.ts`, directly or by name;
- the props of any component exported from `src/index.ts` (for example `Props` in `src/cartesian/Area.tsx`);
- the parameters and return types of exported functions and hooks;
- the types those props and functions refer to.

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

## Step 6: Verify

Run all of the following. Every command must pass before you open a success PR.

1. **Build** This must be first because some of the commands test the generated sources.

  ```sh
  npm run build
  ```

2. **Prune the suppressions file.** This removes the counts you fixed:

   ```sh
   npm run lint -- --prune-suppressions
   ```

3. **Check the fix:**

   ```sh
   node .agents/skills/fix-type-violation/check-fix.mjs --file <file> --rule <shortRule>
   ```

   It prints `status`:
   - `complete`: no violation of the rule is left in the file. Continue.
   - `partial`: some are left. Continue, then follow "Partial success" in step 7.
   - `none`: nothing was fixed. Follow "Failure" in step 7.
   - `invalid`: read `problems`. Fix each problem and run steps 6.1 and 6.2 again. If a problem says a
     different entry grew, your change created a new violation somewhere else: fix that properly or undo the
     change that caused it.

4. **Lint**

   ```sh
   npm run lint
   ```

   It must report 0 errors. Warnings are fine.

5. **Type check.**

  ```sh
  npm run check-types
  ```

5. **Run unit tests.**

   ```sh
   npm run test -- --reporter=minimal
   ```

Tests may take a minute or two to run; use longer timeout.

6. **Review your diff** with `git diff origin/main`. For each changed line, ask:
   - Does it keep the same runtime behavior for all inputs that can happen?
   - Does it add any of the forbidden patterns from "Hard rules"?
   - Is it needed for this target?

   Remove anything that fails one of these questions.

## Step 7: Decide the outcome

### Give up criteria

Give up on a violation (not necessarily the whole target) when any of these is true:

- You tried three different approaches and type checks or tests still fail.
- The fix would change public API (see "Public API").
- The fix needs `as`, `any`, `!`, a `@ts-` comment or an `eslint-disable` comment somewhere else.
- The fix would change runtime behavior and you cannot show that the change is unreachable.
- The fix needs changes to more than 8 files other than the target file.
- The violation matches one of the "give up on these" cases in the recipes above.
- You cannot explain, in one or two sentences, why the new code is correct.

When you give up on a violation, undo only the changes for that violation, then keep going with the other
violations in the file.

### Success

`check-fix.mjs` says `complete` and all of step 6 passed. Go to step 8.

### Partial success

`check-fix.mjs` says `partial`, all of step 6 passed, and you gave up on the remaining violations.
Record the rest as skipped:

```sh
node .agents/skills/fix-type-violation/skip-target.mjs --file <file> --rule <shortRule> --reason "<reason>"
```

Go to step 8.

### Failure

You could not fix any violation, or `check-fix.mjs` says `none` or `invalid` and you cannot fix it.

1. Revert all changes to tracked files:

   ```sh
   git reset --quiet
   git checkout origin/main -- .
   ```

2. List the untracked files that you created in this run. The command prints every untracked file that is
   not in the list you saved in step 1:

   ```sh
   git ls-files --others --exclude-standard | grep -vxFf "$(git rev-parse --git-dir)/fix-type-violation-untracked-before.txt"
   ```

   Delete each printed file with `rm <path>`, one by one. Never use `git clean`: it would also delete files
   the user had before you started. If the command prints nothing, there is nothing to delete.

3. Check the result:

   ```sh
   git status --short
   ```

   It must show no modified files. Untracked files that existed before you started (lines starting with
   `??`) are fine.

4. Record the skip:

   ```sh
   node .agents/skills/fix-type-violation/skip-target.mjs --file <file> --rule <shortRule> --reason "<reason>"
   ```

5. Go to step 8. The PR only changes `.agents/skills/fix-type-violation/skipped.json`.

### Writing a good skip reason

The reason is for the next person (or agent) who looks at this target. It must say what blocks the fix,
concretely, in at least 20 characters. Mention line numbers or names.

- Good: `Line 27: generic default DataPointType = any is public API of AreaChart; unknown would break users.`
- Good: `Lines 40-52: point.payload comes from user data with no runtime shape check; narrowing needs a validator for ChartData.`
- Bad: `Too hard.`
- Bad: `Type errors.`

## Step 8: Commit, push, and open the PR

Stage only the files you meant to change. Do not use `git add -A` or `git add .`.

```sh
git add <each changed file> eslint-suppressions.json .agents/skills/fix-type-violation/skipped.json
git status --short
```

Commit message and PR title (pick the one that matches the outcome):

| Outcome         | Title                                             |
| --------------- | ------------------------------------------------- |
| Success         | `refactor(types): remove <what> from <file>`      |
| Partial success | `refactor(types): remove some <what> from <file>` |
| Failure         | `chore(types): skip <shortRule> in <file>`        |

`<what>` is `non-null assertions`, `type assertions`, or `any`.

Push. The pre-push hook runs the build, tests, type checks and lint, and can take about 5 minutes. Allow up
to 10 minutes. If the hook fails, read the error, fix it, and push again. Do not use `--no-verify`.

```sh
git push -u origin <branch>
```

Open the PR against `recharts/recharts`:

```sh
gh pr create --repo recharts/recharts --base main --head <branch> --title "<title>" --body "<body>"
```

The body must contain:

```markdown
## Description

Target: `<shortRule>` in `<file>` (<count> violations on main).
Result: <fixed N of count> | <no code changes, target recorded as skipped>

For each fixed violation, one line: the line number, what it was, what it is now, and why the new code is
correct.

For each violation that is left, the reason (the same text as in skipped.json).

Other files changed, and why each was needed.

## How has this been tested?

The exact commands from step 6 that you ran, and that they passed.
```

## Step 9: Report

Tell the user, in a few sentences:

- the target (rule and file),
- the outcome (success, partial, or failure) and how many violations were fixed,
- the PR link,
- anything you were unsure about, so a reviewer can look at it first.

Then stop. Do not start another target in the same run.
