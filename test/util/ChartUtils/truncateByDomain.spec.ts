import type { SeriesPoint } from 'victory-vendor/d3-shape';
import { truncateByDomain } from '../../../src/util/ChartUtils';

function createMockSeriesPoint(val: [number, number]): SeriesPoint<Record<number, number>> {
  // @ts-expect-error just can't make ts happy with custom properties on an array can I
  const seriesPoint: SeriesPoint<Record<number, number>> = [...val];
  seriesPoint.data = val;
  return seriesPoint;
}

describe('truncateByDomain', () => {
  test.each([{ domain: [] }, { domain: [1] }, { domain: ['', ''] }])(
    'should return value without change if domain is %o',
    ({ domain }) => {
      const value = createMockSeriesPoint([1, 2]);
      const result = truncateByDomain(value, domain as never);
      expect(result).toBe(value);
      expect(result).toEqual(createMockSeriesPoint([1, 2]));
    },
  );

  it('should return value if it fits the domain', () => {
    const value = createMockSeriesPoint([10, 20]);
    const domain = [0, 30];
    const result = truncateByDomain(value, domain);
    expect(result).toEqual([10, 20]);
  });

  it('should return value if it same as the domain', () => {
    const value = createMockSeriesPoint([10, 20]);
    const domain = [10, 20];
    const result = truncateByDomain(value, domain);
    expect(result).toEqual([10, 20]);
  });

  it('should truncate when value overflows from both ends', () => {
    const value = createMockSeriesPoint([0, 30]);
    const domain = [10, 20];
    const result = truncateByDomain(value, domain);
    expect(result).toEqual([10, 20]);
  });

  it('should truncate when value is larger than domain', () => {
    const value = createMockSeriesPoint([100, 300]);
    const domain = [10, 20];
    const result = truncateByDomain(value, domain);
    expect(result).toEqual([20, 20]);
  });

  it('should truncate when value is smaller than domain', () => {
    const value = createMockSeriesPoint([10, 20]);
    const domain = [100, 200];
    const result = truncateByDomain(value, domain);
    expect(result).toEqual([100, 100]);
  });

  it('should not change value if domain has NaN in it', () => {
    const value = createMockSeriesPoint([0, 30]);
    const domain = [NaN, NaN];
    const result = truncateByDomain(value, domain);
    expect(result).toEqual(createMockSeriesPoint([0, 30]));
  });

  it('should return domain if value has NaN in it', () => {
    const value = createMockSeriesPoint([NaN, NaN]);
    const domain = [10, 20];
    const result = truncateByDomain(value, domain);
    expect(result).toEqual([10, 20]);
  });
});
