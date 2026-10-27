import * as React from 'react';
import { cloneElement, isValidElement } from 'react';
import { ActiveDotProps, ActiveDotType, adaptEventHandlers, DataKey } from '../util/types';
import { Dot } from '../shape/Dot';
import { DotSymbol, getDotSymbol } from '../shape/DotSymbol';
import { Layer } from '../container/Layer';
import { useAppSelector } from '../state/hooks';
import { selectActiveTooltipIndex } from '../state/selectors/tooltipSelectors';
import { useActiveTooltipDataPoints } from '../hooks';
import { isNullish } from '../util/DataUtils';
import { svgPropertiesNoEventsFromUnknown } from '../util/svgPropertiesNoEvents';
import { ZIndexable, ZIndexLayer } from '../zIndex/ZIndexLayer';
import { DefaultZIndexes } from '../zIndex/DefaultZIndexes';
import { getOwnStyles } from '../theme/dataEntryStyles';
import { getActiveStyleOverrides } from '../theme/activeStyles';
import { Styles2D } from '../theme/RechartsTheme';

export interface PointType {
  readonly x: number | null;
  readonly y: number | null;
  readonly value?: any;
  readonly payload?: any;
}

const ActivePoint = ({
  point,
  childIndex,
  mainColor,
  activeDot,
  themedActiveStyles,
  dataKey,
  clipPath,
}: {
  point: PointType;
  activeDot: ActiveDotType;
  themedActiveStyles: Styles2D | undefined;
  childIndex: number;
  dataKey: DataKey<any> | undefined;
  /**
   * Different graphical elements have different opinion on what is their main color.
   * Sometimes stroke, sometimes fill, sometimes combination.
   */
  mainColor: string | undefined;
  clipPath?: string;
}) => {
  if (activeDot === false || point.x == null || point.y == null) {
    return null;
  }
  const dataPointStyles = getOwnStyles(point.payload);
  const dotPropsTyped: ActiveDotProps = {
    index: childIndex,
    dataKey,
    cx: point.x,
    cy: point.y,
    r: 4,
    // the active dot takes the fill of its data entry instead of the series color
    fill: dataPointStyles.fill ?? mainColor ?? 'none',
    strokeWidth: 2,
    stroke: '#fff',
    ...getActiveStyleOverrides(activeDot, themedActiveStyles),
    payload: point.payload,
    value: point.value,
  };

  // @ts-expect-error svgPropertiesNoEventsFromUnknown(activeDot) is contributing unknown props
  const dotProps: ActiveDotProps = {
    ...dotPropsTyped,
    ...svgPropertiesNoEventsFromUnknown(activeDot),
    ...adaptEventHandlers(activeDot),
  };

  let dot;
  const symbol = getDotSymbol(activeDot);

  if (isValidElement(activeDot)) {
    // @ts-expect-error we're improperly typing events
    dot = cloneElement(activeDot, dotProps);
  } else if (typeof activeDot === 'function') {
    dot = activeDot(dotProps);
  } else if (symbol != null) {
    dot = <DotSymbol {...dotProps} type={symbol} />;
  } else {
    dot = <Dot {...dotProps} />;
  }

  return (
    <Layer className="recharts-active-dot" clipPath={clipPath}>
      {dot}
    </Layer>
  );
};

interface ActivePointsProps extends ZIndexable {
  points: ReadonlyArray<PointType>;
  /**
   * Different graphical elements have different opinion on what is their main color.
   * Sometimes stroke, sometimes fill, sometimes combination.
   * `undefined` means that the color is not set, and the point will be transparent.
   */
  mainColor: string | undefined;
  itemDataKey: DataKey<any> | undefined;
  activeDot: ActiveDotType;
  themedActiveStyles?: Styles2D;
  clipPath?: string;
}

export function ActivePoints({
  points,
  mainColor,
  activeDot,
  themedActiveStyles,
  itemDataKey,
  clipPath,
  zIndex = DefaultZIndexes.activeDot,
}: ActivePointsProps) {
  const activeTooltipIndex = useAppSelector(selectActiveTooltipIndex);
  const activeDataPoints = useActiveTooltipDataPoints();
  if (points == null || activeDataPoints == null) {
    return null;
  }

  const activePoint: PointType | undefined = points.find(p => activeDataPoints.includes(p.payload));

  if (isNullish(activePoint)) {
    return null;
  }

  return (
    <ZIndexLayer zIndex={zIndex}>
      <ActivePoint
        point={activePoint}
        childIndex={Number(activeTooltipIndex)}
        mainColor={mainColor}
        dataKey={itemDataKey}
        activeDot={activeDot}
        themedActiveStyles={themedActiveStyles}
        clipPath={clipPath}
      />
    </ZIndexLayer>
  );
}
