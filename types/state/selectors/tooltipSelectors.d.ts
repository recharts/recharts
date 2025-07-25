import { RechartsRootState } from '../store';
import { AxisRange, AxisWithTicksSettings, XorYType } from './axisSelectors';
import { RechartsScale } from '../../util/ChartUtils';
import { CategoricalDomain, Coordinate, DataKey, LayoutType, NumberDomain, TickItem } from '../../util/types';
import { ChartData } from '../chartDataSlice';
import { GraphicalItemSettings } from '../graphicalItemsSlice';
import { ReferenceAreaSettings, ReferenceDotSettings, ReferenceLineSettings } from '../referenceElementsSlice';
import { TooltipIndex, TooltipPayload } from '../tooltipSlice';
export declare const selectTooltipAxisRealScaleType: (state: RechartsRootState) => string | undefined;
export declare const selectAllUnfilteredGraphicalItems: (state: RechartsRootState) => ReadonlyArray<GraphicalItemSettings>;
export declare const selectAllGraphicalItemsSettings: ((state: import("redux").EmptyObject & {
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
        dots: ReadonlyArray<ReferenceDotSettings>;
        areas: ReadonlyArray<ReferenceAreaSettings>;
        lines: ReadonlyArray<ReferenceLineSettings>;
    };
    rootProps: import("../rootPropsSlice").UpdatableChartOptions;
    tooltip: import("../tooltipSlice").TooltipState;
}) => GraphicalItemSettings[]) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: readonly GraphicalItemSettings[], resultFuncArgs_1: AxisWithTicksSettings, resultFuncArgs_2: (item: import("../graphicalItemsSlice").CartesianGraphicalItemSettings | import("../graphicalItemsSlice").PolarGraphicalItemSettings) => boolean) => GraphicalItemSettings[];
    memoizedResultFunc: ((resultFuncArgs_0: readonly GraphicalItemSettings[], resultFuncArgs_1: AxisWithTicksSettings, resultFuncArgs_2: (item: import("../graphicalItemsSlice").CartesianGraphicalItemSettings | import("../graphicalItemsSlice").PolarGraphicalItemSettings) => boolean) => GraphicalItemSettings[]) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => GraphicalItemSettings[];
    dependencies: [(state: RechartsRootState) => ReadonlyArray<GraphicalItemSettings>, (state: RechartsRootState) => AxisWithTicksSettings, ((state: import("redux").EmptyObject & {
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
            dots: ReadonlyArray<ReferenceDotSettings>;
            areas: ReadonlyArray<ReferenceAreaSettings>;
            lines: ReadonlyArray<ReferenceLineSettings>;
        };
        rootProps: import("../rootPropsSlice").UpdatableChartOptions;
        tooltip: import("../tooltipSlice").TooltipState;
    }) => (item: import("../graphicalItemsSlice").CartesianGraphicalItemSettings | import("../graphicalItemsSlice").PolarGraphicalItemSettings) => boolean) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    } & {
        resultFunc: (resultFuncArgs_0: XorYType, resultFuncArgs_1: import("../cartesianAxisSlice").AxisId) => (item: import("../graphicalItemsSlice").CartesianGraphicalItemSettings | import("../graphicalItemsSlice").PolarGraphicalItemSettings) => boolean;
        memoizedResultFunc: ((resultFuncArgs_0: XorYType, resultFuncArgs_1: import("../cartesianAxisSlice").AxisId) => (item: import("../graphicalItemsSlice").CartesianGraphicalItemSettings | import("../graphicalItemsSlice").PolarGraphicalItemSettings) => boolean) & {
            clearCache: () => void;
            resultsCount: () => number;
            resetResultsCount: () => void;
        };
        lastResult: () => (item: import("../graphicalItemsSlice").CartesianGraphicalItemSettings | import("../graphicalItemsSlice").PolarGraphicalItemSettings) => boolean;
        dependencies: [(state: RechartsRootState) => XorYType, (state: RechartsRootState) => import("../cartesianAxisSlice").AxisId];
        recomputations: () => number;
        resetRecomputations: () => void;
        dependencyRecomputations: () => number;
        resetDependencyRecomputations: () => void;
    } & {
        argsMemoize: typeof import("reselect").weakMapMemoize;
        memoize: typeof import("reselect").weakMapMemoize;
    }];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("reselect").weakMapMemoize;
    memoize: typeof import("reselect").weakMapMemoize;
};
export declare const selectTooltipGraphicalItemsData: ((state: import("redux").EmptyObject & {
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
        dots: ReadonlyArray<ReferenceDotSettings>;
        areas: ReadonlyArray<ReferenceAreaSettings>;
        lines: ReadonlyArray<ReferenceLineSettings>;
    };
    rootProps: import("../rootPropsSlice").UpdatableChartOptions;
    tooltip: import("../tooltipSlice").TooltipState;
}) => unknown[]) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: GraphicalItemSettings[]) => unknown[];
    memoizedResultFunc: ((resultFuncArgs_0: GraphicalItemSettings[]) => unknown[]) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => unknown[];
    dependencies: [((state: import("redux").EmptyObject & {
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
            dots: ReadonlyArray<ReferenceDotSettings>;
            areas: ReadonlyArray<ReferenceAreaSettings>;
            lines: ReadonlyArray<ReferenceLineSettings>;
        };
        rootProps: import("../rootPropsSlice").UpdatableChartOptions;
        tooltip: import("../tooltipSlice").TooltipState;
    }) => GraphicalItemSettings[]) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    } & {
        resultFunc: (resultFuncArgs_0: readonly GraphicalItemSettings[], resultFuncArgs_1: AxisWithTicksSettings, resultFuncArgs_2: (item: import("../graphicalItemsSlice").CartesianGraphicalItemSettings | import("../graphicalItemsSlice").PolarGraphicalItemSettings) => boolean) => GraphicalItemSettings[];
        memoizedResultFunc: ((resultFuncArgs_0: readonly GraphicalItemSettings[], resultFuncArgs_1: AxisWithTicksSettings, resultFuncArgs_2: (item: import("../graphicalItemsSlice").CartesianGraphicalItemSettings | import("../graphicalItemsSlice").PolarGraphicalItemSettings) => boolean) => GraphicalItemSettings[]) & {
            clearCache: () => void;
            resultsCount: () => number;
            resetResultsCount: () => void;
        };
        lastResult: () => GraphicalItemSettings[];
        dependencies: [(state: RechartsRootState) => ReadonlyArray<GraphicalItemSettings>, (state: RechartsRootState) => AxisWithTicksSettings, ((state: import("redux").EmptyObject & {
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
                dots: ReadonlyArray<ReferenceDotSettings>;
                areas: ReadonlyArray<ReferenceAreaSettings>;
                lines: ReadonlyArray<ReferenceLineSettings>;
            };
            rootProps: import("../rootPropsSlice").UpdatableChartOptions;
            tooltip: import("../tooltipSlice").TooltipState;
        }) => (item: import("../graphicalItemsSlice").CartesianGraphicalItemSettings | import("../graphicalItemsSlice").PolarGraphicalItemSettings) => boolean) & {
            clearCache: () => void;
            resultsCount: () => number;
            resetResultsCount: () => void;
        } & {
            resultFunc: (resultFuncArgs_0: XorYType, resultFuncArgs_1: import("../cartesianAxisSlice").AxisId) => (item: import("../graphicalItemsSlice").CartesianGraphicalItemSettings | import("../graphicalItemsSlice").PolarGraphicalItemSettings) => boolean;
            memoizedResultFunc: ((resultFuncArgs_0: XorYType, resultFuncArgs_1: import("../cartesianAxisSlice").AxisId) => (item: import("../graphicalItemsSlice").CartesianGraphicalItemSettings | import("../graphicalItemsSlice").PolarGraphicalItemSettings) => boolean) & {
                clearCache: () => void;
                resultsCount: () => number;
                resetResultsCount: () => void;
            };
            lastResult: () => (item: import("../graphicalItemsSlice").CartesianGraphicalItemSettings | import("../graphicalItemsSlice").PolarGraphicalItemSettings) => boolean;
            dependencies: [(state: RechartsRootState) => XorYType, (state: RechartsRootState) => import("../cartesianAxisSlice").AxisId];
            recomputations: () => number;
            resetRecomputations: () => void;
            dependencyRecomputations: () => number;
            resetDependencyRecomputations: () => void;
        } & {
            argsMemoize: typeof import("reselect").weakMapMemoize;
            memoize: typeof import("reselect").weakMapMemoize;
        }];
        recomputations: () => number;
        resetRecomputations: () => void;
        dependencyRecomputations: () => number;
        resetDependencyRecomputations: () => void;
    } & {
        argsMemoize: typeof import("reselect").weakMapMemoize;
        memoize: typeof import("reselect").weakMapMemoize;
    }];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("reselect").weakMapMemoize;
    memoize: typeof import("reselect").weakMapMemoize;
};
/**
 * Data for tooltip always use the data with indexes set by a Brush,
 * and never accept the isPanorama flag:
 * because Tooltip never displays inside the panorama anyway
 * so we don't need to worry what would happen there.
 */
