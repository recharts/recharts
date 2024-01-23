/**
 * @fileOverview Tooltip
 */
import React, { PureComponent, CSSProperties, ReactNode, ReactElement, SVGProps } from 'react';
import {
  DefaultTooltipContent,
  ValueType,
  NameType,
  Payload,
  Props as ToltipContentProps,
} from './DefaultTooltipContent';
import { TooltipBoundingBox } from './TooltipBoundingBox';

import { Global } from '../util/Global';
import { UniqueOption, getUniqPayload } from '../util/payload/getUniqPayload';
import { AllowInDimension, AnimationDuration, AnimationTiming, CartesianViewBox, Coordinate } from '../util/types';

export type ContentType<TValue extends ValueType, TName extends NameType> =
  | ReactElement
  | ((props: TooltipProps<TValue, TName>) => ReactNode);

function defaultUniqBy<TValue extends ValueType, TName extends NameType>(entry: Payload<TValue, TName>) {
  return entry.dataKey;
}

function renderContent<TValue extends ValueType, TName extends NameType>(
  content: ContentType<TValue, TName>,
  props: TooltipProps<TValue, TName>,
): ReactNode {
  if (React.isValidElement(content)) {
    return React.cloneElement(content, props);
  }
  if (typeof content === 'function') {
    return React.createElement(content as any, props);
  }

  return <DefaultTooltipContent {...props} />;
}

export type TooltipProps<TValue extends ValueType, TName extends NameType> = ToltipContentProps<TValue, TName> & {
  /**
   * If true, then Tooltip is always displayed, once an activeIndex is set by mouse over, or programmatically.
   * If false, then Tooltip is never displayed.
   * If active is undefined, Recharts will control when the Tooltip displays. This includes mouse and keyboard controls.
   */
  active?: boolean | undefined;
  allowEscapeViewBox?: AllowInDimension;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;
  content?: ContentType<TValue, TName>;
  coordinate?: Partial<Coordinate>;
  cursor?: boolean | ReactElement | SVGProps<SVGElement>;
  filterNull?: boolean;
  defaultIndex?: number;
  isAnimationActive?: boolean;
  offset?: number;
  payloadUniqBy?: UniqueOption<Payload<TValue, TName>>;
  position?: Partial<Coordinate>;
  reverseDirection?: AllowInDimension;
  shared?: boolean;
  trigger?: 'hover' | 'click';
  useTranslate3d?: boolean;
  viewBox?: CartesianViewBox;
  wrapperStyle?: CSSProperties;
};

export class Tooltip<TValue extends ValueType, TName extends NameType> extends PureComponent<
  TooltipProps<TValue, TName>
> {
  static displayName = 'Tooltip';

  static defaultProps = {
    allowEscapeViewBox: { x: false, y: false },
    animationDuration: 400,
    animationEasing: 'ease',
    contentStyle: {},
    coordinate: { x: 0, y: 0 },
    cursor: true,
    cursorStyle: {},
    filterNull: true,
    isAnimationActive: !Global.isSsr,
    itemStyle: {},
    labelStyle: {},
    offset: 10,
    reverseDirection: { x: false, y: false },
    separator: ' : ',
    trigger: 'hover',
    useTranslate3d: false,
    viewBox: { x: 0, y: 0, height: 0, width: 0 },
    wrapperStyle: {},
  };

  render() {
    const {
      active,
      allowEscapeViewBox,
      animationDuration,
      animationEasing,
      content,
      coordinate,
      filterNull,
      isAnimationActive,
      offset,
      payload,
      payloadUniqBy,
      position,
      reverseDirection,
      useTranslate3d,
      viewBox,
      wrapperStyle,
    } = this.props;
    let finalPayload: Payload<TValue, TName>[] = payload ?? [];

    if (filterNull && finalPayload.length) {
      finalPayload = getUniqPayload(
        payload.filter(entry => entry.value != null),
        payloadUniqBy,
        defaultUniqBy,
      );
    }

    const hasPayload = finalPayload.length > 0;

    return (
      <TooltipBoundingBox
        allowEscapeViewBox={allowEscapeViewBox}
        animationDuration={animationDuration}
        animationEasing={animationEasing}
        isAnimationActive={isAnimationActive}
        active={active}
        coordinate={coordinate}
        hasPayload={hasPayload}
        offset={offset}
        position={position}
        reverseDirection={reverseDirection}
        useTranslate3d={useTranslate3d}
        viewBox={viewBox}
        wrapperStyle={wrapperStyle}
      >
        {renderContent(content, { ...this.props, payload: finalPayload })}
      </TooltipBoundingBox>
    );
  }
}
