import {
  scaleBand,
  scaleDiverging,
  scaleDivergingLog,
  scaleDivergingPow,
  scaleDivergingSqrt,
  scaleDivergingSymlog,
  scaleIdentity,
  scaleLinear,
  scaleLog,
  scaleOrdinal,
  scalePoint,
  scalePow,
  scaleQuantile,
  scaleQuantize,
  scaleRadial,
  scaleSequential,
  scaleSequentialLog,
  scaleSequentialPow,
  scaleSequentialQuantile,
  scaleSequentialSqrt,
  scaleSequentialSymlog,
  scaleSqrt,
  scaleThreshold,
  scaleTime,
  scaleUtc,
} from 'victory-vendor/d3-scale';
import { parseScale } from '../../../src/util/ChartUtils';

describe('parseScale', () => {
  describe('d3-scale function string', () => {
    test.each([
      ['linear', 'scaleLinear', scaleLinear()],
      ['Linear', 'scaleLinear', scaleLinear()],
      ['pow', 'scalePow', scalePow()],
      ['sqrt', 'scaleSqrt', scaleSqrt()],
      ['log', 'scaleLog', scaleLog()],
      ['identity', 'scaleIdentity', scaleIdentity()],
      ['radial', 'scaleRadial', scaleRadial()],
      ['time', 'scaleTime', scaleTime()],
      ['utc', 'scaleUtc', scaleUtc()],
      ['sequential', 'scaleSequential', scaleSequential()],
      ['sequentialLog', 'scaleSequentialLog', scaleSequentialLog()],
      ['sequentialPow', 'scaleSequentialPow', scaleSequentialPow()],
      ['sequentialSqrt', 'scaleSequentialSqrt', scaleSequentialSqrt()],
      ['sequentialSymlog', 'scaleSequentialSymlog', scaleSequentialSymlog()],
      ['sequentialQuantile', 'scaleSequentialQuantile', scaleSequentialQuantile()],
      ['diverging', 'scaleDiverging', scaleDiverging()],
      ['divergingLog', 'scaleDivergingLog', scaleDivergingLog()],
      ['divergingPow', 'scaleDivergingPow', scaleDivergingPow()],
      ['divergingSqrt', 'scaleDivergingSqrt', scaleDivergingSqrt()],
      ['divergingSymlog', 'scaleDivergingSymlog', scaleDivergingSymlog()],
      ['quantize', 'scaleQuantize', scaleQuantize()],
      ['quantile', 'scaleQuantile', scaleQuantile()],
      ['threshold', 'scaleThreshold', scaleThreshold()],
      ['ordinal', 'scaleOrdinal', scaleOrdinal()],
      ['band', 'scaleBand', scaleBand()],
      ['point', 'scalePoint', scalePoint()],
    ])('with input %s should return %s', (input, expectedName, expectedFn) => {
      const result = parseScale({ scale: input });
      expect(result).toEqual({
        realScaleType: expectedName,
        scale: expect.any(Function),
      });
      // when defined as a d3-scale keyword then the `realScaleType` starts with the prefix `scale`
      expect(result.realScaleType).toContain('scale');
      // This isn't really a great way to compare two functions but I couldn't figure out how to do any better with jest
      expect(Object.keys(result.scale)).toEqual(Object.keys(expectedFn));
    });
  });

  describe('invalid values should return default scale', () => {
    test.each([
      '',
      'not-a-scale',
      null,
      undefined,
      NaN,
      1,
      true,
      false,
      'sequentiallog',
      'LINEAR',
      'lInEaR',
      'scaleLinear',
    ])('%o', input => {
      const result = parseScale({ scale: input } as never);
      expect(result).toEqual({
        realScaleType: 'point', // sic! not 'scalePoint' but 'point'!
        scale: expect.any(Function),
      });
    });
  });

  it('should return function without changes and without realScaleType', () => {
    function anon() {
      return 0;
    }
    const result = parseScale({ scale: anon });
    expect(result).toEqual({
      scale: anon,
    });
  });

  describe('scale: auto', () => {
    it('should return band scale for radial layout and radius axis', () => {
      const result = parseScale({ scale: 'auto', layout: 'radial', axisType: 'radiusAxis' });
      expect(result).toEqual({
        realScaleType: 'band', // no `scale` prefix either
        scale: expect.any(Function),
      });
    });

    it('should return linear scale for radial layout and angle axis', () => {
      const result = parseScale({ scale: 'auto', layout: 'radial', axisType: 'angleAxis' });
      expect(result).toEqual({
        realScaleType: 'linear',
        scale: expect.any(Function),
      });
    });

    // ComposedChart is missing from here because it's special
    const pointChartTypes = ['LineChart', 'AreaChart'];
    const otherChartTypes = [
      'BarChart',
      'PieChart',
      'RadarChart',
      'RadialBarChart',
      'ScatterChart',
      'FunnelChart',
      'Treemap',
      'SankeyChart',
    ];

    test.each(pointChartTypes)(
      'should return pointScale if chartType = %s and type = category and hasBar is false',
      chartType => {
        const result = parseScale({ scale: 'auto', type: 'category' }, chartType, false);
        expect(result).toEqual({
          realScaleType: 'point',
          scale: expect.any(Function),
        });
      },
    );

    test.each(pointChartTypes)(
      'should return pointScale if chartType = %s and type = category and hasBar is undefined',
      chartType => {
        const result = parseScale({ scale: 'auto', type: 'category' }, chartType, undefined);
        expect(result).toEqual({
          realScaleType: 'point',
          scale: expect.any(Function),
        });
      },
    );

    it('should return bandScale if chartType = ComposedChart and type = category and hasBar is true', () => {
      const result = parseScale({ scale: 'auto', type: 'category' }, 'ComposedChart', true);
      expect(result).toEqual({
        realScaleType: 'band',
        scale: expect.any(Function),
      });
    });

    it('should return pointScale if chartType = ComposedChart and type = category and hasBar is false', () => {
      const result = parseScale({ scale: 'auto', type: 'category' }, 'ComposedChart', false);
      expect(result).toEqual({
        realScaleType: 'point',
        scale: expect.any(Function),
      });
    });

    it('should return pointScale if chartType = ComposedChart and type = category and hasBar is undefined', () => {
      const result = parseScale({ scale: 'auto', type: 'category' }, 'ComposedChart', undefined);
      expect(result).toEqual({
        realScaleType: 'point',
        scale: expect.any(Function),
      });
    });

    test.each(otherChartTypes)('should return bandScale if chartType = %s and type = category', chartType => {
      const result = parseScale({ scale: 'auto', type: 'category' }, chartType);
      expect(result).toEqual({
        realScaleType: 'band',
        scale: expect.any(Function),
      });
    });

    test.each(otherChartTypes)('should return linearScale if chartType = %s and type = number', chartType => {
      const result = parseScale({ scale: 'auto', type: 'number' }, chartType);
      expect(result).toEqual({
        realScaleType: 'linear',
        scale: expect.any(Function),
      });
    });
  });
});
