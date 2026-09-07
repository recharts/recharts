#!/usr/bin/env node

import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

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

console.log(path.relative(repositoryRoot, nextSpec));
