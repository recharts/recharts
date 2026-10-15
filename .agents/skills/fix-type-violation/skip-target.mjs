#!/usr/bin/env node

import { parseArgs } from 'node:util';
import { findViolations, readSkipList, toFullRuleName, writeSkipList } from './lib.mjs';

/*
 * Records that a target could not be fully fixed, so that pick-target.mjs does not select it again.
 * Adds an entry to skipped.json, or replaces the existing entry for the same file and rule.
 *
 * Usage:
 *   node .agents/skills/fix-type-violation/skip-target.mjs --file <path> --rule <rule> --reason "<why>"
 *
 * `remaining` is computed from the current working tree, so run this after you have reverted
 * (or kept, for a partial fix) your changes.
 */

const { values: options } = parseArgs({
  options: {
    file: { type: 'string' },
    rule: { type: 'string' },
    reason: { type: 'string' },
  },
});

if (options.file == null || options.rule == null || options.reason == null || options.reason.trim().length < 20) {
  console.error(
    'Usage: skip-target.mjs --file <path> --rule <rule> --reason "<at least 20 characters explaining why>"',
  );
  process.exit(1);
}

const rule = toFullRuleName(options.rule);
const remaining = findViolations(options.file, rule).length;
const entry = { file: options.file, rule, remaining, reason: options.reason.trim() };

writeSkipList([...readSkipList().filter(e => e.file !== entry.file || e.rule !== entry.rule), entry]);
console.log(JSON.stringify(entry, null, 2));
