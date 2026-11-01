import * as React from 'react';
import { ComponentType, ReactNode, useMemo } from 'react';
import { useUniqueId } from '../util/useUniqueId';
import { RechartsFill, RechartsFillDefinitionProps, RechartsLinearGradient, RechartsPattern } from './RechartsFill';
import { useRechartsTheme } from '../theme/RechartsThemeContext';
import { getEffectivePageBackground } from '../theme/pageBackground';
import { getThemeFillObject } from '../theme/themeFill';

const DEFAULT_PATTERN_OPACITY = 0.5;

/**
 * How many pattern tiles at least fit across a small painted area.
 * Fewer tiles would not read as a pattern.
 */
const MIN_TILES_ACROSS = 3;

/**
 * Returns how much a pattern scales its tiles, so that at least {@link MIN_TILES_ACROSS} of them fit across the
 * painted area. Tiles only get smaller: a large area keeps the tile size of the pattern.
 * @param bounds the size of the painted area, if it is known
 * @param tileSize the larger side of the tile
 */
function getTileScale(bounds: RechartsFillDefinitionProps['bounds'], tileSize: number): number {
  if (bounds == null || tileSize <= 0) {
    return 1;
  }
  return Math.min(1, Math.min(bounds.width, bounds.height) / MIN_TILES_ACROSS / tileSize);
}

/**
 * Returns the `fill` attribute that references a fill definition.
 * @param id the id given to the definition
 */
export function getFillUrl(id: string): string {
  return `url(#${id})`;
}

/**
 * Turns a {@link RechartsPattern} into a fill definition: a repeating texture over the base color.
 * The texture defaults to the `pageBackground` color from the theme, or white when no theme is set.
 *
 * Call it outside of components, so that the definition stays the same between renders.
 *
 * @example
 * const stripes = pattern(patterns.diagonal);
 * <Bar dataKey="uv" fill={{ definition: stripes }} />
 *
 * @param value the pattern to draw
 * @returns a component to use as the `definition` of a {@link RechartsFill}
 * @since 3.11
 */
export function pattern(value: RechartsPattern): ComponentType<RechartsFillDefinitionProps> {
  function PatternDefinition({ id, color, bounds }: RechartsFillDefinitionProps) {
    const theme = useRechartsTheme();
    const { width, height, rotation } = value;
    const tileScale = getTileScale(bounds, Math.max(width, height));
    const textureColor = value.color ?? getEffectivePageBackground(theme) ?? '#fff';
    const transforms: Array<string> = [];
    if (rotation != null && rotation !== 0) {
      transforms.push(`rotate(${rotation})`);
    }
    if (tileScale !== 1) {
      transforms.push(`scale(${tileScale})`);
    }
    const paths = typeof value.path === 'string' ? [value.path] : value.path;
    const isStroked = value.strokeWidth != null;
    return (
      <pattern
        id={id}
        width={width}
        height={height}
        patternUnits="userSpaceOnUse"
        patternTransform={transforms.length > 0 ? transforms.join(' ') : undefined}
      >
        {/* Without a base color, the tile paints like a shape without a fill: in the SVG default color */}
        <rect width={width} height={height} fill={color} />
        <g opacity={value.opacity ?? DEFAULT_PATTERN_OPACITY}>
          {paths.map(d => (
            <path
              key={d}
              d={d}
              fill={isStroked ? 'none' : textureColor}
              stroke={isStroked ? textureColor : 'none'}
              strokeWidth={value.strokeWidth}
            />
          ))}
        </g>
      </pattern>
    );
  }
  return PatternDefinition;
}

/**
 * Turns a {@link RechartsLinearGradient} into a fill definition. Stops without a color use the base color.
 *
 * Call it outside of components, so that the definition stays the same between renders.
 *
 * @example
 * const fade = linearGradient(gradients.fadeDown);
 * <Bar dataKey="uv" fill={{ definition: fade }} />
 *
 * @param gradient the gradient to draw
 * @returns a component to use as the `definition` of a {@link RechartsFill}
 * @since 3.11
 */
