import { CSSProperties } from 'react';
import { LegendProps } from '../index';
import type { TextBackgroundProps } from '../component/Text';
import type { RechartsFill } from '../fill/RechartsFill';

/**
 * Styles shared for rectangular or variable shape components that have an area (Area, Bar, Rectangle)
 */
export type Styles2D = {
  stroke?: string;
  strokeOpacity?: number | string;
  strokeWidth?: number | string;
  strokeDasharray?: string | number;
  fillOpacity?: number | string;
  /**
   * A color, or a fill object that paints the shapes with a pattern or a gradient.
   * Everything that needs a plain color, such as the Tooltip, the Legend text, and labels, uses its `color`.
   *
   * Give each entry of `graphicalItems` a different pattern, and charts tell their series apart
   * without relying on color alone.
   *
   * Bar, Area, Radar, Scatter, Pie, RadialBar, Funnel, CartesianGrid, PolarGrid, ReferenceArea, ReferenceDot,
   * Brush, the Bar and RadialBar backgrounds, and the Tooltip cursor draw the definition of a fill object.
   * Everything else, the `active` styles included, paints with its `color`.
   *
   * @example { fill: { color: '#2b6cb0', definition: pattern(patterns.diagonal) } }
   */
  fill?: string | RechartsFill;
};

export type GraphicalItemStyle = Styles2D & {
  /**
   * Styles applied to the active representation of a graphical item.
   *
   * The active representation differs by component:
   *
   * - Line, Area, and Radar use these styles for their built-in active dot (`activeDot`).
   * - Bar uses them for its active bar (`activeBar`).
   * - Pie, Scatter, RadialBar, and Funnel use them for their active shape (`activeShape`).
   *
   * Bar, Scatter, RadialBar, and Funnel highlight the active shape only if you enable it,
   * for example with `activeBar={true}` or `activeShape={true}`.
   *
   * All of these follow the same rules:
   *
   * - These styles apply only to what Recharts renders by default. A custom active representation
   *   (a function or a React element) receives none of them. In Bar, a custom `shape` is used
   *   for the active bar too, so it does not receive them either.
   * - If the `activeDot`, `activeBar`, or `activeShape` object sets its own `fill` or `stroke`,
   *   it ignores the `fill` and `stroke` from here. Its other style properties override the matching ones from here,
   *   and the rest of these styles still apply.
   * - The `fill` and `stroke` from here are designed to go with the theme colors of the graphical item.
   *   If the graphical item or a data entry sets its own `fill` or `stroke`, its active representation ignores
   *   the `fill` and `stroke` from here, and keeps its own colors. The rest of these styles still apply.
   */
  active?: Styles2D;
  /**
   * Styles of the data labels of this graphical item: `LabelList`, the `label` prop of graphical items,
   * and the default Pie label.
   *
   * Data labels never use the global {@link RechartsTheme.label}.
   *
   * The labels take the same entry as their graphical item: Pie and Funnel take one entry per sector or trapezoid,
   * the other graphical items take one entry per series.
   * The labels keep these styles even if the graphical item or a data entry sets its own `fill` or `stroke`.
   *
   * If `style` sets no color, data labels pick one automatically:
   * - A label on top of a filled shape (Bar, Funnel, Pie, RadialBar) takes the `pageBackground` color,
   *   or the `typography` color if there is no page background.
   *   A shape with `fill="none"` or `transparent` is not filled, so its labels count as next to it.
   * - A label next to its shape, and every label of Line, Area, Radar and Scatter, takes the color of its shape.
   * - A label with a `background` or `halo` takes the color of its shape too.
   * - A label at an `{ x, y }` position takes the `typography` color.
   *
   * @see {@link https://recharts.github.io/en-US/guide/label-colors/ Label colors guide}
   *
   * Explicit props of `LabelList`, of the `label` prop of graphical items, and of the default Pie label
   * win over these styles.
   */
  label?: LabelTheme;
};

/**
 * Styles shared with components that have a line (Line, ReferenceLine, ErrorBar) but no area
 */
