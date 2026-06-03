import { act, renderHook } from '@testing-library/react';
import type { MutableRefObject } from 'react';
import { describe, expect, it } from 'vitest';
import { useAnimationStartSnapshot } from '../../src/animation/useAnimationStartSnapshot';

function createMutableRef<T>(current: T): MutableRefObject<T> {
  return { current };
}

describe('useAnimationStartSnapshot', () => {
  it('should expose the current ref value as the initial startValue', () => {
    const previousValueRef = createMutableRef('frame-10');

    const { result } = renderHook(() => useAnimationStartSnapshot('animation-a', previousValueRef));

    expect(result.current.startValue).toBe('frame-10');
  });

  it('should keep startValue frozen for the duration of the same animation cycle', () => {
    const previousValueRef = createMutableRef('frame-10');

    const { result, rerender } = renderHook(
      ({ animationInput }) => useAnimationStartSnapshot(animationInput, previousValueRef),
      {
        initialProps: { animationInput: 'animation-a' },
      },
    );

    act(() => {
      result.current.syncStepValue('frame-40', 0.4);
    });

    expect(previousValueRef.current).toBe('frame-40');

    rerender({ animationInput: 'animation-a' });

    expect(result.current.startValue).toBe('frame-10');
  });

  it('should capture the previous ref value as the new startValue when animationInput changes', () => {
    const previousValueRef = createMutableRef('frame-40');

    const { result, rerender } = renderHook(
      ({ animationInput }) => useAnimationStartSnapshot(animationInput, previousValueRef),
      {
        initialProps: { animationInput: 'animation-a' },
      },
    );

    rerender({ animationInput: 'animation-b' });

    expect(result.current.startValue).toBe('frame-40');

    act(() => {
      result.current.syncStepValue('frame-52', 0.4);
    });

    expect(previousValueRef.current).toBe('frame-40');

    rerender({ animationInput: 'animation-b' });

    expect(result.current.startValue).toBe('frame-40');
  });

  it('should unlock commits at t=0 without mutating the live ref', () => {
    const previousValueRef = createMutableRef('frame-40');

    const { result, rerender } = renderHook(
      ({ animationInput }) => useAnimationStartSnapshot(animationInput, previousValueRef),
      {
        initialProps: { animationInput: 'animation-a' },
      },
    );

    rerender({ animationInput: 'animation-b' });

    act(() => {
      result.current.syncStepValue('frame-40', 0);
    });

    expect(previousValueRef.current).toBe('frame-40');

    act(() => {
      result.current.syncStepValue('frame-41', 0.1);
    });

    expect(previousValueRef.current).toBe('frame-41');
  });

  it('should honor canCommit=false even after the new animation has been armed', () => {
    const previousValueRef = createMutableRef('frame-40');

    const { result, rerender } = renderHook(
      ({ animationInput }) => useAnimationStartSnapshot(animationInput, previousValueRef),
      {
        initialProps: { animationInput: 'animation-a' },
      },
    );

    rerender({ animationInput: 'animation-b' });

    act(() => {
      result.current.syncStepValue('frame-40', 0);
      result.current.syncStepValue('frame-41', 0.1, false);
    });

    expect(previousValueRef.current).toBe('frame-40');

    act(() => {
      result.current.syncStepValue('frame-42', 0.2, true);
    });

    expect(previousValueRef.current).toBe('frame-42');
  });

  it('should use the completed frame as the startValue for the next animation cycle', () => {
    const previousValueRef = createMutableRef('frame-10');

    const { result, rerender } = renderHook(
      ({ animationInput }) => useAnimationStartSnapshot(animationInput, previousValueRef),
      {
        initialProps: { animationInput: 'animation-a' },
      },
    );

    act(() => {
      result.current.syncStepValue('frame-100', 1);
    });

    expect(previousValueRef.current).toBe('frame-100');

    rerender({ animationInput: 'animation-b' });

    expect(result.current.startValue).toBe('frame-100');
  });

  it('should update the frozen snapshot to the completed frame after t=1 in the same cycle', () => {
    const previousValueRef = createMutableRef('frame-10');

    const { result, rerender } = renderHook(
      ({ animationInput }) => useAnimationStartSnapshot(animationInput, previousValueRef),
      {
        initialProps: { animationInput: 'animation-a' },
      },
    );

    act(() => {
      result.current.syncStepValue('frame-100', 1);
    });

    rerender({ animationInput: 'animation-a' });

    expect(result.current.startValue).toBe('frame-100');
  });
});