export function linearGradient(gradient: RechartsLinearGradient): ComponentType<RechartsFillDefinitionProps> {
  function LinearGradientDefinition({ id, color }: RechartsFillDefinitionProps) {
    const { x1 = 0, y1 = 0, x2 = 0, y2 = 1, stops } = gradient;
    return (
      <linearGradient id={id} x1={x1} y1={y1} x2={x2} y2={y2}>
        {stops.map((stop, index) => (
          <stop
            // stops have no identity of their own, and their order is their meaning
            key={index}
            offset={stop.offset}
            stopColor={stop.color ?? color}
            stopOpacity={stop.opacity}
          />
        ))}
      </linearGradient>
    );
  }
  return LinearGradientDefinition;
}

/**
 * Splits the `fill` prop of a graphical item into the base color, and the fill object if there is one.
 * A fill object without `color` gives no color of its own, so the item keeps the theme colors.
 * @param fill the `fill` prop
 */
export function splitFill(fill: string | RechartsFill | undefined): {
  color: string | undefined;
  fillObject: RechartsFill | undefined;
} {
  if (fill == null || typeof fill === 'string') {
    return { color: fill, fillObject: undefined };
  }
  return { color: fill.color, fillObject: fill };
}

/**
 * DOM id of the fill definition of a graphical item.
 * @param id id of the graphical item
 */
export function getSeriesFillId(id: string): string {
  return `${id}-fill`;
}

/**
 * Renders the definition of a fill object. Render it inside `<defs>`.
 */
export function FillObjectDefinition({
  id,
  fillObject,
  color,
  bounds,
}: {
  id: string;
  fillObject: RechartsFill;
  color: string | undefined;
  /**
   * The size of the area the definition paints, if it paints one area of known size.
   */
  bounds?: RechartsFillDefinitionProps['bounds'];
}) {
  const Definition = fillObject.definition;
  return <Definition id={id} color={color} bounds={bounds} />;
}

const entryFillCache = new WeakMap<object, RechartsFill>();

/**
 * Returns true if the value can be rendered as a React component: a function, or a memo or forwardRef object.
 * @param value the `definition` from a data entry
 */
function isDefinitionComponent(value: unknown): value is ComponentType<RechartsFillDefinitionProps> {
  return typeof value === 'function' || (value != null && typeof value === 'object' && '$$typeof' in value);
}

/**
 * Reads the `fill` of a data entry, which can be a color string or a fill object.
 * Data entries have no types, so this checks that an object has a `definition` before treating it as a fill object.
 * Anything else counts as no fill.
 * @param entry the data entry, possibly merged with the props of its Cell
 */
export function readEntryFill(entry: unknown): {
  color: string | undefined;
  fillObject: RechartsFill | undefined;
} {
  if (entry == null || typeof entry !== 'object' || !('fill' in entry)) {
    return { color: undefined, fillObject: undefined };
  }
  const { fill } = entry;
  if (typeof fill === 'string') {
    return { color: fill, fillObject: undefined };
  }
  if (fill == null || typeof fill !== 'object') {
    return { color: undefined, fillObject: undefined };
  }
  const cached = entryFillCache.get(fill);
  if (cached != null) {
    return { color: cached.color, fillObject: cached };
  }
  const definition = 'definition' in fill ? fill.definition : undefined;
  if (!isDefinitionComponent(definition)) {
    return { color: undefined, fillObject: undefined };
  }
  const color = 'color' in fill && typeof fill.color === 'string' ? fill.color : undefined;
  // the same data entry gives the same fill object, so that it stays stable between renders
  const fillObject: RechartsFill = { color, definition };
  entryFillCache.set(fill, fillObject);
  return { color, fillObject };
}

/**
 * DOM id of the fill definition of one data entry of a graphical item.
 * @param id id of the graphical item
 * @param index index of the data entry
 */
export function getEntryFillId(id: string, index: number): string {
  return `${id}-fill-${index}`;
}

