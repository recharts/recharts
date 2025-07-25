import { ChartOffsetInternal } from '../../util/types';
import { ChartOffset } from '../../types';
export declare const selectChartOffset: ((state: import("redux").EmptyObject & {
    brush: import("../brushSlice").BrushSettings;
    cartesianAxis: {
        xAxis: Record<import("../cartesianAxisSlice").AxisId, import("../cartesianAxisSlice").XAxisSettings>;
        yAxis: Record<import("../cartesianAxisSlice").AxisId, import("../cartesianAxisSlice").YAxisSettings>;
        zAxis: Record<import("../cartesianAxisSlice").AxisId, import("../cartesianAxisSlice").ZAxisSettings>;
    };
    chartData: import("../chartDataSlice").ChartDataState;
    graphicalItems: import("../graphicalItemsSlice").GraphicalItemsState;
    layout: {
        layoutType: import("../../util/types").LayoutType;
        width: number;
        height: number;
        margin: import("../../util/types").Margin;
        scale: number;
    };
    legend: {
        settings: import("../legendSlice").LegendSettings;
        size: import("../../util/types").Size;
        payload: ReadonlyArray<ReadonlyArray<import("../..").LegendPayload>>;
    };
    options: import("../optionsSlice").ChartOptions;
    polarAxis: {
        radiusAxis: Record<import("../cartesianAxisSlice").AxisId, import("../polarAxisSlice").RadiusAxisSettings>;
        angleAxis: Record<import("../cartesianAxisSlice").AxisId, import("../polarAxisSlice").AngleAxisSettings>;
    };
    polarOptions: import("../polarOptionsSlice").PolarChartOptions;
    referenceElements: {
        dots: ReadonlyArray<import("../referenceElementsSlice").ReferenceDotSettings>;
        areas: ReadonlyArray<import("../referenceElementsSlice").ReferenceAreaSettings>;
        lines: ReadonlyArray<import("../referenceElementsSlice").ReferenceLineSettings>;
    };
    rootProps: import("../rootPropsSlice").UpdatableChartOptions;
    tooltip: import("../tooltipSlice").TooltipState;
}) => ChartOffset) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: ChartOffsetInternal) => ChartOffset;
    memoizedResultFunc: ((resultFuncArgs_0: ChartOffsetInternal) => ChartOffset) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => ChartOffset;
    dependencies: [(state: import("../store").RechartsRootState) => ChartOffsetInternal];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("reselect").weakMapMemoize;
    memoize: typeof import("reselect").weakMapMemoize;
};
