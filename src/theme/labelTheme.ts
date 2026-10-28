import { createContext, CSSProperties, useContext, useMemo } from 'react';
import type { TextBackgroundProps } from '../component/Text';
import { GraphicalItemStyle, LabelTheme, RechartsTheme, TextStyles } from './RechartsTheme';
import { useRechartsTheme } from './RechartsThemeContext';
import type { LabelPosition } from '../component/Label';
import { isOutsidePosition } from '../cartesian/getCartesianPosition';
import { isOutsidePolarPosition } from '../polar/isOutsidePolarPosition';

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
 * How the data labels of a graphical item pick their automatic color in a theme.
 */
export type DataLabelColors = {
  /**
   * True if the graphical item draws filled shapes, and labels in inside positions sit on top of them:
   * Bar, Funnel, Pie and RadialBar.
   * False if every label sits next to its point: Line, Area, Radar and Scatter.
   */
  hasFilledShapes: boolean;
  /**
   * Returns the colors the graphical item draws the data point at this index with, the same as in Tooltip and Legend.
   * If undefined, the label takes the `fill` of its LabelList entry.
   */
  getShapeColors?: (index: number) => ShapeColors;
};

/**
 * The colors a graphical item draws one shape with.
 * Graphical items that draw a single color per data point, such as Line, pass it as `stroke`.
 */
export type ShapeColors = {
  fill?: string;
  stroke?: string;
};

/**
 * Returns true if the color paints something. `none` and `transparent` leave the shape empty.
 *
 * @param color fill or stroke
 * @returns true if the color is visible
 */
function isPainted(color: string | undefined): color is string {
  return color != null && color !== 'none' && color !== 'transparent';
}

const DataLabelColorsContext = createContext<DataLabelColors | undefined>(undefined);

export const DataLabelColorsContextProvider = DataLabelColorsContext.Provider;

export function useDataLabelColors(): DataLabelColors | undefined {
  return useContext(DataLabelColorsContext);
}

/**
 * Data label colors of Funnel and Pie. Their LabelList entries carry the color of each shape.
 */
export const filledShapeLabelColors: DataLabelColors = { hasFilledShapes: true };

/**
 * Returns stable data label colors for graphical items where every label takes the color of the series:
 * Line, Area and Radar.
 *
 * @param color the color of the series, theme included
 * @returns data label colors for {@link DataLabelColorsContextProvider}
 */
export function useSeriesDataLabelColors(color: string | undefined): DataLabelColors {
  return useMemo(() => ({ hasFilledShapes: false, getShapeColors: () => ({ stroke: color }) }), [color]);
}

/**
 * Returns the automatic text color of a data label in a theme.
 *
 * - A label that sits on top of a filled shape takes the `pageBackground` color,
 *   like a cut-out of the shape. Each palette entry of the built-in themes has 4.5:1 against `pageBackground`.
 *   A shape with `fill="none"` or `transparent` is not filled, so its labels count as next to it.
 * - A label next to its shape takes the color of its data point, so it reads as part of the series:
 *   the fill, or the stroke if the fill paints nothing.
 * - A label with its own `background` or `halo` sits on that, so it takes the color of its data point too.
 * - A label at an `{ x, y }` position can be anywhere, so it takes the `typography` color.
 *
 * @param options.position the label position
 * @param options.isPolar true if the label renders in a polar view box, the same check that Label uses to place it
 * @param options.hasFilledShapes see {@link DataLabelColors.hasFilledShapes}
 * @param options.shapeColors the colors of the data point
 * @param options.pageBackground the effective page background, see `getEffectivePageBackground`
 * @param options.hasOwnBackground true if the label draws a background or a halo
 * @returns the text color, or undefined for the `typography` color
 */
export function getAutomaticDataLabelFill({
  position,
  isPolar,
  hasFilledShapes,
  shapeColors,
  pageBackground,
  hasOwnBackground,
}: {
  position: LabelPosition | undefined;
  isPolar: boolean;
  hasFilledShapes: boolean;
  shapeColors: ShapeColors;
  pageBackground: string | undefined;
  hasOwnBackground: boolean;
}): string | undefined {
  if (position != null && typeof position === 'object') {
    return undefined;
  }
  const { fill, stroke } = shapeColors;
  const isOutside = isPolar ? isOutsidePolarPosition(position) : isOutsidePosition(position);
  if (hasFilledShapes && isPainted(fill) && !isOutside && !hasOwnBackground) {
    // Without a page background there is no cut-out color, and the typography color is the safest choice.
    return pageBackground;
  }
  if (isPainted(fill)) {
    return fill;
  }
  return isPainted(stroke) ? stroke : undefined;
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
 * The labels keep their theme even if the graphical item sets its own `fill` or `stroke`.
 *
 * @param graphicalItems the graphical item styles from the theme, or undefined without a theme
 * @returns the resolver, or undefined if the labels take no theme
 */
export function useIndexedLabelThemeResolver(
  graphicalItems: ReadonlyArray<GraphicalItemStyle> | undefined,
): DataLabelThemeResolver | undefined {
  return useMemo(() => {
    if (graphicalItems == null || graphicalItems.length === 0) {
      return undefined;
    }
    return (index: number) => graphicalItems[index % graphicalItems.length]?.label;
  }, [graphicalItems]);
}
