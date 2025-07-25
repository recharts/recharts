/**
 * This is the data that's coming through main chart `data` prop
 * Recharts is very flexible in what it accepts so the type is very flexible too.
 * This will typically be an object, and various components will provide various `dataKey`
 * that dictates how to pull data from that object.
 *
 * TL;DR: before dataKey
 */
export type ChartData = unknown[];
/**
 * So this is the same unknown type as ChartData but this is after the dataKey has been applied.
 * We still don't know what the type is - that depends on what exactly it was before the dataKey application,
 * and the dataKey can return whatever anyway - but let's keep it separate as a form of documentation.
 *
 * TL;DR: ChartData after dataKey.
 */
export type AppliedChartData = ReadonlyArray<{
    value: unknown;
}>;
export type ChartDataState = {
    chartData: ChartData | undefined;
    /**
     * store a copy of chart data after it has been processed by each chart's specific
     * compute functions. TODO: add other charts besides Sankey
     */
    computedData: unknown | undefined;
    /**
     * Using Brush, users can choose where they want to zoom in.
     * This is zero-based index of the starting data point.
     */
    dataStartIndex: number;
    /**
     * Using Brush, users can choose where they want to zoom in.
     * This is zero-based index of the last data point.
     */
    dataEndIndex: number;
};
export declare const initialChartDataState: ChartDataState;
export declare const setChartData: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<ChartData, "chartData/setChartData">, setDataStartEndIndexes: import("@reduxjs/toolkit").ActionCreatorWithNonInferrablePayload<"chartData/setDataStartEndIndexes">, setComputedData: import("@reduxjs/toolkit").ActionCreatorWithNonInferrablePayload<"chartData/setComputedData">;
export declare const chartDataReducer: import("redux").Reducer<ChartDataState>;
