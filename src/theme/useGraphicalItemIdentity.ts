import { useCallback } from 'react';
import { useAppSelector } from '../state/hooks';
import { selectAllUnfilteredGraphicalItemDataKeys } from '../state/selectors/graphicalItemSelectors';
import { DataKey } from '../util/types';
import { graphicalItemIdentity } from './graphicalItemIdentity';
import { RechartsTheme } from './RechartsTheme';
import { useRechartsTheme } from './RechartsThemeContext';
import { hasOwnColors } from './dataEntryStyles';

type GraphicalItemThemeSelector = (theme: RechartsTheme) => RechartsTheme['graphicalItems'][number] | undefined;
const STABLE_EMPTY_GRAPHICAL_ITEM_DATA_KEYS: ReadonlyArray<DataKey<any>> = [];
const selectEmptyGraphicalItemDataKeys = (): ReadonlyArray<DataKey<any>> => STABLE_EMPTY_GRAPHICAL_ITEM_DATA_KEYS;

/**
 * Creates a theme selector for a graphical item using all dataKeys registered in the current chart.
 *
 * Theme styles are designed as a coherent set, so they never mix with user-provided colors.
 * If the graphical item sets its own fill or stroke, the selector returns undefined
 * and the item ignores its theme entry completely, including the `active` styles.
 *
 * @param dataKey dataKey of the graphical item
 * @param explicitProps props as provided by the user, before merging with theme or defaults
 */
export function useGraphicalItemIdentity(
  dataKey: DataKey<any> | undefined,
  explicitProps: object,
): GraphicalItemThemeSelector {
  const activeTheme = useRechartsTheme();
  const ignoresTheme = hasOwnColors(explicitProps);
  const graphicalItemDataKeys =
    useAppSelector(activeTheme == null ? selectEmptyGraphicalItemDataKeys : selectAllUnfilteredGraphicalItemDataKeys) ??
    STABLE_EMPTY_GRAPHICAL_ITEM_DATA_KEYS;

  return useCallback(
    (theme: RechartsTheme) => {
      if (dataKey == null || ignoresTheme) {
        return undefined;
      }

      return theme.graphicalItems[
        graphicalItemIdentity({ dataKey }, graphicalItemDataKeys, theme.graphicalItems.length)
      ];
    },
    [dataKey, ignoresTheme, graphicalItemDataKeys],
  );
}
