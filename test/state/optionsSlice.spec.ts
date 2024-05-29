import { describe, it, expect } from 'vitest';
import { arrayTooltipSearcher } from '../../src/state/optionsSlice';

describe('arrayTooltipSearcher', () => {
  it('should return undefined when called with empty array or empty index', () => {
    expect(arrayTooltipSearcher([], '0')).toBeUndefined();
    expect(arrayTooltipSearcher(undefined, '0')).toBeUndefined();
    expect(arrayTooltipSearcher([1, 2, 3], '')).toBeUndefined();
    expect(arrayTooltipSearcher([1, 2, 3], undefined)).toBeUndefined();
    expect(arrayTooltipSearcher([1, 2, 3], 'NaN')).toBeUndefined();
  });

  it('should return data from an index when given a valid number', () => {
    expect(arrayTooltipSearcher([1, 2, 3], '0')).toBe(1);
  });
});
