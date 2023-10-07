import React, { isValidElement, cloneElement } from 'react';
import _ from 'lodash';
import { Rectangle } from '../shape/Rectangle';
import { Trapezoid } from '../shape/Trapezoid';
import { Sector } from '../shape/Sector';
import { Layer } from '../container/Layer';
import { Symbols, SymbolsProps } from '../shape/Symbols';

type ShapeType = 'trapezoid' | 'rectangle' | 'sector' | 'symbols';

export type ShapeProps<OptionType, ExtraProps, ShapePropsType> = {
  shapeType: ShapeType;
  option: OptionType;
  isActive: boolean;
  activeClassName?: string;
  propTransformer?: (option: OptionType, props: ExtraProps) => ShapePropsType;
} & ExtraProps;

function defaultPropTransformer<OptionType, ExtraProps, ShapePropsType>(option: OptionType, props: ExtraProps) {
  return {
    ...props,
    ...option,
  } as unknown as ShapePropsType;
}

function ShapeSelector<ShapePropsType>({
  shapeType,
  elementProps,
}: {
  shapeType: ShapeType;
  elementProps: ShapePropsType;
}) {
  switch (shapeType) {
    case 'rectangle':
      return <Rectangle {...elementProps} />;
    case 'trapezoid':
      return <Trapezoid {...elementProps} />;
    case 'sector':
      return <Sector {...elementProps} />;
    case 'symbols':
      return <Symbols {...(elementProps as unknown as SymbolsProps)} />;
    default:
      return null;
  }
}

export function Shape<OptionType, ExtraProps, ShapePropsType>({
  option,
  shapeType,
  propTransformer = defaultPropTransformer,
  activeClassName = 'recharts-active-shape',
  isActive,
  ...props
}: ShapeProps<OptionType, ExtraProps, ShapePropsType>) {
  let shape: React.JSX.Element;

  if (isValidElement(option)) {
    shape = cloneElement(option, props);
  } else if (_.isFunction(option)) {
    shape = option(props);
  } else if (_.isPlainObject(option) && !_.isBoolean(option)) {
    const shapeProps = props as unknown as ExtraProps;
    const elementProps = propTransformer(option, shapeProps);
    shape = <ShapeSelector<ShapePropsType> shapeType={shapeType} elementProps={elementProps} />;
  } else {
    const elementProps = props as unknown as ShapePropsType;
    shape = <ShapeSelector<ShapePropsType> shapeType={shapeType} elementProps={elementProps} />;
  }

  if (isActive) {
    return <Layer className={activeClassName}>{shape}</Layer>;
  }

  return shape;
}
