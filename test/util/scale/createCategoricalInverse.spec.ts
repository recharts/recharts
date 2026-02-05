import { describe, it, expect } from 'vitest';
import { scaleLinear } from 'victory-vendor/d3-scale';
import { bisect, createCategoricalInverse } from '../../../src/util/scale/createCategoricalInverse';
import { CustomScaleDefinition } from '../../../src';

describe('bisect', () => {
  it('should return the correct insertion index in an ascending array', () => {
    const haystack = [1, 3, 5, 7, 9];
    expect(bisect(haystack, 0)).toBe(0);
    expect(bisect(haystack, 4)).toBe(2);
    expect(bisect(haystack, 10)).toBe(5);
  });

  it('should return the correct insertion index in a descending array', () => {
    const haystack = [9, 7, 5, 3, 1];
    expect(bisect(haystack, 10)).toBe(0);
    expect(bisect(haystack, 6)).toBe(2);
    expect(bisect(haystack, 0)).toBe(5);
  });

  it('should return 0 when the haystack has two identical elements', () => {
    const haystack = [5, 5];
    expect(bisect(haystack, 5)).toBe(0);
  });

  it('should return 0 for an empty array', () => {
    const haystack: number[] = [];
    expect(bisect(haystack, 5)).toBe(0);
  });

  it('should return 0 for a single-element array', () => {
    const haystack = [3];
    expect(bisect(haystack, 5)).toBe(0);
  });
});

describe('createCategoricalInverse', () => {
  it('should return undefined when scale is undefined', () => {
    const actual = createCategoricalInverse(undefined);
    expect(actual).toBeUndefined();
  });

  it('should return undefined when domain is empty', () => {
    // @ts-expect-error this type forces strings into a number scale
    const mockScale: CustomScaleDefinition = scaleLinear().domain([]).range([0, 100]);
    const actual = createCategoricalInverse(mockScale);
    expect(actual).toBeUndefined();
  });

  it('should return undefined when range has less than two elements', () => {
    // @ts-expect-error this type forces strings into a number scale
    const mockScale: CustomScaleDefinition = scaleLinear().domain([0, 1]).range([0]);
    const actual = createCategoricalInverse(mockScale);
    expect(actual).toBeUndefined();
  });

  it('should return a function that maps pixel values to domain values', () => {
    // @ts-expect-error this type forces strings into a number scale
    const mockScale: CustomScaleDefinition = scaleLinear().domain([0, 2]).range([0, 100]);
    const inverse = createCategoricalInverse(mockScale);
    expect(inverse).toBeDefined();
    if (inverse) {
      expect(inverse(0)).toBe(0);
      expect(inverse(50)).toBe(0);
      expect(inverse(75)).toBe(2);
      expect(inverse(100)).toBe(2);
    }
  });

  it('should use allDataPointsOnAxis if provided', () => {
    // @ts-expect-error this type forces strings into a number scale
    const mockScale: CustomScaleDefinition = scaleLinear().domain([0, 2]).range([0, 100]);
    const allDataPoints = [0, 1, 2];
    const inverse = createCategoricalInverse(mockScale, allDataPoints);
    expect(inverse).toBeDefined();
    if (inverse) {
      expect(inverse(0)).toBe(0);
      expect(inverse(45)).toBe(1);
      expect(inverse(75)).toBe(1);
      expect(inverse(100)).toBe(2);
    }
  });
});