export type Styles1D = {
  stroke?: string;
  strokeWidth?: number | string;
  strokeOpacity?: number | string;
  strokeDasharray?: string | number;
};

/**
 * Styles shared with text components (various Labels, Tooltip, Legend, labels, text).
 *
 * These styles are applied to both SVG elements (Label, Text) and HTML elements (Legend, Tooltip).
 */
export type TextStyles = CSSProperties;

/**
 * Styles of labels.
 *
 * Explicit props of the label win over these styles.
 */
export type LabelTheme = {
  /**
   * Text styles. They are merged over `typography`, and the explicit `style` prop of the label is merged over them.
   *
   * A `fill` or `color` here sets the text color, unless the label sets its own `fill`.
   */
  style?: TextStyles;
  /**
   * The default for the `background` prop of the label, in the same format.
   *
   * - `true` or an object draws a background behind every label that does not set `background={false}`.
   * - An object also sets the styles of the background. If the label sets `background` to an object,
   *   that object is merged over these styles key by key.
   * - `false` or `undefined` draws no background, unless the label asks for one.
   *   If it does, it gets the default styles.
   *
   * If neither the label nor the theme sets the background `fill`, the background uses `pageBackground`.
   */
  background?: boolean | TextBackgroundProps;
};

/**
 * Styling presets for Recharts components.
 * The theme can be used to customize the appearance of charts, including colors, fonts, and other visual properties.
 *
 * @see {@link https://recharts.github.io/en-US/guide/theming/ Theming guide}
 *
 * @since 3.11
 */
export interface RechartsTheme {
  /**
   * Sets styles for all text elements in Recharts, including Tooltip and Legend
   */
  typography?: TextStyles;
  /**
   * Colors of main graphical elements (Area, Bar, Line, Treemap, etc.).
   * Line, Area, Bar, Scatter, Radar, and RadialBar select an entry by sorting the
   * unique string representations of the `dataKey` values currently present in
   * the chart. The first entry is assigned to the first key in that sorted
   * list, and the palette repeats when there are more keys than entries.
   *
   * Graphical items with the same `dataKey` share a style. The assignment is
   * independent of render order, but adding or removing a graphical item can
   * change the assignment of the remaining items. The same `dataKey` can also
   * receive different entries in charts with different sets of graphical items.
   *
   * If this array has only one item in it then all graphical items will have the same color.
   *
   * Sankey selects an entry for each node by the node's index in `data.nodes`,
   * and draws each link in the color of its source node, at reduced opacity.
   *
   * Treemap and SunburstChart give each top-level tile or first-ring sector the next entry by index,
   * and all their descendants inherit that color.
   *
   * The theme colors never mix with user colors. If Line, Area, Bar, Scatter, Radar, RadialBar, Pie, Funnel,
   * Treemap, or SunburstChart sets its own `fill` or `stroke` prop, it ignores the `fill` and `stroke`
   * of its theme entry together, also in the active state. The rest of the theme entry still applies,
   * including the other `active` styles and the `label` styles.
   *
   * Individual shapes of Bar, RadialBar, Scatter, Pie, Funnel, Treemap, Sankey, and SunburstChart, and
   * individual point markers of Line, Area, and Radar can be styled from the data array. If a data entry defines its own
   * `fill` or `stroke`, then that shape ignores the theme `fill` and `stroke` together, and takes its colors
   * only from its own styles and the explicit props of its graphical item. The rest of the theme still applies.
   *
   * Other style props and data properties (`fillOpacity`, `strokeOpacity`, `strokeWidth`, `strokeDasharray`)
   * override the matching theme value and keep the rest of the theme.
   *
   * Legend and Tooltip items inherit the same color.
   */
  graphicalItems: ReadonlyArray<GraphicalItemStyle>;
  /**
   * Styles of labels other than data labels: axis labels, labels of reference lines, areas and dots,
   * and standalone `Label` components.
   *
   * Data labels take their styles from {@link GraphicalItemStyle.label} instead.
   */
  label?: LabelTheme;
  /**
   * Styles applied to Bar and RadialBar backgrounds.
   */
  barBackground?: Styles2D;
  /**
   * Styles applied to the Brush background, slide, travellers, and text.
   */
  brush?: Pick<Styles2D, 'fill' | 'stroke'>;
  /**
   * CartesianGrid and PolarGrid.
   *
   * Recharts grid allows fill color and fill opacity
   */
  grid?: Styles2D;
  /**
   * ReferenceLine, ReferenceArea, and ReferenceDot.
   */
  reference?: Styles2D;
  /**
   * XAxis and YAxis and PolarAngleAxis and PolarRadiusAxis ticks and lines and children
   */
  axis?: Styles1D;
  /**
   * ErrorBar lines.
   */
  errorBar?: Styles1D;
  /**
   * Styles applied to the element that wraps the chart, the same element that the `style` prop of the chart styles.
   * The Legend renders inside this element too, so a background here covers the Legend as well.
   *
   * The explicit `width`, `height`, and `style` props of the chart take precedence over these styles.
   *
   * `width` and `height` set a default size for every chart that does not set its own.
   * Set both, or set one as a string (such as `'100%'`) together with `aspectRatio`,
   * otherwise the chart has no size and renders nothing.
   *
   * These are inline styles, so they also take precedence over CSS classes on the chart.
   *
   * The built-in themes leave this empty: charts are transparent and the page shows through,
   * and they have no default size.
   *
   * If you paint `backgroundColor` here and leave `pageBackground` unset,
   * Recharts uses `backgroundColor` as the `pageBackground`.
   * If you paint a `background` shorthand or an image, set `pageBackground` yourself.
   */
  chart?: CSSProperties;
  /**
   * The color directly behind the chart: the page, or `chart.backgroundColor` if you paint one.
   *
   * Recharts never paints this as a background.
   * It uses this color to draw gaps and halos that look like cut-outs:
   * Treemap tile outlines, SunburstChart separators and the halo around its labels.
   *
   * Any CSS color works, including `var()` references.
   *
   * If this is not set, Recharts uses `chart.backgroundColor` instead.
   * An explicit `pageBackground` always wins.
   *
   * Each built-in theme is designed for one page background, and sets it here.
   * For example, `darkTheme` expects a dark page and is not legible on a light one.
   * `autoTheme` expects a page background that follows the CSS `color-scheme`.
   */
  pageBackground?: string;

