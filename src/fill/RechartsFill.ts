import { ComponentType } from 'react';
import {
  symbolCircle,
  symbolCross,
  symbolDiamond,
  symbolSquare,
  symbolStar,
  symbolTriangle,
  symbolWye,
  SymbolType as D3SymbolType,
} from 'victory-vendor/d3-shape';
import { getSymbolPath } from './symbolPath';

/**
 * A stop of a {@link RechartsLinearGradient}.
 *
 * @since 3.11
 * @public
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
 * A linear gradient, drawn in the bounding box of each shape. Turn it into a fill definition with {@link linearGradient}.
 *
 * The coordinates go from 0 to 1 across the bounding box of the shape, the same as in SVG `objectBoundingBox` units.
 * Because of that, an angled gradient looks skewed on narrow shapes.
 *
 * @since 3.11
 * @public
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
 * Props of a {@link RechartsFill} `definition` component.
 *
 * @since 3.11
 * @public
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
  /**
   * The size of the area the definition paints, in SVG units, when the definition paints one area of known size,
   * such as a Legend icon. Undefined when it paints shapes of different sizes, such as every bar of a series.
   *
   * Use it to adapt to small areas: {@link pattern} scales its tiles down so that a few of them fit.
   */
  bounds?: { width: number; height: number };
};

/**
 * A repeating texture, drawn over the base color of the fill.
 * It is a plain value, so it can be stored as JSON.
 *
 * Use one of the built-in {@link patterns}, adjust one by spreading it (`{ ...patterns.dots, width: 6 }`),
 * or write your own `path`. Turn it into a fill definition with {@link pattern}.
 * For a texture that SVG paths can't draw, write your own `definition` component.
 *
 * @since 3.11
 * @public
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

/**
 * A fill of a graphical item that paints its shapes with an SVG paint server, such as a gradient or a pattern.
 *
 * Recharts renders the `definition` in `<defs>` with a unique id, and paints the shapes with `url(#id)`.
 * Tooltip and labels use the solid `color`.
 *
 * Use {@link linearGradient} or {@link pattern} to make a definition from the built-in
 * {@link gradients} and {@link patterns}, or write your own component.
 *
 * @example <Bar dataKey="uv" fill={{ definition: pattern(patterns.diagonal) }} />
 * @example <Bar dataKey="uv" fill={{ color: 'blue', definition: linearGradient(gradients.fadeDown) }} />
 *
 * @since 3.11
 * @public
 */
export type RechartsFill = {
  /**
   * The solid base color. Recharts uses it wherever it needs a plain color: Tooltip and labels.
   * The definition gets it as its `color` prop.
   *
   * If undefined, the base color comes from the theme, so you can add a pattern or gradient
   * and keep the theme colors. A fill object without `color` does not count as a color of its own,
   * so the graphical item keeps the theme `stroke` too.
   */
  color?: string;
  /**
   * A component that renders an SVG paint server, such as a `<linearGradient>` or a `<pattern>`.
   * Put the `id` it receives on the root element.
   *
   * It is a regular component rendered inside the chart, so it can call hooks, including Recharts hooks.
   * Define it outside of other components: a new component on every render redraws the definition every time.
   *
   * Legend icons draw the same definition, with their own `id`, and give it their size as `bounds`.
   * A definition sized in pixels, such as a `<pattern>` with `patternUnits="userSpaceOnUse"`,
   * can read `bounds` to fit the small icon.
   *
   * @example
   * const Sunset = ({ id, color }: RechartsFillDefinitionProps) => (
   *   <radialGradient id={id}>
   *     <stop offset={0} stopColor="#ffc658" />
   *     <stop offset={1} stopColor={color} />
   *   </radialGradient>
   * );
   * <Bar dataKey="uv" fill={{ color: '#ff7300', definition: Sunset }} />
   */
  definition: ComponentType<RechartsFillDefinitionProps>;
};

const SYMBOL_TILE_SIZE = 12;
/**
 * Area of each symbol, in square pixels. The same as in `Symbols`: equal areas make the shapes look equally heavy.
 */
const SYMBOL_AREA = 24;

/**
 * A pattern of one of the `Symbols` shapes, filled, in staggered rows:
 * two symbols per tile, the second one moved by half a tile in both directions.
 * @param symbolType the d3 symbol type
 */
function symbolPattern(symbolType: D3SymbolType): RechartsPattern {
  const quarter = SYMBOL_TILE_SIZE / 4;
  return {
    width: SYMBOL_TILE_SIZE,
    height: SYMBOL_TILE_SIZE,
    path: [
      getSymbolPath(symbolType, SYMBOL_AREA, quarter, quarter),
      getSymbolPath(symbolType, SYMBOL_AREA, 3 * quarter, 3 * quarter),
    ],
  };
}

const circle = symbolPattern(symbolCircle);

/**
 * Built-in patterns. Each of them is a plain {@link RechartsPattern} value.
 * Use them with {@link pattern}: `fill={{ definition: pattern(patterns.diagonal) }}`.
 *
 * `circle`, `cross`, `diamond`, `square`, `star`, `triangle`, and `wye` draw the same shapes as {@link Symbols},
 * in staggered rows. `dots` is the same pattern as `circle`.
 *
 * @since 3.11
 * @public
 */
export const patterns = {
  diagonal: { width: 8, height: 8, rotation: 45, path: 'M0 4H8', strokeWidth: 3 },
  crosshatch: { width: 8, height: 8, rotation: 45, path: ['M0 4H8', 'M4 0V8'], strokeWidth: 1.5 },
  horizontal: { width: 8, height: 8, path: 'M0 4H8', strokeWidth: 3 },
  vertical: { width: 8, height: 8, path: 'M4 0V8', strokeWidth: 3 },
  grid: { width: 8, height: 8, path: ['M0 4H8', 'M4 0V8'], strokeWidth: 1.5 },
  dots: circle,
  zigzag: { width: 8, height: 8, path: 'M0 5L2 3L4 5L6 3L8 5', strokeWidth: 1.5 },
  circle,
  cross: symbolPattern(symbolCross),
  diamond: symbolPattern(symbolDiamond),
  square: symbolPattern(symbolSquare),
  star: symbolPattern(symbolStar),
  triangle: symbolPattern(symbolTriangle),
  wye: symbolPattern(symbolWye),
} as const satisfies Record<string, RechartsPattern>;

/**
 * Built-in linear gradients. Each of them fades the base color of the fill, so they work with any color.
 * Each of them is a plain {@link RechartsLinearGradient} value.
 * Use them with {@link linearGradient}: `fill={{ definition: linearGradient(gradients.fadeDown) }}`.
 *
 * @since 3.11
 * @public
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
