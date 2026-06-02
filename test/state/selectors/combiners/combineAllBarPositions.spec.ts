import { describe, expect, it } from 'vitest';
import { combineAllBarPositions } from '../../../../src/state/selectors/combiners/combineAllBarPositions';
import { SizeList } from '../../../../src/state/selectors/barSelectors';

/**
 * Regression coverage for the rounding fix in `getBarPositions`
 * (combineAllBarPositions.ts) that resolves issue #6115:
 * Bar and Scatter X coordinates were misaligned because bar positions
 * were computed via bitwise truncation (`>> 0`) while Scatter centres
 * were computed in floating point. Replacing `>> 0` with `Math.round()`
 * minimises the residual sub-pixel error.
 */
describe('combineAllBarPositions', () => {
  /**
   * The else-branch (no explicit barSize set by user) used to do
   *   `if (originalSize > 1) originalSize >>= 0;`
   * which truncates fractional bar widths. After the fix this is
   * `originalSize = Math.round(originalSize)`.
   *
   * For the issue's repro: bandSize=91, barCategoryGap='10%', single bar.
   *   - barCategoryGap => offset = 9.1
   *   - originalSize = (91 - 18.2) / 1 = 72.8  -> Math.round -> 73
   *   - bar centre = offset + originalSize/2 = 9.1 + 36.5 = 45.6
   *   - Scatter centre = bandSize / 2 = 45.5
   *   - alignment error: 0.1px (was 0.4px with truncation)
   */
  it('rounds fractional originalSize instead of truncating (issue #6115)', () => {
    const sizeList: SizeList = [{ stackId: undefined, dataKeys: ['uv'], barSize: undefined }];
    const positions = combineAllBarPositions(sizeList, undefined, 0, '10%', 91, 91, undefined);
    expect(positions).toBeDefined();
    expect(positions).toHaveLength(1);
    // Math.round(72.8) === 73, NOT 72 (which is what `>> 0` produced).
    expect(positions![0].position.size).toBe(73);
  });

  it('rounds the centring offset of user-specified barSizes instead of truncating', () => {
    // if-branch: barSize set by user.
    // bandSize=91, two bars with barSize=20 each, no gap.
    // sum = 40, (bandSize - sum) / 2 = 25.5  -> Math.round -> 26 (was 25 via `>> 0`)
    const sizeList: SizeList = [
      { stackId: undefined, dataKeys: ['a'], barSize: 20 },
      { stackId: undefined, dataKeys: ['b'], barSize: 20 },
    ];
    const positions = combineAllBarPositions(sizeList, undefined, 0, 0, 91, 91, undefined);
    expect(positions).toBeDefined();
    expect(positions).toHaveLength(2);
    expect(positions![0].position.offset).toBe(26);
  });

  it('does not round originalSize when it is <= 1 (preserves sub-pixel bars)', () => {
    // The conditional `if (originalSize > 1) ...` only rounds when there is
    // room to round to. Tiny computed sizes stay fractional.
    const sizeList: SizeList = Array.from({ length: 20 }, (_, i) => ({
      stackId: undefined,
      dataKeys: [`d${i}`],
      barSize: undefined,
    }));
    const positions = combineAllBarPositions(sizeList, undefined, 0, 0, 10, 10, undefined);
    expect(positions).toBeDefined();
    // 10px / 20 bars = 0.5 each -> stays fractional.
    expect(positions![0].position.size).toBeCloseTo(0.5, 5);
  });

  it('returns undefined for an empty size list', () => {
    expect(combineAllBarPositions([], undefined, 0, 0, 100, 100, undefined)).toBeUndefined();
  });
});
