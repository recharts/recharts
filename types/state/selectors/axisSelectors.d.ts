import { RechartsScale } from '../../util/ChartUtils';
import { AxisDomain, CartesianTickItem, CategoricalDomain, Coordinate, LayoutType, NumberDomain, Size, StackOffsetType, TickItem } from '../../util/types';
import { AxisId, BaseCartesianAxis, CartesianAxisSettings, XAxisOrientation, XAxisSettings, YAxisOrientation, YAxisSettings, ZAxisSettings } from '../cartesianAxisSlice';
import { RechartsRootState } from '../store';
import { AppliedChartData, ChartData, ChartDataState } from '../chartDataSlice';
import { CartesianGraphicalItemSettings, ErrorBarsSettings, GraphicalItemSettings, PolarGraphicalItemSettings } from '../graphicalItemsSlice';
import { ReferenceAreaSettings, ReferenceDotSettings, ReferenceElementSettings, ReferenceLineSettings } from '../referenceElementsSlice';
import { AxisPropsForCartesianGridTicksGeneration } from '../../cartesian/CartesianGrid';
import { AngleAxisSettings, RadiusAxisSettings } from '../polarAxisSlice';
import { MaybeStackedGraphicalItem } from './barSelectors';
import { AllStackGroups } from '../../util/stacks/stackTypes';
import { DisplayedStackedData } from './combiners/combineDisplayedStackedData';
/**
 * angle, radius, X, Y, and Z axes all have domain and range and scale and associated settings
 */
type XorYorZType = 'xAxis' | 'yAxis' | 'zAxis' | 'radiusAxis' | 'angleAxis';
/**
 * X and Y axes have ticks. Z axis is never displayed and so it lacks ticks
 * and tick settings.
 */
export type XorYType = 'xAxis' | 'yAxis' | 'angleAxis' | 'radiusAxis';
export type AxisWithTicksSettings = XAxisSettings | YAxisSettings | AngleAxisSettings | RadiusAxisSettings;
/**
 * If an axis is not explicitly defined as an element,
 * we still need to render something in the chart and we need
 * some object to hold the domain and default settings.
 */
export declare const implicitXAxis: XAxisSettings;
export declare const selectXAxisSettings: (state: RechartsRootState, axisId: AxisId) => XAxisSettings;
/**
 * If an axis is not explicitly defined as an element,
 * we still need to render something in the chart and we need
 * some object to hold the domain and default settings.
 */
export declare const implicitYAxis: YAxisSettings;
export declare const selectYAxisSettings: (state: RechartsRootState, axisId: AxisId) => YAxisSettings;
export declare const implicitZAxis: ZAxisSettings;
export declare const selectZAxisSettings: (state: RechartsRootState, axisId: AxisId) => ZAxisSettings;
export declare const selectBaseAxis: (state: RechartsRootState, axisType: XorYorZType, axisId: AxisId) => BaseCartesianAxis;
/**
 * Selects either an X or Y axis. Doesn't work with Z axis - for that, instead use selectBaseAxis.
 * @param state Root state
 * @param axisType xAxis | yAxis
 * @param axisId xAxisId | yAxisId
 * @returns axis settings object
 */
export declare const selectAxisSettings: (state: RechartsRootState, axisType: XorYType, axisId: AxisId) => AxisWithTicksSettings;
/**
 * @param state RechartsRootState
 * @return boolean true if there is at least one Bar or RadialBar
 */
export declare const selectHasBar: (state: RechartsRootState) => boolean;
/**
 * Filters CartesianGraphicalItemSettings by the relevant axis ID
 * @param axisType 'xAxis' | 'yAxis' | 'zAxis' | 'radiusAxis' | 'angleAxis'
 * @param axisId from props, defaults to 0
 *
 * @returns Predicate function that return true for CartesianGraphicalItemSettings that are relevant to the specified axis
 */
