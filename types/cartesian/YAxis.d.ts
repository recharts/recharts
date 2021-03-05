import type { FunctionComponent, SVGProps } from 'react';
import { BaseAxisProps, AxisInterval } from '../util/types';
interface YAxisProps extends BaseAxisProps {
    yAxisId?: string | number;
    ticks?: (string | number)[];
    width?: number;
    height?: number;
    mirror?: boolean;
    orientation?: 'left' | 'right';
    padding?: {
        top?: number;
        bottom?: number;
    };
    minTickGap?: number;
    interval?: AxisInterval;
    reversed?: boolean;
    tickMargin?: number;
}
export declare type Props = Omit<SVGProps<SVGElement>, 'scale'> & YAxisProps;
export declare const YAxis: FunctionComponent<Props>;
export {};
