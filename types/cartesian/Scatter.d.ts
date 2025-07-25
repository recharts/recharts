import * as React from 'react';
import { Component, ReactElement } from 'react';
import { ImplicitLabelListType } from '../component/LabelList';
import { CurveType, Props as CurveProps } from '../shape/Curve';
import { ActiveShape, AnimationDuration, AnimationTiming, Coordinate, DataKey, LegendType, PresentationAttributesAdaptChildEvent, SymbolType, TickItem } from '../util/types';
import { TooltipType } from '../component/DefaultTooltipContent';
import { InnerSymbolsProp } from '../shape/Symbols';
import { TooltipPayload } from '../state/tooltipSlice';
import { AxisId } from '../state/cartesianAxisSlice';
import { ResolvedScatterSettings } from '../state/selectors/scatterSelectors';
import { BaseAxisWithScale, ZAxisWithScale } from '../state/selectors/axisSelectors';
interface ScatterPointNode {
    x?: number | string;
    y?: number | string;
    z?: number | string;
}
export interface ScatterPointItem {
    cx?: number;
    cy?: number;
    size?: number;
    node?: ScatterPointNode;
    payload?: any;
    tooltipPayload?: TooltipPayload;
    tooltipPosition: Coordinate;
}
export type ScatterCustomizedShape = ActiveShape<ScatterPointItem, SVGPathElement & InnerSymbolsProp> | SymbolType;
/**
 * External props, intended for end users to fill in
 */
interface ScatterProps {
    data?: any[];
    xAxisId?: AxisId;
    yAxisId?: string | number;
    zAxisId?: string | number;
    dataKey?: DataKey<any>;
    line?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | CurveProps | boolean;
    lineType?: 'fitting' | 'joint';
    lineJointType?: CurveType;
    legendType?: LegendType;
    tooltipType?: TooltipType;
    className?: string;
    name?: string;
    activeShape?: ScatterCustomizedShape;
    shape?: ScatterCustomizedShape;
    hide?: boolean;
    label?: ImplicitLabelListType<any>;
    isAnimationActive?: boolean;
    animationBegin?: number;
    animationDuration?: AnimationDuration;
    animationEasing?: AnimationTiming;
}
/**
 * Because of naming conflict, we are forced to ignore certain (valid) SVG attributes.
 */
type BaseScatterSvgProps = Omit<PresentationAttributesAdaptChildEvent<any, SVGElement>, 'points' | 'ref'>;
export type Props = BaseScatterSvgProps & ScatterProps;
export declare function computeScatterPoints({ displayedData, xAxis, yAxis, zAxis, scatterSettings, xAxisTicks, yAxisTicks, cells, }: {
    displayedData: ReadonlyArray<any>;
    xAxis: BaseAxisWithScale;
    yAxis: BaseAxisWithScale;
    zAxis: ZAxisWithScale;
    scatterSettings: ResolvedScatterSettings;
    xAxisTicks: TickItem[];
    yAxisTicks: TickItem[];
    cells: ReadonlyArray<ReactElement> | undefined;
}): ReadonlyArray<ScatterPointItem>;
export declare class Scatter extends Component<Props> {
    static displayName: string;
    static defaultProps: {
        readonly xAxisId: 0;
        readonly yAxisId: 0;
        readonly zAxisId: 0;
        readonly legendType: "circle";
        readonly lineType: "joint";
        readonly lineJointType: "linear";
        readonly data: any[];
        readonly shape: "circle";
        readonly hide: false;
        readonly isAnimationActive: boolean;
        readonly animationBegin: 0;
        readonly animationDuration: 400;
        readonly animationEasing: "linear";
    };
    render(): React.JSX.Element;
}
export {};