export declare function itemAxisPredicate(axisType: XorYorZType, axisId: AxisId): (item: CartesianGraphicalItemSettings | PolarGraphicalItemSettings) => boolean;
export declare const selectUnfilteredCartesianItems: (state: RechartsRootState) => ReadonlyArray<CartesianGraphicalItemSettings>;
export declare const combineGraphicalItemsSettings: <T extends GraphicalItemSettings>(graphicalItems: ReadonlyArray<T>, axisSettings: BaseCartesianAxis, axisPredicate: (item: T) => boolean) => T[];
export declare const selectCartesianItemsSettings: (state: RechartsRootState, axisType: XorYorZType, axisId: AxisId) => ReadonlyArray<CartesianGraphicalItemSettings>;
export declare const filterGraphicalNotStackedItems: <T extends MaybeStackedGraphicalItem>(cartesianItems: ReadonlyArray<T>) => ReadonlyArray<T>;
export declare const combineGraphicalItemsData: (cartesianItems: ReadonlyArray<GraphicalItemSettings>) => unknown[];
/**
 * This is a "cheap" selector - it returns the data but doesn't iterate them, so it is not sensitive on the array length.
 * Also does not apply dataKey yet.
 * @param state RechartsRootState
 * @returns data defined on the chart graphical items, such as Line or Scatter or Pie, and filtered with appropriate dataKey
 */
export declare const selectCartesianGraphicalItemsData: (state: RechartsRootState, axisType: XorYorZType, axisId: AxisId) => ChartData;
export declare const combineDisplayedData: (graphicalItemsData: ChartData, { chartData, dataStartIndex, dataEndIndex }: ChartDataState) => ChartData;
/**
 * This selector will return all data there is in the chart: graphical items, chart root, all together.
 * Useful for figuring out an axis domain (because that needs to know of everything),
 * not useful for rendering individual graphical elements (because they need to know which data is theirs and which is not).
 *
 * This function will discard the original indexes, so it is also not useful for anything that depends on ordering.
 */
export declare const selectDisplayedData: (state: RechartsRootState, axisType: XorYorZType, axisId: AxisId, isPanorama: boolean) => ChartData;
export declare const combineAppliedValues: (data: ChartData, axisSettings: BaseCartesianAxis, items: ReadonlyArray<GraphicalItemSettings>) => AppliedChartData;
/**
 * This selector will return all values with the appropriate dataKey applied on them.
 * Which dataKey is appropriate depends on where it is defined.
 *
 * This is an expensive selector - it will iterate all data and compute their value using the provided dataKey.
 */
export declare const selectAllAppliedValues: (state: RechartsRootState, axisType: XorYorZType, axisId: AxisId, isPanorama: boolean) => AppliedChartData;
export declare function isErrorBarRelevantForAxisType(axisType: XorYorZType, errorBar: ErrorBarsSettings): boolean;
export type AppliedChartDataWithErrorDomain = {
    /**
     * This is the value after the dataKey has been applied. Presumably a number? But no guarantees.
     */
    value: unknown;
    /**
     * This is the error domain, if any, for the current value.
     * This may be either x or y direction, whatever is applicable.
     * Assumption is that we're looking at this data from the point of view of a single axis,
     * and that axis dictates the relevant direction.
     */
    errorDomain: ReadonlyArray<number> | undefined;
};
/**
 * This is type of "error" in chart. It is set by using ErrorBar, and it can represent confidence interval,
 * or gap in the data, or standard deviation, or quartiles in boxplot, or whiskers or whatever.
 *
 * We will internally represent it as a tuple of two numbers, where the first number is the lower bound and the second number is the upper bound.
 *
 * It is also true that the first number should be lower than or equal to the associated "main value",
 * and the second number should be higher than or equal to the associated "main value".
 */
export type ErrorValue = [number, number];
export declare function fromMainValueToError(value: unknown): ErrorValue | undefined;
/**
 * @param entry One item in the 'data' array. Could be anything really - this is defined externally. This is the raw, before dataKey application
 * @param appliedValue This is the result of applying the 'main' dataKey on the `entry`.
 * @param relevantErrorBars Error bars that are relevant for the current axis and layout and all that.
 * @return either undefined or an array of ErrorValue
 */
