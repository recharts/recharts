import * as React from 'react';
import { Props as FunnelProps, FunnelTrapezoidItem } from '../cartesian/Funnel';
import { ShapeAnimationProps } from './types';
import { Shape } from './ActiveShapeUtils';

export type FunnelTrapezoidProps = { option: FunnelProps['activeShape']; isActive: boolean } & ShapeAnimationProps &
  FunnelTrapezoidItem;

export function FunnelTrapezoid(props: FunnelTrapezoidProps) {
  return <Shape shapeType="trapezoid" {...props} />;
}
