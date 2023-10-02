import React, { SVGProps } from 'react';
import { FunnelProps, FunnelTrapezoidItem } from '../numberAxis/Funnel';
import { Props as TrapezoidProps } from '../shape/Trapezoid';
import { Shape } from './ActiveShapeUtils';

// Trapezoid props is expecting x, y, height as numbers.
// When props are being spread in from a user defined component in Funnel,
// the prop types of an SVGElement have these typed as string | number.
// This function will return the passed in props along with x, y, height as numbers.
export function typeGuardTrapezoidProps(option: SVGProps<SVGPathElement>, props: FunnelTrapezoidItem): TrapezoidProps {
  const xValue = `${props.x || option.x}`;
  const x = parseInt(xValue, 10);
  const yValue = `${props.y || option.y}`;
  const y = parseInt(yValue, 10);
  const heightValue = `${props?.height || option?.height}`;
  const height = parseInt(heightValue, 10);
  return {
    ...props,
    ...option,
    height,
    x,
    y,
  };
}

type FunnelTrapezoidProps = { option: FunnelProps['activeShape'] } & FunnelTrapezoidItem;

export function FunnelTrapezoid(props: FunnelTrapezoidProps) {
  return <Shape shapeType="trapezoid" propTransformer={typeGuardTrapezoidProps} {...props} />;
}
