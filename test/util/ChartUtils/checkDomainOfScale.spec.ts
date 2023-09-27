import {
  scaleLinear,
  scalePow,
  scaleSqrt,
  scaleLog,
  scaleIdentity,
  scaleRadial,
  scaleTime,
  scaleUtc,
  scaleSequential,
  scaleSequentialLog,
  scaleSequentialPow,
  scaleSequentialSqrt,
  scaleSequentialSymlog,
  scaleSequentialQuantile,
  scaleDiverging,
  scaleDivergingLog,
  scaleDivergingPow,
  scaleDivergingSqrt,
  scaleDivergingSymlog,
  scaleQuantize,
  scaleQuantile,
  scaleThreshold,
  scaleOrdinal,
  scaleBand,
  scalePoint,
} from 'victory-vendor/d3-scale';
import { checkDomainOfScale } from '../../../src/util/ChartUtils';

describe('checkDomainOfScale', () => {
  const short = [5, 10];
  const diverging = [1, 5, 10];
  const long = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
  const toDate = (n: number): Date => new Date(n);
  const identity = <T>(_: T): T => _;

  /*
   * This must be a function because the individual scales are mutable,
   * and the `checkDomainOfScale` does mutate them.
   * If this was a simple array then one test would affect other tests.
   */
  const getAllConvergingScales = () =>
    [
      ['scaleLinear', scaleLinear()],
      ['scaleLinear with short range', scaleLinear(short)],
      ['scaleLinear with long range', scaleLinear(long)],
      ['scaleLinear with short domain', scaleLinear(short, short)],
      ['scaleLinear with long domain', scaleLinear(long, long)],
      ['scalePow', scalePow()],
      ['scalePow with short range', scalePow(short)],
      ['scalePow with long range', scalePow(long)],
      ['scalePow with short domain', scalePow(short, short)],
      ['scalePow with long domain', scalePow(long, long)],
      ['scaleSqrt', scaleSqrt()],
      ['scaleSqrt with short range', scaleSqrt(short)],
      ['scaleSqrt with long range', scaleSqrt(long)],
      ['scaleSqrt with short domain', scaleSqrt(short, short)],
      ['scaleSqrt with long domain', scaleSqrt(long, long)],
      ['scaleLog', scaleLog()],
      ['scaleLog with short range', scaleLog(short)],
      ['scaleLog with long range', scaleLog(long)],
      ['scaleLog with short domain', scaleLog(short, short)],
      ['scaleLog with long domain', scaleLog(long, long)],
      ['scaleIdentity', scaleIdentity()],
      ['scaleIdentity with short range', scaleIdentity(short)],
      ['scaleIdentity with long range', scaleIdentity(long)],
      ['scaleRadial', scaleRadial()],
      ['scaleRadial with short range', scaleRadial(short)],
      ['scaleRadial with long range', scaleRadial(long)],
      ['scaleRadial with short domain', scaleRadial(short, short)],
      ['scaleRadial with long domain', scaleRadial(long, long)],
      ['scaleTime', scaleTime()],
      ['scaleTime with short range', scaleTime(short)],
      ['scaleTime with long range', scaleTime(long)],
      ['scaleTime with short domain', scaleTime(short.map(toDate), short)],
      ['scaleTime with long domain', scaleTime(long.map(toDate), long)],
      ['scaleUtc', scaleUtc()],
      ['scaleUtc with short range', scaleUtc(short)],
      ['scaleUtc with long range', scaleUtc(long)],
      ['scaleUtc with short domain', scaleUtc(short, short)],
      ['scaleUtc with long domain', scaleUtc(long, long)],
      ['scaleSequential', scaleSequential()],
      ['scaleSequential with short domain', scaleSequential(short)],
      ['scaleSequential with long domain', scaleSequential(long)],
      ['scaleSequentialLog', scaleSequentialLog()],
      ['scaleSequentialLog with short domain', scaleSequentialLog(short, identity)],
      ['scaleSequentialLog with long domain', scaleSequentialLog(long, identity)],
      ['scaleSequentialPow', scaleSequentialPow()],
      ['scaleSequentialPow with short domain', scaleSequentialPow(short, identity)],
      ['scaleSequentialPow with long domain', scaleSequentialPow(long, identity)],
      ['scaleSequentialSqrt', scaleSequentialSqrt()],
      ['scaleSequentialSqrt with short domain', scaleSequentialSqrt(short, identity)],
      ['scaleSequentialSqrt with long domain', scaleSequentialSqrt(long, identity)],
      ['scaleSequentialSymlog', scaleSequentialSymlog()],
      ['scaleSequentialSymlog with short domain', scaleSequentialSymlog(short, identity)],
      ['scaleSequentialSymlog with long domain', scaleSequentialSymlog(long, identity)],
      ['scaleSequentialQuantile', scaleSequentialQuantile()],
      ['scaleSequentialQuantile with short domain', scaleSequentialQuantile(short, identity)],
      ['scaleSequentialQuantile with long domain', scaleSequentialQuantile(long, identity)],
      ['scaleQuantize', scaleQuantize()],
      ['scaleQuantize with short range', scaleQuantize(short)],
      ['scaleQuantize with long range', scaleQuantize(long)],
      ['scaleQuantize with short domain', scaleQuantize(short, short)],
      ['scaleQuantize with long domain', scaleQuantize(long, long)],
      ['scaleQuantile', scaleQuantile()],
      ['scaleQuantile with short range', scaleQuantile(short)],
      ['scaleQuantile with long range', scaleQuantile(long)],
      ['scaleQuantile with short domain', scaleQuantile(short, short)],
      ['scaleQuantile with long domain', scaleQuantile(long, long)],
      ['scaleThreshold', scaleThreshold()],
      ['scaleThreshold with short range', scaleThreshold(short)],
      ['scaleThreshold with long range', scaleThreshold(long)],
      ['scaleThreshold with short domain', scaleThreshold(short, short)],
      ['scaleThreshold with long domain', scaleThreshold(long, long)],
      ['scaleOrdinal', scaleOrdinal()],
      ['scaleOrdinal with short range', scaleOrdinal(short)],
      ['scaleOrdinal with long range', scaleOrdinal(long)],
      ['scaleOrdinal with short domain', scaleOrdinal(short, short)],
      ['scaleOrdinal with long domain', scaleOrdinal(long, long)],
    ] as const;

  const getAllBandScales = () =>
    [
      ['scaleBand', scaleBand()],
      ['scaleBand with short range', scaleBand(short)],
      ['scaleBand with long range', scaleBand(long)],
      ['scaleBand with short domain', scaleBand(short, short)],
      ['scaleBand with long domain', scaleBand(long, long)],
      ['scalePoint', scalePoint()],
      ['scalePoint with short range', scalePoint(short)],
      ['scalePoint with long range', scalePoint(long)],
      ['scalePoint with short domain', scalePoint(short, short)],
      ['scalePoint with long domain', scalePoint(long, long)],
    ] as const;

  /*
   * This must be a function because the individual scales are mutable,
   * and the `checkDomainOfScale` does mutate them.
   * If this was a simple array then one test would affect other tests.
   */
  const getAllDivergingScales = () =>
    [
      ['scaleDiverging', scaleDiverging()],
      ['scaleDiverging with short domain', scaleDiverging(diverging, identity)],
      ['scaleDiverging with long domain', scaleDiverging(long, identity)],
      ['scaleDivergingLog', scaleDivergingLog()],
      ['scaleDivergingLog with short domain', scaleDivergingLog(diverging, identity)],
      ['scaleDivergingLog with long domain', scaleDivergingLog(long, identity)],
      ['scaleDivergingPow', scaleDivergingPow()],
      ['scaleDivergingPow with short domain', scaleDivergingPow(diverging, identity)],
      ['scaleDivergingPow with long domain', scaleDivergingPow(long, identity)],
      ['scaleDivergingSqrt', scaleDivergingSqrt()],
      ['scaleDivergingSqrt with short domain', scaleDivergingSqrt(diverging, identity)],
      ['scaleDivergingSqrt with long domain', scaleDivergingSqrt(long, identity)],
      ['scaleDivergingSymlog', scaleDivergingSymlog()],
      ['scaleDivergingSymlog with short domain', scaleDivergingSymlog(diverging, identity)],
      ['scaleDivergingSymlog with long domain', scaleDivergingSymlog(long, identity)],
    ] as const;

  test.each(getAllConvergingScales())('should not throw with %s', (_, scale) => {
    expect(() => checkDomainOfScale(scale)).not.toThrow();
  });

  test.each(getAllDivergingScales())('should not throw with %s', (_, scale) => {
    expect(() => checkDomainOfScale(scale)).not.toThrow();
  });

  test.each(getAllConvergingScales())('should normalize the domain of %s', (_, scale) => {
    checkDomainOfScale(scale);
    expect(scale.domain().length).toBeLessThanOrEqual(2);
  });

  test.each(getAllDivergingScales())(
    'should destroy the domain of %s because all diverging scales have domain of exactly three elements',
    (_, scale) => {
      const domainBefore = scale.domain();
      expect(domainBefore).toHaveLength(3);
      expect(domainBefore).not.toContainEqual(NaN);
      checkDomainOfScale(scale);
      const domainAfter = scale.domain();
      expect(domainAfter).toHaveLength(3);
      //   expect(domainBefore).toEqual(domainAfter);
      // this to me really looks like a bug because the function is not aware of diverging scales.
      expect(domainAfter).toContainEqual(NaN);
    },
  );

  test.each(getAllBandScales())('should not modify the domain of %s', (_, scale) => {
    const domainBefore = scale.domain();
    expect(domainBefore).not.toContainEqual(NaN);
    checkDomainOfScale(scale);
    const domainAfter = scale.domain();
    expect(domainBefore).toEqual(domainAfter);
    expect(domainAfter).not.toContainEqual(NaN);
  });
});
