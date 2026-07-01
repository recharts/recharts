import { describe, it, expect, vi } from 'vitest';
import { random } from '@recharts/devtools';
import { graphicalItemIdentity, ThemableItem } from '../../src/theme/graphicalItemIdentity';

describe('graphicalItemIdentity', () => {
  const mockItem1: ThemableItem = { dataKey: 'foo' };
  const mockItem2: ThemableItem = { dataKey: 'bar' };
  const mockItem3: ThemableItem = { dataKey: 'bar' };

  it('should return the same number when given the same item twice', () => {
    const index1 = graphicalItemIdentity(mockItem1, 5);
    const index2 = graphicalItemIdentity(mockItem1, 5);
    expect(index1).toBe(index2);
  });

  it('should return different numbers for items with different dataKeys', () => {
    const index1 = graphicalItemIdentity(mockItem1, 5); // dataKey: 'foo'
    const index2 = graphicalItemIdentity(mockItem2, 5); // dataKey: 'bar'
    expect(index1).not.toBe(index2);
  });

  it('should return the same number for items with the same dataKey (structural identity)', () => {
    const index2 = graphicalItemIdentity(mockItem2, 5); // dataKey: 'bar'
    const index3 = graphicalItemIdentity(mockItem3, 5); // dataKey: 'bar'
    expect(index2).toBe(index3);
  });

  it('should return a non-negative integer as the theme index', () => {
    const index = graphicalItemIdentity(mockItem1, 5);
    expect(Number.isInteger(index)).toBe(true);
    expect(index).toBeGreaterThanOrEqual(0);
  });

  it('should return the same index even after page reload', async () => {
    const newItem: ThemableItem = { dataKey: 'newIdentity' };

    // Before reset - ensure item gets some valid index
    const beforeIndex = graphicalItemIdentity(newItem, 5);
    expect(beforeIndex).toBeGreaterThanOrEqual(0);

    // now the page had reloaded - simulate with vi
    vi.resetModules();

    const { graphicalItemIdentity: freshIdentityFn } = await import('../../src/theme/graphicalItemIdentity');

    // After calling with a different item, it should get different index
    const freshItem: ThemableItem = { dataKey: 'freshStart' };
    const afterIndex = freshIdentityFn(freshItem, 5);
    expect(afterIndex).not.toBe(beforeIndex);

    // in fact the index of the old item should be the same as before - stable!
    const reloadedIndex = freshIdentityFn(newItem, 5);
    expect(reloadedIndex).toBe(beforeIndex);
  });

  it('should handle numeric dataKeys by converting them to strings for hashing', () => {
    const numericItem: ThemableItem = { dataKey: 42 };
    const stringItem: ThemableItem = { dataKey: '42' };

    // Numeric dataKey should be converted to its string representation.
    // and produce the same hash as a string dataKey with equivalent content.
    const numericIndex = graphicalItemIdentity(numericItem, 5);
    const stringIndex = graphicalItemIdentity(stringItem, 5);
    expect(numericIndex).toBe(stringIndex);
  });

  it('should return a bounded hash when themeCount is not provided', () => {
    const item: ThemableItem = { dataKey: 'foo' };
    const unboundedIndex = graphicalItemIdentity(item);
    expect(Number.isInteger(unboundedIndex)).toBe(true);
    expect(unboundedIndex).toBeGreaterThanOrEqual(0);
    expect(unboundedIndex).toBeLessThanOrEqual(0x7fffffff);
  });

  it('should always return 0 when themeCount is 1', () => {
    const itemA: ThemableItem = { dataKey: 'anything' };
    const itemB: ThemableItem = { dataKey: 'somethingElse' };
    expect(graphicalItemIdentity(itemA, 1)).toBe(0);
    expect(graphicalItemIdentity(itemB, 1)).toBe(0);
  });

  it('should handle empty string dataKeys', () => {
    const emptyItem: ThemableItem = { dataKey: '' };
    const index = graphicalItemIdentity(emptyItem, 5);
    expect(index).toBeGreaterThanOrEqual(0);
    expect(index).toBeLessThan(5);
  });

  it('should handle numeric zero and negative numbers via String conversion', () => {
    const zeroItem: ThemableItem = { dataKey: 0 };
    const negativeItem: ThemableItem = { dataKey: -1 };
    const indexZero = graphicalItemIdentity(zeroItem, 5);
    const indexNegative = graphicalItemIdentity(negativeItem, 5);
    // String(0) === '0', String(-1) === '-1' → different hashes
    expect(indexZero).not.toBe(indexNegative);
  });

  it('should handle very long dataKeys without issues', () => {
    const longDataKey = Array.from({ length: 1000 }, (_, i) => `key${i}`).join('-');
    const longItem: ThemableItem = { dataKey: longDataKey };
    const indexLong = graphicalItemIdentity(longItem, 5);
    expect(indexLong).toBeGreaterThanOrEqual(0);
    expect(indexLong).toBeLessThan(5);
    // Same long key should always produce same hash (stability)
    expect(graphicalItemIdentity({ dataKey: longDataKey }, 5)).toBe(indexLong);
  });

  it('should clamp the number to the themeCount parameter so that the index stays within bounds, always', () => {
    // When there are only 3 themes (indices 0, 1, 2), no matter what
    // the raw hash is, the returned index must be clamped within [0, themeCount).
    const indexSmall = graphicalItemIdentity(mockItem1, 3);
    expect(indexSmall).toBeGreaterThanOrEqual(0);
    expect(indexSmall).toBeLessThan(3);

    // Even with a large number of themes, the index must be valid.
    const indexLarge = graphicalItemIdentity(mockItem2, 100);
    expect(indexLarge).toBeGreaterThanOrEqual(0);
    expect(indexLarge).toBeLessThan(100);
  });

  it('should distribute indices approximately uniformly across themes', () => {
    // Generate deterministic strings using LCG seed=42.
    // The LCG yields integer values in [0, 65536]. Normalize to float in [0, 1).
    const rng = random(42);
    const m = 65537;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const strings: string[] = [];

    for (let i = 0; i < 2000; i++) {
      // Length between 1 and 10 characters
      const len = Math.floor((rng.next().value / m) * 10) + 1;
      const chars = new Array(len);
      for (let j = 0; j < len; j++) {
        const charIdx = Math.floor((rng.next().value / m) * alphabet.length);
        chars[j] = alphabet[charIdx];
      }
      strings.push(chars.join(''));
    }

    // For each themeCount, check that index distribution is approximately uniform.
    // A good hash distributes items roughly evenly across all buckets.
    // We verify that no single bucket ever exceeds ±3 standard deviations
    // from expected count (99.7% confidence for multinomial sampling).
    const testThemeCounts = [3, 5, 10];

    for (const themeCount of testThemeCounts) {
      const buckets = new Array(themeCount).fill(0);
      for (const str of strings) {
        const idx = graphicalItemIdentity({ dataKey: str } as ThemableItem, themeCount);
        expect(idx).toBeGreaterThanOrEqual(0);
        expect(idx).toBeLessThan(themeCount);
        buckets[idx]++;
      }

      // Expected per bucket and standard deviation for uniform distribution.
      const expected = strings.length / themeCount;
      const stdDev = Math.sqrt(expected * (1 - 1 / themeCount));

      // No bucket should be more than 5 standard deviations from expected.
      // This is a very generous margin that catches real non-uniformity
      // while allowing normal random variance (~99.999% confidence).
      for (let b = 0; b < themeCount; b++) {
        const deviation = Math.abs(buckets[b] - expected);
        const msg = `themeCount=${themeCount}: bucket ${b} count (
           ${buckets[b]}) deviates >5σ from expected (${expected.toFixed(0)}, σ=${stdDev.toFixed(1)})`;
        expect(deviation, msg).toBeLessThanOrEqual(5 * stdDev);
      }
    }
  });

  it('should handle numeric dataKey values and convert them to strings for hashing', () => {
    const numericItem: ThemableItem = { dataKey: 123 };
    const stringEquivalentItem: ThemableItem = { dataKey: '123' };

    // Numeric dataKey should be converted to the same string as String(123)
    // which is '123', and produce identical hash results as a string dataKey.
    const numericIndex = graphicalItemIdentity(numericItem, 7);
    const stringIndex = graphicalItemIdentity(stringEquivalentItem, 7);
    expect(numericIndex).toBe(stringIndex);
  });

  it('should handle floating point dataKeys without producing NaN or Infinity', () => {
    const floatItem: ThemableItem = { dataKey: 3.14 };
    const index = graphicalItemIdentity(floatItem, 5);
    expect(Number.isInteger(index)).toBe(true);
    expect(index).toBeGreaterThanOrEqual(0);
    expect(index).toBeLessThan(5);
  });

  it('should return 0 for negative themeCount since it is semantically invalid', () => {
    // Negative themeCount is semantically impossible (you can't have "negative themes").
    // The function should treat this as a special case and return 0, not a random large hash.
    const itemA: ThemableItem = { dataKey: 'anything' };
    const itemB: ThemableItem = { dataKey: 'somethingElse' };
    expect(graphicalItemIdentity(itemA, -1)).toBe(0);
    expect(graphicalItemIdentity(itemA, -5)).toBe(0);
    expect(graphicalItemIdentity(itemB, -99)).toBe(0);
  });

  it('should return 0 when themeCount is 0 since no themes are available', () => {
    const itemA: ThemableItem = { dataKey: 'anything' };
    const itemB: ThemableItem = { dataKey: 'somethingElse' };
    expect(graphicalItemIdentity(itemA, 0)).toBe(0);
    expect(graphicalItemIdentity(itemB, 0)).toBe(0);
  });

  it('should not throw when given dataKey function', () => {
    const itemA: ThemableItem = { dataKey: () => {} };
    expect(graphicalItemIdentity(itemA, 10)).toBeGreaterThanOrEqual(0);
  });
});
