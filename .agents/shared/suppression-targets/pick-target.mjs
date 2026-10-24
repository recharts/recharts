import { execFileSync } from 'node:child_process';
import { parseArgs } from 'node:util';
import {
  branchName,
  branchPrefix,
  findViolations,
  readSkipList,
  readSuppressions,
  repositoryRoot,
  toFullRuleName,
  toShortRuleName,
} from './lib.mjs';

/*
 * Selects the next violation to fix: one rule in one file, taken from eslint-suppressions.json.
 * Prints a JSON object describing it, so the agent does not have to rediscover the context.
 *
 * Targets are skipped when:
 * - the file is in a folder that no tsconfig type checks (see `uncheckedFolders` in the skill config),
 *   because a fix there cannot be verified, or
 * - they are listed in the skill's skipped.json (an earlier run failed to fix them), or
 * - a pull request with the target's branch name exists and is open (someone is working on it),
 *   or is closed without merging (a maintainer rejected it).
 *
 * Among the remaining targets it picks the one with the fewest violations, then by rule
 * (in the order of `rules` in the skill config), then by file path.
 *
 * Options:
 *   --rule <name>    only consider this rule, for example `no-explicit-any`
 *   --path <prefix>  only consider files whose path starts with this prefix, for example `src/`
 *   --offline        do not ask GitHub for existing pull requests
 *
 * stdout (exit 0): a JSON object, for example
 *   {
 *     "file": "src/animation/easing.ts",
 *     "rule": "@typescript-eslint/no-non-null-assertion",
 *     "shortRule": "no-non-null-assertion",
 *     "count": 4,
 *     "branch": "fix-type-violation/no-non-null-assertion/src-animation-easing-ts",
 *     "violations": [{ "line": 12, "column": 5, "message": "...", "source": "const x = y!;" }],
 *     "remainingTargets": 300
 *   }
 *
 * Exit codes: 0 = printed the JSON object; 1 = no target remains; 2 = could not list pull requests on GitHub.
 */

/**
 * @param {import('./lib.mjs').SkillConfig} config
 * @param {boolean} offline
 * @returns {Set<string>} branch names of pull requests that block a target
 */
function findBlockingBranches(config, offline) {
  if (offline) {
    return new Set();
  }
  let output;
  try {
    output = execFileSync(
      'gh',
      [
        'pr',
        'list',
        '--repo',
        'recharts/recharts',
        '--state',
        'all',
        '--search',
        `head:${branchPrefix(config)}`,
        '--json',
        'headRefName,state',
        '--limit',
        '1000',
      ],
      { cwd: repositoryRoot, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] },
    );
  } catch (e) {
    console.error('Could not list pull requests with `gh`. Fix `gh auth status`, or pass --offline.');
    console.error(String(e.stderr ?? e.message).trim());
    process.exit(2);
  }
  return new Set(
    JSON.parse(output)
      .filter(pr => pr.state === 'OPEN' || pr.state === 'CLOSED')
      .map(pr => pr.headRefName),
  );
}

/**
 * @param {import('./lib.mjs').SkillConfig} config
 */
export function pickTarget(config) {
  const { values: options } = parseArgs({
    options: {
      rule: { type: 'string' },
      path: { type: 'string' },
      offline: { type: 'boolean', default: false },
    },
  });

  const onlyRule = options.rule == null ? undefined : toFullRuleName(config, options.rule);
  const skipped = new Set(readSkipList(config).map(entry => `${entry.file}\n${entry.rule}`));
  const blockingBranches = findBlockingBranches(config, options.offline);

  const candidates = Object.entries(readSuppressions(undefined))
    .flatMap(([file, fileRules]) =>
      Object.entries(fileRules)
        .filter(([rule]) => config.rules.includes(rule))
        .map(([rule, { count }]) => ({ file, rule, count })),
    )
    .filter(target => !config.uncheckedFolders.some(folder => target.file.startsWith(folder)))
    .filter(target => onlyRule == null || target.rule === onlyRule)
    .filter(target => options.path == null || target.file.startsWith(options.path))
    .filter(target => !skipped.has(`${target.file}\n${target.rule}`))
    .filter(target => !blockingBranches.has(branchName(config, target.rule, target.file)))
    .sort(
      (a, b) =>
        a.count - b.count ||
        config.rules.indexOf(a.rule) - config.rules.indexOf(b.rule) ||
        a.file.localeCompare(b.file),
    );

  if (candidates.length === 0) {
    console.error(`No ${config.description} violation remains to fix with the given filters.`);
    process.exit(1);
  }

  const target = candidates[0];
  const violations = findViolations(target.file, target.rule);

  console.log(
    JSON.stringify(
      {
        file: target.file,
        rule: target.rule,
        shortRule: toShortRuleName(target.rule),
        count: target.count,
        branch: branchName(config, target.rule, target.file),
        violations,
        remainingTargets: candidates.length,
      },
      null,
      2,
    ),
  );
}
