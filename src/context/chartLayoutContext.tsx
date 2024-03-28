import React, { createContext, ReactNode, useContext } from 'react';
import invariant from 'tiny-invariant';
import find from 'lodash/find';
import every from 'lodash/every';
import {
  CartesianViewBox,
  ChartOffset,
  Margin,
  PolarAngleAxisMap,
  PolarRadiusAxisMap,
  XAxisMap,
  YAxisMap,
} from '../util/types';
import type { CategoricalChartState } from '../chart/types';
import type { Props as XAxisProps } from '../cartesian/XAxis';
import type { Props as YAxisProps } from '../cartesian/YAxis';
import { calculateViewBox } from '../util/calculateViewBox';
import { getAnyElementOfObject } from '../util/DataUtils';
import { LegendPayloadProvider } from './legendPayloadContext';
import { TooltipContextProvider, TooltipContextValue } from './tooltipContext';
import { PolarRadiusAxisProps } from '../polar/PolarRadiusAxis';
import { PolarAngleAxisProps } from '../polar/PolarAngleAxis';

export const XAxisContext = createContext<XAxisMap | undefined>(undefined);
export const YAxisContext = createContext<YAxisMap | undefined>(undefined);
export const PolarAngleAxisContext = createContext<PolarAngleAxisMap | undefined>(undefined);
export const PolarRadiusAxisContext = createContext<PolarRadiusAxisMap | undefined>(undefined);
export const ViewBoxContext = createContext<CartesianViewBox | undefined>(undefined);
export const OffsetContext = createContext<ChartOffset>({});
export const ClipPathIdContext = createContext<string | undefined>(undefined);
export const ChartHeightContext = createContext<number>(0);
export const ChartWidthContext = createContext<number>(0);
export const MarginContext = createContext<Margin>({ top: 5, right: 5, bottom: 5, left: 5 });

export type ChartLayoutContextProviderProps = {
  state: CategoricalChartState;
  children: ReactNode;
  clipPathId: string;
  width: number;
  height: number;
  margin: Margin;
};

/**
 * Will add all the properties required to render all individual Recharts components into a React Context.
 *
 * If you want to read these properties, see the collection of hooks exported from this file.
 *
 * @param {object} props CategoricalChartState, plus children
 * @returns React Context Provider
 */
