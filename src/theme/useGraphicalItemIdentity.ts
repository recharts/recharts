import { useCallback } from 'react';
import { useAppSelector } from '../state/hooks';
import { selectAllEffectiveGraphicalItemDataKeys } from '../state/selectors/effectiveDataKeySelectors';
import { DataKey } from '../util/types';
import { graphicalItemIdentity } from './graphicalItemIdentity';
import { RechartsTheme } from './RechartsTheme';
import { useRechartsTheme } from './RechartsThemeContext';
import { hasOwnColors, withoutColors } from './dataEntryStyles';
import { ColorGraphicalItemStyle, getThemeFillObject, withFillColor } from './themeFill';
import type { RechartsFill } from '../fill/RechartsFill';

type GraphicalItemThemeEntrySelector = (theme: RechartsTheme) => RechartsTheme['graphicalItems'][number] | undefined;
type GraphicalItemThemeSelector = (theme: RechartsTheme) => ColorGraphicalItemStyle | undefined;
const STABLE_EMPTY_GRAPHICAL_ITEM_DATA_KEYS: ReadonlyArray<DataKey<any>> = [];
const selectEmptyGraphicalItemDataKeys = (): ReadonlyArray<DataKey<any>> => STABLE_EMPTY_GRAPHICAL_ITEM_DATA_KEYS;

/**
 * Creates a selector of the theme entry of a graphical item, using all dataKeys registered in the current chart.
 * @param dataKey effective dataKey of the graphical item, see {@link useEffectiveDataKey}
 */
function useGraphicalItemThemeEntry(dataKey: DataKey<unknown> | undefined): GraphicalItemThemeEntrySelector {
  const activeTheme = useRechartsTheme();
  const graphicalItemDataKeys =
    useAppSelector(activeTheme == null ? selectEmptyGraphicalItemDataKeys : selectAllEffectiveGraphicalItemDataKeys) ??
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

/**
 * Creates a theme selector for a graphical item using all dataKeys registered in the current chart.
 *
 * Theme colors never mix with user-provided colors.
 * If the graphical item sets its own fill or stroke, the selector returns the theme entry without its fill and stroke.
 * The item keeps the rest of its theme entry, including the `active` and `label` styles.
 * The `active` styles keep their colors here, `useThemedActiveStyles` removes them.
 *
 * A fill object in the theme entry counts by its `color`. Graphical items that draw the fill object
 * read it with {@link useGraphicalItemThemeFill}.
 *
 * @param dataKey effective dataKey of the graphical item, see {@link useEffectiveDataKey}
 * @param explicitProps props as provided by the user, before merging with theme or defaults
 */
export function useGraphicalItemIdentity(
  dataKey: DataKey<unknown> | undefined,
  explicitProps: object,
): GraphicalItemThemeSelector {
  const selectEntry = useGraphicalItemThemeEntry(dataKey);
  const hasExplicitColors = hasOwnColors(explicitProps);
  return useCallback(
    (theme: RechartsTheme) => {
      const entry = withFillColor(selectEntry(theme));
      return hasExplicitColors ? withoutColors(entry) : entry;
    },
    [selectEntry, hasExplicitColors],
  );
}

/**
 * Returns the fill object of the theme entry of a graphical item, or undefined if the theme entry fills with a color.
 * A graphical item that sets its own fill or stroke gets undefined, the same as with {@link useGraphicalItemIdentity}.
 *
 * @param dataKey effective dataKey of the graphical item, see {@link useEffectiveDataKey}
 * @param explicitProps props as provided by the user, before merging with theme or defaults
 */
export function useGraphicalItemThemeFill(
  dataKey: DataKey<unknown> | undefined,
  explicitProps: object,
): RechartsFill | undefined {
  const theme = useRechartsTheme();
  const selectEntry = useGraphicalItemThemeEntry(dataKey);
  if (theme == null || hasOwnColors(explicitProps)) {
    return undefined;
  }
  return getThemeFillObject(selectEntry(theme)?.fill);
}
