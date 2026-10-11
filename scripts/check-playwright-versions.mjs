/**
 * @fileoverview This script checks that the version of Playwright is consistent across multiple project files.
 * It compares the versions specified in:
 * - package.json (for 'playwright' and '@playwright/test')
 * - test-vr/playwright-ct.Dockerfile
 * - .github/workflows/ci.yml (every Playwright image reference)
 *
 * If the versions are all the same, it exits with code 0.
 * If any version is different, it logs the discrepancies and exits with code 1.
 * This script is intended to be used in CI to prevent version mismatches.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const projectRoot = path.join(dirname, '..');

export function getPackageJsonVersion(packageName) {
  const packageJsonPath = path.join(projectRoot, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const version = packageJson.devDependencies[packageName];
  if (!version) {
    console.error(`Error: Could not find ${packageName} in devDependencies of package.json`);
    process.exit(1);
  }
  // Remove any leading characters like ^ or ~
  return version.replace(/[^0-9.]/g, '');
}

export const dockerImageRegex = /mcr\.microsoft\.com\/playwright:v([0-9.]+)-jammy/;

/**
 * Returns the version of every Playwright image reference in the content, in order.
 * A workflow can reference the image in several jobs, and each of them has to stay in sync.
 */
export function getImageVersions(content) {
  const globalRegex = new RegExp(dockerImageRegex.source, 'g');
  return Array.from(content.matchAll(globalRegex), match => match[1]);
}

function getDockerfileVersion() {
  const dockerfilePath = path.join(projectRoot, 'test-vr', 'playwright-ct.Dockerfile');
  const dockerfileContent = fs.readFileSync(dockerfilePath, 'utf8');
  const match = dockerfileContent.match(dockerImageRegex);
  if (!match || !match[1]) {
    console.error('Error: Could not find playwright version in test-vr/playwright-ct.Dockerfile');
    process.exit(1);
  }
  return match[1];
}

function getCiYmlVersions() {
  const ciYmlPath = path.join(projectRoot, '.github', 'workflows', 'ci.yml');
  const ciYmlContent = fs.readFileSync(ciYmlPath, 'utf8');
  const versions = getImageVersions(ciYmlContent);
  if (versions.length === 0) {
    console.error('Error: Could not find playwright version in .github/workflows/ci.yml');
    process.exit(1);
  }
  return versions;
}

export function checkPlaywrightVersions() {
  const versions = {
    'package.json (playwright)': getPackageJsonVersion('playwright'),
    'package.json (@playwright/test)': getPackageJsonVersion('@playwright/test'),
    'test-vr/playwright-ct.Dockerfile': getDockerfileVersion(),
  };
  getCiYmlVersions().forEach((version, index) => {
    versions[`.github/workflows/ci.yml (image ${index + 1})`] = version;
  });

  const versionValues = Object.values(versions);
  const firstVersion = versionValues[0];
  const allSame = versionValues.every(v => v === firstVersion);
  return { versions, firstVersion, allSame };
}

function main() {
  const { versions, firstVersion, allSame } = checkPlaywrightVersions();

  if (allSame) {
    console.log(`Success: All playwright versions are in sync at ${firstVersion}`);
    process.exit(0);
  } else {
    console.error('Error: Playwright versions are out of sync!');
    Object.entries(versions).forEach(([source, version]) => {
      console.error(`  - ${source}: ${version}`);
    });
    process.exit(1);
  }
}

export { main };

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