/**
 * Returns the item without the fill object that its data entry may have spread into it.
 * The item keeps the color of the fill object, or no `fill` at all, so that it takes the fill of the graphical item.
 * Shapes never get a fill object, only colors and `url(#…)` references.
 * @param item the item computed from the data entry, with the entry spread into it
 * @param entry the data entry, possibly merged with the props of its Cell
 */
export function withEntryFillColor<T extends object>(item: T, entry: unknown): T {
  const { color, fillObject } = readEntryFill(entry);
  if (fillObject == null) {
    return item;
  }
  if (color != null) {
    return { ...item, fill: color };
  }
  const itemWithoutFill = { ...item };
  Reflect.deleteProperty(itemWithoutFill, 'fill');
  return itemWithoutFill;
}

/**
 * Renders the definitions of the data entries that have their own fill object. Render it inside `<defs>`.
 */
export function EntryFillDefinitions({
  id,
  entries,
}: {
  /**
   * id of the graphical item
   */
  id: string;
  entries: ReadonlyArray<{ index: number; payload: unknown; color: string | undefined }>;
}) {
  return (
    <>
      {entries.map(({ index, payload, color }) => {
        const { fillObject } = readEntryFill(payload);
        return fillObject == null ? null : (
          <FillObjectDefinition key={index} id={getEntryFillId(id, index)} fillObject={fillObject} color={color} />
        );
      })}
    </>
  );
}

/**
 * Returns true if any of the data entries has its own fill object.
 * @param payloads the data entries
 */
export function hasEntryFillObjects(payloads: ReadonlyArray<unknown>): boolean {
  return payloads.some(payload => readEntryFill(payload).fillObject != null);
}

/**
 * Returns the fill object a data entry paints with: its own, or none if it has its own color,
 * or else the fill object of its graphical item.
 * @param payload the data entry, possibly merged with the props of its Cell
 * @param seriesFillObject the fill object of the graphical item
 */
export function getEntryFillObject(
  payload: unknown,
  seriesFillObject: RechartsFill | undefined,
): RechartsFill | undefined {
  const { color, fillObject } = readEntryFill(payload);
  if (fillObject != null) {
    return fillObject;
  }
  return color == null ? seriesFillObject : undefined;
}

/**
 * Returns the fill object of a data entry in a graphical item that takes one theme entry per data entry,
 * like Pie and Funnel: the entry's own fill object, else the item's fill object, else the theme definition.
 * An entry with its own color, or an item with its own colors, doesn't take the theme definition.
 *
 * @param payload the data entry, possibly merged with the props of its Cell
 * @param index index of the data entry
 * @param seriesFillObject the fill object of the graphical item
 * @param themeFillObjects the fill object of each theme entry, from {@link useThemeFillObjects}
 * @param seriesHasOwnColors true if the graphical item sets its own colors
 */
export function getIndexedEntryFillObject(
  payload: unknown,
  index: number,
  seriesFillObject: RechartsFill | undefined,
  themeFillObjects: ReadonlyArray<RechartsFill | undefined>,
  seriesHasOwnColors: boolean,
): RechartsFill | undefined {
  const { color, fillObject } = readEntryFill(payload);
  if (fillObject != null) {
    return fillObject;
  }
  if (color != null) {
    return undefined;
  }
  if (seriesFillObject != null) {
    return seriesFillObject;
  }
  if (themeFillObjects.length === 0 || seriesHasOwnColors) {
    return undefined;
  }
  return themeFillObjects[index % themeFillObjects.length];
}

/**
 * Returns the fill object of each theme entry, or undefined for an entry that fills with a color.
 * The result is the same array as long as the theme stays the same.
 */
export function useThemeFillObjects(): ReadonlyArray<RechartsFill | undefined> {
  const graphicalItems = useRechartsTheme()?.graphicalItems;
  return useMemo(() => (graphicalItems ?? []).map(style => getThemeFillObject(style.fill)), [graphicalItems]);
}

