import * as React from 'react';
import { createContext, PropsWithoutRef, ReactNode, SVGProps, useContext } from 'react';
import {
  LabelContentType,
  isLabelContentAFunction,
  isPolarViewBox,
  Label,
  LabelPosition,
  LabelFormatter,
} from './Label';
import { Layer } from '../container/Layer';
import { getValueByDataKey } from '../util/ChartUtils';
import { CartesianViewBoxRequired, DataKey, PolarViewBoxRequired, TrapezoidViewBox } from '../util/types';
import { isNullish } from '../util/DataUtils';
import { LabelProps } from '../index';
import { svgPropertiesAndEvents } from '../util/svgPropertiesAndEvents';
import { ZIndexable, ZIndexLayer } from '../zIndex/ZIndexLayer';
import { DefaultZIndexes } from '../zIndex/DefaultZIndexes';
import { getLabelBackgroundZIndex, LabelZIndexProvider } from '../zIndex/labelBackgroundZIndex';
import { isRenderableText, RenderableText, TextBackgroundProps, TextHaloProps } from './Text';
import { GraphicalItemClipArea, useGraphicalItemClipArea } from '../cartesian/GraphicalItemClipPath';
import { AxisId } from '../state/cartesianAxisSlice';
import {
  applyLabelTheme,
  DataLabelContextProvider,
  getAutomaticDataLabelFill,
  resolveLabelBackground,
  useDataLabelColors,
  useDataLabelThemeResolver,
} from '../theme/labelTheme';
import { useRechartsTheme } from '../theme/RechartsThemeContext';
import { getEffectivePageBackground } from '../theme/pageBackground';

/**
 * @public
 */
export interface LabelListEntry<DataPointItem = any> {
  /**
   * Value is what renders in the UI as the label content.
   * If undefined, then the LabelList will pull it from the payload using the dataKey.
   */
  value: unknown;
  /**
   * Payload is the source data object for this entry. The shape of this depends on what the user has passed
   * as the data prop to the chart.
   */
  payload: DataPointItem;
  fill: string | undefined;
}

/**
 * This is public API because we expose it as the valueAccessor parameter.
 *
 * The properties of "viewBox" are repeated as the root props of the entry object.
 * So it doesn't matter if you read entry.x or entry.viewBox.x, they are the same.
 *
 * It's not necessary to pass redundant data, but we keep it for backward compatibility.
 */
export interface CartesianLabelListEntry extends LabelListEntry, TrapezoidViewBox {
  /**
   * The bounding box of the graphical element that this label is attached to.
   * This will be an individual Bar for example.
   */
  viewBox: TrapezoidViewBox;
  parentViewBox?: CartesianViewBoxRequired;
}

export interface PolarLabelListEntry extends LabelListEntry {
  viewBox: PolarViewBoxRequired;
  parentViewBox?: PolarViewBoxRequired;
  clockWise?: boolean;
}

