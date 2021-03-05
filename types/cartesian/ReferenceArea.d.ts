import React, { ReactElement } from 'react';
import { ImplicitLabelType } from '../component/Label';
import { Props as RectangleProps } from '../shape/Rectangle';
import { CartesianViewBox, D3Scale } from '../util/types';
import { Props as XAxisProps } from './XAxis';
import { Props as YAxisProps } from './YAxis';
interface InternalReferenceAreaProps {
    viewBox?: CartesianViewBox;
    xAxis?: Omit<XAxisProps, 'scale'> & {
        scale: D3Scale<string | number>;
    };
    yAxis?: Omit<YAxisProps, 'scale'> & {
        scale: D3Scale<string | number>;
    };
    clipPathId?: number | string;
}
interface ReferenceAreaProps extends InternalReferenceAreaProps {
    isFront?: boolean;
    alwaysShow?: boolean;
    ifOverflow?: 'hidden' | 'visible' | 'discard' | 'extendDomain';
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
export declare type Props = RectangleProps & ReferenceAreaProps;
export declare function ReferenceArea(props: Props): JSX.Element;
export declare namespace ReferenceArea {
    var displayName: string;
    var defaultProps: {
        isFront: boolean;
        ifOverflow: string;
        xAxisId: number;
        yAxisId: number;
        r: number;
        fill: string;
        fillOpacity: number;
        stroke: string;
        strokeWidth: number;
    };
    var renderRect: (option: React.ReactElement<SVGElement, string | React.JSXElementConstructor<any>> | ((props: any) => React.ReactElement<SVGElement, string | React.JSXElementConstructor<any>>), props: any) => JSX.Element;
}
export {};
