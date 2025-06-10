import { describe, it, expect } from 'vitest';
import { getDashCase, getIntersectionKeys, getTransitionVal, mapObject } from '../../src/animation/util';

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
