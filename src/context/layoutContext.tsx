import React, { ReactElement, ReactNode, createContext, useContext, useState } from 'react';
import { CartesianViewBox } from '../util/types';
import { XAxisProps, YAxisProps } from '../index';

export type XAxisMap = {
  [axisId: string]: XAxisProps;
};

export type YAxisMap = {
  [axisId: string]: YAxisProps;
};

type ChartLayoutContextInitializing = {
  xAxisMap: null;
  yAxisMap: null;
  viewBox: null;
  clipPathId: null;
};

type ChartLayoutContextTypeLoaded = {
  xAxisMap: XAxisMap;
  yAxisMap: YAxisMap;
  viewBox: CartesianViewBox;
  clipPathId: string;
};

export type ChartLayoutContextType = ChartLayoutContextInitializing | ChartLayoutContextTypeLoaded;

const defaultValue: ChartLayoutContextType = {
  xAxisMap: null,
  yAxisMap: null,
  viewBox: null,
  clipPathId: null,
};

export const ChartLayoutContext = createContext<
  [context: ChartLayoutContextType, setContext: (newContext: ChartLayoutContextTypeLoaded) => void]
>([defaultValue, () => undefined]);

export function ChartLayoutContextContainer(props: { children: ReactNode }) {
  const context = useState<ChartLayoutContextType>(defaultValue);
  return <ChartLayoutContext.Provider value={context}>{props.children}</ChartLayoutContext.Provider>;
}

export function SetLayoutChartContext(props: ChartLayoutContextTypeLoaded): ReactElement {
  const [, setContext] = useContext(ChartLayoutContext);
  setContext(props);
  return null;
}
