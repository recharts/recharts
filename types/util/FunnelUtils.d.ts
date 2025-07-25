import * as React from 'react';
import { SVGProps } from 'react';
import { Props as FunnelProps, FunnelTrapezoidItem } from '../cartesian/Funnel';
import { Props as TrapezoidProps } from '../shape/Trapezoid';
export declare function typeGuardTrapezoidProps(option: SVGProps<SVGPathElement>, props: FunnelTrapezoidItem): TrapezoidProps;
export type FunnelTrapezoidProps = {
    option: FunnelProps['activeShape'];
} & FunnelTrapezoidItem;
export declare function FunnelTrapezoid(props: FunnelTrapezoidProps): React.JSX.Element;
