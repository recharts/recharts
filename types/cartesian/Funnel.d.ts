import * as React from 'react';
import { PureComponent } from 'react';
import { Props as TrapezoidProps } from '../shape/Trapezoid';
import { ImplicitLabelListType } from '../component/LabelList';
import { ActiveShape, AnimationDuration, AnimationTiming, ChartOffsetInternal, Coordinate, DataKey, LegendType, PresentationAttributesAdaptChildEvent, TooltipType } from '../util/types';
export interface FunnelTrapezoidItem extends TrapezoidProps {
    value?: number | string;
    payload?: any;
    isActive: boolean;
    tooltipPosition: Coordinate;
}
/**
 * Internal props, combination of external props + defaultProps + private Recharts state
 */
interface InternalFunnelProps {
    trapezoids?: ReadonlyArray<FunnelTrapezoidItem>;
    className?: string;
    dataKey: DataKey<any>;
    nameKey?: DataKey<any>;
    data?: any[];
    hide?: boolean;
    shape?: ActiveShape<FunnelTrapezoidItem, SVGPathElement>;
    activeShape?: ActiveShape<FunnelTrapezoidItem, SVGPathElement>;
    legendType?: LegendType;
    tooltipType?: TooltipType;
    lastShapeType?: 'triangle' | 'rectangle';
    reversed?: boolean;
    onAnimationStart?: () => void;
    onAnimationEnd?: () => void;
    isAnimationActive?: boolean;
    animationBegin?: number;
    animationDuration?: AnimationDuration;
    animationEasing?: AnimationTiming;
    id?: string;
}
/**
 * External props, intended for end users to fill in
 */
interface FunnelProps {
    activeShape?: ActiveShape<FunnelTrapezoidItem, SVGPathElement>;
    animationBegin?: number;
    animationDuration?: AnimationDuration;
    animationEasing?: AnimationTiming;
    className?: string;
    data?: any[];
    dataKey: DataKey<any>;
    hide?: boolean;
    id?: string;
    isAnimationActive?: boolean;
    label?: ImplicitLabelListType<any>;
    lastShapeType?: 'triangle' | 'rectangle';
    legendType?: LegendType;
    nameKey?: DataKey<any>;
    onAnimationEnd?: () => void;
    onAnimationStart?: () => void;
    reversed?: boolean;
    shape?: ActiveShape<FunnelTrapezoidItem, SVGPathElement>;
    tooltipType?: TooltipType;
}
type FunnelSvgProps = Omit<PresentationAttributesAdaptChildEvent<any, SVGElement> & TrapezoidProps, 'ref'>;
type InternalProps = FunnelSvgProps & InternalFunnelProps;
export type Props = FunnelSvgProps & FunnelProps;
type RealFunnelData = any;
type FunnelComposedData = {
    trapezoids: ReadonlyArray<FunnelTrapezoidItem>;
    data: RealFunnelData[];
};
export declare class FunnelWithState extends PureComponent<InternalProps> {
    render(): React.JSX.Element;
}
export declare function computeFunnelTrapezoids({ dataKey, nameKey, displayedData, tooltipType, lastShapeType, reversed, offset, customWidth, }: {
    dataKey: Props['dataKey'];
    nameKey: Props['nameKey'];
    offset: ChartOffsetInternal;
    displayedData: RealFunnelData[];
    tooltipType?: TooltipType;
    lastShapeType?: Props['lastShapeType'];
    reversed?: boolean;
    customWidth: number | string | undefined;
}): FunnelComposedData;
export declare class Funnel extends PureComponent<Props> {
    static displayName: string;
    static defaultProps: {
        readonly stroke: "#fff";
        readonly fill: "#808080";
        readonly legendType: "rect";
        readonly hide: false;
        readonly isAnimationActive: boolean;
        readonly animationBegin: 400;
        readonly animationDuration: 1500;
        readonly animationEasing: "ease";
        readonly nameKey: "name";
        readonly lastShapeType: "triangle";
    };
    render(): React.JSX.Element;
}
export {};
