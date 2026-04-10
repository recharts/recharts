import { useCallback, useRef } from 'react';
import { round } from '../util/round';

/**
 * Tracks the animated visible length of a Line's SVG path across data changes.
 *
 * Invariants:
 * 1. The visible length only grows (monotonically non-decreasing with t).
 * 2. The visible length changes continuously — no jumps when data changes mid-animation.
 *    This is achieved by tracking the maximum animated length in pixels and using it
 *    as the starting point for the next animation.
 * 3. Once the line reaches 100% visibility, it never becomes partially visible again.
 *    In that case the hook returns `null`, meaning no animation stroke-dasharray is needed.
 *
 * @param points The current set of points for the line. When this reference changes,
 *   the hook detects a data change and starts a new animation from the current visible length.
 * @returns A stable callback `(t, totalLength) => number | null` where:
 *   - `t` is the animation progress (0 to 1)
 *   - `totalLength` is the current total length of the SVG path in pixels
 *   - returns the visible length in pixels, or `null` if the line is fully visible
 */
export function useAnimatedLineLength(points: unknown): (t: number, totalLength: number) => number | null {
  const startingLengthRef = useRef(0);
  const maxAnimatedLengthRef = useRef(0);
  const reachedFullRef = useRef(false);
  const prevPointsRef = useRef(points);

  if (prevPointsRef.current !== points) {
    startingLengthRef.current = maxAnimatedLengthRef.current;
    prevPointsRef.current = points;
  }

  // The callback is stable (never changes identity) because it only reads from refs.
  // This avoids triggering unnecessary re-renders in consumers.
  return useCallback((t: number, totalLength: number): number | null => {
    if (reachedFullRef.current) {
      return null;
    }

    const visibleLength = Math.min(round(startingLengthRef.current + t * totalLength), totalLength);

    if (t > 0 && totalLength > 0) {
      maxAnimatedLengthRef.current = Math.max(maxAnimatedLengthRef.current, visibleLength);
      if (visibleLength >= totalLength) {
        reachedFullRef.current = true;
        return null;
      }
    }

    return visibleLength;
  }, []);
}
