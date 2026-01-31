import { ChartPointer, MousePointer, SVGMousePointer } from './types';

/**
 * Type guard to check if the pointer event is from an SVG element.
 */
function isSvgPointer(pointer: MousePointer): pointer is SVGMousePointer {
  return 'getBBox' in pointer.currentTarget && typeof pointer.currentTarget.getBBox === 'function';
}

/**
 * Computes relative element coordinates from mouse event.
 *
 * The output coordinates are relative to the top-left corner of the active element (= currentTarget),
 * where the top-left corner is (0, 0).
 * Moving right, the x-coordinate increases, and moving down, the y-coordinate increases.
 *
 * The coordinates are rounded to the nearest integer and account for CSS transform scale.
 * So a chart that's scaled will return the same coordinates as a chart that's not scaled.
 *
 * This function works with both HTML elements and SVG elements:
 * - For HTML elements, it uses `offsetWidth`/`offsetHeight` to compute the scale.
 * - For SVG elements, it uses `getBBox()` to compute the scale.
 *
 * @example
 * ```tsx
 * // In an HTML element event handler
 * <Legend onMouseMove={(e) => {
 *   const { chartX, chartY } = getChartPointer(e);
 *   console.log(`Mouse at chart position: (${chartX}, ${chartY})`);
 * }}>
 *
 * // In an SVG element event handler
 * <Area onMouseMove={(e) => {
 *   const { chartX, chartY } = getChartPointer(e);
 *   console.log(`Mouse at chart position: (${chartX}, ${chartY})`);
 * }}>
 * ```
 *
 * @param event The mouse event from React event handlers (works with both HTML and SVG elements)
 * @returns The chart coordinates relative to the top-left corner of the element
 */
export const getChartPointer = (event: MousePointer): ChartPointer => {
  const rect = event.currentTarget.getBoundingClientRect();

  let scaleX: number, scaleY: number;

  if (isSvgPointer(event)) {
    // For SVG elements, use getBBox() to get the intrinsic size in SVG coordinates
    const bbox = event.currentTarget.getBBox();
    scaleX = bbox.width > 0 ? rect.width / bbox.width : 1;
    scaleY = bbox.height > 0 ? rect.height / bbox.height : 1;
  } else {
    // For HTML elements, use offsetWidth/offsetHeight
    scaleX = event.currentTarget.offsetWidth > 0 ? rect.width / event.currentTarget.offsetWidth : 1;
    scaleY = event.currentTarget.offsetHeight > 0 ? rect.height / event.currentTarget.offsetHeight : 1;
  }

  return {
    /*
     * Here it's important to use:
     * - event.clientX and event.clientY to get the mouse position relative to the viewport, including scroll.
     * - pageX and pageY are not used because they are relative to the whole document, and ignore scroll.
     * - rect.left and rect.top are used to get the position of the chart relative to the viewport.
     * - offsetX and offsetY are not used because they are relative to the offset parent
     *  which may or may not be the same as the clientX and clientY, depending on the position of the chart in the DOM
     *  and surrounding element styles. CSS position: relative, absolute, fixed, will change the offset parent.
     * - scaleX and scaleY are necessary for when the chart element is scaled using CSS `transform: scale(N)`.
     */
    chartX: Math.round((event.clientX - rect.left) / scaleX),
    chartY: Math.round((event.clientY - rect.top) / scaleY),
  };
};
