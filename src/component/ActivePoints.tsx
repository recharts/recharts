import React, { cloneElement, isValidElement } from 'react';
import isFunction from 'lodash/isFunction';
import { ActiveDotType, adaptEventHandlers, Coordinate, DataKey } from '../util/types';
import { filterProps } from '../util/ReactUtils';
import { Dot, Props as DotProps } from '../shape/Dot';
import { Layer } from '../container/Layer';
import { useTooltipAxis } from '../context/chartLayoutContext';
import { useTooltipContext } from '../context/tooltipContext';
import { findEntryInArray } from '../util/DataUtils';
import isNil from 'lodash/isNil';

const renderActiveDot = (option: ActiveDotType, props: DotProps): React.ReactElement => {
  let dot;

  if (isValidElement(option)) {
    // @ts-expect-error element cloning does not have types
    dot = cloneElement(option, props);
  } else if (isFunction(option)) {
    dot = option(props);
  } else {
    dot = <Dot {...props} />;
  }

  return (
    <Layer className="recharts-active-dot" key={props.key}>
      {dot}
    </Layer>
  );
};

export interface PointType {
  readonly x: number;
  readonly y: number;
  readonly value?: any;
  readonly payload?: any;
}

export const renderActivePoints = ({
  activePoint,
  basePoint,
  childIndex,
  mainColor,
  activeDot,
  dataKey,
  keyPrefix,
}: {
  // found in points array
  activePoint: PointType;
  activeDot: ActiveDotType;
  basePoint: PointType;
  childIndex: number;
  dataKey: DataKey<any>;
  /**
   * Different graphical elements have different opinion on what is their main color.
   * Sometimes stroke, sometimes fill, sometimes combination.
   */
  mainColor: string;
  keyPrefix: string;
}) => {
  const result = [];
  const dotProps: DotProps = {
    // @ts-expect-error Dot does not expect the 'index' prop
    index: childIndex,
    dataKey,
    cx: activePoint.x,
    cy: activePoint.y,
    r: 4,
    fill: mainColor,
    strokeWidth: 2,
    stroke: '#fff',
    payload: activePoint.payload,
    value: activePoint.value,
    key: `${keyPrefix}-activePoint-${childIndex}`,
    ...filterProps(activeDot, false),
    ...adaptEventHandlers(activeDot),
  };

  result.push(renderActiveDot(activeDot, dotProps));

  if (basePoint) {
    result.push(
      renderActiveDot(activeDot, {
        ...dotProps,
        cx: basePoint.x,
        cy: basePoint.y,
        key: `${keyPrefix}-basePoint-${childIndex}`,
      }),
    );
  }

  return result;
};

type ActivePointsProps = {
  hide: boolean;
  points: ReadonlyArray<PointType>;
  isRange: boolean;
  baseLine: number | Coordinate[];
  /**
   * Different graphical elements have different opinion on what is their main color.
   * Sometimes stroke, sometimes fill, sometimes combination.
   */
  mainColor: string;
  itemDataKey: DataKey<any>;
  activeDot: ActiveDotType;
};

export function ActivePoints({
  hide,
  points,
  isRange,
  baseLine,
  mainColor,
  activeDot,
  itemDataKey,
}: ActivePointsProps) {
  const tooltipAxis = useTooltipAxis();
  const { active: isTooltipActive, index: activeTooltipIndex, label: activeLabel } = useTooltipContext();
  const hasActive = Boolean(!hide && isTooltipActive);

  if (!hasActive) {
    return null;
  }

  let activePoint: PointType, basePoint: PointType;

  const tooltipAxisDataKey = tooltipAxis.dataKey;
  if (tooltipAxisDataKey && !tooltipAxis.allowDuplicatedCategory) {
    const specifiedKey =
      typeof tooltipAxisDataKey === 'function'
        ? (point: PointType) => tooltipAxisDataKey(point.payload)
        : `payload.${tooltipAxisDataKey}`;
    activePoint = findEntryInArray(points, specifiedKey, activeLabel);
    // @ts-expect-error doesn't handle the case where baseLine is number
    basePoint = isRange && baseLine && findEntryInArray(baseLine, specifiedKey, activeLabel);
  } else {
    activePoint = points?.[activeTooltipIndex];
    // @ts-expect-error doesn't handle the case where baseLine is number
    basePoint = isRange && baseLine && baseLine[activeTooltipIndex];
  }

  if (!isNil(activePoint)) {
    return renderActivePoints({
      activePoint,
      basePoint,
      childIndex: activeTooltipIndex,
      mainColor,
      dataKey: itemDataKey,
      activeDot,
      keyPrefix: '',
    });
  }

  return null;
}
