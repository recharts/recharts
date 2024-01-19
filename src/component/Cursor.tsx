import React, { ReactElement, cloneElement, createElement, isValidElement } from 'react';
import { ChartCoordinate, ChartOffset, LayoutType, TooltipEventType } from '../util/types';
import { Curve } from '../shape/Curve';
import { Cross } from '../shape/Cross';
import { getCursorRectangle } from '../util/cursor/getCursorRectangle';
import { Rectangle } from '../shape/Rectangle';
import { getRadialCursorPoints } from '../util/cursor/getRadialCursorPoints';
import { Sector } from '../shape/Sector';
import { getCursorPoints } from '../util/cursor/getCursorPoints';
import { filterProps } from '../util/ReactUtils';

export type CursorProps = {
  activeCoordinate: ChartCoordinate;
  activePayload: any[];
  activeTooltipIndex: number;
  chartName: string;
  element: ReactElement;
  isActive: boolean;
  layout: LayoutType;
  offset: ChartOffset;
  tooltipAxisBandSize: number;
  tooltipEventType: TooltipEventType;
};

/*
 * Cursor is the background, or a highlight,
 * that shows when user mouses over or activates
 * an area.
 *
 * It usually shows together with a tooltip
 * to emphasise which part of the chart does the tooltip refer to.
 */
export function Cursor(props: CursorProps) {
  const {
    element,
    tooltipEventType,
    isActive,
    activeCoordinate,
    activePayload,
    offset,
    activeTooltipIndex,
    tooltipAxisBandSize,
    layout,
    chartName,
  } = props;
  if (
    !element ||
    !element.props.cursor ||
    !isActive ||
    !activeCoordinate ||
    (chartName !== 'ScatterChart' && tooltipEventType !== 'axis')
  ) {
    return null;
  }
  let restProps;
  let cursorComp: React.ComponentType<any> = Curve;

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

  const cursorProps = {
    stroke: '#ccc',
    pointerEvents: 'none',
    ...offset,
    ...restProps,
    ...filterProps(element.props.cursor, false),
    payload: activePayload,
    payloadIndex: activeTooltipIndex,
    className: 'recharts-tooltip-cursor',
  };

  return isValidElement(element.props.cursor)
    ? cloneElement(element.props.cursor, cursorProps)
    : createElement(cursorComp, cursorProps);
}
