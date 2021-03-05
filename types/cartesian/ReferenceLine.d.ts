import { ReactElement, SVGProps } from 'react';
import { ImplicitLabelType } from '../component/Label';
import { CartesianViewBox, D3Scale } from '../util/types';
import { Props as XAxisProps } from './XAxis';
import { Props as YAxisProps } from './YAxis';
interface InternalReferenceLineProps {
    viewBox?: CartesianViewBox;
    xAxis?: Omit<XAxisProps, 'scale'> & {
        scale: D3Scale<string | number>;
    };
    yAxis?: Omit<YAxisProps, 'scale'> & {
        scale: D3Scale<string | number>;
    };
    clipPathId?: number | string;
}
interface ReferenceLineProps extends InternalReferenceLineProps {
    isFront?: boolean;
    alwaysShow?: boolean;
    ifOverflow?: 'hidden' | 'visible' | 'discard' | 'extendDomain';
    x?: number | string;
    y?: number | string;
    segment?: Array<{
        x?: number | string;
        y?: number | string;
    }>;
    position?: 'middle' | 'start' | 'end';
    className?: number | string;
    yAxisId?: number | string;
    xAxisId?: number | string;
    shape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
    label?: ImplicitLabelType;
}
export declare type Props = SVGProps<SVGLineElement> & ReferenceLineProps;
export declare function ReferenceLine(props: Props): JSX.Element;
export declare namespace ReferenceLine {
    var displayName: string;
    var defaultProps: {
        isFront: boolean;
        ifOverflow: string;
        xAxisId: number;
        yAxisId: number;
        fill: string;
        stroke: string;
        fillOpacity: number;
        strokeWidth: number;
        position: string;
    };
}
export {};
