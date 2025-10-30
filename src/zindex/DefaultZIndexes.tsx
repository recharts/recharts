/**
 * A collection of all default zIndex values used throughout the library.
 */
export const DefaultZIndexes = {
  /**
   * CartesianGrid and PolarGrid
   */
  grid: -100,
  /**
   * Background of Bar and RadialBar.
   * This is not visible by default but can be enabled by setting background={true} on Bar or RadialBar.
   */
  barBackground: -50,

  /*
   * other chart elements or custom elements without specific zIndex
   * render in here, at zIndex 0
   */

  /**
   * Area, Pie, Radar, and ReferenceArea
   */
  area: 100,

  /**
   * Cursor is embedded inside Tooltip and controlled by it.
   * The Tooltip itself has a separate portal and is not included in the zIndex system;
   * Cursor is the decoration inside the chart area, usually a cross or a box.
   */
  cursor: 200,

  /**
   * Bar and RadialBar
   */
  bar: 300,
  /**
   * Line and ReferenceLine, and ErrorBor
   */
  line: 400,

  /**
   * XAxis and YAxis and PolarAngleAxis and PolarRadiusAxis ticks and lines and children
   */
  axis: 500,

  /**
   * Scatter and ReferenceDot,
   * and Dots of Line and Area and Radar if they have dot=true
   */
  scatter: 600,

  /**
   * LabelList and Label, including Axis labels
   */
  label: 700,

  /**
   * Hovering over a Bar or RadialBar renders a highlight rectangle
   */
  activeBar: 1000,
  /**
   * Hovering over a Point in Line, Area, Scatter, Radar renders a highlight dot
   */
  activeDot: 1100,
};
