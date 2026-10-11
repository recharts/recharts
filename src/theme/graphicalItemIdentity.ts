/**
 * @fileOverview
 * This file provides helper methods for assigning theme identity to a
 * graphical item. Graphical items are individual drawable data representations,
 * such as Line or Bar. Graphical items are not sorted and not indexed, and
 * their Redux order is intentionally arbitrary. Instead, we collect all
 * dataKeys in the chart, sort their string representations, and use the
 * resulting position as the theme identity.
 */

import { DataKey } from '../util/types';

export type ThemableItem = {
  dataKey: DataKey<any>;
};

/**
 * Calculates a deterministic theme index from the sorted, unique dataKeys in
 * the current chart.
 *
 * The item is included in the list in case it has not been registered in the
 * Redux store yet. Graphical items register themselves in a layout effect, so
 * the store can be incomplete during the first render.
 * @param item - The themable item to calculate identity for
 * @param allDataKeys - DataKeys of all graphical items currently in the chart
 * @param themeCount - Number of available themes
 */
export function graphicalItemIdentity(
  item: ThemableItem,
  allDataKeys: ReadonlyArray<DataKey<any>>,
  themeCount: number,
): number {
  if (themeCount <= 0) {
    return 0;
  }

  const keyStrings = [...allDataKeys, item.dataKey].map(String);
  const sortedUniqueKeyStrings = Array.from(new Set(keyStrings)).sort();
  const itemIndex = sortedUniqueKeyStrings.indexOf(String(item.dataKey));

  return itemIndex % themeCount;
}