interface LabelListProps extends ZIndexable {
  /**
   * Unique identifier of this component.
   * Used as an HTML attribute `id`.
   */
  id?: string;
  /**
   * The accessor function to get the value of each label. Is ignored if dataKey is specified.
   * @param entry
   * @param index
   */
  valueAccessor?: (entry: CartesianLabelListEntry | PolarLabelListEntry, index: number) => RenderableText;
  /**
   * The parameter to calculate the view box of label in radial charts.
   */
  clockWise?: boolean;
  /**
   *
   * Decides how to extract the value of each label from the data:
   * - `string`: the name of the field in the data object;
   * - `number`: the index of the field in the data;
   * - `function`: a function that receives the data object and returns the value of each label.
   *
   * If set, then valueAccessor will be ignored.
   *
   * Scatter requires this prop to be set.
   * Other graphical components will show the same value as the dataKey of the component by default.
   */
  dataKey?: DataKey<any>;
  /**
   * If set a React element, the option is the customized React element of rendering each label.
   * Use an SVG element or component, such as `<text>` or `<g>`.
   * HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.
   * If set to a function, the function is called once for each item
   *
   * @example <LabelList content={CustomizedLabel} />
   *
   * @see {@link https://recharts.github.io/en-US/examples/BarChartWithMinHeight/ Customized content of LabelList in a BarChart}
   */
  content?: LabelContentType;
  textBreakAll?: boolean;
  /**
   * The position of label relative to the view box.
   */
  position?: LabelPosition;
  /**
   * The offset to the specified "position".
   * Direction of the offset depends on the position.
   */
  offset?: LabelProps['offset'];
  /**
   * Text rotation angle in degrees.
   * Positive values rotate clockwise, negative values rotate counterclockwise.
   *
   * @defaultValue 0
   */
  angle?: number;
  /**
   * Function to customize how content is serialized before rendering.
   *
   * This should return a renderable text - something that the {@link Text} component can render.
   * Typically, a string or number.
   * Custom components are not supported here - use the `content` prop instead.
   */
  formatter?: LabelFormatter;
  /**
   * Z-Index of this component and its children. The higher the value,
   * the more on top it will be rendered.
   * Components with higher zIndex will appear in front of components with lower zIndex.
   * If undefined or 0, the content is rendered in the default layer without portals.
   *
   * @since 3.4
   * @defaultValue 2000
   * @see {@link https://recharts.github.io/en-US/guide/zIndex/ Z-Index and layers guide}
   */
  zIndex?: number;
  /**
   * The text color of every label. It wins over the theme.
   *
   * Without it, and without a theme, each label takes the fill of its data entry, if there is one.
   *
   * With a theme, a `fill` in the theme's `graphicalItems[n].label.style` applies first.
   * Otherwise each label picks a color automatically:
   * - A label on top of a filled shape (Bar, Funnel, Pie, RadialBar) takes the `pageBackground` color,
   *   or the `typography` color if there is no page background.
   *   A shape with `fill="none"` or `transparent` is not filled, so its labels count as next to it.
   * - A label next to its shape, and every label of Line, Area, Radar and Scatter, takes the color of its shape.
   * - A label with a `background` or `halo` takes the color of its shape too.
   * - A label at an `{ x, y }` position takes the `typography` color.
   *
   * Custom `content` receives the resolved color as its `fill` prop.
   *
   * @see {@link https://recharts.github.io/en-US/guide/label-colors/ Label colors guide}
   * @example <LabelList position="inside" fill="#000" />
   */
  fill?: string;
  /**
   * Draws a rectangle behind each label, for example to keep labels readable on top of filled shapes.
   *
   * - `true` draws the background with the styles from the theme's `graphicalItems[n].label.background`.
   *   If neither sets a `fill`, the fill is the `pageBackground` color from the theme, or white when no theme is set.
   * - An object accepts SVG `<rect>` attributes such as `fill`, `stroke` and `rx`, and a `padding`.
   *   It is merged over the theme styles key by key.
   * - `false` draws no background, even if the theme turns backgrounds on.
   * - `undefined` uses the theme's `graphicalItems[n].label.background`, and draws no background without a theme.
   *
   * Each background is sized from its rendered label and follows curved label paths.
   * It is not drawn for custom `content`.
   *
   * In a chart, the rectangles render in a zIndex layer below the labels,
   * so overlapping labels never cover each other's text.
   *
   * @since 3.11
   * @example <LabelList position="inside" background />
   * @example <LabelList position="inside" background={{ fill: '#fff', rx: 2, padding: 4 }} />
   */
  background?: boolean | TextBackgroundProps;
  /**
   * Draws an outline around the letters of each label, as a lighter alternative to `background`.
   *
   * - `true` draws the halo with default styles.
   *   The stroke is the `pageBackground` color from the theme, or white when no theme is set.
   * - An object accepts `stroke`, `strokeWidth`, `strokeOpacity` and `strokeLinejoin` to set them explicitly.
   * - `false` or `undefined` draws no halo.
   *
   * Unlike `background`, a halo needs no measurement, works during server-side rendering, and works for
   * labels that follow a curved path (`insideStart`, `insideEnd` and `end` in polar charts).
   *
   * @since 3.11
   * @example <LabelList position="inside" halo />
   * @example <LabelList position="inside" halo={{ stroke: '#fff', strokeWidth: 4 }} />
   */
  halo?: boolean | TextHaloProps;
}