export declare function getErrorDomainByDataKey(entry: unknown, appliedValue: unknown, relevantErrorBars: ReadonlyArray<ErrorBarsSettings> | undefined): ReadonlyArray<number>;
export declare const selectDisplayedStackedData: (state: RechartsRootState, axisType: XorYorZType, axisId: AxisId, isPanorama: boolean) => DisplayedStackedData;
export declare const combineStackGroups: (displayedData: DisplayedStackedData, items: ReadonlyArray<MaybeStackedGraphicalItem>, stackOffsetType: StackOffsetType) => AllStackGroups;
/**
 * Stack groups are groups of graphical items that stack on each other.
 * Stack is a function of axis type (X, Y), axis ID, and stack ID.
 * Graphical items that do not have a stack ID are not going to be present in stack groups.
 */
export declare const selectStackGroups: (state: RechartsRootState, axisType: XorYorZType, axisId: AxisId, isPanorama: boolean) => AllStackGroups | undefined;
export declare const combineDomainOfStackGroups: (stackGroups: AllStackGroups | undefined, { dataStartIndex, dataEndIndex }: ChartDataState, axisType: XorYorZType) => NumberDomain | undefined;
export declare const selectDomainOfStackGroups: ((state: import("redux").EmptyObject & {
    brush: import("../brushSlice").BrushSettings;
    cartesianAxis: {
        xAxis: Record<AxisId, XAxisSettings>;
        yAxis: Record<AxisId, YAxisSettings>;
        zAxis: Record<AxisId, ZAxisSettings>;
    };
    chartData: ChartDataState;
    graphicalItems: import("../graphicalItemsSlice").GraphicalItemsState;
    layout: {
        layoutType: LayoutType;
        width: number;
        height: number;
        margin: import("../../util/types").Margin;
        scale: number;
    };
    legend: {
        settings: import("../legendSlice").LegendSettings;
        size: Size;
        payload: ReadonlyArray<ReadonlyArray<import("../..").LegendPayload>>;
    };
    options: import("../optionsSlice").ChartOptions;
    polarAxis: {
        radiusAxis: Record<AxisId, RadiusAxisSettings>;
        angleAxis: Record<AxisId, AngleAxisSettings>;
    };
    polarOptions: import("../polarOptionsSlice").PolarChartOptions;
    referenceElements: {
        dots: ReadonlyArray<ReferenceDotSettings>;
        areas: ReadonlyArray<ReferenceAreaSettings>;
        lines: ReadonlyArray<ReferenceLineSettings>;
    };
    rootProps: import("../rootPropsSlice").UpdatableChartOptions;
    tooltip: import("../tooltipSlice").TooltipState;
}, axisType: XorYorZType, axisId: AxisId, isPanorama: boolean) => NumberDomain) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: AllStackGroups, resultFuncArgs_1: ChartDataState, resultFuncArgs_2: any) => NumberDomain;
    memoizedResultFunc: ((resultFuncArgs_0: AllStackGroups, resultFuncArgs_1: ChartDataState, resultFuncArgs_2: any) => NumberDomain) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => NumberDomain;
    dependencies: [(state: RechartsRootState, axisType: XorYorZType, axisId: AxisId, isPanorama: boolean) => AllStackGroups | undefined, (state: RechartsRootState) => ChartDataState, <T>(_state: RechartsRootState, axisType: T) => T];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("reselect").weakMapMemoize;
    memoize: typeof import("reselect").weakMapMemoize;
};
export declare const combineAppliedNumericalValuesIncludingErrorValues: (data: ChartData, axisSettings: BaseCartesianAxis, items: ReadonlyArray<CartesianGraphicalItemSettings>, axisType: XorYorZType) => ReadonlyArray<AppliedChartDataWithErrorDomain>;
export declare const selectAllAppliedNumericalValuesIncludingErrorValues: (state: RechartsRootState, axisType: XorYorZType, axisId: AxisId, isPanorama: boolean) => ReadonlyArray<AppliedChartDataWithErrorDomain>;
export declare const getDomainDefinition: (axisSettings: CartesianAxisSettings) => AxisDomain;
export declare const mergeDomains: (...domains: ReadonlyArray<NumberDomain | undefined>) => NumberDomain | undefined;
export declare const selectReferenceDots: (state: RechartsRootState) => ReadonlyArray<ReferenceDotSettings>;
export declare const filterReferenceElements: <T extends ReferenceElementSettings>(elements: ReadonlyArray<T>, axisType: XorYorZType, axisId: AxisId) => ReadonlyArray<T>;
export declare const selectReferenceDotsByAxis: ((state: import("redux").EmptyObject & {
    brush: import("../brushSlice").BrushSettings;
    cartesianAxis: {
        xAxis: Record<AxisId, XAxisSettings>;
        yAxis: Record<AxisId, YAxisSettings>;
        zAxis: Record<AxisId, ZAxisSettings>;
    };
    chartData: ChartDataState;
    graphicalItems: import("../graphicalItemsSlice").GraphicalItemsState;
    layout: {
        layoutType: LayoutType;
        width: number;
        height: number;
        margin: import("../../util/types").Margin;
        scale: number;
    };
    legend: {
        settings: import("../legendSlice").LegendSettings;
        size: Size;
        payload: ReadonlyArray<ReadonlyArray<import("../..").LegendPayload>>;
    };
    options: import("../optionsSlice").ChartOptions;
    polarAxis: {
        radiusAxis: Record<AxisId, RadiusAxisSettings>;
        angleAxis: Record<AxisId, AngleAxisSettings>;
    };
    polarOptions: import("../polarOptionsSlice").PolarChartOptions;
    referenceElements: {
        dots: ReadonlyArray<ReferenceDotSettings>;
        areas: ReadonlyArray<ReferenceAreaSettings>;
        lines: ReadonlyArray<ReferenceLineSettings>;
    };
    rootProps: import("../rootPropsSlice").UpdatableChartOptions;
    tooltip: import("../tooltipSlice").TooltipState;
}, _axisType: unknown, axisId: AxisId) => readonly ReferenceDotSettings[]) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: readonly ReferenceDotSettings[], resultFuncArgs_1: any, resultFuncArgs_2: AxisId) => readonly ReferenceDotSettings[];
    memoizedResultFunc: ((resultFuncArgs_0: readonly ReferenceDotSettings[], resultFuncArgs_1: any, resultFuncArgs_2: AxisId) => readonly ReferenceDotSettings[]) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => readonly ReferenceDotSettings[];
    dependencies: [(state: RechartsRootState) => ReadonlyArray<ReferenceDotSettings>, <T>(_state: RechartsRootState, axisType: T) => T, (_state: RechartsRootState, _axisType: unknown, axisId: AxisId) => AxisId];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("reselect").weakMapMemoize;
    memoize: typeof import("reselect").weakMapMemoize;
};
export declare const selectReferenceAreas: (state: RechartsRootState) => ReadonlyArray<ReferenceAreaSettings>;
export declare const selectReferenceAreasByAxis: (state: RechartsRootState, axisType: XorYorZType, axisId: AxisId) => ReadonlyArray<ReferenceAreaSettings>;
export declare const selectReferenceLines: (state: RechartsRootState) => ReadonlyArray<ReferenceLineSettings>;
export declare const selectReferenceLinesByAxis: (state: RechartsRootState, axisType: XorYorZType, axisId: AxisId) => ReadonlyArray<ReferenceLineSettings>;
export declare const combineDotsDomain: (dots: ReadonlyArray<ReferenceDotSettings>, axisType: XorYType) => NumberDomain | undefined;
export declare const combineAreasDomain: (areas: ReadonlyArray<ReferenceAreaSettings>, axisType: XorYType) => NumberDomain | undefined;
export declare const combineLinesDomain: (lines: ReadonlyArray<ReferenceLineSettings>, axisType: XorYType) => NumberDomain | undefined;
export declare const selectDomainDefinition: (state: RechartsRootState, axisType: XorYorZType, axisId: AxisId) => AxisDomain | undefined;
export declare const combineNumericalDomain: (axisSettings: BaseCartesianAxis, domainDefinition: AxisDomain | undefined, domainOfStackGroups: NumberDomain | undefined, allDataWithErrorDomains: ReadonlyArray<AppliedChartDataWithErrorDomain>, referenceElementsDomain: NumberDomain | undefined) => NumberDomain | undefined;
export declare const combineAxisDomain: (axisSettings: BaseCartesianAxis, layout: LayoutType, displayedData: ChartData | undefined, allAppliedValues: AppliedChartData, stackOffsetType: StackOffsetType, axisType: XorYorZType, numericalDomain: NumberDomain | undefined) => NumberDomain | CategoricalDomain | undefined;
export declare const selectAxisDomain: (state: RechartsRootState, axisType: XorYorZType, axisId: AxisId, isPanorama: boolean) => NumberDomain | CategoricalDomain | undefined;
export declare const combineRealScaleType: (axisConfig: BaseCartesianAxis | undefined, layout: LayoutType, hasBar: boolean, chartType: string, axisType: XorYorZType) => string | undefined;
export declare const selectRealScaleType: (state: RechartsRootState, axisType: XorYorZType, axisId: AxisId) => string | undefined;
export declare function combineScaleFunction(axis: BaseCartesianAxis, realScaleType: string | undefined, axisDomain: NumberDomain | CategoricalDomain, axisRange: [number, number]): RechartsScale | undefined;
export declare const combineNiceTicks: (axisDomain: NumberDomain | CategoricalDomain | undefined, axisSettings: CartesianAxisSettings, realScaleType: string) => ReadonlyArray<number> | undefined;
export declare const selectNiceTicks: (state: RechartsRootState, axisType: XorYType, axisId: AxisId, isPanorama: boolean) => ReadonlyArray<number> | undefined;
export declare const combineAxisDomainWithNiceTicks: (axisSettings: BaseCartesianAxis, domain: NumberDomain | CategoricalDomain | undefined, niceTicks: ReadonlyArray<number> | undefined, axisType: XorYType) => NumberDomain | CategoricalDomain | undefined;
export declare const selectAxisDomainIncludingNiceTicks: (state: RechartsRootState, axisType: XorYorZType, axisId: AxisId, isPanorama: boolean) => NumberDomain | CategoricalDomain | undefined;
/**
 * Returns the smallest gap, between two numbers in the data, as a ratio of the whole range (max - min).
 * Ignores domain provided by user and only considers domain from data.
 *
 * The result is a number between 0 and 1.
 */
