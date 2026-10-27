import { useCallback } from 'react';
import { useAppSelector } from '../state/hooks';
import { selectAllEffectiveGraphicalItemDataKeys } from '../state/selectors/effectiveDataKeySelectors';
import { DataKey } from '../util/types';
import { graphicalItemIdentity } from './graphicalItemIdentity';
import { RechartsTheme } from './RechartsTheme';
import { useRechartsTheme } from './RechartsThemeContext';
import { hasOwnColors, withoutColors } from './dataEntryStyles';

type GraphicalItemThemeSelector = (theme: RechartsTheme) => RechartsTheme['graphicalItems'][number] | undefined;
const STABLE_EMPTY_GRAPHICAL_ITEM_DATA_KEYS: ReadonlyArray<DataKey<any>> = [];
const selectEmptyGraphicalItemDataKeys = (): ReadonlyArray<DataKey<any>> => STABLE_EMPTY_GRAPHICAL_ITEM_DATA_KEYS;

/**
 * Creates a theme selector for a graphical item using all dataKeys registered in the current chart.
 *
 * Theme colors never mix with user-provided colors.
 * If the graphical item sets its own fill or stroke, the selector returns the theme entry without its fill and stroke.
 * The item keeps the rest of its theme entry, including the `active` and `label` styles.
 *
 * @param dataKey effective dataKey of the graphical item, see {@link useEffectiveDataKey}
 * @param explicitProps props as provided by the user, before merging with theme or defaults
 */
export function useGraphicalItemIdentity(
  dataKey: DataKey<any> | undefined,
  explicitProps: object,
): GraphicalItemThemeSelector {
  const activeTheme = useRechartsTheme();
  const hasExplicitColors = hasOwnColors(explicitProps);
  const graphicalItemDataKeys =
    useAppSelector(activeTheme == null ? selectEmptyGraphicalItemDataKeys : selectAllEffectiveGraphicalItemDataKeys) ??
    STABLE_EMPTY_GRAPHICAL_ITEM_DATA_KEYS;

  return useCallback(
    (theme: RechartsTheme) => {
      if (dataKey == null) {
        return undefined;
      }

      const entry =
        theme.graphicalItems[graphicalItemIdentity({ dataKey }, graphicalItemDataKeys, theme.graphicalItems.length)];
      return hasExplicitColors ? withoutColors(entry) : entry;
    },
    [dataKey, hasExplicitColors, graphicalItemDataKeys],
  );
}
