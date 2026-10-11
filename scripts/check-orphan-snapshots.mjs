/**
 * Fails on baseline PNGs that no current test can produce (renamed/deleted tests, removed projects).
 *
 * Uses `playwright test --list --reporter=json` (no browsers needed) to get every test and project,
 * then rebuilds Playwright's default (anonymous) snapshot names for each test:
 *   <snapshotDir>/<spec path>-snapshots/sanitize(trim("<describe...> <title> <n>"))-<project>-<platform>.png
 * It cannot know how many screenshots a test takes, so n = 1..MAX_SCREENSHOTS_PER_TEST is accepted.
 * Explicitly named screenshots (toHaveScreenshot('name.png')) cannot be derived from --list, so every
 * '<name>.png' string literal in that spec file counts as expected. An array name such as
 * toHaveScreenshot(['group', 'shot.png']) puts the baseline in a nested directory; it counts as expected
 * when every path segment appears as a string literal in the spec. Names built at runtime
 * (template strings, concatenation) go into `extraNamedScreenshots`.
 * Only PNG files are checked; other baselines (toMatchSnapshot, aria snapshots) are ignored.
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

/**
 * snapshot dir (absolute) -> expected base names (without -<project>-<platform>.png),
 * plus every string literal in the spec, for array-form names in nested directories.
 */
const expected = new Map();

function readSpec(specFile) {
  const source = fs.readFileSync(path.join(testDir, specFile), 'utf8');
  const literals = new Set(Array.from(source.matchAll(/(['"`])([^'"`\n]+)\1/g), m => m[2]));
  const named = [...literals].filter(literal => literal.endsWith('.png')).map(n => sanitizeForFilePath(n.slice(0, -4)));
  return { names: new Set([...named, ...extraNamedScreenshots]), literals };
}

function walk(suite, file, titles) {
  for (const spec of suite.specs ?? []) {
    const dir = path.join(snapshotRoot, `${file}-snapshots`);
    if (!expected.has(dir)) expected.set(dir, readSpec(file));
    const title = [...titles, spec.title].join(' ');
    for (let n = 1; n <= MAX_SCREENSHOTS_PER_TEST; n++) {
      expected.get(dir).names.add(sanitizeForFilePath(trimLongString(`${title} ${n}`)));
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

const screenshotFileRegex = new RegExp(`^(.*)-(${projectPattern})-[a-z0-9]+\\.png$`);

function isExpected(ownerDir, file) {
  const spec = expected.get(ownerDir);
  const segments = path.relative(ownerDir, file).split(path.sep);
  const match = screenshotFileRegex.exec(segments.pop());
  if (match === null) return false;
  if (segments.length === 0) return spec.names.has(match[1]);
  // Array-form name: Playwright joins the segments without sanitizing them.
  return [...segments, `${match[1]}.png`].every(segment => spec.literals.has(segment));
}

const orphans = [];
/** ownerDir is the spec's <spec>-snapshots directory once the scan is inside one. */
function scan(dir, ownerDir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (ownerDir === undefined && entry.name.endsWith('-snapshots')) {
        if (expected.has(full)) scan(full, full);
        else orphans.push(`${full}${path.sep} (no spec file with tests)`);
      } else {
        scan(full, ownerDir);
      }
      continue;
    }
    if (ownerDir === undefined || !entry.name.endsWith('.png')) continue;
    if (!isExpected(ownerDir, full)) orphans.push(full);
  }
}
if (fs.existsSync(snapshotRoot)) scan(snapshotRoot, undefined);

if (orphans.length > 0) {
  console.error(`${orphans.length} orphaned baseline(s). Delete them, or fix the test that should produce them:`);
  orphans.forEach(o => console.error(`  ${path.relative(process.cwd(), o)}`));
  process.exit(1);
}
console.log('No orphaned baselines.');
