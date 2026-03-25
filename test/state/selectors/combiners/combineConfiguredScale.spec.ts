import { scaleLinear } from 'victory-vendor/d3-scale';
import { describe, expect, it } from 'vitest';
import { assertNotNull } from '../../../helper/assertNotNull';
import { AxisRange } from '../../../../src/state/selectors/axisSelectors';
import { combineConfiguredScaleInternal } from '../../../../src/state/selectors/combiners/combineConfiguredScale';

const testDomain: ReadonlyArray<number> = [0, 100];
const testRange: AxisRange = [0, 500];

describe('combineConfiguredScaleInternal', () => {
  it('returns undefined when scale is undefined', () => {
    expect(combineConfiguredScaleInternal(undefined, testDomain, testRange)).toBeUndefined();
  });

  it('returns a configured scale for a valid short scale name like "linear"', () => {
    const result = combineConfiguredScaleInternal('linear', testDomain, testRange);
    assertNotNull(result);
    expect(result.domain()).toEqual(testDomain);
    expect(result.range()).toEqual(testRange);
  });

  it('returns a configured scale for other valid short names', () => {
    const result = combineConfiguredScaleInternal('log', [1, 100], testRange);
    assertNotNull(result);
    expect(result.domain()).toEqual([1, 100]);
    expect(result.range()).toEqual(testRange);
  });

  it('returns a configured scale for full d3 scale names like "scaleLinear"', () => {
    const result = combineConfiguredScaleInternal('scaleLinear', testDomain, testRange);
    assertNotNull(result);
    expect(result.domain()).toEqual(testDomain);
    expect(result.range()).toEqual(testRange);
  });

  it('returns undefined for a name that resolves to a non-function d3 export (scaleImplicit is a Symbol)', () => {
    // "implicit" maps to "scaleImplicit" which is a Symbol sentinel, not a scale constructor
    // @ts-expect-error testing runtime behavior with a scale name that resolves to a non-function export
    const result = combineConfiguredScaleInternal('implicit', testDomain, testRange);
    expect(result).toBeUndefined();
  });

  it('returns undefined for a completely unknown scale name', () => {
    // @ts-expect-error testing runtime behavior with a made-up scale name
    const result = combineConfiguredScaleInternal('madeUpScaleName', testDomain, testRange);
    expect(result).toBeUndefined();
  });

  it('uses the function scale directly when scale is a function', () => {
    const fnScale = scaleLinear().copy().domain([0, 50]).range([0, 200]);
    const result = combineConfiguredScaleInternal(fnScale, testDomain, testRange);
    assertNotNull(result);
    expect(result.domain()).toEqual(testDomain);
    expect(result.range()).toEqual(testRange);
  });
});
