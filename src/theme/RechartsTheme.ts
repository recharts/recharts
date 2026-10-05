import { CSSProperties } from 'react';
import { LegendProps } from '../index';

/**
 * Styles shared for rectangular or variable shape components that have an area (Area, Bar, Rectangle)
 */
export type Styles2D = {
  stroke?: string;
  strokeOpacity?: number | string;
  strokeWidth?: number | string;
  strokeDasharray?: string | number;
  fillOpacity?: number | string;
  fill?: string;
};

export type GraphicalItemStyle = Styles2D & {
  /**
   * Styles applied to the active representation of a graphical item.
   *
   * The supported active representation differs by component. For example,
   * Line uses this for its built-in active dot, while Bar and Pie will use it
   * for their active shapes when they support graphical item themes.
   */
  active?: Styles2D;
};

/**
 * Styles shared with components that have a line (Line, ReferenceLine, ErrorBar) but no area
 */
export type Styles1D = {
  stroke: string;
  strokeWidth?: number;
  strokeOpacity?: number;
  strokeDasharray?: string | number;
};

/**
 * Styles shared with text components (various Labels, Tooltip, Legend, labels, text).
 *
 * These styles are applied to both SVG elements (Label, Text) and HTML elements (Legend, Tooltip).
 */
export type TextStyles = CSSProperties;

/**
 * Styling presets for Recharts components.
 * The theme can be used to customize the appearance of charts, including colors, fonts, and other visual properties.
 *
 * @experimental
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
   * Individual shapes of Bar, RadialBar, Scatter, Pie, Funnel, Treemap, Sankey, and SunburstChart can be styled
   * from the data array. If a data entry defines any of `fill`, `fillOpacity`,
   * `stroke`, `strokeOpacity`, `strokeWidth`, or `strokeDasharray`, then that shape ignores
   * the theme completely, and renders with only its own styles and the explicit props of its
   * graphical item. This way the theme colors never mix with colors from data.
   *
   * Legend and Tooltip items inherit the same color.
   */
  graphicalItems: ReadonlyArray<GraphicalItemStyle>;
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
   * If you paint a background here, set `pageBackground` to the same color.
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
   * Features that compare colors, such as contrast checks, need a literal color.
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
