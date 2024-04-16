import React, { ReactElement, cloneElement, createElement, isValidElement, SVGProps } from 'react';
import clsx from 'clsx';
import { ChartCoordinate, ChartOffset, LayoutType, TooltipEventType } from '../util/types';
import { Curve } from '../shape/Curve';
import { Cross } from '../shape/Cross';
import { getCursorRectangle } from '../util/cursor/getCursorRectangle';
import { Rectangle } from '../shape/Rectangle';
import { getRadialCursorPoints } from '../util/cursor/getRadialCursorPoints';
import { Sector } from '../shape/Sector';
import { getCursorPoints } from '../util/cursor/getCursorPoints';
import { filterProps } from '../util/ReactUtils';
import { useTooltipContext } from '../context/tooltipContext';
import { useChartLayout, useOffset } from '../context/chartLayoutContext';
import { useTooltipAxisBandSize } from '../context/useTooltipAxis';
import { useChartName } from '../state/selectors';

/**
 * If set false, no cursor will be drawn when tooltip is active.
 * If set an object, the option is the configuration of cursor.
 * If set a React element, the option is the custom react element of drawing cursor
 */
export type CursorDefinition = boolean | ReactElement | SVGProps<SVGElement>;

export type CursorProps = {
  cursor: CursorDefinition;
  tooltipEventType: TooltipEventType;
};

export type CursorConnectedProps = CursorProps & {
  tooltipAxisBandSize: number;
  layout: LayoutType;
  offset: ChartOffset;
  coordinate: ChartCoordinate;
  payload: any[];
  index: number;
  chartName: string;
};

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
  let restProps, cursorComp: React.ComponentType<any>;

  if (chartName === 'ScatterChart') {
    restProps = activeCoordinate;
    cursorComp = Cross;
  } else if (chartName === 'BarChart') {
    restProps = getCursorRectangle(layout, activeCoordinate, offset, tooltipAxisBandSize);
    cursorComp = Rectangle;
  } else if (layout === 'radial') {
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
  } else {
    restProps = { points: getCursorPoints(layout, activeCoordinate, offset) };
    cursorComp = Curve;
  }

  const extraClassName: string | undefined =
    typeof cursor === 'object' && 'className' in cursor ? cursor.className : undefined;

  const cursorProps = {
    stroke: '#ccc',
    pointerEvents: 'none',
    ...offset,
    ...restProps,
    ...filterProps(cursor, false),
    payload: activePayload,
    payloadIndex: activeTooltipIndex,
    className: clsx('recharts-tooltip-cursor', extraClassName),
  };

  return isValidElement(cursor) ? cloneElement(cursor, cursorProps) : createElement(cursorComp, cursorProps);
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
  const { coordinate, payload, index } = useTooltipContext();
  const offset = useOffset();
  const layout = useChartLayout();
  const chartName = useChartName();
  return (
    <CursorInternal
      {...props}
      coordinate={coordinate}
      index={index}
      payload={payload}
      offset={offset}
      layout={layout}
      tooltipAxisBandSize={tooltipAxisBandSize}
      chartName={chartName}
    />
  );
}
