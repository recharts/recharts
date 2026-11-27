# Fixing one suppressed lint target

This is the shared procedure for skills that burn down `eslint-suppressions.json` one **target** at a
time. A target is one ESLint rule in one file. The skills that use it are:

| Skill                | Rules                                                 |
| -------------------- | ----------------------------------------------------- |
| `fix-type-violation` | `any`, `as` and `!` (`@typescript-eslint/...`)        |
| `fix-perf-violation` | new objects, arrays, functions and JSX as React props |

Below, `<skill>` is the name of the skill you are running, for example `fix-perf-violation`. Every
command uses that skill's own scripts in `.agents/skills/<skill>/`. The skill's `SKILL.md` has the rules,
the recipes for steps 4 and 5, the give-up criteria and the PR titles.

Each run ends with exactly one pull request:

- **Success:** a PR that removes every violation of the rule from the file.
- **Partial success:** a PR that removes some of them and records the rest as skipped.
- **Failure:** a PR that changes no code and only records the target as skipped, so that the next run
  does not get stuck on it.

## Rules that apply to every skill

1. **One target per run.** Fix only the rule and file that `pick-target.mjs` printed. Do not pick a
   different target yourself, and do not run the picker again to get a second target in the same run.
2. **Do not move the problem.** Never add `// eslint-disable...`, `// @ts-expect-error`, `// @ts-ignore`
   or `// @ts-nocheck`. The skill's `SKILL.md` lists more patterns that are forbidden for its rules.
3. **Never edit `eslint-suppressions.json` by hand,** and never run `eslint --suppress-all` or
   `--suppress-rule`. The only allowed command that changes it is `npm run lint -- --prune-suppressions`.
4. **Do not change runtime behavior** that a user can observe, unless the skill's `SKILL.md` says otherwise.
5. **Do not break the public API.** See "Public API" below.
6. **Do not change tests to make them pass.** Never delete or weaken an assertion.
7. **Stop instead of guessing.** When the skill's give-up criteria are met, stop, revert, and record the
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
git ls-files --others --exclude-standard > "$(git rev-parse --git-dir)/<skill>-untracked-before.txt"
```

If `node_modules` does not exist, run `npm ci` in the repository root. Never run `npm ci` or
`npm install` inside `www`.

## Step 2: Pick the target

```sh
node .agents/skills/<skill>/pick-target.mjs
```

The user may ask you to narrow the choice. Pass the matching options:

- `--rule <short rule name>`, for example `--rule no-explicit-any` or `--rule jsx-no-new-function-as-prop`
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

The picker already leaves out targets that are in the skill's `skipped.json`, targets that have an open PR
or a PR that was closed without merging, and files in `omnidoc/` and `scripts/` (no tsconfig type checks
them, so a fix there cannot be verified). You do not need to check that yourself.

## Step 3: Create the branch

Use the branch name from the JSON exactly as printed. The picker relies on this name to find PRs.

```sh
git checkout -b <branch> origin/main
```

## Steps 4 and 5: Understand and fix the violations

Follow steps 4 and 5 in the skill's `SKILL.md`.

Change as little as possible: no renames, no reformatting of unrelated code, no "while I'm here" refactors.
Fixing one file may require changing other files. That is allowed, but each change in another file must be
needed for this target, and the rules apply to every file you touch.

## Public API

A type is **public API** if a Recharts user can see it. That includes:

- anything exported from `src/index.ts`, directly or by name;
- the props of any component exported from `src/index.ts` (for example `Props` in `src/cartesian/Area.tsx`);
- the parameters and return types of exported functions and hooks;
- the types those props and functions refer to.

To check whether a name is public, search for it:

```sh
grep -n "<Name>" src/index.ts
```

## Step 6: Verify

Run all of the following. Every command must pass before you open a success PR.

1. **Build.** This must be first because some of the commands test the generated sources.

   ```sh
   npm run build
   ```

2. **Prune the suppressions file.** This removes the counts you fixed:

   ```sh
   npm run lint -- --prune-suppressions
   ```

3. **Check the fix:**

   ```sh
   node .agents/skills/<skill>/check-fix.mjs --file <file> --rule <shortRule>
   ```

   It prints `status`:
   - `complete`: no violation of the rule is left in the file. Continue.
   - `partial`: some are left. Continue, then follow "Partial success" in step 7.
   - `none`: nothing was fixed. Follow "Failure" in step 7.
   - `invalid`: read `problems`. Fix each problem and run steps 6.1 and 6.2 again. If a problem says a
     different entry grew, your change created a new violation somewhere else: fix that properly or undo the
     change that caused it.

4. **Lint.** It must report 0 errors. Warnings are fine.

   ```sh
   npm run lint
   ```

5. **Type check.**

   ```sh
   npm run check-types
   ```

6. **Run unit tests.** They may take a minute or two to run; use a longer timeout.

   ```sh
   npm run test -- --reporter=minimal
   ```

7. **Review your diff** with `git diff origin/main`. For each changed line, ask:
   - Does it keep the same behavior for all inputs that can happen?
   - Does it add any of the forbidden patterns?
   - Is it needed for this target?

   Remove anything that fails one of these questions.

## Step 7: Decide the outcome

Use the give-up criteria in the skill's `SKILL.md`. When you give up on a violation, undo only the changes
for that violation, then keep going with the other violations in the file.

### Success

`check-fix.mjs` says `complete` and all of step 6 passed. Go to step 8.

### Partial success

`check-fix.mjs` says `partial`, all of step 6 passed, and you gave up on the remaining violations.
Record the rest as skipped:

```sh
node .agents/skills/<skill>/skip-target.mjs --file <file> --rule <shortRule> --reason "<reason>"
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
   git ls-files --others --exclude-standard | grep -vxFf "$(git rev-parse --git-dir)/<skill>-untracked-before.txt"
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
   node .agents/skills/<skill>/skip-target.mjs --file <file> --rule <shortRule> --reason "<reason>"
   ```

5. Go to step 8. The PR only changes `.agents/skills/<skill>/skipped.json`.

### Writing a good skip reason

The reason is for the next person (or agent) who looks at this target. It must say what blocks the fix,
concretely, in at least 20 characters. Mention line numbers or names. The skill's `SKILL.md` has examples.

- Bad: `Too hard.`
- Bad: `Type errors.`

## Step 8: Commit, push, and open the PR

Stage only the files you meant to change. Do not use `git add -A` or `git add .`.

```sh
git add <each changed file> eslint-suppressions.json .agents/skills/<skill>/skipped.json
git status --short
```

Use the commit message and PR title from the skill's `SKILL.md`.

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
