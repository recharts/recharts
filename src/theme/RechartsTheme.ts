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
   * If there are multiple elements in the chart, they will receive different values from this array.
   * If this array has only one item in it then all graphical items will have the same color.
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
  chart?: CSSProperties;

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
