import { useCallback } from 'react';
import { useAppSelector } from '../state/hooks';
import { selectAllUnfilteredGraphicalItemDataKeys } from '../state/selectors/graphicalItemSelectors';
import { DataKey } from '../util/types';
import { graphicalItemIdentity } from './graphicalItemIdentity';
import { RechartsTheme } from './RechartsTheme';
import { useRechartsTheme } from './RechartsThemeContext';

type GraphicalItemThemeSelector = (theme: RechartsTheme) => RechartsTheme['graphicalItems'][number] | undefined;
const STABLE_EMPTY_GRAPHICAL_ITEM_DATA_KEYS: ReadonlyArray<DataKey<any>> = [];
const selectEmptyGraphicalItemDataKeys = (): ReadonlyArray<DataKey<any>> => STABLE_EMPTY_GRAPHICAL_ITEM_DATA_KEYS;

/**
 * Creates a theme selector for a graphical item using all dataKeys registered in the current chart.
 */
export function useGraphicalItemIdentity(dataKey: DataKey<any> | undefined): GraphicalItemThemeSelector {
  const activeTheme = useRechartsTheme();
  const graphicalItemDataKeys =
    useAppSelector(activeTheme == null ? selectEmptyGraphicalItemDataKeys : selectAllUnfilteredGraphicalItemDataKeys) ??
    STABLE_EMPTY_GRAPHICAL_ITEM_DATA_KEYS;

  return useCallback(
    (theme: RechartsTheme) => {
      if (dataKey == null) {
        return undefined;
      }

      return theme.graphicalItems[
        graphicalItemIdentity({ dataKey }, graphicalItemDataKeys, theme.graphicalItems.length)
      ];
    },
    [dataKey, graphicalItemDataKeys],
  );
}
