import { ChartPointer, MousePointer } from './types';

/**
 * Computes the chart coordinates from the mouse event.
 *
 * The coordinates are relative to the top-left corner of the chart,
 * where the top-left corner of the chart is (0, 0).
 * Moving right, the x-coordinate increases, and moving down, the y-coordinate increases.
 *
 * The coordinates are rounded to the nearest integer and are including a CSS transform scale.
 * So a chart that's scaled will return the same coordinates as a chart that's not scaled.
 *
 * @param event The mouse event from React event handlers
 * @return chartPointer The chart coordinates relative to the top-left corner of the chart
 */
export const getChartPointer = (event: MousePointer): ChartPointer => {
  const rect = event.currentTarget.getBoundingClientRect();
  const scaleX = rect.width / event.currentTarget.offsetWidth;
  const scaleY = rect.height / event.currentTarget.offsetHeight;
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
