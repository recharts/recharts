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
export declare const getChartPointer: (event: MousePointer) => ChartPointer;
