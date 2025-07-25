import { LayoutType, Margin, Size } from '../util/types';
type ChartLayoutState = {
    layoutType: LayoutType;
    width: number;
    height: number;
    margin: Margin;
    /**
     * How much is the chart zoomed in.
     * Used for scaling the mouse coordinates to the chart coordinates.
     */
    scale: number;
};
export declare const setMargin: import("@reduxjs/toolkit").ActionCreatorWithNonInferrablePayload<"chartLayout/setMargin">, setLayout: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<LayoutType, "chartLayout/setLayout">, setChartSize: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<Size, "chartLayout/setChartSize">, setScale: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<number, "chartLayout/setScale">;
export declare const chartLayoutReducer: import("redux").Reducer<ChartLayoutState>;
export {};
