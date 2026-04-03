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
 * Match animation items by their array index (the default behavior).
 *
 * Previous items are paired with next items based on their position
 * in the array, with proportional stretching when array lengths differ.
 *
 * @example
 * import { matchByIndex } from 'recharts';
 * <Line animationMatchBy={matchByIndex} />
 */
export const matchByIndex = 'index' as const;

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
 * Align previous items to match next items by key.
 *
 * Returns an array of the same length as nextItems, where result[i] is
 * the previous item whose key matches nextItems[i], or undefined if no match.
 *
 * This allows index-based interpolation functions to work correctly with
 * key-based matching: after alignment, prevItems[i] always corresponds to nextItems[i].
 *
 * @internal
 */
export function alignPreviousItems<T>(
  prevItems: ReadonlyArray<T>,
  nextItems: ReadonlyArray<T>,
  matchBy: AnimationMatchBy<T>,
): ReadonlyArray<T> {
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

  // For each next item, find the matching prev item
  // Unmatched entries are undefined — existing interpolation functions handle this
  // via their `if (prev)` truthiness checks
  return nextItems.map((next, i) => {
    const key = matchBy(next, i);
    if (key != null) {
      return prevMap.get(key) as T;
    }
    return undefined as unknown as T;
  });
}
