/**
 * @fileOverview
 * This file provides helper methods for assigning theme identity to a
 * graphical item. Graphical items are individual drawable data representations,
 * such as Line or Bar. In previous Recharts versions these can be styled
 * individually. In next version, Recharts will allow the user to provide an
 * array of themes, and then have the graphical items pick one. There is a gap
 * however; graphical items are not sorted and not indexed. We can't use DOM
 * order because that order changes. So instead we need an identifier that:
 * - we can calculate from props, without requiring the user to provide an
 *   explicit id
 * - is stable across renders, so that the same item will always get the same
 *   theme
 * - is (within possibilities) unique across all items, so that no two items
 *   will get the same theme The uniqueness is impossible to guarantee 100% so
 * we will only provide a best-effort. This file provides a helper method to
 * calculate such an identifier.
 */

import { DataKey } from '..';

export type ThemableItem = {
  dataKey: DataKey<any>;
};

/**
 * Computes a deterministic numeric hash for the given string. Uses djb2 hash
 * algorithm with additional bit-mixing to improve distribution across small
 * moduli (e.g., themeCount = 5).
 */
function computeHash(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i); // hash * 33 + charCode
  }

  // Bit-mixing step: multiply by a large prime, then XOR-shift to spread
  // bit patterns. This prevents collisions that can occur with raw %
  // themeCount when the raw hash's low bits correlate poorly across inputs.
  hash ^= hash >>> 16;
  hash *= 0x85ebca6b;
  hash ^= hash >>> 16;

  return hash & 0x7fffffff; // Mask to ensure non-negative 31-bit integer
}

/**
 * Calculates theme index from a given item. The identity is computed
 * deterministically from the dataKey string, ensuring stability across renders
 * and module reloads.
 * @param item - The themable item to calculate identity for
 * @param themeCount - Optional number of available themes; if provided, clamps
 *  the hash to [0, themeCount).
 */
export function graphicalItemIdentity(item: ThemableItem, themeCount?: number): number {
  const keyString = String(item.dataKey);
  const hashResult = computeHash(keyString);

  if (themeCount !== undefined) {
    return hashResult % themeCount;
  }

  return hashResult;
}
