import React, { ReactNode, createContext, useContext } from 'react';
import invariant from 'tiny-invariant';
import { CartesianViewBox, XAxisMap, YAxisMap } from '../util/types';
import type { CategoricalChartState } from '../chart/types';
import type { Props as XAxisProps } from '../cartesian/XAxis';
import type { Props as YAxisProps } from '../cartesian/YAxis';
import { calculateViewBox } from '../util/calculateViewBox';

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

const ChartLayoutContext = createContext<ChartLayoutContextType>(defaultValue);

const XAxisContext = createContext<XAxisMap | undefined>(undefined);
const YAxisContext = createContext<YAxisMap | undefined>(undefined);
const ViewBoxContext = createContext<CartesianViewBox | undefined>(undefined);
const ClipPathIdContext = createContext<string | undefined>(undefined);

export const ChartLayoutContextProvider = (props: {
  state: CategoricalChartState;
  children: ReactNode;
  clipPathId: string;
}) => {
  const {
    state: { xAxisMap, yAxisMap, offset },
    clipPathId,
    children,
  } = props;

  const viewBox = calculateViewBox(offset);

  return (
    <XAxisContext.Provider value={xAxisMap}>
      <YAxisContext.Provider value={yAxisMap}>
        <ViewBoxContext.Provider value={viewBox}>
          <ClipPathIdContext.Provider value={clipPathId}>{children}</ClipPathIdContext.Provider>
        </ViewBoxContext.Provider>
      </YAxisContext.Provider>
    </XAxisContext.Provider>
  );
};

export const useChartLayoutContext = () => useContext(ChartLayoutContext);

export const useClipPathId = (): string | undefined => {
  return useContext(ClipPathIdContext);
};

function getKeysForDebug(object: Record<string, unknown>) {
  const keys = Object.keys(object);
  if (keys.length === 0) {
    return 'There are no available ids.';
  }
  return `Available ids are: ${keys}.`;
}

export const useXAxisOrThrow = (xAxisId: string): XAxisProps => {
  const xAxisMap = useContext(XAxisContext);

  invariant(xAxisMap != null, 'Could not find xAxisMap; are you sure this is rendered inside a Recharts context?');

  const xAxis: XAxisProps | undefined = xAxisMap[xAxisId];

  invariant(xAxis != null, `Could not find xAxis by id "${xAxisId}" [${typeof xAxisId}]. ${getKeysForDebug(xAxisMap)}`);

  return xAxis;
};

export const useYAxisOrThrow = (yAxisId: string): YAxisProps => {
  const yAxisMap = useContext(YAxisContext);

  invariant(yAxisMap != null, 'Could not find yAxisMap; are you sure this is rendered inside a Recharts context?');

  const yAxis: YAxisProps | undefined = yAxisMap[yAxisId];

  invariant(yAxis != null, `Could not find yAxis by id "${yAxisId}" [${typeof yAxisId}]. ${getKeysForDebug(yAxisMap)}`);

  return yAxis;
};

export const useViewBox = (): CartesianViewBox => {
  const viewBox = useContext(ViewBoxContext);
  return viewBox;
};
