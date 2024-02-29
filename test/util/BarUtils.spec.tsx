import { describe, test, expect, vi } from 'vitest';
import { minPointSizeCallback } from '../../src/util/BarUtils';

describe('BarUtils', () => {
  describe('minPointSizeCallback', () => {
    test('should return a number if number is passed', () => {
      const minPointSize = minPointSizeCallback(5)(1, 0);
      expect(minPointSize).toEqual(5);
    });

    test('should return a number if a function is passed that returns a number', () => {
      const spy = vi.fn().mockReturnValue(10);
      const minPointSize = minPointSizeCallback(spy)(200, 0);
      expect(spy).toHaveBeenCalledWith(200, 0);
      expect(minPointSize).toEqual(10);
    });

    test('should throw an invariant when any other datatype is passed as value', () => {
      const spy = vi.fn().mockReturnValue(10);
      expect(() => minPointSizeCallback(spy, 1)('100', 0)).toThrow();
    });
  });
});
