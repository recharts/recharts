import { getValueByDataKey } from '../util/ChartUtils';
import { DataKey } from '../util/types';

export interface AnimatablePoint {
  x: number | null;
  y: number | null;
  payload?: unknown;
}

/** 'index' preserves legacy behavior; 'x' matches by coordinate; a DataKey or function matches by identity. */
export type PointMatchingStrategy<T extends AnimatablePoint = AnimatablePoint> =
  | 'index'
  | 'x'
  | DataKey<T['payload']>
  | ((point: T, index: number) => string | number | null);

export interface MatchedPoint<T> {
  current: T;
  currentIndex: number;
  previous: T | null;
}

function getPointKey<T extends AnimatablePoint>(
  point: T,
  index: number,
  strategy: PointMatchingStrategy<T>,
): string | number | null {
  if (strategy === 'index') {
    return index;
  }

  if (typeof strategy === 'function') {
    return strategy(point, index);
  }

  // strategy is a DataKey - get value from payload
  if (point.payload != null) {
    const value = getValueByDataKey(point.payload, strategy);
    if (value != null) {
      if (typeof value === 'string' || typeof value === 'number') {
        return value;
      }
      return JSON.stringify(value);
    }
  }

  return null;
}

function buildPreviousPointsMap<T extends AnimatablePoint>(
  previousPoints: ReadonlyArray<T>,
  strategy: PointMatchingStrategy<T>,
): Map<string | number, T> {
  const map = new Map<string | number, T>();

  for (let i = 0; i < previousPoints.length; i++) {
    const point = previousPoints[i];
    if (point == null) continue;
    const key = getPointKey(point, i, strategy);
    if (key != null) {
      if (!map.has(key)) {
        map.set(key, point);
      }
    }
  }

  return map;
}

export interface MatchResult<T> {
  matched: ReadonlyArray<MatchedPoint<T>>;
  removed: ReadonlyArray<T>;
}

/**
 * Match current points to previous points using the given strategy.
 * Used during animation to determine where each point should animate from.
 */
export function matchPointsByStrategy<T extends AnimatablePoint>(
  currentPoints: ReadonlyArray<T>,
  previousPoints: ReadonlyArray<T> | null,
  strategy: PointMatchingStrategy<T>,
): ReadonlyArray<MatchedPoint<T>> {
  if (!previousPoints || previousPoints.length === 0) {
    return currentPoints.map((current, currentIndex) => ({
      current,
      currentIndex,
      previous: null,
    }));
  }

  // For 'index' strategy, use the legacy stretching algorithm for backward compatibility.
  if (strategy === 'index') {
    const prevPointsDiffFactor = previousPoints.length / currentPoints.length;
    return currentPoints.map((current, currentIndex): MatchedPoint<T> => {
      const prevPointIndex = Math.floor(currentIndex * prevPointsDiffFactor);
      const previous = previousPoints[prevPointIndex] ?? null;
      return {
        current,
        currentIndex,
        previous,
      };
    });
  }

  const previousMap = buildPreviousPointsMap(previousPoints, strategy);

  return currentPoints.map((current, currentIndex): MatchedPoint<T> => {
    const key = getPointKey(current, currentIndex, strategy);
    const previous = key != null ? (previousMap.get(key) ?? null) : null;

    return {
      current,
      currentIndex,
      previous,
    };
  });
}

/** Like matchPointsByStrategy but also returns points that were removed between frames. */
export function matchPointsWithRemovals<T extends AnimatablePoint>(
  currentPoints: ReadonlyArray<T>,
  previousPoints: ReadonlyArray<T> | null,
  strategy: PointMatchingStrategy<T>,
): MatchResult<T> {
  const matched = matchPointsByStrategy(currentPoints, previousPoints, strategy);

  if (!previousPoints || previousPoints.length === 0 || strategy === 'index') {
    return { matched, removed: [] };
  }

  const currentKeys = new Set<string | number>();
  for (let i = 0; i < currentPoints.length; i++) {
    const point = currentPoints[i];
    if (point == null) continue;
    const key = getPointKey(point, i, strategy);
    if (key != null) {
      currentKeys.add(key);
    }
  }

  const removed: T[] = [];
  for (let i = 0; i < previousPoints.length; i++) {
    const point = previousPoints[i];
    if (point == null) continue;
    const key = getPointKey(point, i, strategy);
    if (key != null && !currentKeys.has(key)) {
      removed.push(point);
    }
  }

  return { matched, removed };
}

function getComparisonValue<T extends AnimatablePoint>(point: T, strategy: PointMatchingStrategy<T>): number | null {
  if (strategy === 'index') {
    return point.x;
  }

  if (typeof strategy === 'function') {
    const key = strategy(point, 0);
    return typeof key === 'number' ? key : null;
  }

  if (point.payload != null) {
    const value = getValueByDataKey(point.payload, strategy);
    if (typeof value === 'number') {
      return value;
    }
  }

  return null;
}

