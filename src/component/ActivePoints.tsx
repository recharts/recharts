import React, { cloneElement, isValidElement } from 'react';
import isFunction from 'lodash/isFunction';
import isNil from 'lodash/isNil';
import { ActiveDotType, adaptEventHandlers, DataKey } from '../util/types';
import { filterProps } from '../util/ReactUtils';
import { Dot, Props as DotProps } from '../shape/Dot';
import { Layer } from '../container/Layer';
import { useTooltipAxis } from '../context/chartLayoutContext';
import { useTooltipContext } from '../context/tooltipContext';
import { findEntryInArray } from '../util/DataUtils';

export interface PointType {
  readonly x: number;
  readonly y: number;
  readonly value?: any;
  readonly payload?: any;
}

const renderActivePoint = ({
  point,
  childIndex,
  mainColor,
  activeDot,
  dataKey,
}: {
  point: PointType;
  activeDot: ActiveDotType;
  childIndex: number;
  dataKey: DataKey<any>;
  /**
   * Different graphical elements have different opinion on what is their main color.
   * Sometimes stroke, sometimes fill, sometimes combination.
   */
  mainColor: string;
}) => {
  const dotProps: DotProps = {
    // @ts-expect-error Dot does not expect the 'index' prop
    index: childIndex,
    dataKey,
    cx: point.x,
    cy: point.y,
    r: 4,
    fill: mainColor,
    strokeWidth: 2,
    stroke: '#fff',
    payload: point.payload,
    value: point.value,
    ...filterProps(activeDot, false),
    ...adaptEventHandlers(activeDot),
  };

  let dot;

  if (isValidElement(activeDot)) {
    // @ts-expect-error element cloning does not have types
    dot = cloneElement(activeDot, dotProps);
  } else if (isFunction(activeDot)) {
    dot = activeDot(dotProps);
  } else {
    dot = <Dot {...dotProps} />;
  }

  return <Layer className="recharts-active-dot">{dot}</Layer>;
};

type ActivePointsProps = {
  points: ReadonlyArray<PointType>;
  /**
   * Different graphical elements have different opinion on what is their main color.
   * Sometimes stroke, sometimes fill, sometimes combination.
   */
  mainColor: string;
  itemDataKey: DataKey<any>;
  activeDot: ActiveDotType;
};

export function ActivePoints({ points, mainColor, activeDot, itemDataKey }: ActivePointsProps) {
  const tooltipAxis = useTooltipAxis();
  const { active: isTooltipActive, index: activeTooltipIndex, label: activeLabel } = useTooltipContext();
  const hasActive = Boolean(isTooltipActive);

  if (!hasActive) {
    return null;
  }

  let activePoint: PointType;

  const tooltipAxisDataKey = tooltipAxis.dataKey;
  if (tooltipAxisDataKey && !tooltipAxis.allowDuplicatedCategory) {
    const specifiedKey =
      typeof tooltipAxisDataKey === 'function'
        ? (point: PointType) => tooltipAxisDataKey(point.payload)
        : `payload.${tooltipAxisDataKey}`;
    activePoint = findEntryInArray(points, specifiedKey, activeLabel);
  } else {
    activePoint = points?.[activeTooltipIndex];
  }

  if (isNil(activePoint)) {
    return null;
  }

  return renderActivePoint({
    point: activePoint,
    childIndex: activeTooltipIndex,
    mainColor,
    dataKey: itemDataKey,
    activeDot,
  });
}
