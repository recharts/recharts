import * as React from 'react';
import { Component } from 'react';
import { ScaleType, DataKey, AxisDomain } from '../util/types';
import { RechartsScale } from '../util/ChartUtils';
import { AxisRange } from '../state/selectors/axisSelectors';
export interface Props {
    type?: 'number' | 'category';
    /** The name of data displayed in the axis */
    name?: string;
    /** The unit of data displayed in the axis */
    unit?: string;
    /** The unique id of z-axis */
    zAxisId?: string | number;
    /** The key of data displayed in the axis */
    dataKey?: DataKey<any>;
    /** The range of axis */
    range?: AxisRange;
    scale?: ScaleType | RechartsScale | undefined;
    /** The domain of scale in this axis */
    domain?: AxisDomain;
}
export declare class ZAxis extends Component<Props> {
    static displayName: string;
    static defaultProps: {
        zAxisId: number;
        range: AxisRange;
        scale: ScaleType | RechartsScale;
        type: import("../util/types").AxisDomainType;
    };
    render(): React.JSX.Element;
}
