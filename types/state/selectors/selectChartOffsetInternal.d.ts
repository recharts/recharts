import { ChartOffsetInternal, Margin, Size } from '../../util/types';
import { XAxisSettings, YAxisSettings } from '../cartesianAxisSlice';
import { LegendSettings } from '../legendSlice';
import { RechartsRootState } from '../store';
export declare const selectBrushHeight: (state: RechartsRootState) => number;
/**
 * For internal use only.
 *
 * @param root state
 * @return ChartOffsetInternal
 */
export declare const selectChartOffsetInternal: (state: RechartsRootState) => ChartOffsetInternal;
export declare const selectChartViewBox: ((state: import("redux").EmptyObject & {
    brush: import("../brushSlice").BrushSettings;
    cartesianAxis: {
        xAxis: Record<import("../cartesianAxisSlice").AxisId, XAxisSettings>;
        yAxis: Record<import("../cartesianAxisSlice").AxisId, YAxisSettings>;
        zAxis: Record<import("../cartesianAxisSlice").AxisId, import("../cartesianAxisSlice").ZAxisSettings>;
    };
    chartData: import("../chartDataSlice").ChartDataState;
    graphicalItems: import("../graphicalItemsSlice").GraphicalItemsState;
    layout: {
        layoutType: import("../../util/types").LayoutType;
        width: number;
        height: number;
        margin: Margin;
        scale: number;
    };
    legend: {
        settings: LegendSettings;
        size: Size;
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
}) => Required<import("../../util/types").CartesianViewBox>) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: ChartOffsetInternal) => Required<import("../../util/types").CartesianViewBox>;
    memoizedResultFunc: ((resultFuncArgs_0: ChartOffsetInternal) => Required<import("../../util/types").CartesianViewBox>) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => Required<import("../../util/types").CartesianViewBox>;
    dependencies: [(state: RechartsRootState) => ChartOffsetInternal];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("reselect").weakMapMemoize;
    memoize: typeof import("reselect").weakMapMemoize;
};
export declare const selectAxisViewBox: ((state: import("redux").EmptyObject & {
    brush: import("../brushSlice").BrushSettings;
    cartesianAxis: {
        xAxis: Record<import("../cartesianAxisSlice").AxisId, XAxisSettings>;
        yAxis: Record<import("../cartesianAxisSlice").AxisId, YAxisSettings>;
        zAxis: Record<import("../cartesianAxisSlice").AxisId, import("../cartesianAxisSlice").ZAxisSettings>;
    };
    chartData: import("../chartDataSlice").ChartDataState;
    graphicalItems: import("../graphicalItemsSlice").GraphicalItemsState;
    layout: {
        layoutType: import("../../util/types").LayoutType;
        width: number;
        height: number;
        margin: Margin;
        scale: number;
    };
    legend: {
        settings: LegendSettings;
        size: Size;
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
}) => Required<import("../../util/types").CartesianViewBox>) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: number, resultFuncArgs_1: number) => Required<import("../../util/types").CartesianViewBox>;
    memoizedResultFunc: ((resultFuncArgs_0: number, resultFuncArgs_1: number) => Required<import("../../util/types").CartesianViewBox>) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => Required<import("../../util/types").CartesianViewBox>;
    dependencies: [(state: RechartsRootState) => number, (state: RechartsRootState) => number];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("reselect").weakMapMemoize;
    memoize: typeof import("reselect").weakMapMemoize;
};
