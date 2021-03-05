import React, { PureComponent, ReactElement } from 'react';
import { ImplicitLabelListType } from '../component/LabelList';
import { Props as ZAxisProps } from './ZAxis';
import { Props as CurveProps, CurveType } from '../shape/Curve';
import { Props as SymbolsProps } from '../shape/Symbols';
import { Props as ErrorBarProps } from './ErrorBar';
import { LegendType, SymbolType, AnimationTiming, D3Scale, ChartOffset, DataKey, TickItem, PresentationAttributesAdaptChildEvent } from '../util/types';
import { TooltipType } from '../component/DefaultTooltipContent';
import { Props as XAxisProps } from './XAxis';
import { Props as YAxisProps } from './YAxis';
interface ScattterPointNode {
    x?: number | string;
    y?: number | string;
    z?: number | string;
}
interface ScatterPointItem {
    cx?: number;
    cy?: number;
    size?: number;
    node?: ScattterPointNode;
    payload?: any;
}
interface ScatterProps {
    data?: any[];
    xAxisId?: string | number;
    yAxisId?: string | number;
    zAxisId?: string | number;
    left?: number;
    top?: number;
    width?: number;
    height?: number;
    xAxis?: Omit<XAxisProps, 'scale'> & {
        scale: D3Scale<string | number>;
    };
    yAxis?: Omit<YAxisProps, 'scale'> & {
        scale: D3Scale<string | number>;
    };
    zAxis?: Omit<ZAxisProps, 'scale'> & {
        scale: D3Scale<string | number>;
    };
    dataKey?: DataKey<any>;
    line?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | CurveProps | boolean;
    lineType?: 'fitting' | 'joint';
    lineJointType?: CurveType;
    legendType?: LegendType;
    tooltipType?: TooltipType;
    className?: string;
    name?: string | number;
    activeIndex?: number;
    activeShape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | SymbolsProps;
    shape?: SymbolType | ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
    points?: ScatterPointItem[];
    hide?: boolean;
    label?: ImplicitLabelListType<any>;
    isAnimationActive?: boolean;
    animationId?: number;
    animationBegin?: number;
    animationDuration?: number;
    animationEasing?: AnimationTiming;
}
export declare type Props = PresentationAttributesAdaptChildEvent<any, SVGElement> & ScatterProps;
interface State {
    isAnimationFinished?: boolean;
    prevPoints?: ScatterPointItem[];
    curPoints?: ScatterPointItem[];
    prevAnimationId?: number;
}
export declare class Scatter extends PureComponent<Props, State> {
    static displayName: string;
    static defaultProps: {
        xAxisId: number;
        yAxisId: number;
        zAxisId: number;
        legendType: string;
        lineType: string;
        lineJointType: string;
        data: any[];
        shape: string;
        hide: boolean;
        isAnimationActive: boolean;
        animationBegin: number;
        animationDuration: number;
        animationEasing: string;
    };
    static getComposedData: ({ xAxis, yAxis, zAxis, item, displayedData, xAxisTicks, yAxisTicks, offset, }: {
        props: Props;
        xAxis: Props['xAxis'];
        yAxis: Props['yAxis'];
        zAxis: Props['zAxis'];
        xAxisTicks: TickItem[];
        yAxisTicks: TickItem[];
        item: Scatter;
        bandSize: number;
        displayedData: any[];
        offset: ChartOffset;
    }) => {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
        width?: number;
        height?: number;
        brushBottom?: number;
        points: any[];
    };
    state: State;
    static getDerivedStateFromProps(nextProps: Props, prevState: State): State;
    handleAnimationEnd: () => void;
    handleAnimationStart: () => void;
    id: string;
    static renderSymbolItem(option: Props['activeShape'] | Props['shape'], props: any): JSX.Element;
    renderSymbolsStatically(points: ScatterPointItem[]): JSX.Element[];
    renderSymbolsWithAnimation(): JSX.Element;
    renderSymbols(): JSX.Element | JSX.Element[];
    renderErrorBar(): React.ReactElement<ErrorBarProps, string | React.JSXElementConstructor<any>>[];
    renderLine(): JSX.Element;
    render(): JSX.Element;
}
export {};
