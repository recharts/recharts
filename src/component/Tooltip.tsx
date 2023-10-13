/**
 * @fileOverview Tooltip
 */
import React, { PureComponent, CSSProperties, ReactNode, ReactElement, SVGProps, useContext, useEffect } from 'react';
import { ValueType, NameType, Payload, Props as TooltipContentProps } from './DefaultTooltipContent';

import { Global } from '../util/Global';
import { UniqueOption } from '../util/payload/getUniqPayload';
import { AllowInDimension, AnimationDuration, AnimationTiming, CartesianViewBox, Coordinate } from '../util/types';
import { ChartContext, ChartContextType } from '../context/chartContext';

export type ContentType<TValue extends ValueType, TName extends NameType> =
  | ReactElement
  | ((props: TooltipProps<TValue, TName>) => ReactNode);

export type TooltipProps<TValue extends ValueType, TName extends NameType> = TooltipContentProps<TValue, TName> & {
  active?: boolean;
  allowEscapeViewBox?: AllowInDimension;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;
  content?: ContentType<TValue, TName>;
  coordinate?: Partial<Coordinate>;
  cursor?: boolean | ReactElement | SVGProps<SVGElement>;
  filterNull?: boolean;
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

function ContextUpdater(props: TooltipProps<any, any>) {
  const [, setContext] = useContext(ChartContext);
  useEffect(() => {
    const newContext: ChartContextType = {
      isTooltipPresent: true,
      content: props.content,
      cursor: props.cursor,
      isAnimationActive: props.isAnimationActive,
      animationDuration: props.animationDuration,
      animationEasing: props.animationEasing,
      filterNull: props.filterNull,
      // @ts-expect-error TODO this function will refine from the "outside, flexible prop" to "inside, strict prop" type
      payloadUniqBy: props.payloadUniqBy,
      wrapperStyle: props.wrapperStyle,
      useTranslate3d: props.useTranslate3d,
      // @ts-expect-error TODO
      allowEscapeViewBox: props.allowEscapeViewBox,
      // @ts-expect-error TODO
      reverseDirection: props.reverseDirection,
      offsetTopLeft: props.offset,
      // @ts-expect-error TODO
      position: props.position,
    };
    setContext(newContext);
    return function cleanup() {
      setContext({ isTooltipPresent: false });
    };
  }, [props, setContext]);

  return <></>;
}

export class Tooltip<TValue extends ValueType, TName extends NameType> extends PureComponent<
  TooltipProps<TValue, TName>
> {
  static displayName = 'Tooltip';

  static defaultProps = {
    active: false,
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
    return <ContextUpdater {...this.props} />;
  }
}
