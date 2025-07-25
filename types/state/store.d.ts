import { Action, Dispatch, Store } from '@reduxjs/toolkit';
declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    brush: import("./brushSlice").BrushSettings;
    cartesianAxis: {
        xAxis: Record<import("./cartesianAxisSlice").AxisId, import("./cartesianAxisSlice").XAxisSettings>;
        yAxis: Record<import("./cartesianAxisSlice").AxisId, import("./cartesianAxisSlice").YAxisSettings>;
        zAxis: Record<import("./cartesianAxisSlice").AxisId, import("./cartesianAxisSlice").ZAxisSettings>;
    };
    chartData: import("./chartDataSlice").ChartDataState;
    graphicalItems: import("./graphicalItemsSlice").GraphicalItemsState;
    layout: {
        layoutType: import("../util/types").LayoutType;
        width: number;
        height: number;
        margin: import("../util/types").Margin;
        scale: number;
    };
    legend: {
        settings: import("./legendSlice").LegendSettings;
        size: import("../util/types").Size;
        payload: ReadonlyArray<ReadonlyArray<import("..").LegendPayload>>;
    };
    options: import("./optionsSlice").ChartOptions;
    polarAxis: {
        radiusAxis: Record<import("./cartesianAxisSlice").AxisId, import("./polarAxisSlice").RadiusAxisSettings>;
        angleAxis: Record<import("./cartesianAxisSlice").AxisId, import("./polarAxisSlice").AngleAxisSettings>;
    };
    polarOptions: import("./polarOptionsSlice").PolarChartOptions;
    referenceElements: {
        dots: ReadonlyArray<import("./referenceElementsSlice").ReferenceDotSettings>;
        areas: ReadonlyArray<import("./referenceElementsSlice").ReferenceAreaSettings>;
        lines: ReadonlyArray<import("./referenceElementsSlice").ReferenceLineSettings>;
    };
    rootProps: import("./rootPropsSlice").UpdatableChartOptions;
    tooltip: import("./tooltipSlice").TooltipState;
}>, import("redux").AnyAction>;
export declare const createRechartsStore: (preloadedState?: Partial<RechartsRootState>, chartName?: string) => Store<RechartsRootState>;
export type RechartsRootState = ReturnType<typeof rootReducer>;
export type AppDispatch = Dispatch<Action>;
export {};
