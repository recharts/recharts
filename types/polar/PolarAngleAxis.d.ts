import { PureComponent } from 'react';
import { BaseAxisProps, TickItem, PresentationAttributesAdaptChildEvent } from '../util/types';
export interface PolarAngleAxisProps extends BaseAxisProps {
    angleAxisId?: string | number;
    cx?: number;
    cy?: number;
    radius?: number;
    axisLineType?: 'polygon' | 'circle';
    ticks?: TickItem[];
    orientation?: 'inner' | 'outer';
}
export declare type Props = PresentationAttributesAdaptChildEvent<any, SVGTextElement> & PolarAngleAxisProps;
export declare class PolarAngleAxis extends PureComponent<Props> {
    static displayName: string;
    static axisType: string;
    static defaultProps: {
        type: string;
        angleAxisId: number;
        scale: string;
        cx: number;
        cy: number;
        domain: (string | number)[];
        orientation: string;
        axisLine: boolean;
        tickLine: boolean;
        tickSize: number;
        tick: boolean;
        hide: boolean;
        allowDuplicatedCategory: boolean;
    };
    getTickLineCoord(data: TickItem): {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    };
    getTickTextAnchor(data: TickItem): string;
    renderAxisLine(): JSX.Element;
    static renderTickItem(option: PolarAngleAxisProps['tick'], props: any, value: string | number): JSX.Element;
    renderTicks(): JSX.Element;
    render(): JSX.Element;
}
