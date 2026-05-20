import * as React from 'react';
import { cloneElement, isValidElement, ReactElement } from 'react';
import isPlainObject from 'es-toolkit/compat/isPlainObject';

import { Layer } from '../container/Layer';

/**
 * This is an abstraction for rendering a user defined prop for a customized shape in several forms.
 *
 * <Shape /> is the root and will handle taking in:
 *  - an object of svg properties
 *  - a boolean
 *  - a render prop(inline function that returns jsx)
 *  - a React element
 *
 * The concrete default shape is supplied by the caller so this helper does not
 * import unrelated shapes and accidentally couple bundles together.
 */
type ShapeRenderer<PropsType> = (props: PropsType) => React.JSX.Element;

export type ShapeProps<OptionType, PropsType> = {
  option: OptionType;
  renderDefaultShape: ShapeRenderer<PropsType>;
  isActive?: boolean;
  index?: string | number;
  activeClassName?: string;
  inActiveClassName?: string;
} & PropsType;

function defaultPropTransformer<OptionType, PropsType>(option: OptionType, props: PropsType): PropsType & OptionType {
  return {
    ...props,
    ...option,
  };
}

function isShapeFunction<PropsType>(
  option: unknown,
): option is (props: PropsType, index?: string | number) => React.JSX.Element | null | undefined {
  return typeof option === 'function';
}

export function getPropsFromShapeOption<T extends object>(option: ReactElement<T> | T): T {
  if (isValidElement(option)) {
    return option.props;
  }

  return option;
}

export function Shape<OptionPropsType, PropsType extends OptionPropsType, OptionType>({
  option,
  renderDefaultShape,
  activeClassName = 'recharts-active-shape',
  inActiveClassName = 'recharts-shape',
  ...props
}: ShapeProps<OptionType, PropsType>) {
  const { index, isActive } = props;
  // TypeScript does not preserve the original generic object type through object rest destructuring.
  // @ts-expect-error object rest widens generic props beyond PropsType
  const shapeProps: PropsType = props;
  let shape: React.ReactNode;
  if (isValidElement(option)) {
    // @ts-expect-error cloned elements can accept a narrower prop type than our runtime shape props
    shape = cloneElement(option, { ...shapeProps, ...getPropsFromShapeOption(option) });
  } else if (isShapeFunction<OptionPropsType>(option)) {
    shape = option(shapeProps, index);
  } else if (isPlainObject(option) && typeof option !== 'boolean') {
    shape = renderDefaultShape(defaultPropTransformer(option, shapeProps));
  } else {
    shape = renderDefaultShape(shapeProps);
  }

  if (isActive) {
    return <Layer className={activeClassName}>{shape}</Layer>;
  }

  return <Layer className={inActiveClassName}>{shape}</Layer>;
}
