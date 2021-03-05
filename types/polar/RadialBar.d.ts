import React, { PureComponent, ReactElement, ReactNode } from 'react';
import { Props as SectorProps } from '../shape/Sector';
import { ImplicitLabelListType } from '../component/LabelList';
import { LegendType, TooltipType, AnimationTiming, TickItem, PresentationAttributesAdaptChildEvent } from '../util/types';
declare type RadialBarDataItem = SectorProps & {
    value?: any;
    payload?: any;
    background?: SectorProps;
};
declare type RadialBarShape = ReactElement | ((props: Props) => ReactNode);
declare type RadialBarBackground = ReactElement | ((props: Props) => ReactNode) | SectorProps | boolean;
interface RadialBarProps {
    animationId?: string | number;
    className?: string;
    angleAxisId?: string | number;
    radiusAxisId?: string | number;
    startAngle?: number;
    endAngle?: number;
    shape?: RadialBarShape;
    activeShape?: RadialBarShape;
    activeIndex?: number;
    dataKey: string | number | ((obj: any) => any);
    cornerRadius?: string | number;
    forceCornerRadius?: boolean;
    cornerIsExternal?: boolean;
    minPointSize?: number;
    maxBarSize?: number;
    data?: RadialBarDataItem[];
    legendType?: LegendType;
    tooltipType?: TooltipType;
    hide?: boolean;
    label?: ImplicitLabelListType<any>;
    stackId?: string | number;
    background?: RadialBarBackground;
    onAnimationStart?: () => void;
    onAnimationEnd?: () => void;
    isAnimationActive?: boolean;
    animationBegin?: number;
    animationDuration?: number;
    animationEasing?: AnimationTiming;
}
export declare type Props = PresentationAttributesAdaptChildEvent<any, SVGElement> & RadialBarProps;
interface State {
    readonly isAnimationFinished?: boolean;
    readonly prevData?: RadialBarDataItem[];
    readonly curData?: RadialBarDataItem[];
    readonly prevAnimationId?: string | number;
}
export declare class RadialBar extends PureComponent<Props, State> {
    static displayName: string;
    static defaultProps: {
        angleAxisId: number;
        radiusAxisId: number;
        minPointSize: number;
        hide: boolean;
        legendType: string;
        data: RadialBarDataItem[];
        isAnimationActive: boolean;
        animationBegin: number;
        animationDuration: number;
        animationEasing: string;
        forceCornerRadius: boolean;
        cornerIsExternal: boolean;
    };
    static getComposedData: ({ item, props, radiusAxis, radiusAxisTicks, angleAxis, angleAxisTicks, displayedData, dataKey, stackedData, barPosition, bandSize, dataStartIndex, }: {
        item: RadialBar;
        props: any;
        radiusAxis: any;
        radiusAxisTicks: Array<TickItem>;
        angleAxis: any;
        angleAxisTicks: Array<TickItem>;
        displayedData: any[];
        dataKey: Props['dataKey'];
        stackedData?: any[];
        barPosition?: any[];
        bandSize?: number;
        dataStartIndex: number;
    }) => {
        data: any[];
        layout: any;
    };
    state: State;
    static getDerivedStateFromProps(nextProps: Props, prevState: State): State;
    getDeltaAngle(): number;
    handleAnimationEnd: () => void;
    handleAnimationStart: () => void;
    static renderSectorShape(shape: RadialBarBackground, props: any): React.ReactNode;
    renderSectorsStatically(sectors: SectorProps[]): React.ReactNode[];
    renderSectorsWithAnimation(): JSX.Element;
    renderSectors(): JSX.Element | React.ReactNode[];
    renderBackground(sectors?: RadialBarDataItem[]): React.ReactNode[];
    render(): JSX.Element;
}
export {};
