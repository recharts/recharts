import { describe, it, expect } from 'vitest';
import {
  getDashCase,
  getIntersectionKeys,
  getTransitionVal,
  interpolateCSSValue,
  mapObject,
} from '../../src/animation/util';

describe('getDashCase', () => {
  it('should convert camelCase to dash-case', () => {
    expect(getDashCase('camelCase')).toBe('camel-case');
    expect(getDashCase('CamelCase')).toBe('-camel-case');
    expect(getDashCase('already-dash')).toBe('already-dash');
    expect(getDashCase('')).toBe('');
    expect(getDashCase('a')).toBe('a');
    expect(getDashCase('A')).toBe('-a');
  });
});

describe('getTransitionVal', () => {
  it('should return correct transition string for multiple props', () => {
    expect(getTransitionVal(['opacity', 'strokeWidth'], 300, 'ease-in')).toBe(
      'opacity 300ms ease-in,stroke-width 300ms ease-in',
    );
  });
  it('should handle empty props array', () => {
    expect(getTransitionVal([], 200, 'linear')).toBe('');
  });
  it('should handle numeric and string duration', () => {
    expect(getTransitionVal(['foo'], '500', 'ease')).toBe('foo 500ms ease');
    expect(getTransitionVal(['foo'], 500, 'ease')).toBe('foo 500ms ease');
  });
});

describe('getIntersectionKeys', () => {
  it('should return keys present in both objects', () => {
    expect(getIntersectionKeys({ a: 1, b: 2 }, { b: 3, c: 4 })).toEqual(['b']);
  });
  it('should return empty array if no intersection', () => {
    expect(getIntersectionKeys({ a: 1 }, { b: 2 })).toEqual([]);
  });
  it('should return all keys if objects have same keys', () => {
    expect(getIntersectionKeys({ a: 1, b: 2 }, { a: 3, b: 4 })).toEqual(['a', 'b']);
  });
  it('should handle empty objects', () => {
    expect(getIntersectionKeys({}, {})).toEqual([]);
    expect(getIntersectionKeys({ a: 1 }, {})).toEqual([]);
    expect(getIntersectionKeys({}, { b: 2 })).toEqual([]);
  });
});

describe('mapObject', () => {
  it('should map values using provided function', () => {
    const obj = { a: 1, b: 2 };
    const result = mapObject((k, v) => (v as number) * 2, obj);
    expect(result).toEqual({ a: 2, b: 4 });
  });
  it('should do nothing on an empty object', () => {
    expect(mapObject(() => 1, {})).toEqual({});
  });
  it('should allow mapping keys to undefined', () => {
    const obj = { a: 1 };
    const result = mapObject((): void => undefined, obj);
    expect(result).toEqual({ a: undefined });
  });
});

describe('interpolateCSSValue', () => {
  it('should interpolate scaleX from 0 to 1', () => {
    expect(interpolateCSSValue('scaleX(0)', 'scaleX(1)', 0)).toBe('scaleX(0)');
    expect(interpolateCSSValue('scaleX(0)', 'scaleX(1)', 0.5)).toBe('scaleX(0.5)');
    expect(interpolateCSSValue('scaleX(0)', 'scaleX(1)', 1)).toBe('scaleX(1)');
  });

  it('should interpolate scaleY from 0 to 1', () => {
    expect(interpolateCSSValue('scaleY(0)', 'scaleY(1)', 0.3)).toBe('scaleY(0.3)');
  });

  it('should interpolate translate with two values', () => {
    // Real usage: both from and to have matching structure
    expect(interpolateCSSValue('translate(50px, 30px)', 'translate(0px, 0px)', 0.5)).toBe('translate(25px, 15px)');
  });

  it('should handle t=0 returning the from value pattern', () => {
    expect(interpolateCSSValue('translate(100px, 200px)', 'translate(0px, 0px)', 0)).toBe('translate(100px, 200px)');
  });

  it('should handle t=1 returning the to value pattern', () => {
    expect(interpolateCSSValue('translate(100px, 200px)', 'translate(0px, 0px)', 1)).toBe('translate(0px, 0px)');
  });

  it('should handle negative numbers', () => {
    expect(interpolateCSSValue('translate(-50px, 0px)', 'translate(0px, 0px)', 0.5)).toBe('translate(-25px, 0px)');
  });

  it('should handle strings with no numbers gracefully', () => {
    expect(interpolateCSSValue('none', 'none', 0.5)).toBe('none');
  });
});
