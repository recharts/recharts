import { describe, expect, it, vi } from 'vitest';
import * as d3Scale from 'victory-vendor/d3-scale';
import { scalePow } from 'victory-vendor/d3-scale';
import { createRegisteredScale, isRegisteredScaleName, registerScales } from '../../../src/util/scale/scaleRegistry';
import { combineRealScaleType } from '../../../src/state/selectors/combiners/combineRealScaleType';
import { combineConfiguredScaleInternal } from '../../../src/state/selectors/combiners/combineConfiguredScale';
import { BaseCartesianAxis, defaultAxisId } from '../../../src/state/cartesianAxisSlice';

// vitest gives each test file its own modules, so the registry starts with the built-in scales only
const axis: BaseCartesianAxis = {
  id: defaultAxisId,
  type: 'number',
  scale: 'auto',
  dataKey: undefined,
  allowDataOverflow: false,
  allowDuplicatedCategory: true,
  domain: undefined,
  includeHidden: false,
  reversed: false,
  unit: undefined,
  name: undefined,
};

describe('scaleRegistry', () => {
  it('builds in the scales that scale="auto" resolves to', () => {
    expect(isRegisteredScaleName('linear')).toBe(true);
    expect(isRegisteredScaleName('band')).toBe(true);
    expect(isRegisteredScaleName('point')).toBe(true);
    expect(combineConfiguredScaleInternal('linear', [0, 10], [0, 100])?.(5)).toBe(50);
  });

  it('falls back to a point scale for an unregistered name and warns once', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation((): void => undefined);
    expect(combineRealScaleType({ ...axis, scale: 'quantize' }, false, 'LineChart')).toBe('point');
    expect(combineRealScaleType({ ...axis, scale: 'quantize' }, false, 'LineChart')).toBe('point');
    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('registerScales({ scaleQuantize })'));
    expect(createRegisteredScale('quantize')).toBeUndefined();
    warn.mockRestore();
  });

  it('resolves a registered scale by its short and d3 names', () => {
    registerScales({ scalePow });
    expect(isRegisteredScaleName('pow')).toBe(true);
    expect(combineRealScaleType({ ...axis, scale: 'pow' }, false, 'LineChart')).toBe('pow');
    expect(createRegisteredScale('pow')?.domain([0, 2]).range([0, 4])(1)).toBe(2);
    expect(createRegisteredScale('scalePow')).toBeDefined();
  });

  it('registers every d3 scale from a namespace import and ignores other exports', () => {
    registerScales(d3Scale);
    expect(isRegisteredScaleName('log')).toBe(true);
    expect(isRegisteredScaleName('time')).toBe(true);
    expect(isRegisteredScaleName('utc')).toBe(true);
    expect(createRegisteredScale('tickFormat')).toBeUndefined();
  });
});
