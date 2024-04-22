import { describe, expect } from 'vitest';
import Decimal from 'decimal.js-light';
import {
  getDigitCount,
  rangeStep,
  interpolateNumber,
  uninterpolateNumber,
  uninterpolateTruncation,
} from '../../../src/util/scale/util/arithmetic';

describe('arithmetic', () => {
  describe('getDigitCount', () => {
    it('should return 1 for value equals 0)', () => {
      expect(getDigitCount(0)).toBe(1);
    });

    it('should return 0 for value in [0.1, 1)', () => {
      expect(getDigitCount(0.1)).toBe(0);
      expect(getDigitCount(0.5)).toBe(0);
    });

    it('should return -1 for value in [0,01, 0.1)', () => {
      expect(getDigitCount(0.01)).toBe(-1);
      expect(getDigitCount(0.05)).toBe(-1);
    });

    it('should return -2 for value in [0.001, 0.01)', () => {
      expect(getDigitCount(0.001)).toBe(-2);
      expect(getDigitCount(0.005)).toBe(-2);
    });

    it('should return 2 for value in [10, 100)', () => {
      expect(getDigitCount(10)).toBe(2);
      expect(getDigitCount(99)).toBe(2);
    });

    it('should return correct digit count for large numbers', () => {
      expect(getDigitCount(1.1e21)).toBe(22);
    });

    it('should return correct digit count for small numbers', () => {
      expect(getDigitCount(1.1e-21)).toBe(-20);
    });
  });

  describe('rangeStep', () => {
    it('should generate correct range steps', () => {
      const result = rangeStep(new Decimal(0), new Decimal(5), new Decimal(1));
      expect(result).toEqual([0, 1, 2, 3, 4]);
    });

    it('should generate correct decimal range steps', () => {
      const result = rangeStep(new Decimal(0), new Decimal(1), new Decimal(0.1));
      expect(result).toEqual([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);
    });

    it('should generate correct decimal range steps with small values', () => {
      const result = rangeStep(new Decimal(0), new Decimal(0.0000035), new Decimal(0.00000035));
      expect(result).toEqual([
        0, 0.00000035, 0.0000007, 0.00000105, 0.0000014, 0.00000175, 0.0000021, 0.00000245, 0.0000028, 0.00000315,
      ]);
    });
  });

  describe('interpolate', () => {
    it('should interpolate between two numbers', () => {
      const interpolate = interpolateNumber(0, 10, 0.5);
      expect(interpolate).toBe(5);
    });

    it('should uninterpolate between two numbers', () => {
      const uninterpolate = uninterpolateNumber(0, 10, 7);
      expect(uninterpolate).toBe(0.7);
    });

    it('should uninterpolate with truncation', () => {
      const uninterpolateTruncZero = uninterpolateTruncation(0, 10, -5);
      const uninterpolateTruncOne = uninterpolateTruncation(0, 10, 15);
      expect(uninterpolateTruncZero).toBe(0);
      expect(uninterpolateTruncOne).toBe(1);
    });
  });
});
