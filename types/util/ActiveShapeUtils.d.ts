import * as React from 'react';
import { SVGProps } from 'react';
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
export declare function getPropsFromShapeOption(option: unknown): SVGProps<SVGPathElement>;
export declare function Shape<OptionType, ExtraProps, ShapePropsType>({ option, shapeType, propTransformer, activeClassName, isActive, ...props }: ShapeProps<OptionType, ExtraProps, ShapePropsType>): React.JSX.Element;
export {};
