import { describe, it, expect } from 'vitest';
// @ts-expect-error scripts folder is not included in the tsconfig
import { getImageVersions } from '../../scripts/check-playwright-versions.mjs';

describe('getImageVersions', () => {
  it('returns an empty array when there is no Playwright image', () => {
    expect(getImageVersions('image: node:22')).toEqual([]);
  });

  it('returns the version of a single image reference', () => {
    const content = `    container:
      image: mcr.microsoft.com/playwright:v1.55.1-jammy
    env:`;
    expect(getImageVersions(content)).toEqual(['1.55.1']);
  });

  it('returns the version of every image reference, in order', () => {
    const content = `  build_test_pack:
    container:
      image: mcr.microsoft.com/playwright:v1.55.1-jammy
  another_job:
    container:
      image: mcr.microsoft.com/playwright:v1.60.0-jammy`;
    expect(getImageVersions(content)).toEqual(['1.55.1', '1.60.0']);
  });

  it('ignores images that are not the jammy variant', () => {
    const content = `image: mcr.microsoft.com/playwright:v1.55.1-noble
image: mcr.microsoft.com/playwright:v1.60.0-jammy`;
    expect(getImageVersions(content)).toEqual(['1.60.0']);
  });

  it('returns the same result when called repeatedly', () => {
    const content = 'image: mcr.microsoft.com/playwright:v1.55.1-jammy';
    expect(getImageVersions(content)).toEqual(['1.55.1']);
    expect(getImageVersions(content)).toEqual(['1.55.1']);
  });
});
