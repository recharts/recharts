import { describe, it, expect } from 'vitest';
import { isPositiveNumber, isWellBehavedNumber } from '../../src/util/isWellBehavedNumber';

describe('isWellBehavedNumber', () => {
  it.each([
    [false, null],
    [false, undefined],
    [false, 'a'],
    [false, '1'],
    [false, NaN],
    [false, Symbol('a')],
    [false, []],
    [false, {}],
    [false, () => {}],
    [false, new Date()],
    [false, new Map()],
    [false, new Set()],
    [false, Infinity],
    [false, -Infinity],
    [true, -0],
    [true, 3],
    [true, -3],
    [true, -3.1],
    [true, 0.1],
  ])('should return %s when the input is %s', (expected, value) => {
    expect(isWellBehavedNumber(value)).toBe(expected);
  });
});

describe('isPositiveNumber', () => {
  it.each([
    [false, null],
    [false, undefined],
    [false, 'a'],
    [false, '1'],
    [false, NaN],
    [false, Symbol('a')],
    [false, []],
    [false, {}],
    [false, () => {}],
    [false, new Date()],
    [false, new Map()],
    [false, new Set()],
    [false, -Infinity],
    [false, 0],
    [false, -0],
    [false, -3.1],
    [false, -0.1],
    [true, 3],
    [true, 3.1],
  ])('should return %s when the input is %s', (expected, value) => {
    expect(isPositiveNumber(value)).toBe(expected);
  });
});
