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
type GraphicalItemShapeKey = 'trapezoids' | 'sectors' | 'points';

type ItemDisplayName = 'Funnel' | 'Pie' | 'Scatter';

type FunnelItem = {
  x: number;
  y: number;
  labelViewBox: { x: number; y: number };
  tooltipPayload: Array<{ payload: { payload: unknown } }>;
};

type PieItem = {
  startAngle: number;
  endAngle: number;
  tooltipPayload: Array<{ payload: { payload: unknown } }>;
};

type ScatterItem = {
  x: number;
  y: number;
  z: number;
  payload?: unknown;
};

type ShapeData<DisplayName extends ItemDisplayName> = DisplayName extends 'Funnel'
  ? FunnelItem
  : DisplayName extends 'Pie'
  ? PieItem
  : DisplayName extends 'Scatter'
  ? ScatterItem
  : never;

type GetActiveShapeIndexForTooltip = {
  itemDisplayName: ItemDisplayName;
  activeTooltipItem: ShapeData<ItemDisplayName>;
  graphicalItem: {
    props: Record<GraphicalItemShapeKey, unknown[]>;
  };
  itemData: unknown[];
};

function isFunnel(itemDisplayName: ItemDisplayName, _item: unknown): _item is FunnelItem {
  return itemDisplayName === 'Funnel';
}

function isPie(itemDisplayName: ItemDisplayName, _item: unknown): _item is PieItem {
  return itemDisplayName === 'Pie';
}

function isScatter(itemDisplayName: ItemDisplayName, _item: unknown): _item is ScatterItem {
  return itemDisplayName === 'Scatter';
}

function getShapeDataKey(itemDisplayName: ItemDisplayName): GraphicalItemShapeKey {
  let shapeKey: GraphicalItemShapeKey;

  if (itemDisplayName === 'Funnel') {
    shapeKey = 'trapezoids';
  } else if (itemDisplayName === 'Pie') {
    shapeKey = 'sectors';
  } else if (itemDisplayName === 'Scatter') {
    shapeKey = 'points';
  }

  return shapeKey;
}

/**
 *
 * @param {GetActiveShapeIndexForTooltip} arg an object of incoming attributes from Tooltip
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

  const tooltipPayload: Partial<ShapeData<typeof itemDisplayName>> = isScatter(itemDisplayName, activeTooltipItem)
    ? activeTooltipItem.payload
    : activeTooltipItem.tooltipPayload?.[0].payload.payload;

  const activeItemMatches = itemData.filter((datum: any, dataIndex: number) => {
    const valuesMatch = _.isEqual(tooltipPayload, datum);

    const mouseCoordinateMatches = graphicalItem.props[shapeKey].filter(
      (shapeData: ShapeData<typeof itemDisplayName>) => {
        if (isFunnel(itemDisplayName, shapeData) && isFunnel(itemDisplayName, activeTooltipItem)) {
          const xMatches = shapeData.x === activeTooltipItem?.labelViewBox?.x || shapeData.x === activeTooltipItem.x;
          const yMatches = shapeData.y === activeTooltipItem?.labelViewBox?.y || shapeData.y === activeTooltipItem.y;
          return xMatches && yMatches;
        }

        if (isPie(itemDisplayName, shapeData) && isPie(itemDisplayName, activeTooltipItem)) {
          const startAngleMatches = shapeData.endAngle === activeTooltipItem.endAngle;
          const endAngleMatches = shapeData.startAngle === activeTooltipItem.startAngle;
          return startAngleMatches && endAngleMatches;
        }

        if (isScatter(itemDisplayName, shapeData) && isScatter(itemDisplayName, activeTooltipItem)) {
          const xMatches = shapeData.x === activeTooltipItem.x;
          const yMatches = shapeData.y === activeTooltipItem.y;
          const zMatches = shapeData.z === activeTooltipItem.z;

          return xMatches && yMatches && zMatches;
        }

        return false;
      },
    );

    // get the last index in case of multiple matches
    const indexOfMouseCoordinates = graphicalItem.props[shapeKey].indexOf(
      mouseCoordinateMatches[mouseCoordinateMatches.length - 1],
    );

    const coordinatesMatch = dataIndex === indexOfMouseCoordinates;

    return valuesMatch && coordinatesMatch;
  });

  // get the last index in case of multiple matches
  const activeIndex = itemData.indexOf(activeItemMatches[activeItemMatches.length - 1]);

  return activeIndex;
}
