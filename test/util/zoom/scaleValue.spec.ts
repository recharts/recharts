import { scaleLog } from 'victory-vendor/d3-scale';
import { describe, expect, it } from 'vitest';
import { scaleValueToDomainRatio, toFiniteNumber } from '../../../src/util/zoom/scaleValue';
import { applyViewportToRange, AxisViewport } from '../../../src/util/zoom/viewport';

describe('scaleValueToDomainRatio', () => {
  const viewport: AxisViewport = { startRatio: 0.2, endRatio: 0.6 };

  it.each([
    [300, 0],
    [0, 300],
  ] as const)('recovers log-scale fractions from a zoomed range %j', (rangeStart, rangeEnd) => {
    const unzoomedRange: readonly [number, number] = [rangeStart, rangeEnd];
    const scale = scaleLog().domain([1, 1000]).range(applyViewportToRange(unzoomedRange, viewport));

    expect(scaleValueToDomainRatio(10, scale, unzoomedRange, viewport)).toBeCloseTo(1 / 3);
    expect(scaleValueToDomainRatio(100, scale, unzoomedRange, viewport)).toBeCloseTo(2 / 3);
  });

  it('returns undefined for an unusable scale result or range', () => {
    expect(scaleValueToDomainRatio(10, () => undefined, [0, 100], viewport)).toBeUndefined();
    expect(scaleValueToDomainRatio(10, () => 50, [100, 100], viewport)).toBeUndefined();
  });

  it.each([
    { startRatio: Number.NaN, endRatio: 0.6 },
    { startRatio: 0.2, endRatio: Number.POSITIVE_INFINITY },
  ] satisfies ReadonlyArray<AxisViewport>)('returns undefined for a non-finite viewport ratio: %j', invalidViewport => {
    expect(scaleValueToDomainRatio(10, () => 50, [0, 100], invalidViewport)).toBeUndefined();
  });
});

describe('toFiniteNumber', () => {
  it.each([null, undefined, '', '   ', Number.NaN, Number.POSITIVE_INFINITY])('ignores %j', value => {
    expect(toFiniteNumber(value)).toBeUndefined();
  });

  it('keeps finite numbers and numeric strings', () => {
    expect(toFiniteNumber(12)).toBe(12);
    expect(toFiniteNumber('12')).toBe(12);
  });
});
