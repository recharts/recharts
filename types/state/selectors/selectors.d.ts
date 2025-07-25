import { RechartsRootState } from '../store';
import { ActiveTooltipProps, TooltipIndex, TooltipInteractionState, TooltipPayload, TooltipPayloadConfiguration } from '../tooltipSlice';
import { AxisType, ChartOffsetInternal, ChartPointer, Coordinate, DataKey, LayoutType, PolarViewBoxRequired, TickItem, TooltipEventType } from '../../util/types';
import { TooltipTrigger } from '../../chart/types';
import { AxisRange } from './axisSelectors';
export declare const useChartName: () => string | undefined;
export declare const selectOrderedTooltipTicks: ((state: import("redux").EmptyObject & {
    brush: import("../brushSlice").BrushSettings;
    cartesianAxis: {
        xAxis: Record<import("../cartesianAxisSlice").AxisId, import("../cartesianAxisSlice").XAxisSettings>;
        yAxis: Record<import("../cartesianAxisSlice").AxisId, import("../cartesianAxisSlice").YAxisSettings>;
        zAxis: Record<import("../cartesianAxisSlice").AxisId, import("../cartesianAxisSlice").ZAxisSettings>;
    };
    chartData: import("../chartDataSlice").ChartDataState;
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
}) => TickItem[]) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: readonly TickItem[]) => TickItem[];
    memoizedResultFunc: ((resultFuncArgs_0: readonly TickItem[]) => TickItem[]) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => TickItem[];
    dependencies: [(state: RechartsRootState) => ReadonlyArray<TickItem> | undefined];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("reselect").weakMapMemoize;
    memoize: typeof import("reselect").weakMapMemoize;
};
export declare const selectTooltipInteractionState: (state: RechartsRootState, tooltipEventType: TooltipEventType, trigger: TooltipTrigger, defaultIndex: TooltipIndex | undefined) => TooltipInteractionState | undefined;
export declare const selectActiveIndex: (state: RechartsRootState, tooltipEventType: TooltipEventType, trigger: TooltipTrigger, defaultIndex: TooltipIndex | undefined) => TooltipIndex | null;
export declare const selectTooltipDataKey: (state: RechartsRootState, tooltipEventType: TooltipEventType | undefined, trigger: TooltipTrigger) => DataKey<any> | undefined;
export declare const selectTooltipPayloadConfigurations: (state: RechartsRootState, tooltipEventType: TooltipEventType, trigger: TooltipTrigger, defaultIndex: TooltipIndex | undefined) => ReadonlyArray<TooltipPayloadConfiguration>;
export declare const selectCoordinateForDefaultIndex: (state: RechartsRootState, tooltipEventType: TooltipEventType, trigger: TooltipTrigger, defaultIndex: TooltipIndex | undefined) => Coordinate | undefined;
export declare const selectActiveCoordinate: (state: RechartsRootState, tooltipEventType: TooltipEventType, trigger: TooltipTrigger, defaultIndex: TooltipIndex | undefined) => Coordinate | undefined;
export declare const selectActiveLabel: (state: RechartsRootState, tooltipEventType: TooltipEventType, trigger: TooltipTrigger, defaultIndex: TooltipIndex | undefined) => string | number | undefined;
export declare const selectTooltipPayload: (state: RechartsRootState, tooltipEventType: TooltipEventType, trigger: TooltipTrigger, defaultIndex: TooltipIndex | undefined) => TooltipPayload | undefined;
export declare const selectIsTooltipActive: (state: RechartsRootState, tooltipEventType: TooltipEventType, trigger: TooltipTrigger, defaultIndex: TooltipIndex | undefined) => {
    isActive: boolean;
    activeIndex: TooltipIndex | undefined;
};
export declare const combineActiveProps: (chartEvent: ChartPointer | undefined, layout: LayoutType | undefined, polarViewBox: PolarViewBoxRequired | undefined, tooltipAxisType: AxisType | undefined, tooltipAxisRange: AxisRange | undefined, tooltipTicks: ReadonlyArray<TickItem> | undefined, orderedTooltipTicks: ReadonlyArray<TickItem> | undefined, offset: ChartOffsetInternal) => ActiveTooltipProps | undefined;
