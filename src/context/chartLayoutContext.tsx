import React, { ReactNode, createContext, useContext } from 'react';
import invariant from 'tiny-invariant';
import { CartesianViewBox, XAxisMap, YAxisMap } from '../util/types';
import type { CategoricalChartState } from '../chart/types';
import type { Props as XAxisProps } from '../cartesian/XAxis';
import type { Props as YAxisProps } from '../cartesian/YAxis';
import { calculateViewBox } from '../util/calculateViewBox';

export const XAxisContext = createContext<XAxisMap | undefined>(undefined);
export const YAxisContext = createContext<YAxisMap | undefined>(undefined);
export const ViewBoxContext = createContext<CartesianViewBox | undefined>(undefined);
export const ClipPathIdContext = createContext<string | undefined>(undefined);

/**
 * Will add all the properties required to render all individual Recharts components into a React Context.
 *
 * If you want to read these properties, see the collection of hooks exported from this file.
 *
 * @param {object} props CategoricalChartState, plus children
 * @returns {ReactElement} React Context Provider
 */
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

  /*
   * This pretends to be a single context but actually is split into multiple smaller ones.
   * Why?
   * Because one React Context only allows to set one value.
   * But we need to set multiple values.
   * If we do that with one context, then we force re-render on components that might not even be interested
   * in the part of the state that has changed.
   *
   * By splitting into smaller contexts, we allow each components to be optimized and only re-render when its dependencies change.
   *
   * To actually achieve the optimal re-render, it is necessary to use React.memo().
   * See the test file for details.
   */
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

export const useXAxisOrThrow = (xAxisId: string | number): XAxisProps => {
  const xAxisMap = useContext(XAxisContext);

  invariant(xAxisMap != null, 'Could not find xAxisMap; are you sure this is rendered inside a Recharts context?');

  const xAxis: XAxisProps | undefined = xAxisMap[xAxisId];

  invariant(xAxis != null, `Could not find xAxis by id "${xAxisId}" [${typeof xAxisId}]. ${getKeysForDebug(xAxisMap)}`);

  return xAxis;
};

export const useYAxisOrThrow = (yAxisId: string | number): YAxisProps => {
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
