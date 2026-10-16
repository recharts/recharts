import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/*
 * Shared helpers for the fix-type-violation skill scripts.
 */

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
export const repositoryRoot = path.resolve(scriptDirectory, '../../..');
export const suppressionsFile = 'eslint-suppressions.json';
export const skipListFile = path.join(scriptDirectory, 'skipped.json');
export const branchPrefix = 'fix-type-violation/';

/**
 * The rules this skill fixes, in the order of preference when two targets have the same violation count.
 * Non-null assertions are usually the easiest to remove, `any` the hardest.
 */
export const rules = [
  '@typescript-eslint/no-non-null-assertion',
  '@typescript-eslint/consistent-type-assertions',
  '@typescript-eslint/no-explicit-any',
];

/**
 * @param {string} rule full or short rule name, for example `no-explicit-any`
 * @returns {string} full rule name, for example `@typescript-eslint/no-explicit-any`
 */
export function toFullRuleName(rule) {
  const full = rule.startsWith('@typescript-eslint/') ? rule : `@typescript-eslint/${rule}`;
  if (!rules.includes(full)) {
    throw new Error(`Unknown rule "${rule}". Expected one of: ${rules.join(', ')}`);
  }
  return full;
}

export function toShortRuleName(rule) {
  return rule.replace('@typescript-eslint/', '');
}

/**
 * @param {string} rule
 * @param {string} file path relative to the repository root
 * @returns {string} the branch name used for a pull request that fixes this rule in this file
 */
export function branchName(rule, file) {
  return `${branchPrefix}${toShortRuleName(rule)}/${file.replace(/[^A-Za-z0-9]+/g, '-')}`;
}

/**
 * @param {string | undefined} revision git revision to read from, or undefined to read the working tree
 * @returns {Record<string, Record<string, { count: number }>>}
 */
export function readSuppressions(revision) {
  if (revision == null) {
    return JSON.parse(readFileSync(path.join(repositoryRoot, suppressionsFile), 'utf8'));
  }
  return JSON.parse(
    execFileSync('git', ['show', `${revision}:${suppressionsFile}`], { cwd: repositoryRoot, encoding: 'utf8' }),
  );
}

/**
 * @returns {Array<{ file: string, rule: string, remaining: number, reason: string }>}
 */
export function readSkipList() {
  return JSON.parse(readFileSync(skipListFile, 'utf8'));
}

export function writeSkipList(entries) {
  const sorted = [...entries].sort((a, b) => a.file.localeCompare(b.file) || a.rule.localeCompare(b.rule));
  writeFileSync(skipListFile, `${JSON.stringify(sorted, null, 2)}\n`);
}

/**
 * Runs ESLint on one file while ignoring eslint-suppressions.json, so that every violation is reported.
 *
 * @param {string} file path relative to the repository root
 * @param {string} rule full rule name
 * @returns {Array<{ line: number, column: number, message: string, source: string }>}
 */
export function findViolations(file, rule) {
  const temporaryDirectory = mkdtempSync(path.join(os.tmpdir(), 'fix-type-violation-'));
  const emptySuppressions = path.join(temporaryDirectory, 'suppressions.json');
  writeFileSync(emptySuppressions, '{}');
  let output;
  try {
    output = execFileSync(
      path.join(repositoryRoot, 'node_modules', '.bin', 'eslint'),
      ['--format', 'json', '--suppressions-location', emptySuppressions, file],
      { cwd: repositoryRoot, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'pipe'] },
    );
  } catch (e) {
    // ESLint exits with 1 when it finds errors, and the JSON report is still on stdout.
    if (e.status !== 1 || !e.stdout) {
      throw e;
    }
    output = e.stdout;
  } finally {
    rmSync(temporaryDirectory, { recursive: true, force: true });
  }
  const sourceLines = readFileSync(path.join(repositoryRoot, file), 'utf8').split('\n');
  return JSON.parse(output)
    .flatMap(result => result.messages)
    .filter(message => message.ruleId === rule)
    .map(message => ({
      line: message.line,
      column: message.column,
      message: message.message,
      source: (sourceLines[message.line - 1] ?? '').trim(),
    }));
}
