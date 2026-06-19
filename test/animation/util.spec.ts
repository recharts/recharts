import { describe, it, expect } from 'vitest';
import { getDashCase, getTransitionVal } from '../../src/animation/util';

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
