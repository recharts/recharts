import { describe, it, expect } from 'vitest';
// @ts-expect-error scripts folder is not included in the tsconfig
import { replacePlaywrightVersion } from '../../scripts/sync-playwright-versions';

describe('replacePlaywrightVersion', () => {
  it('replaces the version in the given content', () => {
    const content = `  build_test_pack:
    name: Build, Test, Pack
    runs-on: ubuntu-latest
    container:
      # Use the Playwright container to run tests, as recommended in https://storybook.js.org/docs/writing-tests/in-ci
      # Make sure to grab the latest version of the Playwright image
      # https://playwright.dev/docs/docker#pull-the-image
      image: mcr.microsoft.com/playwright:v1.55.1-jammy
    env:`;
    const newVersion = '1.60.0';
    const expected = `  build_test_pack:
    name: Build, Test, Pack
    runs-on: ubuntu-latest
    container:
      # Use the Playwright container to run tests, as recommended in https://storybook.js.org/docs/writing-tests/in-ci
      # Make sure to grab the latest version of the Playwright image
      # https://playwright.dev/docs/docker#pull-the-image
      image: mcr.microsoft.com/playwright:v1.60.0-jammy
    env:`;
    const result = replacePlaywrightVersion(content, newVersion);
    expect(result).toBe(expected);
  });
});
