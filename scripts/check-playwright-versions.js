/**
 * @fileoverview This script checks that the version of Playwright is consistent across multiple project files.
 * It compares the versions specified in:
 * - package.json (for 'playwright' and '@playwright/experimental-ct-react')
 * - test-vr/playwright-ct.Dockerfile
 * - .github/workflows/ci.yml
 *
 * If the versions are all the same, it exits with code 0.
 * If any version is different, it logs the discrepancies and exits with code 1.
 * This script is intended to be used in CI to prevent version mismatches.
 */
const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');

function getPackageJsonVersion(packageName) {
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

const dockerImageRegex = /mcr\.microsoft\.com\/playwright:v([0-9.]+)-jammy/;

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

function getCiYmlVersion() {
  const ciYmlPath = path.join(projectRoot, '.github', 'workflows', 'ci.yml');
  const ciYmlContent = fs.readFileSync(ciYmlPath, 'utf8');
  const match = ciYmlContent.match(dockerImageRegex);
  if (!match || !match[1]) {
    console.error('Error: Could not find playwright version in .github/workflows/ci.yml');
    process.exit(1);
  }
  return match[1];
}

function main() {
  const versions = {
    'package.json (playwright)': getPackageJsonVersion('playwright'),
    'package.json (@playwright/experimental-ct-react)': getPackageJsonVersion('@playwright/experimental-ct-react'),
    'test-vr/playwright-ct.Dockerfile': getDockerfileVersion(),
    '.github/workflows/ci.yml': getCiYmlVersion(),
  };

  const versionValues = Object.values(versions);
  const firstVersion = versionValues[0];
  const allSame = versionValues.every(v => v === firstVersion);

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

main();

exports.dockerImageRegex = dockerImageRegex;
