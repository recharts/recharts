import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { parseArgs } from 'node:util';
import { findViolations, readSuppressions, repositoryRoot, suppressionsFile, toFullRuleName } from './lib.mjs';

/*
 * Checks that the working tree fixes the target without cheating. It does not run type checks or tests.
 *
 * Options: --file <path> --rule <rule> [--base origin/main]
 *
 * It verifies that:
 * - the number of violations of the rule in the file went down (ESLint is run without suppressions),
 * - eslint-suppressions.json was pruned and matches the real number of violations,
 * - no other entry in eslint-suppressions.json grew or appeared,
 * - no added line contains `eslint-disable`, `@ts-expect-error`, `@ts-ignore` or `@ts-nocheck`.
 *
 * stdout: a JSON object { status, before, after, problems }, where status is one of
 *   "complete" - no violation of the rule is left in the file,
 *   "partial"  - some violations were fixed, some are left,
 *   "none"     - no violation was fixed, or the base revision had no violation to fix,
 *   "invalid"  - one of the checks above failed; see `problems`.
 *
 * Exit codes: 0 = complete or partial; 1 = none or invalid.
 */

/**
 * @param {import('./lib.mjs').SkillConfig} config
 */
export function checkFix(config) {
  const { values: options } = parseArgs({
    options: {
      file: { type: 'string' },
      rule: { type: 'string' },
      base: { type: 'string', default: 'origin/main' },
    },
  });

  if (options.file == null || options.rule == null) {
    console.error('Usage: check-fix.mjs --file <path> --rule <rule> [--base origin/main]');
    process.exit(1);
  }

  const rule = toFullRuleName(config, options.rule);
  const { file } = options;
  const problems = [];

  const baseSuppressions = readSuppressions(options.base);
  const currentSuppressions = readSuppressions(undefined);
  const before = baseSuppressions[file]?.[rule]?.count ?? 0;
  const after = findViolations(file, rule).length;
  const suppressedNow = currentSuppressions[file]?.[rule]?.count ?? 0;

  if (suppressedNow !== after) {
    problems.push(
      `${suppressionsFile} suppresses ${suppressedNow} violations of ${rule} in ${file}, but there are ${after}. ` +
        'Run `npm run lint -- --prune-suppressions`.',
    );
  }

  Object.entries(currentSuppressions).forEach(([otherFile, fileRules]) => {
    Object.entries(fileRules).forEach(([otherRule, { count }]) => {
      const baseCount = baseSuppressions[otherFile]?.[otherRule]?.count ?? 0;
      if (count > baseCount) {
        problems.push(
          `${suppressionsFile}: ${otherRule} in ${otherFile} grew from ${baseCount} to ${count}. ` +
            'Fix the new violation instead of suppressing it.',
        );
      }
    });
  });

  const forbiddenPattern = /eslint-disable|@ts-expect-error|@ts-ignore|@ts-nocheck/;
  const ignoredPaths = [suppressionsFile, `.agents/skills/${config.name}/`, '.agents/shared/'];
  const isIgnored = changedPath => ignoredPaths.some(ignored => changedPath.startsWith(ignored));

  const git = args => execFileSync('git', args, { cwd: repositoryRoot, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });

  let currentPath = '';
  git(['diff', '--unified=0', '--no-color', options.base, '--'])
    .split('\n')
    .forEach(line => {
      if (line.startsWith('+++ ')) {
        currentPath = line.replace(/^\+\+\+ (b\/)?/, '');
      } else if (line.startsWith('+') && !isIgnored(currentPath) && forbiddenPattern.test(line)) {
        problems.push(`${currentPath}: added a forbidden comment: ${line.slice(1).trim()}`);
      }
    });

  git(['ls-files', '--others', '--exclude-standard'])
    .split('\n')
    .filter(untracked => untracked !== '' && !isIgnored(untracked))
    .forEach(untracked => {
      readFileSync(path.join(repositoryRoot, untracked), 'utf8')
        .split('\n')
        .forEach(line => {
          if (forbiddenPattern.test(line)) {
            problems.push(`${untracked} (new file): forbidden comment: ${line.trim()}`);
          }
        });
    });

  let status;
  if (problems.length > 0) {
    status = 'invalid';
  } else if (before === 0) {
    // Nothing was suppressed on the base revision, so there was nothing to fix.
    status = 'none';
  } else if (after === 0) {
    status = 'complete';
  } else if (after < before) {
    status = 'partial';
  } else {
    status = 'none';
  }

  console.log(JSON.stringify({ status, file, rule, before, after, problems }, null, 2));
  process.exit(status === 'complete' || status === 'partial' ? 0 : 1);
}