/**
 * The paint of one fill in a component that isn't a graphical item, like a ReferenceArea or a grid.
 * Makes a unique id for the definition.
 *
 * @param fill the `fill` prop: a color, or a fill object
 * @param fallbackColor the color to use when the fill has no color of its own, for example from the theme
 * @param idPrefix prefix of the unique id
 * @param bounds the size of the painted area, if it is known when calling the hook
 * @returns `paint` for the `fill` attribute, `color` for everything that needs a plain color,
 * `definition` to render inside `<defs>`, and `renderDefinition` for when the size of the painted area
 * is known only later
 */
export function useFillPaint(
  fill: string | RechartsFill | undefined,
  fallbackColor: string | undefined,
  idPrefix: string,
  bounds?: RechartsFillDefinitionProps['bounds'],
): {
  paint: string | undefined;
  color: string | undefined;
  definition: ReactNode;
  renderDefinition: (paintedBounds: RechartsFillDefinitionProps['bounds']) => ReactNode;
} {
  const id = useUniqueId(idPrefix);
  const { color, fillObject } = splitFill(fill);
  const baseColor = color ?? fallbackColor;
  if (fillObject == null) {
    return { paint: baseColor, color: baseColor, definition: null, renderDefinition: () => null };
  }
  const renderDefinition = (paintedBounds: RechartsFillDefinitionProps['bounds']) => (
    <FillObjectDefinition id={id} fillObject={fillObject} color={baseColor} bounds={paintedBounds} />
  );
  return { paint: getFillUrl(id), color: baseColor, definition: renderDefinition(bounds), renderDefinition };
}

/**
 * The paints of a list of fills, like the stripes of a grid. Each fill object gets its own definition.
 *
 * @param fills the fills: colors or fill objects
 * @param idPrefix prefix of the unique ids
 * @returns `paints` for the `fill` attributes, by index, and `definitions` to render inside `<defs>`.
 * Without fill objects, `definitions` is null.
 */
export function useFillPaints(
  fills: ReadonlyArray<string | RechartsFill> | undefined,
  idPrefix: string,
): { paints: Array<string>; definitions: ReactNode } {
  const id = useUniqueId(idPrefix);
  const paints = (fills ?? []).map((fill, index) => (typeof fill === 'string' ? fill : getFillUrl(`${id}-${index}`)));
  if (fills == null || fills.every(fill => typeof fill === 'string')) {
    return { paints, definitions: null };
  }
  const definitions = fills.map((fill, index) => {
    const { color, fillObject } = splitFill(fill);
    return fillObject == null ? null : (
      <FillObjectDefinition key={index} id={`${id}-${index}`} fillObject={fillObject} color={color} />
    );
  });
  return { paints, definitions };
}

/**
 * Returns bounds of the given size, or undefined if a side is not a positive number.
 * @param width width of the painted area
 * @param height height of the painted area
 */
export function getShapeBounds(width: unknown, height: unknown): RechartsFillDefinitionProps['bounds'] {
  if (typeof width !== 'number' || typeof height !== 'number' || !(width > 0) || !(height > 0)) {
    return undefined;
  }
  return { width, height };
}

/**
 * Renders the definition of a fill object with a unique id, and the shape that paints with it.
 * Shape components use it only when their `fill` is a fill object, so that plain colors render without any hook.
 */
export function FillObjectPaint({
  fill,
  bounds,
  children,
}: {
  fill: RechartsFill;
  /**
   * The size of the shape, if the shape knows it.
   */
  bounds?: RechartsFillDefinitionProps['bounds'];
  /**
   * Renders the shape with the `url(#…)` of the definition as its `fill`.
   */
  children: (paint: string) => ReactNode;
}) {
  const id = useUniqueId('recharts-shape-fill');
  return (
    <>
      <defs>
        <FillObjectDefinition id={id} fillObject={fill} color={fill.color} bounds={bounds} />
      </defs>
      {children(getFillUrl(id))}
    </>
  );
}
