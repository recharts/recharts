/**
 * A collection of all default zIndex values used throughout the library.
 */
export const DefaultZIndexes = {
  grid: -100,

  /*
   * other chart elements or custom elements without specific zIndex
   * render in here, at zIndex 0
   */

  area: 100,
  bar: 200,
  line: 300,
  scatter: 400,

  axisLineAndTick: 500,
  label: 600,
  axisTitle: 700,
  legend: 800,

  cursor: 1000,
  activeShape: 1100,

  tooltip: 10000,
};
