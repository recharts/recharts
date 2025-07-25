import * as React from 'react';
import { FunctionComponent, PureComponent, ReactElement, SVGProps } from 'react';
import { Props as TextProps } from '../component/Text';
import { AxisDomain, DataKey, PresentationAttributesAdaptChildEvent, ScaleType, TickItem } from '../util/types';
import { RechartsScale } from '../util/ChartUtils';
/**
 * These are injected from Redux, are required, but cannot be set by user.
 */
interface PropsInjectedFromRedux {
    cx?: number;
    cy?: number;
    radius?: number;
}
export interface PolarAngleAxisProps extends PropsInjectedFromRedux {
    allowDecimals?: boolean;
    domain?: AxisDomain;
    allowDuplicatedCategory?: boolean;
    angleAxisId?: string | number;
    axisLineType?: 'polygon' | 'circle';
    ticks?: ReadonlyArray<TickItem>;
    orientation?: 'inner' | 'outer';
    axisLine?: boolean | SVGProps<SVGLineElement>;
    tickSize?: number;
    tickCount?: number;
    tickLine?: boolean | SVGProps<SVGLineElement>;
    tickFormatter?: (value: any, index: number) => string;
    reversed: boolean;
    dataKey?: DataKey<any>;
    tick?: SVGProps<SVGTextElement> | ReactElement<SVGElement> | ((props: TickItemTextProps) => ReactElement<SVGElement>) | boolean;
    scale: ScaleType | RechartsScale;
    type?: 'category' | 'number';
}
type AxisSvgProps = Omit<PresentationAttributesAdaptChildEvent<any, SVGTextElement>, 'scale' | 'type'>;
export type Props = AxisSvgProps & PolarAngleAxisProps;
export type TickItemTextProps = TextProps & {
    index: number;
    payload: any;
};
export declare const PolarAngleAxisWrapper: FunctionComponent<Props>;
export declare class PolarAngleAxis extends PureComponent<Props> {
    static displayName: string;
    static axisType: string;
    static defaultProps: {
        readonly allowDuplicatedCategory: true;
        readonly angleAxisId: 0;
        readonly axisLine: true;
        readonly cx: 0;
        readonly cy: 0;
        readonly orientation: "outer";
        readonly reversed: false;
        readonly scale: "auto";
        readonly tick: true;
        readonly tickLine: true;
        readonly tickSize: 8;
        readonly type: "category";
    };
    render(): React.ReactNode;
}
export {};
