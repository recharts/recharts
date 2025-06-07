import * as React from 'react';
import { cloneElement, isValidElement, SVGProps } from 'react';
import isPlainObject from 'es-toolkit/compat/isPlainObject';

import { Rectangle } from '../shape/Rectangle';
import { Trapezoid } from '../shape/Trapezoid';
import { Sector } from '../shape/Sector';
import { Layer } from '../container/Layer';
import { Symbols, SymbolsProps } from '../shape/Symbols';

/**
 * This is an abstraction for rendering a user defined prop for a customized shape in several forms.
 *
 * <Shape /> is the root and will handle taking in:
 *  - an object of svg properties
 *  - a boolean
 *  - a render prop(inline function that returns jsx)
 *  - a React element
 *
 * <ShapeSelector /> is a subcomponent of <Shape /> and used to match a component
 * to the value of props.shapeType that is passed to the root.
 *
 */
type ShapeType = 'trapezoid' | 'rectangle' | 'sector' | 'symbols';

export type ShapeProps<OptionType, ExtraProps, ShapePropsType> = {
  shapeType: ShapeType;
  option: OptionType;
  isActive?: boolean;
  activeClassName?: string;
  propTransformer?: (option: OptionType, props: unknown) => ShapePropsType;
} & ExtraProps;

function defaultPropTransformer<OptionType, ExtraProps, ShapePropsType>(option: OptionType, props: ExtraProps) {
  return {
    ...props,
    ...option,
  } as unknown as ShapePropsType;
}

function isSymbolsProps(shapeType: ShapeType, _elementProps: unknown): _elementProps is SymbolsProps {
  return shapeType === 'symbols';
}

function ShapeSelector<ShapePropsType>({
  shapeType,
  elementProps,
}: {
  shapeType: ShapeType;
  elementProps: ShapePropsType;
}): React.ReactNode {
  switch (shapeType) {
    case 'rectangle':
      return <Rectangle {...elementProps} />;
    case 'trapezoid':
      return <Trapezoid {...elementProps} />;
    case 'sector':
      return <Sector {...elementProps} />;
    case 'symbols':
      if (isSymbolsProps(shapeType, elementProps)) {
        return <Symbols {...elementProps} />;
      }
      break;
    default:
      return null;
  }
}

export function getPropsFromShapeOption(option: unknown): SVGProps<SVGPathElement> {
  if (isValidElement(option)) {
    return option.props;
  }

  return option;
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
    shape = cloneElement(option, { ...props, ...getPropsFromShapeOption(option) });
  } else if (typeof option === 'function') {
    shape = option(props);
  } else if (isPlainObject(option) && typeof option !== 'boolean') {
    const nextProps = propTransformer(option, props);
    shape = <ShapeSelector<ShapePropsType> shapeType={shapeType} elementProps={nextProps} />;
  } else {
    const elementProps = props as unknown as ShapePropsType;
    shape = <ShapeSelector<ShapePropsType> shapeType={shapeType} elementProps={elementProps} />;
  }

  if (isActive) {
    return <Layer className={activeClassName}>{shape}</Layer>;
  }

  return shape;
}
