import { describe, expect } from 'vitest';
import { compose, curry, map, memoize, range, reverse } from '../../../src/util/scale/util/utils';

describe('functional utilities', () => {
  describe('curry', () => {
    it('should curry a function', () => {
      const add = (a: number, b: number) => a + b;
      const curriedAdd = curry(add);
      const add1 = curriedAdd(1);

      expect(add1(2)).toBe(3);
    });

    it('should curry a function with 1 arguments', () => {
      const addOne = (a: number) => a + 1;
      const curriedAddOne = curry(addOne);
      expect(curriedAddOne(1)).toBe(2);
    });
  });

  describe('range', () => {
    it('should create a range of numbers', () => {
      expect(range(0, 5)).toEqual([0, 1, 2, 3, 4]);
    });
  });

  describe('map', () => {
    const double = (x: number) => x * 2;

    it('should map over an array', () => {
      expect(map(double, [1, 2, 3])).toEqual([2, 4, 6]);
    });

    it('should map over an object', () => {
      expect(map(double, { a: 1, b: 2, c: 3 })).toEqual([2, 4, 6]);
    });
  });

  describe('compose', () => {
    const toUpper = (str: string) => str.toUpperCase();
    const addString = (str: string) => `Test ${str}`;
    it('should compose functions', () => {
      const composed = compose(toUpper, addString);
      expect(composed('hello')).toBe('TEST HELLO');
    });
  });

  describe('reverse', () => {
    it('should reverse arrays', () => {
      expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
    });

    it('should reverse strings', () => {
      expect(reverse('hello')).toBe('olleh');
    });
  });

  describe('memoize', () => {
    let callCount = 0;
    const add = (a: number, b: number) => {
      callCount++;
      return a + b;
    };
    const memoizedAdd = memoize(add);

    // if memoize works correctly, the call count should be 1 after the first call
    it('should memoize a function', () => {
      expect(memoizedAdd(1, 2)).toBe(3);
      expect(callCount).toBe(1);
      expect(memoizedAdd(1, 2)).toBe(3);
      expect(callCount).toBe(1);
    });
  });
});