/**
 * LabelList props do not allow refs because the same props are reused in multiple elements so we don't have a good single place to ref to.
 */
type SvgTextProps = PropsWithoutRef<SVGProps<SVGTextElement>>;
/**
 * @public
 */
export type Props = Omit<SvgTextProps, 'children'> & LabelListProps;

/**
 * This is the type accepted for the `label` prop on various graphical items.
 * It accepts:
 *
 * boolean:
 *    true = labels show,
 *    false = labels don't show
 * React element:
 *    will be cloned with extra props
 * function:
 *    is used as <Label content={function} />, so this will be called once for each individual label (so typically once for each data point)
 * object:
 *    the props to be passed to a LabelList component
 *
 * @inline
 * @public
 */
export type ImplicitLabelListType = boolean | LabelContentType | Props;

const defaultAccessor = (entry: LabelListEntry): RenderableText => {
  const val = Array.isArray(entry.value) ? entry.value[entry.value.length - 1] : entry.value;
  if (isRenderableText(val)) {
    return val;
  }
  return undefined;
};

const CartesianLabelListContext = createContext<ReadonlyArray<CartesianLabelListEntry> | undefined>(undefined);

export const CartesianLabelListContextProvider = CartesianLabelListContext.Provider;

const PolarLabelListContext = createContext<ReadonlyArray<PolarLabelListEntry> | undefined>(undefined);

export const PolarLabelListContextProvider = PolarLabelListContext.Provider;

const LabelListClipAreaContext = createContext<GraphicalItemClipArea | undefined>(undefined);

/**
 * Graphical items that can be clipped (for example when an axis has `allowDataOverflow`) render this around their labels.
 * The labels are not clipped, because the label of a point on the edge of the domain is often drawn outside of the clip area.
 * Instead, LabelList skips the labels of elements that are completely outside of the clip area.
 */
export function SetLabelListClipArea({
  xAxisId,
  yAxisId,
  children,
}: {
  xAxisId: AxisId;
  yAxisId: AxisId;
  children: ReactNode;
}) {
  const clipArea = useGraphicalItemClipArea(xAxisId, yAxisId);
  return <LabelListClipAreaContext.Provider value={clipArea}>{children}</LabelListClipAreaContext.Provider>;
}

function isInRange(start: number, size: number, areaStart: number, areaSize: number): boolean {
  const areaEnd = areaStart + areaSize;
  if (size === 0) {
    // A point exactly on the edge of the domain is inside, so that it keeps its label.
    return start >= areaStart && start <= areaEnd;
  }
  // A bar that only touches the edge from outside is not visible at all.
  return Math.max(start, start + size) > areaStart && Math.min(start, start + size) < areaEnd;
}

/**
 * The element of a label is a point (Line, Area), a rectangle (Bar), or the box of a symbol (Scatter).
 * The label is skipped if its element is outside of the clip area in one of the clipped dimensions.
 */
function isClippedAway(
  entry: CartesianLabelListEntry | undefined,
  clipArea: GraphicalItemClipArea | undefined,
): boolean {
  if (entry == null || clipArea == null) {
    return false;
  }
  return (
    (clipArea.isXClipped && !isInRange(entry.x, entry.width, clipArea.x, clipArea.width)) ||
    (clipArea.isYClipped && !isInRange(entry.y, entry.height, clipArea.y, clipArea.height))
  );
}

function useCartesianLabelListContext(): ReadonlyArray<CartesianLabelListEntry> | undefined {
  return useContext(CartesianLabelListContext);
}

function usePolarLabelListContext(): ReadonlyArray<PolarLabelListEntry> | undefined {
  return useContext(PolarLabelListContext);
}

/**
 * @consumes LabelListContext
 * @public
 */
