import React, { PureComponent, ReactElement } from 'react';
import { Props as RectangleProps } from '../shape/Rectangle';
import { Props as ErrorBarProps } from './ErrorBar';
import { Props as XAxisProps } from './XAxis';
import { Props as YAxisProps } from './YAxis';
import { D3Scale, TooltipType, LegendType, AnimationTiming, ChartOffset, DataKey, TickItem, PresentationAttributesAdaptChildEvent } from '../util/types';
import { ContentType } from '../component/Label';
interface BarRectangleItem extends RectangleProps {
    value?: number;
    background?: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
    };
}
interface InternalBarProps {
    xAxis?: Omit<XAxisProps, 'scale'> & {
        scale: D3Scale<string | number>;
        x?: number;
        width?: number;
    };
    yAxis?: Omit<YAxisProps, 'scale'> & {
        scale: D3Scale<string | number>;
        y?: number;
        height?: number;
    };
    data?: BarRectangleItem[];
    top?: number;
    left?: number;
    width?: number;
    height?: number;
}
declare type RectangleShapeType = ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | RectangleProps | boolean;
interface BarProps extends InternalBarProps {
    className?: string;
    layout?: 'horizontal' | 'vertical';
    xAxisId?: string | number;
    yAxisId?: string | number;
    stackId?: string | number;
    barSize?: number;
    unit?: string | number;
    name?: string | number;
    dataKey: DataKey<any>;
    tooltipType?: TooltipType;
    legendType?: LegendType;
    minPointSize?: number;
    maxBarSize?: number;
    hide?: boolean;
    shape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
    background?: RectangleShapeType;
    radius?: number | [number, number, number, number];
    onAnimationStart?: () => void;
    onAnimationEnd?: () => void;
    isAnimationActive?: boolean;
    animationBegin?: number;
    animationDuration?: number;
    animationEasing?: AnimationTiming;
    animationId?: number;
    id?: string;
    label?: boolean | ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | {
        id?: string;
        valueAccessor?: Function;
        dataKey?: DataKey<any>;
        content?: ContentType;
    };
}
export declare type Props = Omit<PresentationAttributesAdaptChildEvent<any, SVGPathElement>, 'radius'> & BarProps;
interface State {
    readonly isAnimationFinished?: boolean;
    readonly prevData?: BarRectangleItem[];
    readonly curData?: BarRectangleItem[];
    readonly prevAnimationId?: number;
}
export declare class Bar extends PureComponent<Props, State> {
    static displayName: string;
    static defaultProps: {
        xAxisId: number;
        yAxisId: number;
        legendType: string;
        minPointSize: number;
        hide: boolean;
        data: BarRectangleItem[];
        layout: string;
        isAnimationActive: boolean;
        animationBegin: number;
        animationDuration: number;
        animationEasing: string;
    };
    static getComposedData: ({ props, item, barPosition, bandSize, xAxis, yAxis, xAxisTicks, yAxisTicks, stackedData, dataStartIndex, displayedData, offset, }: {
        props: Props;
        item: Bar;
        barPosition: any;
        bandSize: number;
        xAxis: InternalBarProps['xAxis'];
        yAxis: InternalBarProps['yAxis'];
        xAxisTicks: TickItem[];
        yAxisTicks: TickItem[];
        stackedData: number[][];
        dataStartIndex: number;
        offset: ChartOffset;
        displayedData: any[];
    }) => {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
        width?: number;
        height?: number;
        brushBottom?: number;
        data: any[];
        layout: "horizontal" | "vertical";
    };
    state: State;
    static getDerivedStateFromProps(nextProps: Props, prevState: State): State;
    id: string;
    handleAnimationEnd: () => void;
    handleAnimationStart: () => void;
    static renderRectangle(option: RectangleShapeType, props: any): JSX.Element;
    renderRectanglesStatically(data: BarRectangleItem[]): JSX.Element[];
    renderRectanglesWithAnimation(): JSX.Element;
    renderRectangles(): JSX.Element | JSX.Element[];
    renderBackground(): JSX.Element[];
    renderErrorBar(): React.ReactElement<ErrorBarProps, string | React.JSXElementConstructor<any>>[];
    render(): JSX.Element;
}
export {};
