import { describe, expect, it } from 'vitest';
import { getEffectivePageBackground } from '../../src/theme/pageBackground';

describe('getEffectivePageBackground', () => {
  it('returns undefined without a theme', () => {
    expect(getEffectivePageBackground(undefined)).toBeUndefined();
  });

  it('returns undefined when the theme sets neither pageBackground nor chart.backgroundColor', () => {
    expect(getEffectivePageBackground({})).toBeUndefined();
    expect(getEffectivePageBackground({ chart: { width: 400 } })).toBeUndefined();
  });

  it('returns pageBackground', () => {
    expect(getEffectivePageBackground({ pageBackground: '#fff' })).toBe('#fff');
  });

  it('falls back to chart.backgroundColor when pageBackground is not set', () => {
    expect(getEffectivePageBackground({ chart: { backgroundColor: '#f8fafc' } })).toBe('#f8fafc');
    expect(getEffectivePageBackground({ chart: { backgroundColor: 'var(--chart-bg)' } })).toBe('var(--chart-bg)');
  });

  it('prefers an explicit pageBackground over chart.backgroundColor', () => {
    expect(getEffectivePageBackground({ pageBackground: '#fff', chart: { backgroundColor: '#f8fafc' } })).toBe('#fff');
  });

  it('ignores the background shorthand', () => {
    expect(getEffectivePageBackground({ chart: { background: 'linear-gradient(red, blue)' } })).toBeUndefined();
  });
});
