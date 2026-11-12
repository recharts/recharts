import { describe, expect } from 'vitest';
import Decimal from 'decimal.js-light';
import { getDigitCount, rangeStep } from '../../../src/util/scale/util/arithmetic';

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

    it('should not loop when the step is zero', () => {
      const result = rangeStep(new Decimal(0), new Decimal(5), new Decimal(0));
      expect(result).toEqual([0]);
    });

    it('should not loop when the step is negative', () => {
      const result = rangeStep(new Decimal(0), new Decimal(5), new Decimal(-1));
      expect(result).toEqual([0]);
    });

    it('should not loop when the step is too small to advance at Decimal precision', () => {
      // At Decimal's default 20 significant digits, 1e15 + 1e-7 rounds back to
      // 1e15, so num.add(step) never grows and num.lt(end) stays true forever.
      const result = rangeStep(new Decimal('1e15'), new Decimal('1000000000000000.000001'), new Decimal('1e-7'));
      expect(result).toEqual([1e15]);
    });
  });
});
