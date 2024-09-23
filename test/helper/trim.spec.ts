import { describe, it, expect } from 'vitest';
import { trim } from './trim';

describe('trim', () => {
  it('should return null when passed null', () => {
    expect(trim(null)).toBe(null);
    expect(trim(undefined)).toBe(undefined);
  });

  it('should return string as-is if it has no whitespace or only one space', () => {
    expect(trim('')).toBe('');
    expect(trim('foo')).toBe('foo');
    expect(trim('foo bar')).toBe('foo bar');
  });

  it('should trim starting and ending spaces', () => {
    expect(trim(' foo ')).toBe('foo');
    expect(trim('foo ')).toBe('foo');
    expect(trim(' foo')).toBe('foo');
  });

  it('should trim double spaces inside the string', () => {
    expect(trim('foo  bar')).toBe('foo bar');
    expect(trim('foo        bar')).toBe('foo bar');
  });

  it('should trim newlines and indentation', () => {
    expect(
      trim(`foo
             foo
                 foo
       bar`),
    ).toBe('foo foo foo bar');
  });
});
