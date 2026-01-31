import { describe, it, expect } from 'vitest';
import { isReactComponent } from './isReactComponent';

describe('isReactComponent', () => {
  it('should return true for names starting with Uppercase', () => {
    expect(isReactComponent('Area')).toBe(true);
    expect(isReactComponent('XAxis')).toBe(true);
    expect(isReactComponent('CartesianGrid')).toBe(true);
    expect(isReactComponent('ResponsiveContainer')).toBe(true);
  });

  it('should return false for names starting with lowercase', () => {
    expect(isReactComponent('useChart')).toBe(false);
    expect(isReactComponent('getChartPointer')).toBe(false);
    expect(isReactComponent('getNiceTickValues')).toBe(false);
    expect(isReactComponent('formatNumber')).toBe(false);
  });

  it('should return false for hooks (starting with use)', () => {
    expect(isReactComponent('useXAxis')).toBe(false);
    expect(isReactComponent('useLegend')).toBe(false);
  });

  it('should return false for known non-component exports', () => {
    expect(isReactComponent('DefaultZIndexes')).toBe(false);
    expect(isReactComponent('Global')).toBe(false);
  });
});
