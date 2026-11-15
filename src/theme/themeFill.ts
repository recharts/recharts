import type { RechartsFill } from '../fill/RechartsFill';
import { GraphicalItemStyle, RechartsTheme, Styles2D } from './RechartsTheme';
import { useRechartsTheme } from './RechartsThemeContext';

/**
 * Theme styles with the `fill` as a plain color.
 */
export type ColorStyles2D = Omit<Styles2D, 'fill'> & { fill?: string };

/**
 * A theme entry of a graphical item with the `fill`, and the `fill` of its `active` styles, as plain colors.
 */
export type ColorGraphicalItemStyle = Omit<GraphicalItemStyle, 'fill' | 'active'> & {
  fill?: string;
  active?: ColorStyles2D;
};

/**
 * Returns the fill object of a theme `fill`, or undefined if the `fill` is a color.
 * @param fill the `fill` of a theme style
 */
export function getThemeFillObject(fill: string | RechartsFill | undefined): RechartsFill | undefined {
  return typeof fill === 'object' && fill != null ? fill : undefined;
}

function getFillColor(fill: string | RechartsFill | undefined): string | undefined {
  return getThemeFillObject(fill)?.color ?? (typeof fill === 'string' ? fill : undefined);
}

function hasColorFillsOnly(style: GraphicalItemStyle): style is ColorGraphicalItemStyle {
  return getThemeFillObject(style.fill) == null && getThemeFillObject(style.active?.fill) == null;
}

const withFillColorCache = new WeakMap<GraphicalItemStyle, ColorGraphicalItemStyle>();

/**
 * Returns the theme style with its fill objects replaced by their `color`,
 * for everything that paints with a plain color.
 * A fill object without `color` leaves no `fill`.
 * A style without fill objects comes back as it is. Otherwise the result is a copy, and it is cached,
 * so the same style always returns the same object. That keeps theme selectors stable.
 * @param style theme style, for example an entry of `graphicalItems`, or `grid`
 */
export function withFillColor(style: GraphicalItemStyle): ColorGraphicalItemStyle;
export function withFillColor(style: GraphicalItemStyle | undefined): ColorGraphicalItemStyle | undefined;
export function withFillColor(style: GraphicalItemStyle | undefined): ColorGraphicalItemStyle | undefined {
  if (style == null) {
    return undefined;
  }
  if (hasColorFillsOnly(style)) {
    return style;
  }
  const cached = withFillColorCache.get(style);
  if (cached != null) {
    return cached;
  }
  const { fill, active, ...rest } = style;
  const result: ColorGraphicalItemStyle = rest;
  const color = getFillColor(fill);
  if (color != null) {
    result.fill = color;
  }
  if (active != null) {
    result.active = withFillColor(active);
  }
  withFillColorCache.set(style, result);
  return result;
}

const graphicalItemsCache = new WeakMap<ReadonlyArray<GraphicalItemStyle>, ReadonlyArray<ColorGraphicalItemStyle>>();

/**
 * Returns {@link withFillColor} of each theme entry. The result is cached, so the same entries always return
 * the same array.
 * @param graphicalItems the `graphicalItems` of a theme
 */
export function getColorGraphicalItems(
  graphicalItems: ReadonlyArray<GraphicalItemStyle>,
): ReadonlyArray<ColorGraphicalItemStyle>;
export function getColorGraphicalItems(
  graphicalItems: ReadonlyArray<GraphicalItemStyle> | undefined,
): ReadonlyArray<ColorGraphicalItemStyle> | undefined;
export function getColorGraphicalItems(
  graphicalItems: ReadonlyArray<GraphicalItemStyle> | undefined,
): ReadonlyArray<ColorGraphicalItemStyle> | undefined {
  if (graphicalItems == null) {
    return undefined;
  }
  const cached = graphicalItemsCache.get(graphicalItems);
  if (cached != null) {
    return cached;
  }
  const result = graphicalItems.map(style => withFillColor(style));
  graphicalItemsCache.set(graphicalItems, result);
  return result;
}

/**
 * Returns the fill object of a theme slot, or undefined without a theme, or if the slot fills with a color.
 * Components that draw fill objects paint with it when they have no `fill` of their own.
 * @param themeSelector selects the theme slot, for example `theme => theme.grid`
 */
export function useThemeFillObject(
  themeSelector: (theme: RechartsTheme) => Pick<Styles2D, 'fill'> | undefined,
): RechartsFill | undefined {
  const theme = useRechartsTheme();
  return theme == null ? undefined : getThemeFillObject(themeSelector(theme)?.fill);
}
