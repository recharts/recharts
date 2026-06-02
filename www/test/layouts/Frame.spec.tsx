import { describe, expect, it } from 'vitest';

import { getShortCommitHash } from '../../src/layouts/Frame';

describe('getShortCommitHash', () => {
  it('should return undefined for empty or undefined values', () => {
    expect(getShortCommitHash(undefined)).toBe(undefined);
    expect(getShortCommitHash('')).toBe(undefined);
    expect(getShortCommitHash('   ')).toBe(undefined);
  });

  it('should trim and shorten commit hash to 8 characters', () => {
    expect(getShortCommitHash(' 1234567890abcdef ')).toBe('12345678');
  });
});
