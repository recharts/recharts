import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useAnimatedLineLength } from '../../src/cartesian/useAnimatedLineLength';
import { assertNotNull } from '../helper/assertNotNull';

describe('useAnimatedLineLength', () => {
  const pointsA = [{ x: 0, y: 0 }];
  const pointsB = [
    { x: 0, y: 0 },
    { x: 1, y: 1 },
  ];

  describe('initial animation (from zero)', () => {
    it('should return 0 at animationElapsedTime=0', () => {
      const { result } = renderHook(() => useAnimatedLineLength(pointsA));
      expect(result.current(0, 100)).toBe(0);
    });

    it('should interpolate linearly between 0 and totalLength', () => {
      const { result } = renderHook(() => useAnimatedLineLength(pointsA));
      expect(result.current(0.1, 100)).toBe(10);
      expect(result.current(0.5, 100)).toBe(50);
      expect(result.current(0.9, 100)).toBe(90);
    });

    it('should return null when animationElapsedTime=1 (fully visible)', () => {
      const { result } = renderHook(() => useAnimatedLineLength(pointsA));
      expect(result.current(1, 100)).toBeNull();
    });
  });

  describe('after data change mid-animation (interrupted)', () => {
    it('should continue from the last animated pixel length, not jump', () => {
      const { result, rerender } = renderHook(({ points }) => useAnimatedLineLength(points), {
        initialProps: { points: pointsA },
      });

      // Animate to 50% of a 100px path → 50px visible
      result.current(0.5, 100);

      // Data changes, new path is 200px
      rerender({ points: pointsB });

      // At animationElapsedTime=0, should start from 50px (continuous, no jump)
      expect(result.current(0, 200)).toBe(50);

      // At animationElapsedTime=0.25, visible = 50 + 0.25 * 200 = 100px
      expect(result.current(0.25, 200)).toBe(100);

      // At animationElapsedTime=0.75, visible = 50 + 0.75 * 200 = 200 = totalLength → fully visible, returns null
      expect(result.current(0.75, 200)).toBeNull();
    });

    it('should not jump when new totalLength is smaller', () => {
      const { result, rerender } = renderHook(({ points }) => useAnimatedLineLength(points), {
        initialProps: { points: pointsA },
      });

      // Animate to 30% of 100px → 30px
      result.current(0.3, 100);

      // Data changes, new path is only 50px
      rerender({ points: pointsB });

      // At animationElapsedTime=0, should start from 30px (continuous)
      expect(result.current(0, 50)).toBe(30);

      // At animationElapsedTime=0.4, visible = 30 + 0.4 * 50 = 50 = totalLength → fully visible, returns null
      expect(result.current(0.4, 50)).toBeNull();
    });
  });

  describe('when totalLength changes during animation', () => {
    it('should keep growing when totalLength increases mid-animation', () => {
      const { result, rerender } = renderHook(({ points }) => useAnimatedLineLength(points), {
        initialProps: { points: pointsA },
      });

      // Animate to 50% of 100px → 50px visible
      result.current(0.5, 100);

      // Data changes
      rerender({ points: pointsB });

      // At animationElapsedTime=0, start from 50px (continuous)
      expect(result.current(0, 100)).toBe(50);

      // totalLength grows to 200 mid-animation
      const v1 = result.current(0.1, 200);
      assertNotNull(v1);
      // visible = 50 + 0.1 * 200 = 70
      expect(v1).toBe(70);

      const v2 = result.current(0.3, 200);
      // visible = 50 + 0.3 * 200 = 110
      expect(v2).toBe(110);

      // visible length always grew
      expect(v2).toBeGreaterThan(v1);
    });
  });

  describe('once fully visible (proportion = 100%)', () => {
    it('should return null after the line has been fully visible', () => {
      const { result } = renderHook(() => useAnimatedLineLength(pointsA));

      // Animate to completion
      result.current(1, 100);

      // Now it should return null
      expect(result.current(0.5, 100)).toBeNull();
    });

    it('should return null even after data changes', () => {
      const { result, rerender } = renderHook(({ points }) => useAnimatedLineLength(points), {
        initialProps: { points: pointsA },
      });

      // Complete animation
      result.current(1, 100);

      // Change data
      rerender({ points: pointsB });

      // Should still return null — once full, always full
      expect(result.current(0, 200)).toBeNull();
      expect(result.current(0.5, 200)).toBeNull();
    });

    it('should return null when totalLength shrinks below previously animated length', () => {
      const { result } = renderHook(() => useAnimatedLineLength(pointsA));

      // Animate to completion at 100px
      result.current(1, 100);

      // totalLength shrinks to 50px — line is still fully visible
      expect(result.current(0.5, 50)).toBeNull();
    });
  });

  describe('callback stability', () => {
    it('should return the same function reference across rerenders', () => {
      const { result, rerender } = renderHook(({ points }) => useAnimatedLineLength(points), {
        initialProps: { points: pointsA },
      });

      const fn1 = result.current;
      rerender({ points: pointsA });
      const fn2 = result.current;

      expect(fn1).toBe(fn2);
    });

    it('should return the same function reference when points change', () => {
      const { result, rerender } = renderHook(({ points }) => useAnimatedLineLength(points), {
        initialProps: { points: pointsA },
      });

      const fn1 = result.current;
      rerender({ points: pointsB });
      const fn2 = result.current;

      expect(fn1).toBe(fn2);
    });
  });

  describe('edge cases', () => {
    it('should return 0 when totalLength is 0', () => {
      const { result } = renderHook(() => useAnimatedLineLength(pointsA));
      expect(result.current(0.5, 0)).toBe(0);
    });

    it('should not mark as fully visible when totalLength is 0', () => {
      const { result } = renderHook(() => useAnimatedLineLength(pointsA));
      result.current(1, 0);
      // Should not return null — totalLength=0 is an unmeasured path, not a completed animation
      expect(result.current(0.5, 100)).toBe(50);
    });

    it('should handle animationElapsedTime > 1 gracefully (returns null since fully visible)', () => {
      const { result } = renderHook(() => useAnimatedLineLength(pointsA));
      expect(result.current(1.5, 100)).toBeNull();
    });
  });
});
