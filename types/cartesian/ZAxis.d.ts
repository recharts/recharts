import type { FunctionComponent } from 'react';
import { ScaleType, DataKey, AxisDomain } from '../util/types';
export interface Props {
    type?: 'number' | 'category';
    name?: string | number;
    unit?: string | number;
    zAxisId?: string | number;
    dataKey?: DataKey<any>;
    range?: number[];
    scale?: ScaleType | Function;
    domain?: AxisDomain;
}
export declare const ZAxis: FunctionComponent<Props>;
