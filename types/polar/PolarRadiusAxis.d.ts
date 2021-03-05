import { PureComponent } from 'react';
import { BaseAxisProps, TickItem, PresentationAttributesAdaptChildEvent } from '../util/types';
export interface PolarRadiusAxisProps extends BaseAxisProps {
    cx?: number;
    cy?: number;
    radiusAxisId?: string | number;
    angle?: number;
    orientation?: 'left' | 'right' | 'middle';
    ticks?: TickItem[];
}
export declare type Props = PresentationAttributesAdaptChildEvent<any, SVGElement> & PolarRadiusAxisProps;
export declare class PolarRadiusAxis extends PureComponent<Props> {
    static displayName: string;
    static axisType: string;
    static defaultProps: {
        type: string;
        radiusAxisId: number;
        cx: number;
        cy: number;
        angle: number;
        orientation: string;
        stroke: string;
        axisLine: boolean;
        tick: boolean;
        tickCount: number;
        domain: (string | number)[];
        allowDataOverflow: boolean;
        scale: string;
        allowDuplicatedCategory: boolean;
    };
    getTickValueCoord({ coordinate }: TickItem): import("../util/types").Coordinate;
    getTickTextAnchor(): string;
    getViewBox(): {
        cx: number;
        cy: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    };
    renderAxisLine(): JSX.Element;
    static renderTickItem(option: Props['tick'], props: any, value: string | number): JSX.Element;
    renderTicks(): JSX.Element;
    render(): JSX.Element;
}
