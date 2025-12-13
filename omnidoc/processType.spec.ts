import { describe, it, expect } from 'vitest';
import { processType } from './generateApiDoc';

describe('processType', () => {
  it('should handle simple unions', () => {
    expect(processType(['string', 'number'], false)).toBe('string | number');
  });

  it('should handle unions with object types containing unions', () => {
    const input = ['"top"', '"left"', '{ x?: number | Percent; y?: number | Percent; }'];
    const expected = '"top" | "left" | { x?: number | Percent; y?: number | Percent; }';
    expect(processType(input, true)).toBe(expected);
  });

  it('should handle complex nested structures', () => {
    // This case was originally testing that generic array syntax wasn't mangled.
    // In the new world, this comes in as a single type string "Array<...>" because it's not a top-level union.
    const input = ['Array<{ id: string | number } | string>'];
    expect(processType(input, true)).toBe('Array<{ id: string | number } | string>');
  });

  it('should deduplicate types', () => {
    expect(processType(['string', 'string'], false)).toBe('string');
  });

  it('should filter undefined strings', () => {
    expect(processType(['string', 'undefined'], false)).toBe('string');
  });
});