export declare const selectTooltipDisplayedData: (state: RechartsRootState) => ChartData;
export declare const selectTooltipAxisDomain: (state: RechartsRootState) => NumberDomain | CategoricalDomain | undefined;
export declare const selectTooltipAxisDomainIncludingNiceTicks: (state: RechartsRootState) => NumberDomain | CategoricalDomain | undefined;
export declare const selectTooltipAxisRangeWithReverse: (state: RechartsRootState) => AxisRange | undefined;
export declare const selectTooltipAxisScale: (state: RechartsRootState) => RechartsScale | undefined;
export declare const selectTooltipCategoricalDomain: (state: RechartsRootState) => ReadonlyArray<unknown> | undefined;
export declare const selectTooltipAxisTicks: (state: RechartsRootState) => ReadonlyArray<TickItem> | undefined;
export declare const selectActiveTooltipIndex: (state: RechartsRootState) => TooltipIndex | null;
export declare const selectActiveLabel: (state: RechartsRootState) => string | undefined;
export declare const selectActiveTooltipDataKey: (state: RechartsRootState) => DataKey<any> | undefined;
export declare const selectActiveTooltipCoordinate: (state: RechartsRootState) => Coordinate | undefined;
export declare const selectIsTooltipActive: (state: RechartsRootState) => boolean;
export declare const selectActiveTooltipPayload: (state: RechartsRootState) => TooltipPayload | undefined;
export declare const selectActiveTooltipDataPoints: ((state: import("redux").EmptyObject & {
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
        dots: ReadonlyArray<ReferenceDotSettings>;
        areas: ReadonlyArray<ReferenceAreaSettings>;
        lines: ReadonlyArray<ReferenceLineSettings>;
    };
    rootProps: import("../rootPropsSlice").UpdatableChartOptions;
    tooltip: import("../tooltipSlice").TooltipState;
}) => any[]) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: TooltipPayload) => any[];
    memoizedResultFunc: ((resultFuncArgs_0: TooltipPayload) => any[]) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => any[];
    dependencies: [(state: RechartsRootState) => TooltipPayload | undefined];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("reselect").weakMapMemoize;
    memoize: typeof import("reselect").weakMapMemoize;
};
