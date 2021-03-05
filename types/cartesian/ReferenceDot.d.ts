import React, { ReactElement } from 'react';
import { Props as DotProps } from '../shape/Dot';
import { ImplicitLabelType } from '../component/Label';
import { D3Scale } from '../util/types';
import { Props as XAxisProps } from './XAxis';
import { Props as YAxisProps } from './YAxis';
interface InternalReferenceDotProps {
    xAxis?: Omit<XAxisProps, 'scale'> & {
        scale: D3Scale<string | number>;
    };
    yAxis?: Omit<YAxisProps, 'scale'> & {
        scale: D3Scale<string | number>;
    };
    clipPathId?: number | string;
}
interface ReferenceDotProps extends InternalReferenceDotProps {
    r?: number;
    isFront?: boolean;
    alwaysShow?: boolean;
    ifOverflow?: 'hidden' | 'visible' | 'discard' | 'extendDomain';
    x?: number | string;
    y?: number | string;
    className?: number | string;
    yAxisId?: number | string;
    xAxisId?: number | string;
    shape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
    label?: ImplicitLabelType;
}
export declare type Props = DotProps & ReferenceDotProps;
export declare function ReferenceDot(props: Props): JSX.Element;
export declare namespace ReferenceDot {
    var displayName: string;
    var defaultProps: {
        isFront: boolean;
        ifOverflow: string;
        xAxisId: number;
        yAxisId: number;
        r: number;
        fill: string;
        stroke: string;
        fillOpacity: number;
        strokeWidth: number;
    };
    var renderDot: (option: React.ReactElement<SVGElement, string | React.JSXElementConstructor<any>> | ((props: any) => React.ReactElement<SVGElement, string | React.JSXElementConstructor<any>>), props: any) => JSX.Element;
}
export {};
