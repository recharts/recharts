import * as React from 'react';
import { Props as FunnelProps, FunnelTrapezoidItem } from '../cartesian/Funnel';
import { Trapezoid } from '../shape/Trapezoid';
import { Shape } from './ActiveShapeUtils';

export type FunnelTrapezoidProps = { option: FunnelProps['activeShape']; isActive: boolean } & FunnelTrapezoidItem;

function renderTrapezoid(props: FunnelTrapezoidProps) {
  return <Trapezoid {...props} />;
}

export function FunnelTrapezoid(props: FunnelTrapezoidProps) {
  return <Shape renderDefaultShape={renderTrapezoid} {...props} />;
}
