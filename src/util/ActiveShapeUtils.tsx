import * as React from 'react';
import { cloneElement, isValidElement, ReactElement } from 'react';

import { Layer } from '../container/Layer';
import { ActiveShape } from './types';

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
type ShapeRenderer<PropsType> = (props: PropsType) => React.ReactNode;

type ShapeOptionProps<PropsType extends object> = Partial<PropsType>;

type ShapeOptionElement<PropsType extends object> = ReactElement<ShapeOptionProps<PropsType>>;

export type ShapeProps<PropsType extends object, ElementType extends SVGElement = SVGElement> = {
  /**
   * Multi-value prop, decides either which component renders, or which props it receives, based on the value type:
   *
   * - If a React element, then it gets cloned with new props injected (this works but is counter-intuitive and impossible to type properly, please don't prefer this path)
   * - If a function, it gets called with props plus index (keep in mind: this will change in 4.0 where we will render it as JSX component instead)
   * - If an object, then it gets passed to the default shape as props
   * - Else it's ignored and the default shape is rendered with the props from this component
   */
  option: ActiveShape<PropsType, ElementType> | undefined;
  /**
   * This prop controls the default shape. If `option` is either a React element, or a function, then it's ignored.
   * If `option` is an object, then this shape is rendered with the props from `option`.
   * If `option` is anything else (e.g. boolean), then this shape is rendered with the props from this component.
   */
  DefaultShape: ShapeRenderer<PropsType>;
  /**
   * The props forwarded to the selected shape branch.
   *
   * Keeping these props grouped avoids generic object-rest widening. That lets this helper keep strong types
   * without relying on casts or `@ts-expect-error`.
   */
  shapeProps: PropsType;
  activeClassName?: string;
  inActiveClassName?: string;
};

function mergeShapeProps<PropsType extends object>(option: ShapeOptionProps<PropsType>, props: PropsType): PropsType {
  return {
    ...props,
    ...option,
  };
}

export function getPropsFromShapeOption<PropsType extends object>(
  option: ShapeOptionElement<PropsType> | ShapeOptionProps<PropsType>,
): ShapeOptionProps<PropsType> {
  if (isValidElement(option)) {
    return option.props;
  }

  return option;
}

function renderWithShapeElement<PropsType extends object>(option: ShapeOptionElement<PropsType>, props: PropsType) {
  return cloneElement(option, mergeShapeProps(getPropsFromShapeOption(option), props));
}

function getShapeIndex(shapeProps: object): string | number | undefined {
  if (!('index' in shapeProps)) {
    return undefined;
  }

  const { index } = shapeProps;
  return typeof index === 'number' || typeof index === 'string' ? index : undefined;
}

function isActiveShape(shapeProps: object): boolean {
  return 'isActive' in shapeProps && shapeProps.isActive === true;
}

/**
 * Renders the user-provided active shape option while keeping each runtime branch aligned with its TypeScript type.
 *
 * The `option` prop supports four shapes:
 * - React element: clone it and let its own props override the injected ones
 * - function: call it with the forwarded props and optional index
 * - plain object: merge it into the default shape props
 * - boolean / undefined: ignore it and render the default shape with the forwarded props
 */
export function Shape<PropsType extends object, ElementType extends SVGElement = SVGElement>({
  option,
  DefaultShape,
  shapeProps,
  activeClassName = 'recharts-active-shape',
  inActiveClassName = 'recharts-shape',
}: ShapeProps<PropsType, ElementType>) {
  const index = getShapeIndex(shapeProps);
  let shape: React.ReactNode;

  if (isValidElement(option)) {
    shape = renderWithShapeElement(option, shapeProps);
  } else if (option === DefaultShape) {
    shape = <DefaultShape {...shapeProps} />;
  } else if (typeof option === 'function') {
    shape = option(shapeProps, index);
  } else if (typeof option === 'object') {
    shape = <DefaultShape {...mergeShapeProps(option, shapeProps)} />;
  } else {
    shape = <DefaultShape {...shapeProps} />;
  }

  if (isActiveShape(shapeProps)) {
    return <Layer className={activeClassName}>{shape}</Layer>;
  }

  return <Layer className={inActiveClassName}>{shape}</Layer>;
}
