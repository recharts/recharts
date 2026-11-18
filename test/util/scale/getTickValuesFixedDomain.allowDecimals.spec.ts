import { describe, expect, it } from 'vitest';
import { getTickValuesFixedDomain } from '../../../src/util/scale/getNiceTickValues';

describe('getTickValuesFixedDomain with allowDecimals=false', () => {
  it.each([
    [0.4, 0.6],
    [1.2, 1.8],
    [0.5, 0.9],
    [-0.6, -0.4],
    [0.6, 0.4],
    [-1.8, -1.2],
  ])('keeps every tick inside the domain [%s, %s]', (min, max) => {
    const ticks = getTickValuesFixedDomain([min, max], 6, false);
    const lower = Math.min(min, max);
    const upper = Math.max(min, max);

    expect(ticks.length).toBeGreaterThan(0);
    for (const tick of ticks) {
      expect(tick).toBeGreaterThanOrEqual(lower);
      expect(tick).toBeLessThanOrEqual(upper);
    }
  });

  it('returns the domain boundaries when no integer fits inside', () => {
    expect(getTickValuesFixedDomain([0.4, 0.6], 6, false)).toEqual([0.4, 0.6]);
  });

  it('keeps integer-domain ticks unchanged', () => {
    expect(getTickValuesFixedDomain([0, 10], 6, false)).toEqual([0, 2, 4, 6, 8, 10]);
  });

  it('does not emit duplicate ticks after clamping', () => {
    const ticks = getTickValuesFixedDomain([0.2, 0.8], 5, false);
    expect(new Set(ticks).size).toBe(ticks.length);
  });
});
