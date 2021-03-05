/// <reference types="react" />
export declare const PieChart: {
    new (props: import("./generateCategoricalChart").CategoricalChartProps): {
        uniqueChartId: any;
        clipPathId: any;
        legendInstance: any;
        deferId: any;
        container?: any;
        componentDidMount(): void;
        componentDidUpdate(prevProps: import("./generateCategoricalChart").CategoricalChartProps): void;
        componentWillUnmount(): void;
        cancelThrottledTriggerAfterMouseMove(): void;
        getTooltipEventType(): string;
        getMouseInfo(event: any): {
            xValue: any;
            yValue: any;
            chartX: number;
            chartY: number;
        } | {
            activeTooltipIndex: number;
            activeLabel: any;
            activePayload: any[];
            activeCoordinate: import("../util/types").ChartCoordinate;
            chartX: number;
            chartY: number;
        };
        getCursorRectangle(): any;
        getCursorPoints(): any;
        inRange(x: number, y: number): any;
        parseEventsOfWrapper(): any;
        addListener(): void;
        removeListener(): void;
        clearDeferId: () => void;
        handleLegendBBoxUpdate: (box: any) => void;
        handleReceiveSyncEvent: (cId: string | number, chartId: string, data: import("./generateCategoricalChart").CategoricalChartState) => void;
        handleBrushChange: ({ startIndex, endIndex }: any) => void;
        handleMouseEnter: (e: any) => void;
        triggeredAfterMouseMove: (e: any) => any;
        handleItemMouseEnter: (el: any, index: number, e: import("react").MouseEvent<Element, MouseEvent>) => void;
        handleItemMouseLeave: () => void;
        handleMouseMove: (e: any) => void;
        handleMouseLeave: (e: any) => void;
        handleOuterEvent: (e: any) => void;
        handleClick: (e: any) => void;
        handleMouseDown: (e: any) => void;
        handleMouseUp: (e: any) => void;
        handleTouchMove: (e: any) => void;
        handleTouchStart: (e: any) => void;
        handleTouchEnd: (e: any) => void;
        triggerSyncEvent(data: import("./generateCategoricalChart").CategoricalChartState): void;
        applySyncEvent(data: import("./generateCategoricalChart").CategoricalChartState): void;
        verticalCoordinatesGenerator: ({ xAxis, width, height, offset }: import("../util/types").ChartCoordinate) => number[];
        horizontalCoordinatesGenerator: ({ yAxis, width, height, offset }: import("../util/types").ChartCoordinate) => number[];
        axesTicksGenerator: (axis?: any) => import("../util/types").TickItem[];
        filterFormatItem(item: any, displayName: any, childIndex: any): any;
        renderCursor: (element: any) => import("react").DetailedReactHTMLElement<any, HTMLElement> | import("react").CElement<any, import("react").Component<any, any, any>>;
        renderPolarAxis: (element: any, displayName: string, index: number) => import("react").DetailedReactHTMLElement<any, HTMLElement>;
        renderXAxis: (element: any, displayName: string, index: number) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
        renderYAxis: (element: any, displayName: string, index: number) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
        renderAxis(axisOptions: import("../util/types").BaseAxisProps, element: any, displayName: string, index: number): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
        renderGrid: (element: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
        renderPolarGrid: (element: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
        renderLegend: () => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
        renderTooltip: () => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
        renderBrush: (element: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
        renderReferenceElement: (element: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, displayName: string, index: number) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
        renderActivePoints: ({ item, activePoint, basePoint, childIndex, isRange }: any) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>[];
        renderGraphicChild: (element: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, displayName: string, index: number) => any[];
        renderCustomized: (element: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
        renderClipPath(): JSX.Element;
        getXScales(): {
            [x: string]: Function | import("../util/types").ScaleType;
        };
        getYScales(): {
            [x: string]: Function | import("../util/types").ScaleType;
        };
        getXScaleByAxisId(axisId: string): Function | import("../util/types").ScaleType;
        getYScaleByAxisId(axisId: string): Function | import("../util/types").ScaleType;
        getItemByXY(chartXY: {
            x: number;
            y: number;
        }): {
            graphicalItem: any;
            payload: any;
        };
        render(): JSX.Element;
        context: any;
        setState<K extends keyof import("./generateCategoricalChart").CategoricalChartState>(state: import("./generateCategoricalChart").CategoricalChartState | ((prevState: Readonly<import("./generateCategoricalChart").CategoricalChartState>, props: Readonly<import("./generateCategoricalChart").CategoricalChartProps>) => import("./generateCategoricalChart").CategoricalChartState | Pick<import("./generateCategoricalChart").CategoricalChartState, K>) | Pick<import("./generateCategoricalChart").CategoricalChartState, K>, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        readonly props: Readonly<import("./generateCategoricalChart").CategoricalChartProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<import("./generateCategoricalChart").CategoricalChartState>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<import("./generateCategoricalChart").CategoricalChartProps>, nextState: Readonly<import("./generateCategoricalChart").CategoricalChartState>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("./generateCategoricalChart").CategoricalChartProps>, prevState: Readonly<import("./generateCategoricalChart").CategoricalChartState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("./generateCategoricalChart").CategoricalChartProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./generateCategoricalChart").CategoricalChartProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("./generateCategoricalChart").CategoricalChartProps>, nextState: Readonly<import("./generateCategoricalChart").CategoricalChartState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./generateCategoricalChart").CategoricalChartProps>, nextState: Readonly<import("./generateCategoricalChart").CategoricalChartState>, nextContext: any): void;
    };
    displayName: string;
    defaultProps: import("./generateCategoricalChart").CategoricalChartProps;
    getDerivedStateFromProps: (nextProps: import("./generateCategoricalChart").CategoricalChartProps, prevState: import("./generateCategoricalChart").CategoricalChartState) => import("./generateCategoricalChart").CategoricalChartState;
    renderActiveDot: (option: any, props: any) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    contextType?: import("react").Context<any>;
};
