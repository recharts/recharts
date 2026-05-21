import * as React from 'react';
import { Props as FunnelProps, FunnelTrapezoidItem } from '../cartesian/Funnel';
import { Trapezoid } from '../shape/Trapezoid';
import { Shape } from './ActiveShapeUtils';

export const defaultFunnelShape = Trapezoid;

export type FunnelTrapezoidProps = {
  option: Exclude<FunnelProps['shape'], undefined> | FunnelProps['activeShape'];
  isActive: boolean;
} & FunnelTrapezoidItem;

export function FunnelTrapezoid(props: FunnelTrapezoidProps) {
  return <Shape renderDefaultShape={defaultFunnelShape} {...props} />;
}
