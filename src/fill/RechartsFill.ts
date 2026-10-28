import { ReactElement, ReactNode } from 'react';

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
 * What a custom pattern `render` function receives.
 *
 * @since 3.11
 */
export type RechartsPatternRenderContext = {
  /**
   * The base color of the fill. Recharts already paints the tile with it, so you only draw the texture.
   */
  color: string | undefined;
  /**
   * The texture color.
   */
  ink: string;
  width: number;
  height: number;
};

type RechartsPatternBase = {
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
};

/**
 * A {@link RechartsPattern} drawn from SVG path data. It is a plain value, so it can live in JSON or in a theme.
 *
 * @since 3.11
 */
export type RechartsPathPattern = RechartsPatternBase & {
  /**
   * SVG path data of the texture, in tile coordinates.
   * If `strokeWidth` is set, the paths are stroked with the texture color. Otherwise they are filled.
   */
  path: string | ReadonlyArray<string>;
  strokeWidth?: number;
  render?: never;
};

/**
 * A {@link RechartsPattern} drawn by a function, for full control over the texture.
 *
 * @since 3.11
 */
export type RechartsRenderPattern = RechartsPatternBase & {
  /**
   * Draws the texture of one tile.
   */
  render: (context: RechartsPatternRenderContext) => ReactNode;
  path?: never;
  strokeWidth?: never;
};

/**
 * A repeating texture, drawn over the base color of the fill.
 *
 * Use one of the built-in {@link patterns}, adjust one by spreading it (`{ ...patterns.dots, width: 6 }`),
 * or write your own with `path` or `render`.
 *
 * @since 3.11
 */
export type RechartsPattern = RechartsPathPattern | RechartsRenderPattern;

/**
 * A fill of a graphical item: a solid color, a gradient, a pattern, or a solid color with a pattern.
 *
 * Recharts creates the SVG definitions and their IDs. Legend, Tooltip and labels use the solid `color`.
 *
 * @example <Bar dataKey="uv" fill={{ pattern: patterns.diagonal }} />
 * @example <Bar dataKey="uv" fill={{ color: 'blue', gradient: gradients.fadeDown }} />
 *
 * @since 3.11
 */
export type RechartsFill = {
  /**
   * The solid base color. Recharts uses it wherever it needs a plain color: Legend, Tooltip, and labels.
   *
   * If undefined, the base color comes from the theme, so you can add a pattern or gradient
   * and keep the theme colors. A fill object without `color` does not count as a color of its own,
   * so the graphical item keeps the theme `stroke` too.
   */
  color?: string;
  gradient?: RechartsLinearGradient;
  /**
   * A pattern can't be combined with a `gradient` yet. If both are set, Recharts draws the pattern.
   */
  pattern?: RechartsPattern;
  /**
   * A completely custom SVG paint server, such as a `<radialGradient>` or a `<pattern>`.
   * Recharts puts it in `<defs>`, gives it a unique `id`, and paints the shapes with it,
   * so leave the `id` out.
   *
   * The definition draws its own colors: Recharts doesn't add the base color or the texture.
   * Legend icons stay the solid `color`.
   *
   * If set, Recharts ignores `gradient` and `pattern`.
   *
   * @example <Bar dataKey="uv" fill={{ color: '#ff7300', definition: <radialGradient><stop offset={0} stopColor="#ff7300" /></radialGradient> }} />
   */
  definition?: ReactElement;
};

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
