import * as React from 'react';
import { FunctionComponent, PureComponent } from 'react';
import { BaseAxisProps, PresentationAttributesAdaptChildEvent, TickItem } from '../util/types';
type TickOrientation = 'left' | 'right' | 'middle';
export interface PolarRadiusAxisProps extends Omit<BaseAxisProps, 'unit'> {
    cx?: number;
    cy?: number;
    radiusAxisId?: string | number;
    angle?: number;
    orientation?: TickOrientation;
    ticks?: ReadonlyArray<TickItem>;
    reversed?: boolean;
}
type AxisSvgProps = Omit<PresentationAttributesAdaptChildEvent<any, SVGTextElement>, 'scale' | 'type'>;
export type Props = AxisSvgProps & PolarRadiusAxisProps;
export declare const PolarRadiusAxisWrapper: FunctionComponent<Props>;
export declare class PolarRadiusAxis extends PureComponent<Props> {
    static displayName: string;
    static axisType: string;
    static defaultProps: {
        readonly allowDataOverflow: false;
        readonly allowDuplicatedCategory: true;
        readonly angle: 0;
        readonly axisLine: true;
        readonly cx: 0;
        readonly cy: 0;
        readonly orientation: "right";
        readonly radiusAxisId: 0;
        readonly scale: "auto";
        readonly stroke: "#ccc";
        readonly tick: true;
        readonly tickCount: 5;
        readonly type: "number";
    };
    render(): React.JSX.Element;
}
export {};