/** Determine whether a new unmatched point should enter from the left or right edge. */
export function getNewPointEntryDirection<T extends AnimatablePoint>(
  point: T,
  previousPoints: ReadonlyArray<T> | null,
  strategy: PointMatchingStrategy<T> = 'index',
): 'left' | 'right' {
  if (!previousPoints || previousPoints.length === 0) {
    return 'right';
  }

  const pointValue = getComparisonValue(point, strategy);
  if (pointValue === null) {
    return 'right';
  }

  let minValue = Infinity;
  let maxValue = -Infinity;

  for (const prevPoint of previousPoints) {
    const prevValue = getComparisonValue(prevPoint, strategy);
    if (prevValue !== null) {
      minValue = Math.min(minValue, prevValue);
      maxValue = Math.max(maxValue, prevValue);
    }
  }

  if (minValue === Infinity) {
    return 'right';
  }

  if (pointValue < minValue) {
    return 'left';
  }

  return 'right';
}

interface MatchedEndpoints<T extends AnimatablePoint> {
  leftmost: { current: T; previous: T } | null;
  rightmost: { current: T; previous: T } | null;
  avgSpacing: number;
  avgShift: number;
}

function findMatchedEndpoints<T extends AnimatablePoint>(
  matchedPoints: ReadonlyArray<MatchedPoint<T>>,
): MatchedEndpoints<T> {
  let leftmost: { current: T; previous: T } | null = null;
  let rightmost: { current: T; previous: T } | null = null;

  let totalShift = 0;
  let matchedCount = 0;

  for (const match of matchedPoints) {
    if (match.previous) {
      const pair = { current: match.current, previous: match.previous };
      if (!leftmost || (match.current.x ?? Infinity) < (leftmost.current.x ?? Infinity)) {
        leftmost = pair;
      }
      if (!rightmost || (match.current.x ?? -Infinity) > (rightmost.current.x ?? -Infinity)) {
        rightmost = pair;
      }
      if (match.current.x !== null && match.previous.x !== null) {
        totalShift += match.previous.x - match.current.x;
        matchedCount++;
      }
    }
  }

  const allCurrentX = matchedPoints
    .map(m => m.current.x)
    .filter((x): x is number => x !== null)
    .sort((a, b) => a - b);

  const firstX = allCurrentX[0] ?? 0;
  const lastX = allCurrentX[allCurrentX.length - 1] ?? 0;
  const avgSpacing = allCurrentX.length > 1 ? (lastX - firstX) / (allCurrentX.length - 1) : 100;

  const avgShift = matchedCount > 0 ? totalShift / matchedCount : 0;

  return { leftmost, rightmost, avgSpacing, avgShift };
}

/**
 * Interpolate matched, new, and removed points for a single animation frame.
 * Returns the full set of points to render at time t (0 = previous positions, 1 = current positions).
 */
export function interpolateMatchedPoints<T extends AnimatablePoint>(
  matchedPoints: ReadonlyArray<MatchedPoint<T>>,
  removedPoints: ReadonlyArray<T>,
  t: number,
  interpolateFn: (from: unknown, to: number | null, t: number) => number | null,
  animateNewValues: boolean,
): T[] {
  if (t === 1) {
    return matchedPoints.map(m => m.current);
  }

  const { leftmost, rightmost, avgSpacing, avgShift } = findMatchedEndpoints(matchedPoints);

  const interpolated: T[] = matchedPoints.map(({ current, previous }): T => {
    if (previous) {
      return {
        ...current,
        x: interpolateFn(previous.x, current.x, t),
        y: interpolateFn(previous.y, current.y, t),
      };
    }
    // New point: extrapolate entry position from nearest matched endpoint
    if (animateNewValues && current.x !== null) {
      let entryX: number;

      if (leftmost && current.x < (leftmost.current.x ?? Infinity)) {
        // New point is to the LEFT of all matched points
        const spacingUnits = ((leftmost.current.x ?? 0) - current.x) / avgSpacing;
        entryX = (leftmost.previous.x ?? 0) - spacingUnits * avgSpacing;
      } else if (rightmost && current.x > (rightmost.current.x ?? -Infinity)) {
        // New point is to the RIGHT of all matched points
        const spacingUnits = (current.x - (rightmost.current.x ?? 0)) / avgSpacing;
        entryX = (rightmost.previous.x ?? 0) + spacingUnits * avgSpacing;
      } else {
        entryX = current.x + avgShift;
      }

      return {
        ...current,
        x: interpolateFn(entryX, current.x, t),
        y: current.y,
      };
    }
    return current;
  });

  // Removed points slide out in the direction of the overall shift
  const removedInterpolated: T[] = removedPoints.map((removed): T => {
    if (removed.x !== null) {
      return {
        ...removed,
        x: interpolateFn(removed.x, removed.x - avgShift, t),
        y: removed.y,
      };
    }
    return removed;
  });

  const result = [...interpolated, ...removedInterpolated];
  result.sort((a, b) => (a.x ?? 0) - (b.x ?? 0));
  return result;
}
