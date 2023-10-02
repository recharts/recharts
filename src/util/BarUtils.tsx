import _ from 'lodash';
import React, { SVGProps, isValidElement, cloneElement, ReactElement } from 'react';
import { Layer } from '../container/Layer';
import { ActiveShape } from './types';
import { Rectangle } from '../shape/Rectangle';
import { BarProps } from '../cartesian/Bar';

// Rectangle props is expecting x, y, height, width as numbers, name as a string, and radius as a custom type
// When props are being spread in from a user defined component in Bar,
// the prop types of an SVGElement have these typed as something else.
// This function will return the passed in props
// along with x, y, height as numbers, name as a string, and radius as number | [number, numbe, number, number]
function typeguardBarRectangleProps({ x: xProp, y: yProp, ...option }: SVGProps<SVGPathElement>, props: BarProps) {
  const xValue = `${xProp}`;
  const x = parseInt(xValue, 10);
  const yValue = `${yProp}`;
  const y = parseInt(yValue, 10);
  const heightValue = `${props.height || option.height}`;
  const height = parseInt(heightValue, 10);
  const widthValue = `${props.width || option.width}`;
  const width = parseInt(widthValue, 10);
  return {
    ...props,
    ...option,
    ...(x ? { x } : {}),
    ...(y ? { y } : {}),
    height,
    width,
    name: props.name as string,
    radius: props.radius,
  };
}

export function BarRectangle({
  option,
  ...props
}: {
  option: ActiveShape<BarProps, SVGPathElement>;
  isActive: boolean;
} & BarProps) {
  let rectangle;

  if (isValidElement(option)) {
    const { props: optionProps } = option as ReactElement;
    const elementProps = {
      ...props,
      ...(optionProps ?? {}),
    };
    rectangle = cloneElement(option, elementProps);
  } else if (_.isFunction(option)) {
    rectangle = option(props);
  } else if (_.isPlainObject(option) && !_.isBoolean(option)) {
    const rectangleProps = typeguardBarRectangleProps(option, props);
    rectangle = <Rectangle {...rectangleProps} />;
  } else {
    rectangle = <Rectangle {...props} name={props.name as string} />;
  }

  if (props.isActive) {
    return <Layer className="recharts-active-bar">{rectangle}</Layer>;
  }

  return rectangle;
}
