import * as React from 'react';
import { cloneElement, isValidElement } from 'react';
import { ActiveDotProps, ActiveDotType, adaptEventHandlers, DataKey } from '../util/types';
import { Dot } from '../shape/Dot';
import { Layer } from '../container/Layer';
import { useAppSelector } from '../state/hooks';
import { selectActiveTooltipIndex } from '../state/selectors/tooltipSelectors';
import { useActiveTooltipDataPoints } from '../hooks';
import { isNullish } from '../util/DataUtils';
import { svgPropertiesNoEventsFromUnknown } from '../util/svgPropertiesNoEvents';

export interface PointType {
  readonly x: number | null;
  readonly y: number | null;
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
  mainColor: string | undefined;
}) => {
  if (activeDot === false || point.x == null || point.y == null) {
    return null;
  }
  const dotProps: ActiveDotProps = {
    index: childIndex,
    dataKey,
    cx: point.x,
    cy: point.y,
    r: 4,
    fill: mainColor ?? 'none',
    strokeWidth: 2,
    stroke: '#fff',
    payload: point.payload,
    value: point.value,
    ...svgPropertiesNoEventsFromUnknown(activeDot),
    ...adaptEventHandlers(activeDot),
  };

  let dot;

  if (isValidElement(activeDot)) {
    // @ts-expect-error element cloning does not have types
    dot = cloneElement(activeDot, dotProps);
  } else if (typeof activeDot === 'function') {
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
   * `undefined` means that the color is not set, and the point will be transparent.
   */
  mainColor: string | undefined;
  itemDataKey: DataKey<any> | undefined;
  activeDot: ActiveDotType;
};

export function ActivePoints({ points, mainColor, activeDot, itemDataKey }: ActivePointsProps) {
  const activeTooltipIndex = useAppSelector(selectActiveTooltipIndex);
  const activeDataPoints = useActiveTooltipDataPoints();
  if (points == null || activeDataPoints == null) {
    return null;
  }

  const activePoint: PointType | undefined = points.find(p => activeDataPoints.includes(p.payload));

  if (isNullish(activePoint)) {
    return null;
  }

  return renderActivePoint({
    point: activePoint,
    childIndex: Number(activeTooltipIndex),
    mainColor,
    dataKey: itemDataKey,
    activeDot,
  });
}
