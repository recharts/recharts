#!/usr/bin/env node

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/*
 * Selects the next visual-regression spec to migrate from the legacy browser-only
 * fixture to the automatic legacy/light/dark fixture, and prints a JSON object
 * describing it so the caller does not have to rediscover the same context.
 *
 * The selected spec is the first legacy spec (sorted by path) that imports the old
 * `test` fixture and does not import `testWithThemes`. Specs using `legacyTest` are
 * intentional compatibility exceptions and are skipped.
 *
 * stdout (exit 0): a JSON object, for example
 *   {
 *     "spec": "test-vr/tests/Label.spec-vr.tsx",
 *     "story": "test-vr/tests/Label.story.tsx",
 *     "snapshotDir": "test-vr/__snapshots__/tests/Label.spec-vr.tsx-snapshots",
 *     "signals": {
 *       "testTheme": false,
 *       "themedStory": false,
 *       "rechartsThemeProvider": false,
 *       "colorScheme": false
 *     },
 *     "classification": "trivial-fixture-swap"
 *   }
 *
 * classification is "trivial-fixture-swap" when every signal is false: the migration
 * is only the fixture swap (SKILL.md step 2) and steps 3-5 are skipped. Otherwise it
 * is "needs-review" and the full workflow applies.
 *
 * Exit codes: 0 = printed the JSON object; 1 = no legacy spec remains; 2 = the
 * selected spec has no companion `.story.tsx` file (a blocker, not a signal to pick
 * another spec).
 */
const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, '../../..');
const testsDirectory = path.join(repositoryRoot, 'test-vr', 'tests');

function findSpecs(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      return findSpecs(entryPath);
    }
    return entry.isFile() && entry.name.endsWith('.spec-vr.tsx') ? [entryPath] : [];
  });
}

function isLegacySpec(specPath) {
  const source = readFileSync(specPath, 'utf8');
  const importsThemeFixture = /import\s*\{[^}]*\btestWithThemes\b[^}]*\}\s*from\s*['"][^'"]*fixtures['"]/m.test(source);
  const importsLegacyFixture = /import\s*\{[^}]*\btest\b[^}]*\}\s*from\s*['"][^'"]*fixtures['"]/m.test(source);

  return !importsThemeFixture && importsLegacyFixture;
}

const legacySpecs = findSpecs(testsDirectory).filter(isLegacySpec).sort();

if (legacySpecs.length === 0) {
  console.error('No legacy visual-regression spec remains to migrate.');
  process.exit(1);
}

const nextSpec = legacySpecs[0];
const companionStory = nextSpec.replace(/\.spec-vr\.tsx$/, '.story.tsx');

if (!statSync(companionStory, { throwIfNoEntry: false })?.isFile()) {
  console.error(
    `Cannot migrate ${path.relative(repositoryRoot, nextSpec)}: missing companion story ${path.relative(
      repositoryRoot,
      companionStory,
    )}.`,
  );
  process.exit(2);
}

const specSource = readFileSync(nextSpec, 'utf8');
const storySource = readFileSync(companionStory, 'utf8');
const combined = `${specSource}\n${storySource}`;

const signals = {
  testTheme: /\btestTheme\b/.test(combined),
  themedStory: /\b(themedStory|applyTestTheme|WithLightTheme|WithDarkTheme|TestColorModeProvider)\b/.test(combined),
  rechartsThemeProvider: /\bRechartsThemeProvider\b/.test(combined),
  colorScheme: /\bcolorScheme\b|\bemulateMedia\b/.test(specSource),
};

const relativeSpec = path.relative(repositoryRoot, nextSpec);
const snapshotDir = `${path.join('test-vr', '__snapshots__', path.relative(path.join(repositoryRoot, 'test-vr'), nextSpec))}-snapshots`;

const result = {
  spec: relativeSpec,
  story: path.relative(repositoryRoot, companionStory),
  snapshotDir: existsSync(path.join(repositoryRoot, snapshotDir)) ? snapshotDir : null,
  signals,
  classification: Object.values(signals).some(Boolean) ? 'needs-review' : 'trivial-fixture-swap',
};

console.log(JSON.stringify(result, null, 2));
