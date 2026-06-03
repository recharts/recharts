import { DataKey } from '../util/types';
import { getValueByDataKey } from '../util/ChartUtils';

/**
 * A tagged union describing the status of an item during animation.
 *
 * - `matched`: item exists in both previous and next data — interpolate between positions
 * - `added`: item is new (no previous position) — animate in
 * - `removed`: item was in previous data but not in next — animate out
 *
 * @since 3.9
 * @see {@link https://recharts.github.io/en-US/guide/animations Animation guide}
 */
export type AnimationItem<T> =
  | { readonly status: 'matched'; readonly prev: T; readonly next: T }
  | { readonly status: 'added'; readonly next: T }
  | { readonly status: 'removed'; readonly prev: T };

/**
 * A function that extracts a key from an animation item for matching purposes.
 * Items in the previous and next arrays that return the same key are considered
 * the same logical item and will animate between their positions.
 *
 * @param item The chart item (e.g., a bar rectangle, a line point, a pie sector)
 * @param index The index of the item in the array
 * @returns A string or number key, or null if the item cannot be matched
 *
 * @since 3.9
 * @see {@link https://recharts.github.io/en-US/guide/animations Animation guide}
 */
export type AnimationMatchBy<T> = (item: T, index: number) => string | number | null;

/**
 * The union of all accepted `animationMatchBy` prop values:
 * a built-in sentinel string, or a custom matching function.
 *
 * @since 3.9
 * @see {@link https://recharts.github.io/en-US/guide/animations Animation guide}
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
 *
 * @since 3.9
 * @see {@link https://recharts.github.io/en-US/guide/animations Animation guide}
 */
export const matchByIndex = 'index' as const;

/**
 * Match animation items sequentially: previous item 0 pairs with next item 0,
 * previous item 1 pairs with next item 1, and so on. When the new array is longer,
 * the extra items have no match and animate in from their default position.
 * When the new array is shorter, the ancient items are simply dropped.
 *
 * This is useful when new data is appended at the end of the array, and you want
 * existing points to stay in place while new points animate in.
 *
 * @example
 * import { matchAppend } from 'recharts';
 * <Line animationMatchBy={matchAppend} />
 *
 * @since 3.9
 * @see {@link https://recharts.github.io/en-US/guide/animations Animation guide}
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
 *
 * @since 3.9
 * @see {@link https://recharts.github.io/en-US/guide/animations Animation guide}
 */
export function matchByDataKey(dataKey: DataKey<Record<string, unknown>>): AnimationMatchBy<{ payload?: unknown }> {
  return (item: { payload?: unknown }): string | number | null => {
    if (item.payload == null || typeof item.payload !== 'object') return null;
    const value = getValueByDataKey(item.payload as Record<string, unknown>, dataKey);
    if (value == null) return null;
    if (typeof value === 'string' || typeof value === 'number') return value;
    return JSON.stringify(value);
  };
}

function tagAlignedItems<T>(
  alignedPrevItems: ReadonlyArray<T | undefined>,
  nextItems: ReadonlyArray<T>,
  removedPrevItems: ReadonlyArray<T> = [],
): ReadonlyArray<AnimationItem<T>> {
  const tagged: AnimationItem<T>[] = [];
  /*
   * We put removed points at the start because we assume that a typical chart animates right-to-left
   * and the removed points will disappear from the left edge and outside the plot area.
   * If you chart behaves differently you may want to customize your matching function.
   */
  for (const prev of removedPrevItems) {
    tagged.push({ status: 'removed', prev });
  }
  for (let i = 0; i < nextItems.length; i++) {
    // This function intentionally pairs by array index. The strategy-specific functions above are
    // responsible for producing an alignedPrevItems array whose indices already correspond to nextItems.
    const prev = alignedPrevItems[i];
    const next = nextItems[i]!;
    if (prev != null) {
      tagged.push({ status: 'matched', prev, next });
    } else {
      tagged.push({ status: 'added', next });
    }
  }
  return tagged;
}

function matchByIndexImpl<T>(
  prevItems: ReadonlyArray<T>,
  nextItems: ReadonlyArray<T>,
): ReadonlyArray<AnimationItem<T>> {
  const factor = prevItems.length / nextItems.length;
  const alignedPrevItems = nextItems.map((_, i) => prevItems[Math.floor(i * factor)]);
  return tagAlignedItems(alignedPrevItems, nextItems);
}

function matchAppendImpl<T>(prevItems: ReadonlyArray<T>, nextItems: ReadonlyArray<T>): ReadonlyArray<AnimationItem<T>> {
  const alignedPrevItems = nextItems.map((_, i) => prevItems[i]);
  return tagAlignedItems(alignedPrevItems, nextItems);
}

function buildPrevKeyMap<T>(
  prevItems: ReadonlyArray<T>,
  matchBy: AnimationMatchBy<T>,
): ReadonlyMap<string | number, T> {
  const prevMap = new Map<string | number, T>();
  for (let i = 0; i < prevItems.length; i++) {
    const item = prevItems[i];
    if (item == null) continue;
    const key = matchBy(item, i);
    if (key != null && !prevMap.has(key)) {
      prevMap.set(key, item);
    }
  }
  return prevMap;
}

/**
 * Match previous items to next items by key, and include removed items explicitly.
 *
 * @internal
 */
function matchByKey<T>(
  prevItems: ReadonlyArray<T>,
  nextItems: ReadonlyArray<T>,
  matchBy: AnimationMatchBy<T>,
): ReadonlyArray<AnimationItem<T>> {
  const prevMap = buildPrevKeyMap(prevItems, matchBy);

  // Track which prev keys were matched
  const matchedKeys = new Set<string | number>();

  const alignedPrevItems = nextItems.map((next, i) => {
    const key = matchBy(next, i);
    if (key != null) {
      const prev = prevMap.get(key);
      if (prev !== undefined) {
        matchedKeys.add(key);
        return prev;
      }
    }
    return undefined;
  });

  // Removed = prev items whose keys were not matched to any next item
  const removedPrevItems: T[] = [];
  for (const [key, item] of prevMap) {
    if (!matchedKeys.has(key)) {
      removedPrevItems.push(item);
    }
  }

  return tagAlignedItems(alignedPrevItems, nextItems, removedPrevItems);
}

/**
 * Match previous items to next items using the given matching strategy and return tagged animation items.
 *
 * On first render, all next items are returned as `{ status: 'added' }`.
 * For key-based matching, unmatched previous items are appended as `{ status: 'removed' }`.
 *
 * @internal
 */
export function matchAnimationItems<T>(
  prevItems: ReadonlyArray<T> | null,
  nextItems: ReadonlyArray<T> | undefined,
  matchBy: AnimationMatchByProp<T>,
): ReadonlyArray<AnimationItem<T>> | null {
  if (nextItems == null) {
    return null;
  }
  if (prevItems == null) {
    return nextItems.map(next => ({ status: 'added', next }));
  }
  if (matchBy === matchByIndex) {
    return matchByIndexImpl(prevItems, nextItems);
  }
  if (matchBy === matchAppend) {
    return matchAppendImpl(prevItems, nextItems);
  }
  return matchByKey(prevItems, nextItems, matchBy);
}