export function LabelList({ valueAccessor = defaultAccessor, ...restProps }: Props) {
  const { dataKey, clockWise, id, textBreakAll, zIndex, ...others } = restProps;
  const cartesianData = useCartesianLabelListContext();
  const polarData = usePolarLabelListContext();
  const clipArea = useContext(LabelListClipAreaContext);
  const resolveLabelTheme = useDataLabelThemeResolver();
  const theme = useRechartsTheme();
  const dataLabelColors = useDataLabelColors();
  // Automatic colors apply only with a theme. Without one, labels keep the fill of their entry.
  const automaticLabelColors = theme == null ? undefined : dataLabelColors;
  const pageBackground = getEffectivePageBackground(theme);
  const data = cartesianData || polarData;
  const labelZIndex = zIndex ?? DefaultZIndexes.label;
  const backgroundZIndex = getLabelBackgroundZIndex(labelZIndex, others.background);

  if (!data || !data.length) {
    return null;
  }

  return (
    <>
      {others.background && <ZIndexLayer zIndex={backgroundZIndex} />}
      <ZIndexLayer zIndex={labelZIndex}>
        <DataLabelContextProvider value>
          <LabelZIndexProvider value={labelZIndex}>
            <Layer className="recharts-label-list">
              {data.map((entry, index) => {
                if (isClippedAway(cartesianData?.[index], clipArea)) {
                  return null;
                }
                const value = isNullish(dataKey)
                  ? valueAccessor(entry, index)
                  : (getValueByDataKey(entry.payload, dataKey) as string | number);

                const idProps = isNullish(id) ? {} : { id: `${id}-${index}` };

                /*
                 * The explicit fill from LabelList props wins, then the fill from the label theme.
                 * Without a theme, the label falls back to the fill of the entry.
                 * With a theme, the fallback depends on the position, so that a label on top of a shape stays readable.
                 */
                const labelTheme = resolveLabelTheme?.(index);
                const background = resolveLabelBackground(restProps.background, labelTheme?.background);
                const fallbackFill =
                  automaticLabelColors == null
                    ? entry.fill
                    : getAutomaticDataLabelFill({
                        position: others.position,
                        isPolar: isPolarViewBox(entry.viewBox),
                        hasFilledShapes: automaticLabelColors.hasFilledShapes,
                        shapeColors: automaticLabelColors.getShapeColors?.(index) ?? { fill: entry.fill },
                        pageBackground,
                        hasOwnBackground: Boolean(background) || Boolean(others.halo),
                      });
                const themedProps = applyLabelTheme(labelTheme, restProps, fallbackFill);

                return (
                  <Label
                    key={`label-${index}`}
                    {...svgPropertiesAndEvents(entry)}
                    {...others}
                    {...idProps}
                    fill={themedProps.fill}
                    style={themedProps.style}
                    background={themedProps.background}
                    parentViewBox={entry.parentViewBox}
                    value={value}
                    textBreakAll={textBreakAll}
                    viewBox={entry.viewBox}
                    index={index}
                    /*
                     * Here we don't want to use the default Label zIndex,
                     * we want it to inherit the zIndex of the LabelList itself
                     * which means just rendering as a regular child, without portaling anywhere.
                     */
                    zIndex={0}
                  />
                );
              })}
            </Layer>
          </LabelZIndexProvider>
        </DataLabelContextProvider>
      </ZIndexLayer>
    </>
  );
}

LabelList.displayName = 'LabelList';

function isLabelListProps(value: ImplicitLabelListType): value is Props {
  return typeof value === 'object' && value !== null && !React.isValidElement(value);
}

export function LabelListFromLabelProp({
  label,
  pointerEvents,
}: {
  label?: ImplicitLabelListType;
  /**
   * The `pointer-events` of the rendered labels.
   *
   * Charts where a label can end up on top of a shape that has its own pointer events - such as the
   * Sankey, where a node label sits on the node rectangle - use this to keep the labels from
   * intercepting the events of the shape underneath them.
   */
  pointerEvents?: string;
}) {
  if (!label) {
    return null;
  }

  if (label === true) {
    return <LabelList key="labelList-implicit" pointerEvents={pointerEvents} />;
  }

  if (React.isValidElement(label) || isLabelContentAFunction(label)) {
    return <LabelList key="labelList-implicit" content={label} pointerEvents={pointerEvents} />;
  }

  if (isLabelListProps(label)) {
    return (
      <LabelList
        key="labelList-implicit"
        {...label}
        type={String(label.type)}
        pointerEvents={label.pointerEvents ?? pointerEvents}
      />
    );
  }

  return null;
}
