import { describe, test, expect } from 'vitest';
import { ChartOffset } from '../../src/util/types';
import { calculateViewBox } from '../../src/util/calculateViewBox';

describe('calculateViewBox', () => {
  test('should throw if offset is undefined', () => {
    // this should show an error - the function will not accept undefined, so typescript should highlight that too.
    // but recharts has strict mode off so this is allowed!
    expect(() => calculateViewBox(undefined)).toThrow();
  });

  test('should memoize results when passed identical offset', () => {
    const offset: ChartOffset = {
      left: 10,
      top: 20,
      width: 200,
      height: 150,
    };
    const result1 = calculateViewBox(offset);
    const result2 = calculateViewBox(offset);
    expect(result1).toEqual(result2);
    expect(result1).toBe(result2);
  });

  test('should memoize results when passed different offset but with the same values', () => {
    const offset1: ChartOffset = {
      left: 10,
      top: 20,
      width: 200,
      height: 150,
    };
    const offset2: ChartOffset = {
      left: 10,
      top: 20,
      width: 200,
      height: 150,
    };
    const result1 = calculateViewBox(offset1);
    const result2 = calculateViewBox(offset2);
    expect(result1).toEqual(result2);
    expect(result1).toBe(result2);
  });

  test('should return new instance when width and height changes', () => {
    const offset1: ChartOffset = {
      brushBottom: 5,
      top: 5,
      bottom: 5,
      left: 5,
      right: 5,
      width: 490,
      height: 290,
    };
    const offset2: ChartOffset = {
      brushBottom: 5,
      top: 5,
      bottom: 5,
      left: 5,
      right: 5,
      width: 90,
      height: 40,
    };
    const result1 = calculateViewBox(offset1);
    const result2 = calculateViewBox(offset2);
    expect(result1).not.toEqual(result2);
    expect(result1).not.toBe(result2);
  });
});
