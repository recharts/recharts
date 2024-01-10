import { createContext, useContext } from 'react';
import { CartesianViewBox, XAxisMap, YAxisMap } from '../util/types';

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

export const ChartLayoutContext = createContext<ChartLayoutContextType>(defaultValue);

export const useChartLayoutContext = () => useContext(ChartLayoutContext);
