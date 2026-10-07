/**
 * Fails on baseline PNGs that no current test can produce (renamed/deleted tests, removed projects).
 *
 * Uses `playwright test --list --reporter=json` (no browsers needed) to get every test and project,
 * then rebuilds Playwright's default (anonymous) snapshot names for each test:
 *   <snapshotDir>/<spec path>-snapshots/sanitize(trim("<describe...> <title> <n>"))-<project>-<platform>.png
 * It cannot know how many screenshots a test takes, so n = 1..MAX_SCREENSHOTS_PER_TEST is accepted.
 * Explicitly named screenshots (toHaveScreenshot('name.png')) cannot be derived from --list, so every
 * '<name>.png' string literal in that spec file counts as expected. Names built at runtime
 * (template strings, concatenation) go into `extraNamedScreenshots`.
 *
 * The sanitize/trim rules mirror playwright-core's sanitizeForFilePath and trimLongString.
 * Re-check them when upgrading Playwright if this script starts reporting live baselines.
 */
import { execFileSync } from 'node:child_process';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const testDir = 'test-vr';
const config = path.join(testDir, 'playwright.config.ts');
const snapshotRoot = path.resolve(testDir, '__snapshots__');
const MAX_SCREENSHOTS_PER_TEST = 50;
const extraNamedScreenshots = new Set([]);

function sanitizeForFilePath(s) {
  // eslint-disable-next-line no-control-regex -- copied from playwright-core, which strips control characters too
  return s.replace(/[\x00-\x2C\x2E-\x2F\x3A-\x40\x5B-\x60\x7B-\x7F]+/g, '-');
}

function trimLongString(s, length = 100) {
  if (s.length <= length) return s;
  const middle = `-${crypto.createHash('sha1').update(s).digest('hex').substring(0, 5)}-`;
  const start = Math.floor((length - middle.length) / 2);
  const end = length - middle.length - start;
  return s.substring(0, start) + middle + s.slice(-end);
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const report = JSON.parse(
  execFileSync('npx', ['playwright', 'test', '--config', config, '--list', '--reporter=json'], {
    encoding: 'utf8',
    maxBuffer: 256 * 1024 * 1024,
    env: { ...process.env, CI: process.env.CI ?? '1' },
  }),
);

const projects = report.config.projects.map(p => sanitizeForFilePath(p.name));
const projectPattern = projects.map(escapeRegExp).join('|');

/** snapshot dir (absolute) -> Set of expected base names (without -<project>-<platform>.png) */
const expected = new Map();

function namedScreenshotsIn(specFile) {
  const source = fs.readFileSync(path.join(testDir, specFile), 'utf8');
  return [...source.matchAll(/['"`]([^'"`\s]+)\.png['"`]/g)].map(m => sanitizeForFilePath(m[1]));
}

function walk(suite, file, titles) {
  for (const spec of suite.specs ?? []) {
    const dir = path.join(snapshotRoot, `${file}-snapshots`);
    if (!expected.has(dir)) expected.set(dir, new Set([...namedScreenshotsIn(file), ...extraNamedScreenshots]));
    const title = [...titles, spec.title].join(' ');
    for (let n = 1; n <= MAX_SCREENSHOTS_PER_TEST; n++) {
      expected.get(dir).add(sanitizeForFilePath(trimLongString(`${title} ${n}`)));
    }
  }
  for (const child of suite.suites ?? []) {
    walk(child, file, [...titles, child.title]);
  }
}
// Top-level suites are files: their title is the file path relative to testDir and is not part of the name.
for (const fileSuite of report.suites) {
  walk(fileSuite, fileSuite.file, []);
}

const orphans = [];
function scan(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.endsWith('-snapshots') && !expected.has(full)) {
        orphans.push(`${full}${path.sep} (no spec file with tests)`);
      } else {
        scan(full);
      }
      continue;
    }
    const names = expected.get(dir);
    if (names === undefined) continue;
    const match = new RegExp(`^(.*)-(${projectPattern})-[a-z0-9]+\\.png$`).exec(entry.name);
    const known = match !== null && names.has(match[1]);
    if (!known) orphans.push(full);
  }
}
if (fs.existsSync(snapshotRoot)) scan(snapshotRoot);

if (orphans.length > 0) {
  console.error(`${orphans.length} orphaned baseline(s). Delete them, or fix the test that should produce them:`);
  orphans.forEach(o => console.error(`  ${path.relative(process.cwd(), o)}`));
  process.exit(1);
}
console.log('No orphaned baselines.');
