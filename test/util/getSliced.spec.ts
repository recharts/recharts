import { describe, expect, it } from 'vitest';
import { getSliced } from '../../src/util/getSliced';

describe('getSliced', () => {
  const array = ['a', 'b', 'c', 'd'];

  it('should return the elements between the two indexes, inclusive on both ends', () => {
    expect(getSliced(array, 1, 2)).toEqual(['b', 'c']);
  });

  it('should return a single element when the two indexes are equal', () => {
    expect(getSliced(array, 2, 2)).toEqual(['c']);
  });

  it('should return the first element only when both indexes are zero', () => {
    expect(getSliced(array, 0, 0)).toEqual(['a']);
  });

  it('should return the whole array when the range covers it', () => {
    expect(getSliced(array, 0, array.length - 1)).toEqual(array);
  });

  it('should return the whole array when the end index is Infinity', () => {
    expect(getSliced(array, 0, Infinity)).toEqual(array);
  });

  it('should return an empty array when the end index is before the start index', () => {
    expect(getSliced(array, 2, 1)).toEqual([]);
  });

  it('should return the input as-is when it is not an array', () => {
    const notAnArray = { length: 2 } as unknown as ReadonlyArray<string>;
    expect(getSliced(notAnArray, 0, 1)).toBe(notAnArray);
  });
});