export declare const selectSmallestDistanceBetweenValues: (state: RechartsRootState, axisType: XorYType, axisId: AxisId, isPanorama: boolean) => number | undefined;
export declare const selectCalculatedXAxisPadding: (state: RechartsRootState, axisId: AxisId) => number;
export declare const selectCalculatedYAxisPadding: (state: RechartsRootState, axisId: AxisId) => number;
export declare const combineXAxisRange: (state: RechartsRootState, axisId: AxisId, isPanorama: boolean) => AxisRange | undefined;
export type AxisRange = readonly [number, number];
export declare const combineYAxisRange: (state: RechartsRootState, axisId: AxisId, isPanorama: boolean) => AxisRange | undefined;
export declare const selectAxisRange: (state: RechartsRootState, axisType: XorYorZType, axisId: AxisId, isPanorama: boolean) => AxisRange | undefined;
export declare const selectAxisRangeWithReverse: (state: RechartsRootState, axisType: XorYorZType, axisId: AxisId, isPanorama: boolean) => AxisRange | undefined;
export declare const selectAxisScale: (state: RechartsRootState, axisType: XorYorZType, axisId: AxisId, isPanorama: boolean) => RechartsScale | undefined;
export declare const selectErrorBarsSettings: ((state: import("redux").EmptyObject & {
    brush: import("../brushSlice").BrushSettings;
    cartesianAxis: {
        xAxis: Record<AxisId, XAxisSettings>;
        yAxis: Record<AxisId, YAxisSettings>;
        zAxis: Record<AxisId, ZAxisSettings>;
    };
    chartData: ChartDataState;
    graphicalItems: import("../graphicalItemsSlice").GraphicalItemsState;
    layout: {
        layoutType: LayoutType;
        width: number;
        height: number;
        margin: import("../../util/types").Margin;
        scale: number;
    };
    legend: {
        settings: import("../legendSlice").LegendSettings;
        size: Size;
        payload: ReadonlyArray<ReadonlyArray<import("../..").LegendPayload>>;
    };
    options: import("../optionsSlice").ChartOptions;
    polarAxis: {
        radiusAxis: Record<AxisId, RadiusAxisSettings>;
        angleAxis: Record<AxisId, AngleAxisSettings>;
    };
    polarOptions: import("../polarOptionsSlice").PolarChartOptions;
    referenceElements: {
        dots: ReadonlyArray<ReferenceDotSettings>;
        areas: ReadonlyArray<ReferenceAreaSettings>;
        lines: ReadonlyArray<ReferenceLineSettings>;
    };
    rootProps: import("../rootPropsSlice").UpdatableChartOptions;
    tooltip: import("../tooltipSlice").TooltipState;
}, axisType: XorYorZType, axisId: AxisId) => readonly ErrorBarsSettings[]) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: readonly CartesianGraphicalItemSettings[], resultFuncArgs_1: any) => readonly ErrorBarsSettings[];
    memoizedResultFunc: ((resultFuncArgs_0: readonly CartesianGraphicalItemSettings[], resultFuncArgs_1: any) => readonly ErrorBarsSettings[]) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => readonly ErrorBarsSettings[];
    dependencies: [(state: RechartsRootState, axisType: XorYorZType, axisId: AxisId) => ReadonlyArray<CartesianGraphicalItemSettings>, <T>(_state: RechartsRootState, axisType: T) => T];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("reselect").weakMapMemoize;
    memoize: typeof import("reselect").weakMapMemoize;
};
export declare const selectXAxisSize: (state: RechartsRootState, xAxisId: AxisId) => Size;
type AxisOffsetSteps = Record<AxisId, number>;
export declare const selectAllXAxesOffsetSteps: (state: RechartsRootState, orientation: XAxisOrientation, mirror: boolean) => AxisOffsetSteps;
export declare const selectAllYAxesOffsetSteps: (state: RechartsRootState, orientation: YAxisOrientation, mirror: boolean) => AxisOffsetSteps;
export declare const selectXAxisPosition: (state: RechartsRootState, axisId: AxisId) => Coordinate | undefined;
export declare const selectYAxisPosition: (state: RechartsRootState, axisId: AxisId) => Coordinate | undefined;
export declare const selectYAxisSize: (state: RechartsRootState, yAxisId: AxisId) => Size;
export declare const selectCartesianAxisSize: (state: RechartsRootState, axisType: XorYType, axisId: AxisId) => number | undefined;
export declare const combineDuplicateDomain: (chartLayout: LayoutType, appliedValues: AppliedChartData, axis: BaseCartesianAxis, axisType: XorYorZType) => ReadonlyArray<unknown> | undefined;
export declare const selectDuplicateDomain: (state: RechartsRootState, axisType: XorYorZType, axisId: AxisId, isPanorama: boolean) => ReadonlyArray<unknown> | undefined;
export declare const combineCategoricalDomain: (layout: LayoutType, appliedValues: AppliedChartData, axis: AxisWithTicksSettings, axisType: XorYType) => ReadonlyArray<unknown> | undefined;
export declare const selectCategoricalDomain: (state: RechartsRootState, axisType: XorYorZType, axisId: AxisId, isPanorama: boolean) => ReadonlyArray<unknown> | undefined;
export declare const selectAxisPropsNeededForCartesianGridTicksGenerator: ((state: import("redux").EmptyObject & {
    brush: import("../brushSlice").BrushSettings;
    cartesianAxis: {
        xAxis: Record<AxisId, XAxisSettings>;
        yAxis: Record<AxisId, YAxisSettings>;
        zAxis: Record<AxisId, ZAxisSettings>;
    };
    chartData: ChartDataState;
    graphicalItems: import("../graphicalItemsSlice").GraphicalItemsState;
    layout: {
        layoutType: LayoutType;
        width: number;
        height: number;
        margin: import("../../util/types").Margin;
        scale: number;
    };
    legend: {
        settings: import("../legendSlice").LegendSettings;
        size: Size;
        payload: ReadonlyArray<ReadonlyArray<import("../..").LegendPayload>>;
    };
    options: import("../optionsSlice").ChartOptions;
    polarAxis: {
        radiusAxis: Record<AxisId, RadiusAxisSettings>;
        angleAxis: Record<AxisId, AngleAxisSettings>;
    };
    polarOptions: import("../polarOptionsSlice").PolarChartOptions;
    referenceElements: {
        dots: ReadonlyArray<ReferenceDotSettings>;
        areas: ReadonlyArray<ReferenceAreaSettings>;
        lines: ReadonlyArray<ReferenceLineSettings>;
    };
    rootProps: import("../rootPropsSlice").UpdatableChartOptions;
    tooltip: import("../tooltipSlice").TooltipState;
}, axisType: "xAxis" | "yAxis", axisId: AxisId, isPanorama: boolean) => AxisPropsForCartesianGridTicksGeneration) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: LayoutType, resultFuncArgs_1: XAxisSettings | YAxisSettings, resultFuncArgs_2: string, resultFuncArgs_3: RechartsScale, resultFuncArgs_4: readonly unknown[], resultFuncArgs_5: readonly unknown[], resultFuncArgs_6: AxisRange, resultFuncArgs_7: readonly number[], resultFuncArgs_8: any) => AxisPropsForCartesianGridTicksGeneration;
    memoizedResultFunc: ((resultFuncArgs_0: LayoutType, resultFuncArgs_1: XAxisSettings | YAxisSettings, resultFuncArgs_2: string, resultFuncArgs_3: RechartsScale, resultFuncArgs_4: readonly unknown[], resultFuncArgs_5: readonly unknown[], resultFuncArgs_6: AxisRange, resultFuncArgs_7: readonly number[], resultFuncArgs_8: any) => AxisPropsForCartesianGridTicksGeneration) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => AxisPropsForCartesianGridTicksGeneration;
    dependencies: [(state: RechartsRootState) => LayoutType, (state: RechartsRootState, axisType: "xAxis" | "yAxis", axisId: AxisId) => XAxisSettings | YAxisSettings, (state: RechartsRootState, axisType: XorYorZType, axisId: AxisId) => string | undefined, (state: RechartsRootState, axisType: XorYorZType, axisId: AxisId, isPanorama: boolean) => RechartsScale | undefined, (state: RechartsRootState, axisType: XorYorZType, axisId: AxisId, isPanorama: boolean) => ReadonlyArray<unknown> | undefined, (state: RechartsRootState, axisType: XorYorZType, axisId: AxisId, isPanorama: boolean) => ReadonlyArray<unknown> | undefined, (state: RechartsRootState, axisType: XorYorZType, axisId: AxisId, isPanorama: boolean) => AxisRange | undefined, (state: RechartsRootState, axisType: XorYType, axisId: AxisId, isPanorama: boolean) => ReadonlyArray<number> | undefined, <T>(_state: RechartsRootState, axisType: T) => T];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("reselect").weakMapMemoize;
    memoize: typeof import("reselect").weakMapMemoize;
};
export declare const combineAxisTicks: (layout: LayoutType, axis: AxisWithTicksSettings, realScaleType: string, scale: RechartsScale | undefined, niceTicks: ReadonlyArray<number> | undefined, axisRange: AxisRange | undefined, duplicateDomain: ReadonlyArray<unknown> | undefined, categoricalDomain: ReadonlyArray<unknown> | undefined, axisType: XorYType) => ReadonlyArray<TickItem> | undefined;
export declare const selectTicksOfAxis: (state: RechartsRootState, axisType: XorYType, axisId: AxisId, isPanorama: boolean) => ReadonlyArray<CartesianTickItem> | undefined;
export declare const combineGraphicalItemTicks: (layout: LayoutType, axis: AxisWithTicksSettings, scale: RechartsScale | undefined, axisRange: AxisRange | undefined, duplicateDomain: ReadonlyArray<unknown> | undefined, categoricalDomain: ReadonlyArray<unknown> | undefined, axisType: XorYType) => TickItem[] | undefined;
export declare const selectTicksOfGraphicalItem: (state: RechartsRootState, axisType: XorYType, axisId: AxisId, isPanorama: boolean) => TickItem[] | undefined;
export type BaseAxisWithScale = BaseCartesianAxis & {
    scale: RechartsScale;
};
export declare const selectAxisWithScale: (state: RechartsRootState, axisType: XorYorZType, axisId: AxisId, isPanorama: boolean) => BaseAxisWithScale | undefined;
export type ZAxisWithScale = ZAxisSettings & {
    scale: RechartsScale;
};
export declare const selectZAxisWithScale: ((state: import("redux").EmptyObject & {
    brush: import("../brushSlice").BrushSettings;
    cartesianAxis: {
        xAxis: Record<AxisId, XAxisSettings>;
        yAxis: Record<AxisId, YAxisSettings>;
        zAxis: Record<AxisId, ZAxisSettings>;
    };
    chartData: ChartDataState;
    graphicalItems: import("../graphicalItemsSlice").GraphicalItemsState;
    layout: {
        layoutType: LayoutType;
        width: number;
        height: number;
        margin: import("../../util/types").Margin;
        scale: number;
    };
    legend: {
        settings: import("../legendSlice").LegendSettings;
        size: Size;
        payload: ReadonlyArray<ReadonlyArray<import("../..").LegendPayload>>;
    };
    options: import("../optionsSlice").ChartOptions;
    polarAxis: {
        radiusAxis: Record<AxisId, RadiusAxisSettings>;
        angleAxis: Record<AxisId, AngleAxisSettings>;
    };
    polarOptions: import("../polarOptionsSlice").PolarChartOptions;
    referenceElements: {
        dots: ReadonlyArray<ReferenceDotSettings>;
        areas: ReadonlyArray<ReferenceAreaSettings>;
        lines: ReadonlyArray<ReferenceLineSettings>;
    };
    rootProps: import("../rootPropsSlice").UpdatableChartOptions;
    tooltip: import("../tooltipSlice").TooltipState;
}, axisType: "zAxis", axisId: AxisId, isPanorama: false) => ZAxisWithScale) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: ZAxisSettings, resultFuncArgs_1: RechartsScale) => ZAxisWithScale;
    memoizedResultFunc: ((resultFuncArgs_0: ZAxisSettings, resultFuncArgs_1: RechartsScale) => ZAxisWithScale) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => ZAxisWithScale;
    dependencies: [(state: RechartsRootState, _axisType: "zAxis", axisId: AxisId) => ZAxisSettings, (state: RechartsRootState, axisType: "zAxis", axisId: AxisId, isPanorama: false) => RechartsScale | undefined];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("reselect").weakMapMemoize;
    memoize: typeof import("reselect").weakMapMemoize;
};
/**
 * We are also going to need to implement polar chart directions if we want to support keyboard controls for those.
 */
export type AxisDirection = 'left-to-right' | 'right-to-left' | 'top-to-bottom' | 'bottom-to-top';
export declare const selectChartDirection: (state: RechartsRootState) => AxisDirection | undefined;
export {};
