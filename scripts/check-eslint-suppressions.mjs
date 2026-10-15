/**
 * Fails when `eslint-suppressions.json` suppresses more violations of any rule than the base revision does.
 *
 * ESLint itself already fails when a file has more violations than its suppressed count,
 * and when a suppression is no longer needed. What it cannot catch is someone re-running
 * `eslint --suppress-all` (or `--suppress-rule`) to bake new violations into the suppressions file.
 * This script closes that gap, so the number of suppressions can only go down.
 *
 * Totals are compared per rule, not per file, so that moving code from one file to another stays possible.
 *
 * Usage: node scripts/check-eslint-suppressions.mjs [base-revision]
 * The base revision defaults to `origin/main`.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';

const suppressionsFile = 'eslint-suppressions.json';
const baseRevision = process.argv[2] ?? 'origin/main';

/**
 * @param {Record<string, Record<string, { count: number }>>} suppressions
 * @returns {Map<string, number>} total suppressed count per rule
 */
function totalsPerRule(suppressions) {
  const totals = new Map();
  Object.values(suppressions).forEach(rules => {
    Object.entries(rules).forEach(([rule, { count }]) => {
      totals.set(rule, (totals.get(rule) ?? 0) + count);
    });
  });
  return totals;
}

function readBaseSuppressions() {
  // Throws when the base revision itself does not exist, so that a broken CI setup does not silently pass.
  execFileSync('git', ['rev-parse', '--verify', '--quiet', `${baseRevision}^{commit}`], { stdio: 'ignore' });
  try {
    return JSON.parse(
      execFileSync('git', ['show', `${baseRevision}:${suppressionsFile}`], {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'pipe'],
      }),
    );
  } catch (e) {
    console.log(`Could not read ${suppressionsFile} at ${baseRevision}, skipping the check.`);
    console.log(String(e.stderr ?? e.message).trim());
    return null;
  }
}

const base = readBaseSuppressions();
if (base == null) {
  process.exit(0);
}

const baseTotals = totalsPerRule(base);
const currentTotals = totalsPerRule(JSON.parse(fs.readFileSync(suppressionsFile, 'utf8')));

const allRules = [...new Set([...baseTotals.keys(), ...currentTotals.keys()])].sort();
let failed = false;
allRules.forEach(rule => {
  const before = baseTotals.get(rule) ?? 0;
  const after = currentTotals.get(rule) ?? 0;
  const status = after > before ? 'INCREASED' : 'ok';
  if (after > before) {
    failed = true;
  }
  console.log(`${status.padEnd(9)} ${rule}: ${before} -> ${after}`);
});

if (failed) {
  console.error(
    `\n${suppressionsFile} suppresses more violations than ${baseRevision}.` +
      '\nPlease fix the new lint errors instead of suppressing them.' +
      ' See .agents/skills/typescript/SKILL.md for alternatives to `any`, `as`, and `!`.',
  );
  process.exit(1);
}
