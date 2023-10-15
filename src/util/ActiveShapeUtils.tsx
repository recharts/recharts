import React, { isValidElement, cloneElement } from 'react';
import _ from 'lodash';
import { Rectangle } from '../shape/Rectangle';
import { Trapezoid } from '../shape/Trapezoid';
import { Sector } from '../shape/Sector';
import { Layer } from '../container/Layer';
import { GraphicalItem } from '../chart/generateCategoricalChart';
import { Symbols, SymbolsProps } from '../shape/Symbols';

/**
 * This is an abstraction for rendering a user defined prop for a customized shape in several forms.
 *
 * <Shape /> is the root and will handle taking in:
 *  - an object of svg properties
 *  - a boolean
 *  - a render prop(inline function that returns jsx)
 *  - a react element
 *
 * <ShapeSelector /> is a subcomponent of <Shape /> and used to match a component
 * to the value of props.shapeType that is passed to the root.
 *
 */
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

function isSymbolsProps(shapeType: ShapeType, _elementProps: unknown): _elementProps is SymbolsProps {
  return shapeType === 'symbols';
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
      if (isSymbolsProps(shapeType, elementProps)) {
        return <Symbols {...elementProps} />;
      }
      break;
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

type FunnelItem = {
  x: number;
  y: number;
  labelViewBox: { x: number; y: number };
  tooltipPayload: Array<{ payload: { payload: ShapeData } }>;
};

type PieItem = {
  startAngle: number;
  endAngle: number;
  tooltipPayload: Array<{ payload: { payload: ShapeData } }>;
};

type ScatterItem = {
  x: number;
  y: number;
  z: number;
  payload?: ShapeData;
};

type ShapeData = FunnelItem | PieItem | ScatterItem;

type GetActiveShapeIndexForTooltip = {
  activeTooltipItem: ShapeData;
  graphicalItem: GraphicalItem;
  itemData: unknown[];
};

export function isFunnel(graphicalItem: GraphicalItem, _item: unknown): _item is FunnelItem {
  return 'trapezoids' in graphicalItem.props;
}

export function isPie(graphicalItem: GraphicalItem, _item: unknown): _item is PieItem {
  return 'sectors' in graphicalItem.props;
}

export function isScatter(graphicalItem: GraphicalItem, _item: unknown): _item is ScatterItem {
  return 'points' in graphicalItem.props;
}

export function compareFunnel(shapeData: FunnelItem, activeTooltipItem: FunnelItem) {
  const xMatches = shapeData.x === activeTooltipItem?.labelViewBox?.x || shapeData.x === activeTooltipItem.x;
  const yMatches = shapeData.y === activeTooltipItem?.labelViewBox?.y || shapeData.y === activeTooltipItem.y;
  return xMatches && yMatches;
}

export function comparePie(shapeData: PieItem, activeTooltipItem: PieItem) {
  const startAngleMatches = shapeData.endAngle === activeTooltipItem.endAngle;
  const endAngleMatches = shapeData.startAngle === activeTooltipItem.startAngle;
  return startAngleMatches && endAngleMatches;
}

export function compareScatter(shapeData: ScatterItem, activeTooltipItem: ScatterItem) {
  const xMatches = shapeData.x === activeTooltipItem.x;
  const yMatches = shapeData.y === activeTooltipItem.y;
  const zMatches = shapeData.z === activeTooltipItem.z;
  return xMatches && yMatches && zMatches;
}

function getComparisonFn(graphicalItem: GraphicalItem, activeItem: unknown) {
  let comparison: (shapeData: unknown, activeTooltipData: unknown) => boolean;

  if (isFunnel(graphicalItem, activeItem)) {
    comparison = compareFunnel;
  } else if (isPie(graphicalItem, activeItem)) {
    comparison = comparePie;
  } else if (isScatter(graphicalItem, activeItem)) {
    comparison = compareScatter;
  }

  return comparison;
}

function getShapeDataKey(graphicalItem: GraphicalItem, activeItem: unknown): GraphicalItemShapeKey {
  let shapeKey: GraphicalItemShapeKey;

  if (isFunnel(graphicalItem, activeItem)) {
    shapeKey = 'trapezoids';
  } else if (isPie(graphicalItem, activeItem)) {
    shapeKey = 'sectors';
  } else if (isScatter(graphicalItem, activeItem)) {
    shapeKey = 'points';
  }

  return shapeKey;
}

function getActiveShapeTooltipPayload(graphicalItem: GraphicalItem, activeItem: unknown): ShapeData {
  if (isFunnel(graphicalItem, activeItem)) {
    return activeItem.tooltipPayload?.[0]?.payload?.payload;
  }
  if (isPie(graphicalItem, activeItem)) {
    return activeItem.tooltipPayload?.[0]?.payload?.payload;
  }

  if (isScatter(graphicalItem, activeItem)) {
    return activeItem.payload;
  }

  return {} as ShapeData;
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
  activeTooltipItem,
  graphicalItem,
  itemData,
}: GetActiveShapeIndexForTooltip): number {
  const shapeKey = getShapeDataKey(graphicalItem, activeTooltipItem);
  const tooltipPayload = getActiveShapeTooltipPayload(graphicalItem, activeTooltipItem);

  const activeItemMatches = itemData.filter((datum: unknown, dataIndex: number) => {
    const valuesMatch = _.isEqual(tooltipPayload, datum);

    const mouseCoordinateMatches = graphicalItem.props[shapeKey].filter((shapeData: unknown) => {
      const comparison = getComparisonFn(graphicalItem, activeTooltipItem);
      return comparison(shapeData, activeTooltipItem);
    });

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
