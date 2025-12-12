import { describe, it, expect } from 'vitest';
import { simplifyType } from './generateApiDoc';

describe('simplifyType', () => {
  it('should handle simple unions', () => {
    expect(simplifyType('string | number')).toBe('string | number');
  });

  it('should handle unions with object types containing unions', () => {
    const input = '"top" | "left" | { x?: number | Percent; y?: number | Percent; }';
    // Current buggy behavior would likely return a mangled string
    // Expected behavior:
    expect(simplifyType(input, true)).toBe(input);
  });

  it('should handle complex nested structures', () => {
    const input = 'Array<{ id: string | number } | string>';
    expect(simplifyType(input, true)).toBe('Array<{ id: string | number } | string>');
  });
});
