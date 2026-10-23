import { createContext, CSSProperties, useContext, useMemo } from 'react';
import type { TextBackgroundProps } from '../component/Text';
import { GraphicalItemStyle, LabelTheme, RechartsTheme, TextStyles } from './RechartsTheme';
import { useRechartsTheme } from './RechartsThemeContext';
import { hasOwnColors } from './dataEntryStyles';

/**
 * The `background` prop of Label, LabelList and Text.
 */
export type LabelBackground = boolean | TextBackgroundProps | undefined;

/**
 * Label props that a {@link LabelTheme} provides.
 */
export type ThemedLabelProps = {
  fill: string | undefined;
  style: CSSProperties | undefined;
  background: LabelBackground;
};

/**
 * Resolves the label background from the explicit prop and the theme.
 *
 * - `false` always wins and draws no background.
 * - `undefined` uses the theme value, so a theme can turn backgrounds on by default.
 * - `true` draws the background with the theme styles.
 * - An object is merged key by key over the theme styles.
 *
 * @param explicit the `background` prop as the user set it
 * @param fromTheme the `background` from the label theme
 * @returns the background to draw
 */
export function resolveLabelBackground(explicit: LabelBackground, fromTheme: LabelBackground): LabelBackground {
  if (explicit === false) {
    return false;
  }
  if (explicit == null) {
    return fromTheme;
  }
  const themeStyles = typeof fromTheme === 'object' ? fromTheme : undefined;
  if (explicit === true) {
    return themeStyles ?? true;
  }
  if (themeStyles == null) {
    return explicit;
  }
  return { ...themeStyles, ...explicit };
}

/**
 * Splits the label theme style into the text color and the remaining styles.
 *
 * The color is returned separately so that an explicit `fill` prop can win over it.
 * If it stayed in the style, it would override the `fill` prop.
 *
 * @param style the `style` from the label theme
 * @returns the text color, and the style without colors
 */
function splitLabelStyle(style: TextStyles | undefined): {
  fill: string | undefined;
  style: CSSProperties | undefined;
} {
  if (style == null) {
    return { fill: undefined, style: undefined };
  }
  const { fill, color, ...rest } = style;
  const resolvedFill = fill ?? color;
  return {
    fill: typeof resolvedFill === 'string' ? resolvedFill : undefined,
    style: rest,
  };
}

/**
 * Applies a label theme to the explicit props of a label.
 * Explicit props win over the theme, and the theme wins over the fallback fill.
 *
 * @param labelTheme the label theme, or undefined if there is none
 * @param explicit the explicit `fill`, `style` and `background` props of the label
 * @param fallbackFill the fill to use when neither the props nor the theme set one, for example the series color
 * @returns the props to pass to the label
 */
export function applyLabelTheme(
  labelTheme: LabelTheme | undefined,
  explicit: { fill?: string; style?: CSSProperties; background?: LabelBackground },
  fallbackFill?: string,
): ThemedLabelProps {
  const { fill: themeFill, style: themeStyle } = splitLabelStyle(labelTheme?.style);
  return {
    fill: explicit.fill ?? themeFill ?? fallbackFill,
    style: themeStyle == null ? explicit.style : { ...themeStyle, ...explicit.style },
    background: resolveLabelBackground(explicit.background, labelTheme?.background),
  };
}

/**
 * True inside a LabelList.
 * Data labels take their styles from `graphicalItems[n].label` and never from the global `label` theme.
 */
const DataLabelContext = createContext<boolean>(false);

export const DataLabelContextProvider = DataLabelContext.Provider;

/**
 * Returns the global `label` theme, or undefined for data labels and without a theme.
 */
export function useGlobalLabelTheme(): LabelTheme | undefined {
  const theme = useRechartsTheme();
  const isDataLabel = useContext(DataLabelContext);
  if (isDataLabel) {
    return undefined;
  }
  return theme?.label;
}

/**
 * Returns the label theme of the data label at this index.
 * Graphical items with one style per series return the same theme for every index,
 * Pie and Funnel return the theme of the sector or trapezoid at this index.
 */
export type DataLabelThemeResolver = (index: number) => LabelTheme | undefined;

/**
 * Graphical items provide this context so that their LabelList can find its theme.
 */
const DataLabelThemeContext = createContext<DataLabelThemeResolver | undefined>(undefined);

export const DataLabelThemeContextProvider = DataLabelThemeContext.Provider;

export function useDataLabelThemeResolver(): DataLabelThemeResolver | undefined {
  return useContext(DataLabelThemeContext);
}

/**
 * Returns a stable resolver that gives every data label of a graphical item the same label theme.
 *
 * @param graphicalItemThemeSelector selects the theme entry of the graphical item, see {@link useGraphicalItemIdentity}.
 *   It returns undefined if the graphical item ignores the theme.
 * @returns the resolver, or undefined without a theme
 */
export function useSeriesLabelThemeResolver(
  graphicalItemThemeSelector: (theme: RechartsTheme) => GraphicalItemStyle | undefined,
): DataLabelThemeResolver | undefined {
  const theme = useRechartsTheme();
  const labelTheme = theme == null ? undefined : graphicalItemThemeSelector(theme)?.label;
  return useMemo(() => (labelTheme == null ? undefined : () => labelTheme), [labelTheme]);
}

/**
 * Returns a stable resolver for graphical items that take one theme entry per index, such as Pie and Funnel.
 * The data label at index `i` takes the label theme of `graphicalItems[i % graphicalItems.length]`.
 *
 * @param graphicalItems the graphical item styles from the theme, or undefined without a theme
 * @param explicitProps props as provided by the user. If they set their own `fill` or `stroke`,
 *   the graphical item ignores the theme completely, and so do its labels.
 * @returns the resolver, or undefined if the labels take no theme
 */
export function useIndexedLabelThemeResolver(
  graphicalItems: ReadonlyArray<GraphicalItemStyle> | undefined,
  explicitProps: object,
): DataLabelThemeResolver | undefined {
  const ignoresTheme = hasOwnColors(explicitProps);
  return useMemo(() => {
    if (graphicalItems == null || graphicalItems.length === 0 || ignoresTheme) {
      return undefined;
    }
    return (index: number) => graphicalItems[index % graphicalItems.length]?.label;
  }, [graphicalItems, ignoresTheme]);
}
