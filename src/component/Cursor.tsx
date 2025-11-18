import * as React from 'react';
import { cloneElement, createElement, isValidElement, ReactElement, SVGProps } from 'react';
import { clsx } from 'clsx';
import {
  ChartOffsetInternal,
  Coordinate,
  isPolarCoordinate,
  LayoutType,
  PolarCoordinate,
  TooltipEventType,
} from '../util/types';
import { Curve } from '../shape/Curve';
import { Cross } from '../shape/Cross';
import { getCursorRectangle } from '../util/cursor/getCursorRectangle';
import { Rectangle } from '../shape/Rectangle';
import { getRadialCursorPoints } from '../util/cursor/getRadialCursorPoints';
import { Sector } from '../shape/Sector';
import { getCursorPoints } from '../util/cursor/getCursorPoints';
import { useChartLayout, useOffsetInternal } from '../context/chartLayoutContext';
import { useTooltipAxisBandSize } from '../context/useTooltipAxis';
import { useChartName } from '../state/selectors/selectors';
import { TooltipIndex, TooltipPayload } from '../state/tooltipSlice';
import { svgPropertiesNoEventsFromUnknown } from '../util/svgPropertiesNoEvents';
import { ZIndexable, ZIndexLayer } from '../zIndex/ZIndexLayer';
import { DefaultZIndexes } from '../zIndex/DefaultZIndexes';

/**
 * If set false, no cursor will be drawn when tooltip is active.
 * If set an object, the option is the configuration of cursor.
 * If set a React element, the option is the custom react element of drawing cursor
 */
export type CursorDefinition = boolean | ReactElement | SVGProps<SVGElement>;

export interface CursorProps extends ZIndexable {
  cursor: CursorDefinition;
  tooltipEventType: TooltipEventType;
  coordinate: Coordinate | PolarCoordinate | undefined;
  payload: TooltipPayload;
  index: TooltipIndex | undefined;
}

export type CursorConnectedProps = CursorProps & {
  tooltipAxisBandSize: number;
  layout: LayoutType;
  offset: ChartOffsetInternal;
  chartName: string;
};

function RenderCursor({
  cursor,
  cursorComp,
  cursorProps,
}: {
  cursor: CursorDefinition;
  cursorComp: React.ComponentType<any>;
  cursorProps: any;
}) {
  if (isValidElement(cursor)) {
    return cloneElement(cursor, cursorProps);
  }
  return createElement(cursorComp, cursorProps);
}

export function CursorInternal(props: CursorConnectedProps) {
  const { coordinate, payload, index, offset, tooltipAxisBandSize, layout, cursor, tooltipEventType, chartName } =
    props;

  // The cursor is a part of the Tooltip, and it should be shown (by default) when the Tooltip is active.
  const activeCoordinate = coordinate;
  const activePayload = payload;
  const activeTooltipIndex = index;
  if (!cursor || !activeCoordinate || (chartName !== 'ScatterChart' && tooltipEventType !== 'axis')) {
    return null;
  }
  let restProps, cursorComp: React.ComponentType<any>, preferredZIndex: number;

  if (chartName === 'ScatterChart') {
    restProps = activeCoordinate;
    cursorComp = Cross;
    preferredZIndex = DefaultZIndexes.cursorLine;
  } else if (chartName === 'BarChart') {
    restProps = getCursorRectangle(layout, activeCoordinate, offset, tooltipAxisBandSize);
    cursorComp = Rectangle;
    preferredZIndex = DefaultZIndexes.cursorRectangle;
  } else if (layout === 'radial' && isPolarCoordinate(activeCoordinate)) {
    const { cx, cy, radius, startAngle, endAngle } = getRadialCursorPoints(activeCoordinate);
    restProps = {
      cx,
      cy,
      startAngle,
      endAngle,
      innerRadius: radius,
      outerRadius: radius,
    };
    cursorComp = Sector;
    preferredZIndex = DefaultZIndexes.cursorLine;
  } else {
    restProps = { points: getCursorPoints(layout, activeCoordinate, offset) };
    cursorComp = Curve;
    preferredZIndex = DefaultZIndexes.cursorLine;
  }

  const extraClassName: string | undefined =
    typeof cursor === 'object' && 'className' in cursor ? cursor.className : undefined;

  const cursorProps = {
    stroke: '#ccc',
    pointerEvents: 'none',
    ...offset,
    ...restProps,
    ...svgPropertiesNoEventsFromUnknown(cursor),
    payload: activePayload,
    payloadIndex: activeTooltipIndex,
    className: clsx('recharts-tooltip-cursor', extraClassName),
  };

  return (
    <ZIndexLayer zIndex={props.zIndex ?? preferredZIndex}>
      <RenderCursor cursor={cursor} cursorComp={cursorComp} cursorProps={cursorProps} />
    </ZIndexLayer>
  );
}

/*
 * Cursor is the background, or a highlight,
 * that shows when user mouses over or activates
 * an area.
 *
 * It usually shows together with a tooltip
 * to emphasise which part of the chart does the tooltip refer to.
 */
export function Cursor(props: CursorProps) {
  const tooltipAxisBandSize = useTooltipAxisBandSize();
  const offset = useOffsetInternal();
  const layout = useChartLayout();
  const chartName = useChartName();

  if (tooltipAxisBandSize == null || offset == null || layout == null || chartName == null) {
    return null;
  }

  return (
    <CursorInternal
      {...props}
      offset={offset}
      layout={layout}
      tooltipAxisBandSize={tooltipAxisBandSize}
      chartName={chartName}
    />
  );
}
