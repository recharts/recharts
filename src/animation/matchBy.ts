import { DataKey } from '../util/types';
import { getValueByDataKey } from '../util/ChartUtils';

/**
 * A function that extracts a key from an animation item for matching purposes.
 * Items in the previous and next arrays that return the same key are considered
 * the same logical item and will animate between their positions.
 *
 * @param item The chart item (e.g., a bar rectangle, a line point, a pie sector)
 * @param index The index of the item in the array
 * @returns A string or number key, or null if the item cannot be matched
 */
export type AnimationMatchBy<T> = (item: T, index: number) => string | number | null;

/**
 * The union of all accepted `animationMatchBy` prop values:
 * a built-in sentinel string, or a custom matching function.
 */
export type AnimationMatchByProp<T> = typeof matchByIndex | typeof matchAppend | AnimationMatchBy<T>;

/**
 * Match animation items by their array index (the default behavior).
 *
 * Previous items are paired with next items based on their position
 * in the array, with proportional stretching when array lengths differ.
 * When going from 5 to 15 items, each old point "covers" approximately 3 new points;
 * when shrinking, some old points are skipped.
 *
 * @example
 * import { matchByIndex } from 'recharts';
 * <Line animationMatchBy={matchByIndex} />
 */
export const matchByIndex = 'index' as const;

/**
 * Match animation items sequentially: previous item 0 pairs with next item 0,
 * previous item 1 pairs with next item 1, and so on. When the new array is longer,
 * the extra items have no match and animate in from their default position.
 * When the new array is shorter, the extra old items are simply dropped.
 *
 * This is useful when new data is appended at the end of the array and you want
 * existing points to stay in place while new points animate in.
 *
 * @example
 * import { matchAppend } from 'recharts';
 * <Line animationMatchBy={matchAppend} />
 */
export const matchAppend = 'append' as const;

/**
 * Create a matching function that pairs items by a data key from their payload.
 *
 * Useful for time-series or streaming charts where new data points are added
 * to one end and old points are removed from the other. This ensures existing
 * points animate smoothly to their new positions instead of shifting by index.
 *
 * @param dataKey The key to look up in each item's payload (e.g., 'timestamp', 'date', 'id')
 * @returns An AnimationMatchBy function that can be passed to the animationMatchBy prop
 *
 * @example
 * import { matchByDataKey } from 'recharts';
 * <Line animationMatchBy={matchByDataKey('timestamp')} />
 * <Bar animationMatchBy={matchByDataKey('name')} />
 * <Pie animationMatchBy={matchByDataKey('id')} />
 */
export function matchByDataKey(dataKey: DataKey<Record<string, unknown>>): AnimationMatchBy<{ payload?: unknown }> {
  return (item: { payload?: unknown }) => {
    if (item.payload == null || typeof item.payload !== 'object') return null;
    const value = getValueByDataKey(item.payload as Record<string, unknown>, dataKey);
    if (value == null) return null;
    if (typeof value === 'string' || typeof value === 'number') return value;
    return JSON.stringify(value);
  };
}

/**
 * Align previous items to next items using the given matching strategy.
 *
 * Returns an array of the same length as `nextItems`, where `result[i]` is the
 * previous item that corresponds to `nextItems[i]`, or `undefined` if there is
 * no match. After alignment, interpolation functions can simply pair items by index.
 *
 * Strategies:
 * - `matchByIndex` (default): proportional stretch — `prev[floor(i × prevLen/nextLen)]`
 * - `matchAppend`: sequential 1:1 — `prev[i]` (undefined when `i ≥ prevLen`)
 * - custom function: key-based lookup
 *
 * @internal
 */
export function alignItems<T>(
  prevItems: ReadonlyArray<T>,
  nextItems: ReadonlyArray<T>,
  matchBy: AnimationMatchByProp<T>,
): ReadonlyArray<T> {
  if (matchBy === matchByIndex) {
    const factor = prevItems.length / nextItems.length;
    // Max index is floor((nextLen-1) * prevLen/nextLen) which is always < prevLen,
    // but TypeScript doesn't know that, so we cast.
    return nextItems.map((_, i) => prevItems[Math.floor(i * factor)] as T);
  }
  if (matchBy === matchAppend) {
    return nextItems.map((_, i) => prevItems[i] as T);
  }
  return alignByKey(prevItems, nextItems, matchBy);
}

/**
 * Align previous items to match next items by key.
 *
 * Returns an array of the same length as nextItems, where result[i] is
 * the previous item whose key matches nextItems[i], or undefined if no match.
 *
 * @internal
 */
function alignByKey<T>(
  prevItems: ReadonlyArray<T>,
  nextItems: ReadonlyArray<T>,
  matchBy: AnimationMatchBy<T>,
): ReadonlyArray<T> {
  return alignByKeyWithRemovals(prevItems, nextItems, matchBy).aligned;
}

/**
 * Result of aligning items with removal tracking.
 */
export interface AlignmentResult<T> {
  /** Aligned items: same length as nextItems, result[i] is the matched prev item or undefined */
  aligned: ReadonlyArray<T>;
  /** Items present in prevItems but not matched to any nextItem */
  removed: ReadonlyArray<T>;
}

/**
 * Like alignItems but also returns the list of previous items that were
 * not matched to any next item. These "removed" items can be animated off-screen.
 *
 * For `matchByIndex` and `matchAppend`, removed is always empty because
 * those strategies don't use identity-based matching.
 *
 * @internal
 */
export function alignItemsWithRemovals<T>(
  prevItems: ReadonlyArray<T>,
  nextItems: ReadonlyArray<T>,
  matchBy: AnimationMatchByProp<T>,
): AlignmentResult<T> {
  if (matchBy === matchByIndex) {
    return { aligned: alignItems(prevItems, nextItems, matchBy), removed: [] };
  }
  if (matchBy === matchAppend) {
    return { aligned: alignItems(prevItems, nextItems, matchBy), removed: [] };
  }
  return alignByKeyWithRemovals(prevItems, nextItems, matchBy);
}

/**
 * Align previous items to match next items by key, and track removed items.
 *
 * @internal
 */
function alignByKeyWithRemovals<T>(
  prevItems: ReadonlyArray<T>,
  nextItems: ReadonlyArray<T>,
  matchBy: AnimationMatchBy<T>,
): AlignmentResult<T> {
  // Build a map of key → prev item (first occurrence wins)
  const prevMap = new Map<string | number, T>();
  for (let i = 0; i < prevItems.length; i++) {
    const item = prevItems[i];
    if (item == null) continue;
    const key = matchBy(item, i);
    if (key != null && !prevMap.has(key)) {
      prevMap.set(key, item);
    }
  }

  // Track which prev keys were matched
  const matchedKeys = new Set<string | number>();

  const aligned = nextItems.map((next, i) => {
    const key = matchBy(next, i);
    if (key != null) {
      const prev = prevMap.get(key);
      if (prev !== undefined) {
        matchedKeys.add(key);
        return prev;
      }
    }
    return undefined as unknown as T;
  });

  // Removed = prev items whose keys were not matched to any next item
  const removed: T[] = [];
  for (const [key, item] of prevMap) {
    if (!matchedKeys.has(key)) {
      removed.push(item);
    }
  }

  return { aligned, removed };
}
