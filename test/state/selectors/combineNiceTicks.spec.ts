import { beforeEach, describe, expect, it } from 'vitest';
import { combineNiceTicks, implicitXAxis, RenderableAxisSettings } from '../../../src/state/selectors/axisSelectors';

const createAxisSettings = (partial: Partial<RenderableAxisSettings>): RenderableAxisSettings => ({
  ...implicitXAxis,
  ...partial,
});

describe('combineNiceTicks', () => {
  beforeEach(() => {});

  it('returns undefined when niceTicks="none"', () => {
    const result = combineNiceTicks([0, 100], createAxisSettings({ type: 'number', niceTicks: 'none' }), 'linear');
    expect(result).toBeUndefined();
  });

  it('returns undefined for unsupported scale types', () => {
    const result = combineNiceTicks([0, 100], createAxisSettings({ type: 'number', niceTicks: 'auto' }), 'log');

    expect(result).toBeUndefined();
  });

  it('uses getNiceTickValues in auto mode when domain definition contains auto', () => {
    const axisDomain: [number, number] = [12, 468];
    const axisSettings = createAxisSettings({
      type: 'number',
      niceTicks: 'auto',
      tickCount: 5,
      allowDecimals: true,
      domain: ['auto', 'auto'],
    });

    const result = combineNiceTicks(axisDomain, axisSettings, 'linear');

    expect(result).toEqual([0, 150, 300, 450, 600]);
  });

  it('uses getTickValuesFixedDomain in auto mode for fixed number domains', () => {
    const axisDomain: [number, number] = [0, 500];
    const axisSettings = createAxisSettings({
      type: 'number',
      niceTicks: 'auto',
      tickCount: 7,
      allowDecimals: false,
      domain: [0, 500],
    });

    const result = combineNiceTicks(axisDomain, axisSettings, 'auto');

    expect(result).toEqual([0, 85, 170, 255, 340, 425, 500]);
  });

  it('returns undefined in auto mode for non-number axis with fixed domain', () => {
    const axisSettings = createAxisSettings({
      type: 'category',
      niceTicks: 'auto',
      tickCount: 5,
      domain: [0, 500],
    });

    const result = combineNiceTicks([0, 500], axisSettings, 'linear');

    expect(result).toBeUndefined();
  });

  it('uses getNiceTickValues with useNiceNumbers=false for explicit equidistant + auto domain', () => {
    const axisDomain: [number, number] = [12, 468];
    const axisSettings = createAxisSettings({
      type: 'number',
      niceTicks: 'equidistant',
      tickCount: 5,
      allowDecimals: true,
      domain: ['auto', 'auto'],
    });

    combineNiceTicks(axisDomain, axisSettings, 'linear');
  });

  it('uses getNiceTickValues with useNiceNumbers=true for explicit nice + auto domain', () => {
    const axisDomain: [number, number] = [12, 468];
    const axisSettings = createAxisSettings({
      type: 'number',
      niceTicks: 'nice',
      tickCount: 5,
      allowDecimals: true,
      domain: ['auto', 'auto'],
    });

    combineNiceTicks(axisDomain, axisSettings, 'linear');
  });

  it('uses getTickValuesFixedDomain with useNiceNumbers=true for explicit nice + fixed domain', () => {
    const axisDomain: [number, number] = [0, 500];
    const axisSettings = createAxisSettings({
      type: 'number',
      niceTicks: 'nice',
      tickCount: 6,
      allowDecimals: false,
      domain: [0, 500],
    });

    combineNiceTicks(axisDomain, axisSettings, 'linear');
  });

  it('returns undefined when tickCount is not set', () => {
    const axisSettings = createAxisSettings({
      type: 'number',
      niceTicks: 'nice',
      tickCount: undefined,
      domain: ['auto', 'auto'],
    });

    const result = combineNiceTicks([0, 500], axisSettings, 'linear');

    expect(result).toBeUndefined();
  });
});
