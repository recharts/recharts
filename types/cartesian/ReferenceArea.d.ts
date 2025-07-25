import * as React from 'react';
import { Component, ReactElement } from 'react';
import { ImplicitLabelType } from '../component/Label';
import { IfOverflow } from '../util/IfOverflow';
import { Props as RectangleProps } from '../shape/Rectangle';
interface ReferenceAreaProps {
    ifOverflow?: IfOverflow;
    x1?: number | string;
    x2?: number | string;
    y1?: number | string;
    y2?: number | string;
    className?: number | string;
    yAxisId?: number | string;
    xAxisId?: number | string;
    shape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
    label?: ImplicitLabelType;
}
export type Props = RectangleProps & ReferenceAreaProps;
export declare class ReferenceArea extends Component<Props> {
    static displayName: string;
    static defaultProps: {
        ifOverflow: string;
        xAxisId: number;
        yAxisId: number;
        r: number;
        fill: string;
        fillOpacity: number;
        stroke: string;
        strokeWidth: number;
    };
    render(): React.JSX.Element;
}
export {};
