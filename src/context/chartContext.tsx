import React, { ReactElement, ReactNode, createContext, useContext, useState } from 'react';
import { ChartCoordinate, ChartOffsetWithXAndY } from '../util/types';

export type TooltipContentType = ReactElement | ((props: any) => ReactNode);

export type AllowInDimension = {
  x: boolean;
  y: boolean;
};

export type ChartContextType = {
  active: boolean;
  viewBox: ChartOffsetWithXAndY;
  label: string;
  payload: any[];
  coordinate: ChartCoordinate;
};

export const defaultValue: ChartContextType = {
  active: false,
  viewBox: undefined,
  label: '',
  payload: [],
  coordinate: undefined,
};

export const ChartContext = createContext<
  [context: ChartContextType, setContext: (newContext: ChartContextType) => void]
>([defaultValue, () => undefined]);

export function ChartContextContainer(props: { children: ReactNode }) {
  const context = useState<ChartContextType>(defaultValue);
  return <ChartContext.Provider value={context}>{props.children}</ChartContext.Provider>;
}

export function SetChartContext(props: ChartContextType): ReactElement {
  const [, setContext] = useContext(ChartContext);
  setContext(props);
  return null;
}
