import { describe, it, expect } from 'vitest';

describe('isArray type', () => {
  it('should refine unknown to array', () => {
    const input: unknown = [1, 2, 3];
    if (Array.isArray(input)) {
      // Here, TypeScript should understand that `input` is of type `unknown[]`
      expect(input.length).toBe(3);
      /*
       * Okay our types are more string than necessary. Here it could be Array<unknown>
       * but ReadonlyArray<unknown> is acceptable as well for what we need.
       */
      expectTypeOf(input).toEqualTypeOf<ReadonlyArray<unknown>>();
      expectTypeOf(input[0]).toEqualTypeOf<unknown>();
    } else {
      throw new Error('Input is not an array');
    }
  });

  it('should refine type union to array branch', () => {
    const input: string | number[] = [1, 2, 3];
    if (Array.isArray(input)) {
      // Here, TypeScript should understand that `input` is of type `number[]`
      expect(input.length).toBe(3);
      expectTypeOf(input).toEqualTypeOf<number[]>();
      expectTypeOf(input[0]).toEqualTypeOf<number>();
    } else {
      throw new Error('Input is not an array');
    }
  });

  it('should refine type union if one of the branches is ReadonlyArray', () => {
    const input: string | ReadonlyArray<number> = [1, 2, 3];
    if (Array.isArray(input)) {
      // Here, TypeScript should understand that `input` is of type `ReadonlyArray<number>`
      expect(input.length).toBe(3);
      expectTypeOf(input).toEqualTypeOf<ReadonlyArray<number>>();
      expectTypeOf(input[0]).toEqualTypeOf<number>();
    } else {
      throw new Error('Input is not an array');
    }
  });
});
