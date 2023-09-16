import React, { SVGProps, isValidElement, cloneElement } from 'react';
import _ from 'lodash';
import { FunnelProps, FunnelTrapezoidItem } from '../numberAxis/Funnel';
import { Trapezoid } from '../shape/Trapezoid';
import { Layer } from '../container/Layer';

// Trapezoid props is expecting x, y, height as numbers.
// When props are being spread in from a user defined component in Funnel,
// the prop types of an SVGElement have these typed as string | number.
// This function will return the passed in props along with x, y, height as numbers.
export function typeGuardTrapezoidProps(option: SVGProps<SVGPathElement>, props: FunnelTrapezoidItem) {
  const xValue = `${props.x || option.x}`;
  const x = parseInt(xValue, 10);
  const yValue = `${props.y || option.y}`;
  const y = parseInt(yValue, 10);
  const heightValue = `${props.height || option.height}`;
  const height = parseInt(heightValue, 10);
  return {
    ...props,
    ...option,
    height,
    x,
    y,
  };
}

export function FunnelTrapezoid({ option, ...props }: { option: FunnelProps['activeShape'] } & FunnelTrapezoidItem) {
  let trapezoid;

  if (isValidElement(option)) {
    const elementProps = {
      ...props,
      ...(option.props ?? {}),
    };
    trapezoid = cloneElement(option, elementProps);
  } else if (_.isFunction(option)) {
    trapezoid = option(props);
  } else if (_.isPlainObject(option) && !_.isBoolean(option)) {
    const trapezoidProps = typeGuardTrapezoidProps(option, props);
    trapezoid = <Trapezoid {...trapezoidProps} />;
  } else {
    trapezoid = <Trapezoid {...props} />;
  }

  if (props.isActive) {
    return <Layer className="recharts-active-shape">{trapezoid}</Layer>;
  }

  return trapezoid;
}
