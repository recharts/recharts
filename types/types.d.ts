/**
 * Defines the blank space between the chart and the plot area.
 * This blank space is occupied by supporting elements like axes, legends, and brushes.
 * This also includes any margins that might be applied to the chart.
 */
export type ChartOffset = {
    /**
     * Distance from the top edge of the chart to the top edge of the plot area.
     */
    readonly top: number;
    /**
     * Distance from the bottom edge of the chart to the bottom edge of the plot area.
     * Note that this is not a coordinate, this is a distance.
     * Meaning, `offset.bottom` could be 0 in a perfectly fine big chart.
     */
    readonly bottom: number;
    /**
     * Distance from the left edge of the chart to the left edge of the plot area.
     */
    readonly left: number;
    /**
     * Distance from the right edge of the chart to the right edge of the plot area.
     * Note that this is not a coordinate, this is a distance.
     * Meaning, `offset.right` could be 0 in a perfectly fine big chart.
     */
    readonly right: number;
};
/**
 * Plot area is the area where the actual chart data is rendered.
 * This means: bars, lines, scatter points, etc.
 */
export type PlotArea = {
    /**
     * The width of the plot area.
     * This will be the same as `chartWidth - offset.left - offset.right`
     */
    readonly width: number;
    /**
     * The height of the plot area.
     * This will be the same as `chartHeight - offset.top - offset.bottom`
     */
    readonly height: number;
    /**
     * The x coordinate of the top-left corner of the plot area.
     * This will be the same as `offset.left`
     */
    readonly x: number;
    /**
     * The y coordinate of the top-left corner of the plot area.
     * This will be the same as `offset.top`
     */
    readonly y: number;
};
