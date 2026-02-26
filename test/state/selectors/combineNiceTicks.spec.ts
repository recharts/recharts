import { describe, expect, it } from 'vitest';
import { combineNiceTicks, implicitXAxis, RenderableAxisSettings } from '../../../src/state/selectors/axisSelectors';

const createAxisSettings = (partial: Partial<RenderableAxisSettings>): RenderableAxisSettings => ({
  ...implicitXAxis,
  ...partial,
});

describe('combineNiceTicks', () => {
  it('returns undefined when niceTicks="none"', () => {
    const result = combineNiceTicks([0, 100], createAxisSettings({ type: 'number', niceTicks: 'none' }), 'linear');
    expect(result).toBeUndefined();
  });

  it('returns undefined for unsupported scale types', () => {
    const result = combineNiceTicks([0, 100], createAxisSettings({ type: 'number', niceTicks: 'auto' }), 'time');
    expect(result).toBeUndefined();
  });

  it('uses adaptive mode for auto + auto domain', () => {
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

  it('uses adaptive fixed-domain mode for auto + fixed domain', () => {
    const axisDomain: [number, number] = [0, 500];
    const axisSettings = createAxisSettings({
      type: 'number',
      niceTicks: 'auto',
      tickCount: 7,
      allowDecimals: false,
      domain: [0, 500],
    });

    const result = combineNiceTicks(axisDomain, axisSettings, 'linear');
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

  describe('linear scale', () => {
    it('uses adaptive algorithm when niceTicks="adaptive"', () => {
      const axisDomain: [number, number] = [12, 468];
      const axisSettings = createAxisSettings({
        type: 'number',
        niceTicks: 'adaptive',
        tickCount: 5,
        allowDecimals: true,
        domain: ['auto', 'auto'],
      });

      const result = combineNiceTicks(axisDomain, axisSettings, 'linear');
      expect(result).toEqual([0, 150, 300, 450, 600]);
    });

    it('uses snap125 algorithm when niceTicks="snap125"', () => {
      const axisDomain: [number, number] = [12, 468];
      const axisSettings = createAxisSettings({
        type: 'number',
        niceTicks: 'snap125',
        tickCount: 5,
        allowDecimals: true,
        domain: ['auto', 'auto'],
      });

      const result = combineNiceTicks(axisDomain, axisSettings, 'linear');
      expect(result).toEqual([0, 200, 400, 600, 800]);
    });
  });

  describe('log scale', () => {
    it('returns undefined when niceTicks="auto"', () => {
      const axisDomain: [number, number] = [1, 215];
      const axisSettings: RenderableAxisSettings = createAxisSettings({
        type: 'number',
        niceTicks: 'auto',
        tickCount: 5,
        allowDecimals: true,
        domain: undefined,
      });

      const logResult = combineNiceTicks(axisDomain, axisSettings, 'log');
      expect(logResult).toBeUndefined();
    });

    it('uses adaptive algorithm when niceTicks="adaptive"', () => {
      const axisDomain: [number, number] = [1, 215];
      const axisSettings: RenderableAxisSettings = createAxisSettings({
        type: 'number',
        niceTicks: 'adaptive',
        tickCount: 5,
        allowDecimals: true,
        domain: undefined,
      });

      const logResult = combineNiceTicks(axisDomain, axisSettings, 'log');
      expect(logResult).toEqual([0, 55, 110, 165, 220]);
    });

    it('uses snap125 algorithm when niceTicks="snap125"', () => {
      const axisDomain: [number, number] = [1, 215];
      const axisSettings: RenderableAxisSettings = createAxisSettings({
        type: 'number',
        niceTicks: 'snap125',
        tickCount: 5,
        allowDecimals: true,
        domain: undefined,
      });

      const logResult = combineNiceTicks(axisDomain, axisSettings, 'log');
      expect(logResult).toEqual([0, 100, 200, 300, 400]);
    });
  });

  describe('symlog scale', () => {
    it('returns undefined when niceTicks="auto"', () => {
      const axisDomain: [number, number] = [-834, 356];
      const axisSettings = createAxisSettings({
        type: 'number',
        niceTicks: 'auto',
        tickCount: 5,
        allowDecimals: true,
        domain: undefined,
      });

      const symlogResult = combineNiceTicks(axisDomain, axisSettings, 'symlog');
      expect(symlogResult).toBeUndefined();
    });

    it('uses adaptive algorithm when niceTicks="adaptive"', () => {
      const axisDomain: [number, number] = [-834, 356];
      const axisSettings = createAxisSettings({
        type: 'number',
        niceTicks: 'adaptive',
        tickCount: 5,
        allowDecimals: true,
        domain: undefined,
      });

      const symlogResult = combineNiceTicks(axisDomain, axisSettings, 'symlog');
      expect(symlogResult).toEqual([-1200, -800, -400, +0, 400]);
    });

    it('uses snap125 algorithm when niceTicks="snap125"', () => {
      const axisDomain: [number, number] = [-834, 356];
      const axisSettings = createAxisSettings({
        type: 'number',
        niceTicks: 'snap125',
        tickCount: 5,
        allowDecimals: true,
        domain: undefined,
      });

      const symlogResult = combineNiceTicks(axisDomain, axisSettings, 'symlog');
      expect(symlogResult).toEqual([-1000, -500, +0, 500, 1000]);
    });
  });

  it('returns undefined when tickCount is not set', () => {
    const axisSettings = createAxisSettings({
      type: 'number',
      niceTicks: 'snap125',
      tickCount: undefined,
      domain: ['auto', 'auto'],
    });

    const result = combineNiceTicks([0, 500], axisSettings, 'linear');
    expect(result).toBeUndefined();
  });
});
