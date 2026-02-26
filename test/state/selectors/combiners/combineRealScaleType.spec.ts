import { describe, expect, it } from 'vitest';
import { scaleLog } from 'victory-vendor/d3-scale';
import { BaseCartesianAxis } from '../../../../src/state/cartesianAxisSlice';
import { combineRealScaleType } from '../../../../src/state/selectors/combiners/combineRealScaleType';

const baseAxis: BaseCartesianAxis = {
  id: 0,
  scale: 'auto',
  type: 'number',
  dataKey: undefined,
  unit: undefined,
  name: undefined,
  allowDuplicatedCategory: true,
  allowDataOverflow: false,
  reversed: false,
  includeHidden: false,
  domain: undefined,
};

const createAxis = (partial: Partial<BaseCartesianAxis>): BaseCartesianAxis => ({
  ...baseAxis,
  ...partial,
});

describe('combineRealScaleType', () => {
  it('returns undefined when axis config is missing', () => {
    expect(combineRealScaleType(undefined, false, 'LineChart')).toBeUndefined();
  });

  it('returns point for auto + category in LineChart/AreaChart', () => {
    const axis = createAxis({ scale: 'auto', type: 'category' });
    expect(combineRealScaleType(axis, false, 'LineChart')).toBe('point');
    expect(combineRealScaleType(axis, false, 'AreaChart')).toBe('point');
  });

  it('returns point for auto + category in ComposedChart without bars, but band with bars', () => {
    const axis = createAxis({ scale: 'auto', type: 'category' });
    expect(combineRealScaleType(axis, false, 'ComposedChart')).toBe('point');
    expect(combineRealScaleType(axis, true, 'ComposedChart')).toBe('band');
  });

  it('returns band for auto + category in non-line-like charts', () => {
    const axis = createAxis({ scale: 'auto', type: 'category' });
    expect(combineRealScaleType(axis, true, 'BarChart')).toBe('band');
  });

  it('returns linear for auto + number axes', () => {
    const axis = createAxis({ scale: 'auto', type: 'number' });
    expect(combineRealScaleType(axis, false, 'LineChart')).toBe('linear');
  });

  it('maps scale="log" to scaleLog and scale="symlog" to scaleSymlog', () => {
    const axis = createAxis({ type: 'number' });
    expect(combineRealScaleType({ ...axis, scale: 'log' }, false, 'LineChart')).toBe('scaleLog');
    expect(combineRealScaleType({ ...axis, scale: 'symlog' }, false, 'LineChart')).toBe('scaleSymlog');
  });

  it('maps supported short names to their d3 scale function names', () => {
    const axis = createAxis({ type: 'number' });
    expect(combineRealScaleType({ ...axis, scale: 'linear' }, false, 'LineChart')).toBe('scaleLinear');
    expect(combineRealScaleType({ ...axis, scale: 'point' }, false, 'LineChart')).toBe('scalePoint');
  });

  it('falls back to point for already-prefixed names like scaleLog', () => {
    // @ts-expect-error typescript is doing its job and preventing us from passing an invalid scale, but we want to test the runtime behavior in this case
    const axis = createAxis({ type: 'number', scale: 'scaleLog' });
    expect(combineRealScaleType(axis, false, 'LineChart')).toBe('point');
  });

  it('falls back to point for unknown string scales', () => {
    // @ts-expect-error typescript is doing its job and preventing us from passing an invalid scale, but we want to test the runtime behavior in this case
    const axis = createAxis({ type: 'number', scale: 'madeUpScaleName' });
    expect(combineRealScaleType(axis, false, 'LineChart')).toBe('point');
  });

  it('returns undefined for function scales', () => {
    const axis = createAxis({ type: 'number', scale: scaleLog() });
    expect(combineRealScaleType(axis, false, 'LineChart')).toBeUndefined();
  });
});
