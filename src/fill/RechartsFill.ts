import { ComponentType } from 'react';

/**
 * A stop of a {@link RechartsLinearGradient}.
 *
 * @since 3.11
 */
export type RechartsGradientStop = {
  /**
   * Position of the stop along the gradient, from 0 to 1.
   */
  offset: number;
  /**
   * Color of the stop. If undefined, the stop uses the base color of the fill.
   */
  color?: string;
  /**
   * Opacity of the stop, from 0 to 1.
   * @defaultValue 1
   */
  opacity?: number;
};

/**
 * A linear gradient, drawn in the bounding box of each shape.
 *
 * The coordinates go from 0 to 1 across the bounding box of the shape, the same as in SVG `objectBoundingBox` units.
 * Because of that, an angled gradient looks skewed on narrow shapes.
 *
 * @since 3.11
 */
export type RechartsLinearGradient = {
  /**
   * @defaultValue 0
   */
  x1?: number;
  /**
   * @defaultValue 0
   */
  y1?: number;
  /**
   * @defaultValue 0
   */
  x2?: number;
  /**
   * @defaultValue 1
   */
  y2?: number;
  stops: ReadonlyArray<RechartsGradientStop>;
};

/**
 * Props of a custom {@link RechartsFill} `definition` component.
 *
 * @since 3.11
 */
export type RechartsFillDefinitionProps = {
  /**
   * Put this `id` on the root element of the definition. The shapes paint with `url(#id)`.
   */
  id: string;
  /**
   * The base color of the fill: the `color` of the fill object, or the theme color of the graphical item.
   */
  color: string | undefined;
};

/**
 * A repeating texture, drawn over the base color of the fill.
 * It is a plain value, so it can live in JSON or in a theme.
 *
 * Use one of the built-in {@link patterns}, adjust one by spreading it (`{ ...patterns.dots, width: 6 }`),
 * or write your own `path`. For a texture that SVG paths can't draw, use a custom `definition` in the fill.
 *
 * @since 3.11
 */
export type RechartsPattern = {
  /**
   * Width of one tile, in pixels.
   */
  width: number;
  /**
   * Height of one tile, in pixels.
   */
  height: number;
  /**
   * Rotation of the whole pattern, in degrees.
   * @defaultValue 0
   */
  rotation?: number;
  /**
   * Texture color.
   * If undefined, the texture uses the `pageBackground` color from the theme, or white when no theme is set.
   * That way one pattern works for every series, and in light and dark themes.
   */
  color?: string;
  /**
   * Opacity of the texture, from 0 to 1.
   * @defaultValue 0.5
   */
  opacity?: number;
  /**
   * SVG path data of the texture, in tile coordinates.
   * If `strokeWidth` is set, the paths are stroked with the texture color. Otherwise they are filled.
   */
  path: string | ReadonlyArray<string>;
  strokeWidth?: number;
};

type RechartsFillColor = {
  /**
   * The solid base color. Recharts uses it wherever it needs a plain color: Legend, Tooltip, and labels.
   *
   * If undefined, the base color comes from the theme, so you can add a pattern or gradient
   * and keep the theme colors. A fill object without `color` does not count as a color of its own,
   * so the graphical item keeps the theme `stroke` too.
   */
  color?: string;
};

/**
 * A {@link RechartsFill} with a linear gradient. Stops without a color use the base color.
 *
 * @example <Bar dataKey="uv" fill={{ gradient: gradients.fadeDown }} />
 *
 * @since 3.11
 */
export type RechartsGradientFill = RechartsFillColor & {
  gradient: RechartsLinearGradient;
  pattern?: never;
  definition?: never;
};

/**
 * A {@link RechartsFill} with a repeating texture drawn over the base color.
 *
 * @example <Bar dataKey="uv" fill={{ color: 'blue', pattern: patterns.diagonal }} />
 *
 * @since 3.11
 */
export type RechartsPatternFill = RechartsFillColor & {
  pattern: RechartsPattern;
  gradient?: never;
  definition?: never;
};

/**
 * A {@link RechartsFill} with a completely custom SVG paint server.
 *
 * @example
 * const Sunset = ({ id, color }: RechartsFillDefinitionProps) => (
 *   <radialGradient id={id}>
 *     <stop offset={0} stopColor="#ffc658" />
 *     <stop offset={1} stopColor={color} />
 *   </radialGradient>
 * );
 * <Bar dataKey="uv" fill={{ color: '#ff7300', definition: Sunset }} />
 *
 * @since 3.11
 */
