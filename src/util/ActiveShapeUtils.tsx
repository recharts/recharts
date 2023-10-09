import React, { isValidElement, cloneElement } from 'react';
import _ from 'lodash';
import { Rectangle } from '../shape/Rectangle';
import { Trapezoid } from '../shape/Trapezoid';
import { Sector } from '../shape/Sector';
import { Layer } from '../container/Layer';

/**
 * This is an abstraction for rendering a user defined prop for a customized shape in several forms.
 * It will handle taking in:
 *  - an object of svg properties
 *  - a boolean
 *  - a render prop(inline function that returns jsx)
 *  - a react element
 */
type ShapeType = 'trapezoid' | 'rectangle' | 'sector';

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

/**
 * This is an abstraction to handle identifying the active index from a tooltip mouse interaction
 */
type GraphicalItemShapeKey = 'trapezoids' | 'sectors';

type ItemDisplayName = 'Funnel' | 'Pie' | 'Scatter';

type ActiveTooltipItem = {
  startAngle: number;
  endAngle: number;
  x: number;
  y: number;
  labelViewBox: { x: number; y: number };
  tooltipPayload: Array<{ payload: { payload: any } }>;
};

type GetActiveShapeIndexForTooltip = {
  itemDisplayName: ItemDisplayName;
  activeTooltipItem: ActiveTooltipItem;
  graphicalItem: {
    props: Record<GraphicalItemShapeKey, unknown[]>;
  };
  itemData: unknown[];
};

function getShapeDataKey(itemDisplayName: ItemDisplayName): GraphicalItemShapeKey {
  let shapeKey: GraphicalItemShapeKey;

  if (itemDisplayName === 'Funnel') {
    shapeKey = 'trapezoids';
  } else if (itemDisplayName === 'Pie') {
    shapeKey = 'sectors';
  }

  return shapeKey;
}

/**
 *
 * @param {GetActiveShapeIndexForTooltip} an object of incoming attributes from Tooltip
 * @returns {number}
 *
 * To handle possible duplicates in the data set,
 * match both the data value of the active item to a data value on a graph item,
 * and match the mouse coordinates of the active item to the coordinates of in a particular components shape data.
 * This assumes equal lengths of shape objects to data items.
 */
export function getActiveShapeIndexForTooltip({
  itemDisplayName,
  activeTooltipItem,
  graphicalItem,
  itemData,
}: GetActiveShapeIndexForTooltip): number {
  const shapeKey = getShapeDataKey(itemDisplayName);

  const tooltipPayload = activeTooltipItem.tooltipPayload?.[0].payload.payload;

  const activeIndex = itemData.findIndex((datum: any, dataIndex: number) => {
    const valuesMatch = _.isEqual(tooltipPayload, datum);

    const indexOfMouseCoordinates = graphicalItem.props[shapeKey].findIndex((shapeData: typeof tooltipPayload) => {
      if (itemDisplayName === 'Funnel') {
        const xMatches = shapeData.x === activeTooltipItem.labelViewBox.x || shapeData.x === activeTooltipItem.x;
        const yMatches = shapeData.y === activeTooltipItem.labelViewBox.y || shapeData.y === activeTooltipItem.y;
        return xMatches && yMatches;
      }

      if (itemDisplayName === 'Pie') {
        const startAngleMatches = shapeData.endAngle === activeTooltipItem.endAngle;
        const endAngleMatches = shapeData.startAngle === activeTooltipItem.startAngle;
        return startAngleMatches && endAngleMatches;
      }
      return false;
    });

    const coordinatesMatch = dataIndex === indexOfMouseCoordinates;

    return valuesMatch && coordinatesMatch;
  });

  return activeIndex;
}
