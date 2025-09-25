/**
 * @fileoverview This script synchronizes the Playwright version across various project files.
 * It reads the 'playwright' version from the root package.json and updates the version in the following files:
 * - test-vr/playwright-ct.Dockerfile
 * - .github/workflows/ci.yml
 *
 * This script is designed to be run in a CI/CD environment, particularly for Dependabot pull requests,
 * to automatically align the Playwright version used in container images with the version specified in package.json.
 */
const fs = require('fs');
const path = require('path');
const { dockerImageRegex } = require('./check-playwright-versions');

const projectRoot = path.join(__dirname, '..');

function getPlaywrightVersion() {
  const packageJsonPath = path.join(projectRoot, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const version = packageJson.devDependencies.playwright;
  if (!version) {
    console.error('Error: Could not find playwright in devDependencies of package.json');
    process.exit(1);
  }
  return version.replace(/[^0-9.]/g, '');
}

function updateFileVersion(filePath, newVersion) {
  const fullPath = path.join(projectRoot, filePath);
  const originalContent = fs.readFileSync(fullPath, 'utf8');
  const regex = dockerImageRegex;

  if (!regex.test(originalContent)) {
    console.warn(`Warning: Could not find playwright version string in ${filePath}. Skipping update.`);
    return;
  }

  const newContent = originalContent.replace(regex, `$1${newVersion}$2`);

  if (originalContent === newContent) {
    console.log(`No changes needed for ${filePath}.`);
  } else {
    fs.writeFileSync(fullPath, newContent, 'utf8');
    console.log(`Successfully updated ${filePath} to version ${newVersion}`);
  }
}

function main() {
  const newVersion = getPlaywrightVersion();
  console.log(`Syncing playwright versions to ${newVersion}`);

  updateFileVersion('test-vr/playwright-ct.Dockerfile', newVersion);
  updateFileVersion('.github/workflows/ci.yml', newVersion);
}

main();