export type RechartsDefinitionFill = RechartsFillColor & {
  /**
   * A component that renders a completely custom SVG paint server, such as a `<radialGradient>` or a `<pattern>`.
   * Recharts renders it in `<defs>` with a unique `id`, and paints the shapes with `url(#id)`.
   * Put the `id` on the root element.
   *
   * It is a regular component rendered inside the chart, so it can call hooks, including Recharts hooks.
   * Define it outside of other components: a new component on every render redraws the definition every time.
   *
   * The definition draws its own colors: Recharts doesn't add the base color or the texture.
   * Legend icons draw the same definition, with their own `id`. Definitions sized in pixels,
   * such as a `<pattern>` with `patternUnits="userSpaceOnUse"`, aren't scaled down to fit the icon.
   */
  definition: ComponentType<RechartsFillDefinitionProps>;
  gradient?: never;
  pattern?: never;
};

/**
 * A {@link RechartsFill} with only a solid color. It paints the same as a `fill` string.
 *
 * @since 3.11
 */
export type RechartsColorFill = {
  color: string;
  gradient?: never;
  pattern?: never;
  definition?: never;
};

/**
 * A fill of a graphical item: a solid color, a gradient, a pattern, or a completely custom definition.
 * Each of them can have a solid base `color`.
 *
 * Recharts creates the SVG definitions and their IDs. Tooltip and labels use the solid `color`.
 *
 * @example <Bar dataKey="uv" fill={{ pattern: patterns.diagonal }} />
 * @example <Bar dataKey="uv" fill={{ color: 'blue', gradient: gradients.fadeDown }} />
 *
 * @since 3.11
 */
export type RechartsFill = RechartsColorFill | RechartsGradientFill | RechartsPatternFill | RechartsDefinitionFill;

/**
 * Returns true if the fill is a {@link RechartsFill} object, and not a string.
 * @param fill the `fill` prop
 */
export function isRechartsFill(fill: unknown): fill is RechartsFill {
  return fill != null && typeof fill === 'object';
}

/**
 * Built-in patterns. Each of them is a plain {@link RechartsPattern} value.
 *
 * @since 3.11
 */
export const patterns = {
  diagonal: { width: 8, height: 8, rotation: 45, path: 'M0 4H8', strokeWidth: 3 },
  crosshatch: { width: 8, height: 8, rotation: 45, path: ['M0 4H8', 'M4 0V8'], strokeWidth: 1.5 },
  horizontal: { width: 8, height: 8, path: 'M0 4H8', strokeWidth: 3 },
  vertical: { width: 8, height: 8, path: 'M4 0V8', strokeWidth: 3 },
  grid: { width: 8, height: 8, path: ['M0 4H8', 'M4 0V8'], strokeWidth: 1.5 },
  dots: { width: 8, height: 8, path: 'M2 4a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' },
  zigzag: { width: 8, height: 8, path: 'M0 5L2 3L4 5L6 3L8 5', strokeWidth: 1.5 },
} as const satisfies Record<string, RechartsPattern>;

/**
 * Built-in linear gradients. Each of them fades the base color of the fill, so they work with any color.
 * Each of them is a plain {@link RechartsLinearGradient} value.
 *
 * @since 3.11
 */
export const gradients = {
  fadeDown: {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 1,
    stops: [
      { offset: 0, opacity: 1 },
      { offset: 1, opacity: 0.2 },
    ],
  },
  fadeUp: {
    x1: 0,
    y1: 1,
    x2: 0,
    y2: 0,
    stops: [
      { offset: 0, opacity: 1 },
      { offset: 1, opacity: 0.2 },
    ],
  },
  fadeRight: {
    x1: 0,
    y1: 0,
    x2: 1,
    y2: 0,
    stops: [
      { offset: 0, opacity: 1 },
      { offset: 1, opacity: 0.2 },
    ],
  },
  fadeLeft: {
    x1: 1,
    y1: 0,
    x2: 0,
    y2: 0,
    stops: [
      { offset: 0, opacity: 1 },
      { offset: 1, opacity: 0.2 },
    ],
  },
} as const satisfies Record<string, RechartsLinearGradient>;
