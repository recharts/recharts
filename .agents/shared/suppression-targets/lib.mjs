import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/*
 * Shared helpers for skills that burn down `eslint-suppressions.json` one target at a time,
 * where a target is one ESLint rule in one file. See `.agents/skills/fix-type-violation`
 * and `.agents/skills/fix-perf-violation`.
 *
 * Each skill describes itself with a config object:
 *
 * @typedef {object} SkillConfig
 * @property {string} name skill name, for example `fix-type-violation`; also the branch prefix
 * @property {string} description what the rules forbid, used in messages, for example `type-safety`
 * @property {string[]} rules full rule names, in the order of preference when two targets have the same count
 * @property {string} skipListFile absolute path of the skill's skipped.json
 * @property {string[]} uncheckedFolders folders no tsconfig type checks; a fix there cannot be verified
 */

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
export const repositoryRoot = path.resolve(scriptDirectory, '../../..');
export const suppressionsFile = 'eslint-suppressions.json';

/**
 * @param {SkillConfig} config
 * @returns {string} prefix of every branch this skill creates
 */
export function branchPrefix(config) {
  return `${config.name}/`;
}

/**
 * @param {string} rule full rule name, for example `@typescript-eslint/no-explicit-any`
 * @returns {string} short rule name, for example `no-explicit-any`
 */
export function toShortRuleName(rule) {
  return rule.slice(rule.lastIndexOf('/') + 1);
}

/**
 * @param {SkillConfig} config
 * @param {string} rule full or short rule name, for example `no-explicit-any`
 * @returns {string} full rule name, for example `@typescript-eslint/no-explicit-any`
 */
export function toFullRuleName(config, rule) {
  const full = config.rules.find(candidate => candidate === rule || toShortRuleName(candidate) === rule);
  if (full == null) {
    throw new Error(`Unknown rule "${rule}". Expected one of: ${config.rules.join(', ')}`);
  }
  return full;
}

/**
 * @param {SkillConfig} config
 * @param {string} rule
 * @param {string} file path relative to the repository root
 * @returns {string} the branch name used for a pull request that fixes this rule in this file
 */
export function branchName(config, rule, file) {
  return `${branchPrefix(config)}${toShortRuleName(rule)}/${file.replace(/[^A-Za-z0-9]+/g, '-')}`;
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
 * @param {SkillConfig} config
 * @returns {Array<{ file: string, rule: string, remaining: number, reason: string }>}
 */
export function readSkipList(config) {
  return JSON.parse(readFileSync(config.skipListFile, 'utf8'));
}

/**
 * @param {SkillConfig} config
 * @param {Array<{ file: string, rule: string, remaining: number, reason: string }>} entries
 */
export function writeSkipList(config, entries) {
  const sorted = [...entries].sort((a, b) => a.file.localeCompare(b.file) || a.rule.localeCompare(b.rule));
  writeFileSync(config.skipListFile, `${JSON.stringify(sorted, null, 2)}\n`);
}

/**
 * Runs ESLint on one file while ignoring eslint-suppressions.json, so that every violation is reported.
 *
 * @param {string} file path relative to the repository root
 * @param {string} rule full rule name
 * @returns {Array<{ line: number, column: number, message: string, source: string }>}
 */
export function findViolations(file, rule) {
  const temporaryDirectory = mkdtempSync(path.join(os.tmpdir(), 'suppression-targets-'));
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
