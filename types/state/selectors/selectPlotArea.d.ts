export declare const selectPlotArea: ((state: import("redux").EmptyObject & {
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
}) => {
    x: number;
    y: number;
    width: number;
    height: number;
}) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: import("../..").ChartOffset, resultFuncArgs_1: number, resultFuncArgs_2: number) => {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    memoizedResultFunc: ((resultFuncArgs_0: import("../..").ChartOffset, resultFuncArgs_1: number, resultFuncArgs_2: number) => {
        x: number;
        y: number;
        width: number;
        height: number;
    }) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => {
        x: number;
        y: number;
        width: number;
        height: number;
    };
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
    }) => import("../..").ChartOffset) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    } & {
        resultFunc: (resultFuncArgs_0: import("../../util/types").ChartOffsetInternal) => import("../..").ChartOffset;
        memoizedResultFunc: ((resultFuncArgs_0: import("../../util/types").ChartOffsetInternal) => import("../..").ChartOffset) & {
            clearCache: () => void;
            resultsCount: () => number;
            resetResultsCount: () => void;
        };
        lastResult: () => import("../..").ChartOffset;
        dependencies: [(state: import("../store").RechartsRootState) => import("../../util/types").ChartOffsetInternal];
        recomputations: () => number;
        resetRecomputations: () => void;
        dependencyRecomputations: () => number;
        resetDependencyRecomputations: () => void;
    } & {
        argsMemoize: typeof import("reselect").weakMapMemoize;
        memoize: typeof import("reselect").weakMapMemoize;
    }, (state: import("../store").RechartsRootState) => number, (state: import("../store").RechartsRootState) => number];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("reselect").weakMapMemoize;
    memoize: typeof import("reselect").weakMapMemoize;
};
