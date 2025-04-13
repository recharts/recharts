import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useAnimationId } from '../../src/util/useAnimationId';

describe('useAnimationId', () => {
  it('should return a unique animation id', () => {
    const input = { foo: 'bar' };
    const prefix = 'test-';
    const { result } = renderHook(() => useAnimationId(input, prefix));
    const animationId = result.current;
    expect(animationId).toBeDefined();
    expect(animationId.startsWith(prefix)).toBe(true);
  });

  it('should change animation id when input changes', () => {
    const input1 = { foo: 'bar' };
    const input2 = { foo: 'baz' };
    const prefix = 'test-';

    const { result, rerender } = renderHook(({ input }) => useAnimationId(input, prefix), {
      initialProps: { input: input1 },
    });

    const animationId1 = result.current;

    rerender({ input: input2 });

    const animationId2 = result.current;

    expect(animationId1).not.toEqual(animationId2);
  });

  it('should not change animation id when input does not change', () => {
    const input1 = { foo: 'bar' };
    const prefix = 'test-';

    const { result, rerender } = renderHook(({ input }) => useAnimationId(input, prefix), {
      initialProps: { input: input1 },
    });

    const animationId1 = result.current;

    rerender({ input: input1 });

    const animationId2 = result.current;

    expect(animationId1).toBe(animationId2);
  });
});