  /**
   * Styles applied to the cursor highlight shown with an active Tooltip.
   */
  cursor?: Styles2D;

  tooltip?: {
    /**
     * CSS styles to be applied to the wrapper `div` element.
     */
    contentStyle?: CSSProperties;
    /**
     * CSS styles of individual items inside the tooltip, a `<li>` element.
     * These show the data label (name, or dataKey) and value.
     *
     * If a chart has multiple graphical items then the Tooltip renders multiple item
     * and each of them gets this itemStyle applied.
     */
    itemStyle?: CSSProperties;
    /**
     * CSS styles of the tooltip title.
     * Renders once on the top of tooltip and shows categorical axis value.
     *
     * Even if there are multiple graphical items in the chart, only one label gets rendered.
     *
     * Note that "Label" in tooltip is the header, which is different from {@link Legend}
     * where "labelStyle" are the individual items.
     */
    labelStyle?: CSSProperties;
  };
  legend?: {
    /**
     * CSS styles to be applied to the wrapper `div` element.
     */
    wrapperStyle?: CSSProperties;
    /**
     * CSS styles of individual items inside the Legend, a `<span>` element.
     * These show the data label (name, or dataKey) and value.
     *
     * If a chart has multiple graphical items then the Legend renders multiple item
     * and each of them gets this itemStyle applied.
     *
     * Pie charts render multiple labels from a single data series.
     *
     * Note that this is different from {@link Tooltip}:
     * - in Tooltip: "labelStyle" styles the title / header
     * - in Tooltip: "itemStyle" styles the individual data points
     * - in Legend: "labelStyle" styles the individual data points
     *
     * Beware of the naming inconsistency!
     */
    labelStyle?: CSSProperties;
    position?: LegendProps['position'];
    offset?: LegendProps['offset'];
  };
}
