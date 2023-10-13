import React, { ReactNode, cloneElement, createElement, isValidElement, useContext } from 'react';
import isNil from 'lodash/isNil';
import isFunction from 'lodash/isFunction';
import { ChartContext } from '../context/chartContext';
import { CartesianViewBox, ChartCoordinate, ChartOffset, LayoutType, TooltipEventType } from '../util/types';
import { Curve } from '../shape/Curve';
import { Cross } from '../shape/Cross';
import { Rectangle } from '../shape/Rectangle';
import { getRadialCursorPoints } from '../util/cursor/getRadialCursorPoints';
import { Sector } from '../shape/Sector';
import { filterProps } from '../util/ReactUtils';
import { getCursorRectangle } from '../util/cursor/getCursorRectangle';
import { getCursorPoints } from '../util/cursor/getCursorPoints';
import {
  DefaultTooltipContent,
  NameType,
  Payload,
  ValueType,
  Props as TooltipContentProps,
} from '../component/DefaultTooltipContent';
import { ContentType } from '../component/Tooltip';
import { getUniqPayload } from '../util/payload/getUniqPayload';
import { TooltipBoundingBox } from '../component/TooltipBoundingBox';

type Props = {
  activeCoordinate: ChartCoordinate;
  activeLabel: string;
  activePayload: Array<Payload<any, any>>;
  activeTooltipIndex: number;
  chartName: string;
  isTooltipActive: boolean;
  layout: LayoutType;
  offset: ChartOffset;
  tooltipAxisBandSize: number;
  tooltipEventType: TooltipEventType;
  viewBox: CartesianViewBox;
};

function CursorRenderer({
  activeCoordinate,
  chartName,
  layout,
  offset,
  tooltipAxisBandSize,
  activeTooltipIndex,
  activeLabel,
  activePayload,
  isTooltipActive,
  tooltipEventType,
}: Props) {
  const [context] = useContext(ChartContext);
  const { cursor } = context;
  if (!isTooltipActive || !activeCoordinate || (chartName !== 'ScatterChart' && tooltipEventType !== 'axis')) {
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
    viewBox: { ...offset, x: offset.left, y: offset.top },
    stroke: '#ccc',
    pointerEvents: 'none',
    ...offset,
    ...restProps,
    ...filterProps(cursor),
    payloadIndex: activeTooltipIndex,
    className: 'recharts-tooltip-cursor',
    active: isTooltipActive,
    label: activeLabel,
    payload: isTooltipActive ? activePayload : [],
    coordinate: activeCoordinate,
  };

  return isValidElement(cursor) ? cloneElement(cursor, cursorProps) : createElement(cursorComp, cursorProps);
}

function defaultUniqBy<TValue extends ValueType, TName extends NameType>(entry: Payload<TValue, TName>) {
  return entry.dataKey;
}

function useUniqPayload(payload: Array<Payload<any, any>>) {
  const [context] = useContext(ChartContext);
  const { payloadUniqBy, filterNull } = context;
  const finalPayload = getUniqPayload(
    filterNull && payload && payload.length ? payload.filter(entry => !isNil(entry.value)) : payload,
    payloadUniqBy,
    defaultUniqBy,
  );
  const hasPayload = finalPayload && finalPayload.length > 0;

  return { hasPayload, finalPayload };
}

function renderContent<TValue extends ValueType, TName extends NameType>(
  content: ContentType<TValue, TName>,
  props: TooltipContentProps<TValue, TName>,
) {
  if (React.isValidElement(content)) {
    return React.cloneElement(content, props);
  }
  if (isFunction(content)) {
    return React.createElement(content as any, props);
  }

  return <DefaultTooltipContent {...props} />;
}

function PopupRenderer(props: { finalPayload: Array<Payload<any, any>> } & Props) {
  const [context] = useContext(ChartContext);
  const { content } = context;
  const { finalPayload } = props;
  const tooltipContentProps: TooltipContentProps<any, any> = {
    payload: finalPayload,
    active: props.isTooltipActive,
    label: props.activeLabel,
  };
  return renderContent(content, tooltipContentProps);
}

type BoundingBoxWrapperProps = {
  children: ReactNode;
  coordinate: ChartCoordinate;
  viewBox: CartesianViewBox;
  hasPayload: boolean;
  isTooltipActive: boolean;
};

function BoundingBoxSizeWrapper({
  children,
  coordinate,
  viewBox,
  isTooltipActive,
  hasPayload,
}: BoundingBoxWrapperProps) {
  const [context] = useContext(ChartContext);
  const {
    allowEscapeViewBox,
    animationDuration,
    animationEasing,
    isAnimationActive,
    offsetTopLeft,
    position,
    reverseDirection,
    useTranslate3d,
    wrapperStyle,
  } = context;

  const active = isTooltipActive;

  return (
    <TooltipBoundingBox
      active={active}
      allowEscapeViewBox={allowEscapeViewBox}
      animationDuration={animationDuration}
      animationEasing={animationEasing}
      coordinate={coordinate}
      hasPayload={hasPayload}
      isAnimationActive={isAnimationActive}
      offset={offsetTopLeft}
      position={position}
      reverseDirection={reverseDirection}
      useTranslate3d={useTranslate3d}
      viewBox={viewBox}
      wrapperStyle={wrapperStyle}
    >
      {children}
    </TooltipBoundingBox>
  );
}

export function TooltipRenderer(props: Props) {
  const [context] = useContext(ChartContext);
  const { finalPayload, hasPayload } = useUniqPayload(props.activePayload);
  const { isTooltipPresent } = context;
  if (!isTooltipPresent) {
    return null;
  }
  return (
    <>
      <CursorRenderer {...props} />
      <BoundingBoxSizeWrapper
        coordinate={props.activeCoordinate}
        viewBox={props.viewBox}
        hasPayload={hasPayload}
        isTooltipActive={props.isTooltipActive}
      >
        <PopupRenderer finalPayload={finalPayload} {...props} />
      </BoundingBoxSizeWrapper>
    </>
  );
}
