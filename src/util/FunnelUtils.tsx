import * as React from 'react';
import { Props as FunnelProps, FunnelTrapezoidItem } from '../cartesian/Funnel';
import { Shape } from './ActiveShapeUtils';

export type FunnelTrapezoidProps = { option: FunnelProps['activeShape']; isActive: boolean } & FunnelTrapezoidItem;

export function FunnelTrapezoid(props: FunnelTrapezoidProps) {
  return <Shape shapeType="trapezoid" {...props} />;
}
