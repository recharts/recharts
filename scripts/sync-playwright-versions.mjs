/**
 * @fileoverview This script synchronizes the Playwright version across various project files.
 * It reads the 'playwright' version from the root package.json and updates the version in the following files:
 * - test-vr/playwright-ct.Dockerfile
 * - .github/workflows/ci.yml
 *
 * This script is designed to be run in a CI/CD environment, particularly for Dependabot pull requests,
 * to automatically align the Playwright version used in container images with the version specified in package.json.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dockerImageRegex, getPackageJsonVersion, checkPlaywrightVersions } from './check-playwright-versions.mjs';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const projectRoot = path.join(dirname, '..');

export function replacePlaywrightVersion(content, newVersion) {
  const regex = dockerImageRegex;
  if (!regex.test(content)) {
    throw new Error('Could not find playwright version string to replace.');
  }
  return content.replace(regex, `mcr.microsoft.com/playwright:v${newVersion}-jammy`);
}

function updateFileVersion(filePath, newVersion) {
  const fullPath = path.join(projectRoot, filePath);
  const originalContent = fs.readFileSync(fullPath, 'utf8');

  let newContent;
  try {
    newContent = replacePlaywrightVersion(originalContent, newVersion);
  } catch (error) {
    console.error(`Error updating ${filePath}: ${error.message}`);
    process.exit(1);
  }

  if (originalContent === newContent) {
    console.log(`No changes needed for ${filePath}.`);
  } else {
    fs.writeFileSync(fullPath, newContent, 'utf8');
    console.log(`Successfully updated ${filePath} to version ${newVersion}`);
  }
}

function main() {
  const { allSame: before } = checkPlaywrightVersions();
  if (before === true) {
    console.log('All Playwright versions are already in sync. No changes needed.');
    return;
  }
  const newVersion = getPackageJsonVersion('playwright');
  console.log(`Syncing playwright versions to ${newVersion}`);

  updateFileVersion('test-vr/playwright-ct.Dockerfile', newVersion);
  updateFileVersion('.github/workflows/ci.yml', newVersion);

  const { allSame: after } = checkPlaywrightVersions();
  if (after !== true) {
    console.error('Error: Versions are still not in sync after update.');
    process.exit(1);
  }
  console.log('All Playwright versions are now in sync.');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