export const ChartLayoutContextProvider = (props: ChartLayoutContextProviderProps) => {
  const {
    state: {
      xAxisMap,
      yAxisMap,
      angleAxisMap,
      radiusAxisMap,
      offset,
      activeLabel,
      activePayload,
      isTooltipActive,
      activeCoordinate,
    },
    clipPathId,
    children,
    width,
    height,
    margin,
  } = props;

  /**
   * Perhaps we should compute this property when reading? Let's see what is more often used
   */
  const viewBox = calculateViewBox(offset);

  const tooltipContextValue: TooltipContextValue = {
    label: activeLabel,
    payload: activePayload,
    coordinate: activeCoordinate,
    active: isTooltipActive,
  };

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
    <MarginContext.Provider value={margin}>
      <LegendPayloadProvider>
        <XAxisContext.Provider value={xAxisMap}>
          <YAxisContext.Provider value={yAxisMap}>
            <PolarAngleAxisContext.Provider value={angleAxisMap}>
              <PolarRadiusAxisContext.Provider value={radiusAxisMap}>
                <OffsetContext.Provider value={offset}>
                  <ViewBoxContext.Provider value={viewBox}>
                    <ClipPathIdContext.Provider value={clipPathId}>
                      <ChartHeightContext.Provider value={height}>
                        <ChartWidthContext.Provider value={width}>
                          <TooltipContextProvider value={tooltipContextValue}>{children}</TooltipContextProvider>
                        </ChartWidthContext.Provider>
                      </ChartHeightContext.Provider>
                    </ClipPathIdContext.Provider>
                  </ViewBoxContext.Provider>
                </OffsetContext.Provider>
              </PolarRadiusAxisContext.Provider>
            </PolarAngleAxisContext.Provider>
          </YAxisContext.Provider>
        </XAxisContext.Provider>
      </LegendPayloadProvider>
    </MarginContext.Provider>
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

/**
 * This either finds and returns Axis by the specified ID, or throws an exception if an axis with this ID does not exist.
 *
 * @param xAxisId identifier of the axis - it's either autogenerated ('0'), or passed via `id` prop as <XAxis id='foo' />
 * @returns axis configuration object
 * @throws Error if no axis with this ID exists
 */
export const useXAxisOrThrow = (xAxisId: string | number): XAxisProps => {
  const xAxisMap = useContext(XAxisContext);

  invariant(
    xAxisMap != null,
    'Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?',
  );

  const xAxis: XAxisProps | undefined = xAxisMap[xAxisId];

  invariant(xAxis != null, `Could not find xAxis by id "${xAxisId}" [${typeof xAxisId}]. ${getKeysForDebug(xAxisMap)}`);

  return xAxis;
};

/**
 * This either finds and returns Axis by the specified ID, or returns undefined if an axis with this ID does not exist.
 *
 * @param xAxisId identifier of the axis - it's either autogenerated ('0'), or passed via `id` prop as <XAxis id='foo' />
 * @returns axis configuration object, or undefined
 */
export const useMaybeXAxis = (xAxisId: string | number): XAxisProps | undefined => {
  const xAxisMap = useContext(XAxisContext);
  return xAxisMap?.[xAxisId];
};

/**
 * This will find an arbitrary first XAxis. If there's exactly one it always returns that one
 * - but if there are multiple then it can return any of those.
 *
 * If you want specific XAxis out of multiple then prefer using useXAxisOrThrow
 *
 * @returns X axisOptions, or undefined - if there are no X axes
 */
export const useArbitraryXAxis = (): XAxisProps | undefined => {
  const xAxisMap = useContext(XAxisContext);
  return getAnyElementOfObject(xAxisMap);
};

/**
 * This will find an arbitrary first YAxis. If there's exactly one it always returns that one
 * - but if there are multiple then it can return any of those.
 *
 * If you want specific YAxis out of multiple then prefer using useYAxisOrThrow
 *
 * @returns Y axisOptions, or undefined - if there are no Y axes
 */
export const useArbitraryYAxis = (): XAxisProps | undefined => {
  const yAxisMap = useContext(YAxisContext);
  return getAnyElementOfObject(yAxisMap);
};

/**
 * This hooks will:
 * 1st attempt to find an YAxis that has all elements in its domain finite
 * If no such axis exists, it will return an arbitrary YAxis
 * if there are no Y axes then it returns undefined
 *
 * @returns Either Y axisOptions, or undefined if there are no Y axes
 */
export const useYAxisWithFiniteDomainOrRandom = (): YAxisProps | undefined => {
  const yAxisMap = useContext(YAxisContext);
  const yAxisWithFiniteDomain = find(yAxisMap, axis => every(axis.domain, Number.isFinite));
  return yAxisWithFiniteDomain || getAnyElementOfObject(yAxisMap);
};

/**
 * This either finds and returns Axis by the specified ID, or throws an exception if an axis with this ID does not exist.
 *
 * @param yAxisId identifier of the axis - it's either autogenerated ('0'), or passed via `id` prop as <YAxis id='foo' />
 * @returns axis configuration object
 * @throws Error if no axis with this ID exists
 */
export const useYAxisOrThrow = (yAxisId: string | number): YAxisProps => {
  const yAxisMap = useContext(YAxisContext);

  invariant(
    yAxisMap != null,
    'Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?',
  );

  const yAxis: YAxisProps | undefined = yAxisMap[yAxisId];

  invariant(yAxis != null, `Could not find yAxis by id "${yAxisId}" [${typeof yAxisId}]. ${getKeysForDebug(yAxisMap)}`);

  return yAxis;
};

/**
 * This either finds and returns Axis by the specified ID, or returns undefined if an axis with this ID does not exist.
 *
 * @param yAxisId identifier of the axis - it's either autogenerated ('0'), or passed via `id` prop as <YAxis id='foo' />
 * @returns axis configuration object, or undefined
 */
export const useMaybeYAxis = (yAxisId: string | number): YAxisProps | undefined => {
  const yAxisMap = useContext(YAxisContext);
  return yAxisMap?.[yAxisId];
};

/**
 * This either finds and returns Axis by the specified ID, or returns undefined if an axis with this ID does not exist.
 *
 * @param axisId identifier of the axis - it's either autogenerated ('0'), or passed via `id` prop as <PolarAngleAxis id='foo' />
 * @returns axis configuration object, or undefined
 */
export const useMaybePolarAngleAxis = (axisId: string | number): PolarAngleAxisProps | undefined => {
  const polarAngleAxisMap = useContext(PolarAngleAxisContext);
  return polarAngleAxisMap?.[axisId];
};

/**
 * This will find an arbitrary first PolarAngleAxis. If there's exactly one it always returns that one
 * - but if there are multiple then it can return any of those.
 *
 * @returns polarAngle axisOptions, or undefined - if there are no PolarAngleAxes
 */
export const useArbitraryPolarAngleAxis = (): PolarAngleAxisProps | undefined => {
  const polarAngleAxisMap = useContext(PolarAngleAxisContext);
  return getAnyElementOfObject(polarAngleAxisMap);
};

/**
 * This either finds and returns Axis by the specified ID, or returns undefined if an axis with this ID does not exist.
 *
 * @param axisId identifier of the axis - it's either autogenerated ('0'), or passed via `id` prop as <PolarRadiusAxis id='foo' />
 * @returns axis configuration object, or undefined
 */
export const useMaybePolarRadiusAxis = (axisId: string | number): PolarRadiusAxisProps | undefined => {
  const polarRadiusAxisMap = useContext(PolarRadiusAxisContext);
  return polarRadiusAxisMap?.[axisId];
};

/**
 * This will find an arbitrary first PolarRadiusAxis . If there's exactly one it always returns that one
 * - but if there are multiple then it can return any of those.
 *
 * @returns polarAngle axisOptions, or undefined - if there are no PolarRadiusAxes
 */
export const useArbitraryPolarRadiusAxis = (): PolarRadiusAxisProps | undefined => {
  const polarRadiusAxisMap = useContext(PolarRadiusAxisContext);
  return getAnyElementOfObject(polarRadiusAxisMap);
};

export const useViewBox = (): CartesianViewBox => {
  return useContext(ViewBoxContext);
};

export const useOffset = (): ChartOffset => {
  return useContext(OffsetContext);
};

export const useChartWidth = (): number => {
  return useContext(ChartWidthContext);
};

export const useChartHeight = (): number => {
  return useContext(ChartHeightContext);
};

export const useMargin = (): Margin => {
  return useContext(MarginContext);
};
