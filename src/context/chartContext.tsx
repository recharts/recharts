import React, { CSSProperties, ReactElement, ReactNode, SVGProps, createContext, useState } from 'react';
import { AnimationDuration, AnimationTiming, Coordinate } from '../util/types';
import { Global } from '../util/Global';
import { DefaultTooltipContent, NameType, Payload, ValueType } from '../component/DefaultTooltipContent';
import { ContentType } from '../component/Tooltip';

export type TooltipContentType = ReactElement | ((props: any) => ReactNode);

export type AllowInDimension = {
  x: boolean;
  y: boolean;
};

export type ChartContextType = {
  isTooltipPresent: boolean;
  allowEscapeViewBox: AllowInDimension;
  animationDuration: AnimationDuration;
  animationEasing: AnimationTiming;
  content: ContentType<ValueType, NameType>;
  cursor: boolean | ReactElement | SVGProps<SVGElement>;
  filterNull: boolean;
  isAnimationActive: boolean;
  offsetTopLeft: number;
  payloadUniqBy: (entry: Payload<any, any>) => NonNullable<unknown>;
  position: Coordinate;
  reverseDirection: AllowInDimension;
  useTranslate3d: boolean;
  wrapperStyle: CSSProperties;
};

function defaultUniqBy(entry: Payload<any, any>) {
  return entry.dataKey;
}

const defaultValue: ChartContextType = {
  isTooltipPresent: false,
  content: DefaultTooltipContent,
  cursor: true,
  isAnimationActive: !Global.isSsr,
  animationDuration: 400,
  animationEasing: 'ease',
  filterNull: true,
  payloadUniqBy: defaultUniqBy,
  wrapperStyle: {},
  useTranslate3d: false,
  allowEscapeViewBox: {
    x: false,
    y: false,
  },
  reverseDirection: {
    x: false,
    y: false,
  },
  offsetTopLeft: 10,
  position: undefined,
};

export const ChartContext = createContext<
  [context: ChartContextType, setContext: (newContext: Partial<ChartContextType>) => void]
>([defaultValue, () => undefined]);

export function ChartContextContainer(props: { children: ReactNode }) {
  const context = useState(defaultValue);
  return <ChartContext.Provider value={context}>{props.children}</ChartContext.Provider>;
}
