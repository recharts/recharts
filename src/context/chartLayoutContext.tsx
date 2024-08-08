import React, { createContext, ReactNode, useContext, useEffect } from 'react';
import { createSelector } from '@reduxjs/toolkit';
import {
  CartesianViewBox,
  ChartOffset,
  LayoutType,
  Margin,
  PolarAngleAxisMap,
  PolarRadiusAxisMap,
  Size,
  XAxisMap,
  YAxisMap,
} from '../util/types';
import type { CategoricalChartState, XAxisWithExtraData, YAxisWithExtraData } from '../chart/types';
import { getAnyElementOfObject } from '../util/DataUtils';
import { LegendPayloadProvider } from './legendPayloadContext';
import { TooltipContextProvider, TooltipContextValue } from './tooltipContext';
import { PolarRadiusAxisProps } from '../polar/PolarRadiusAxis';
import { PolarAngleAxisProps } from '../polar/PolarAngleAxis';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { setPolarAngleAxisMap, setPolarRadiusAxisMap, setXAxisMap, setYAxisMap } from '../state/axisSlice';
import { RechartsRootState } from '../state/store';
import { setChartSize, setLayout, setMargin } from '../state/layoutSlice';
import { selectChartOffset, selectChartViewBox } from '../state/selectors/selectChartOffset';
import { selectChartHeight, selectChartWidth } from '../state/selectors/containerSelectors';
import { useIsPanorama } from './PanoramaContext';
import { selectBrushDimensions, selectBrushSettings } from '../state/selectors/brushSelectors';

export const ClipPathIdContext = createContext<string | undefined>(undefined);
export const MarginContext = createContext<Margin>({ top: 5, right: 5, bottom: 5, left: 5 });
// is the updateId necessary? Can we do without? Perhaps hook dependencies are better than explicit updateId.
const UpdateIdContext = createContext<number>(0);

export type ChartLayoutContextProviderProps = {
  state: CategoricalChartState;
  children: ReactNode;
  clipPathId: string;
  width: number;
  height: number;
  margin: Margin;
  layout: LayoutType;
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
      activeLabel,
      activePayload,
      isTooltipActive,
      activeCoordinate,
      updateId,
      activeTooltipIndex,
    },
    clipPathId,
    children,
    width,
    height,
    margin,
    layout,
  } = props;

  const tooltipContextValue: TooltipContextValue = {
    label: activeLabel,
    payload: activePayload,
    coordinate: activeCoordinate,
    active: isTooltipActive,
    index: activeTooltipIndex,
  };

  const dispatch = useAppDispatch();

  /*
   * Skip dispatching properties in panorama chart for two reasons:
   * 1. The root chart should be deciding on these properties, and
   * 2. Brush reads these properties from redux store, and so they must remain stable
   *      to avoid circular dependency and infinite re-rendering.
   */
  const isPanorama = useIsPanorama();
  if (!isPanorama) {
    dispatch(setXAxisMap(xAxisMap));
    dispatch(setYAxisMap(yAxisMap));
    dispatch(setPolarAngleAxisMap(angleAxisMap));
    dispatch(setPolarRadiusAxisMap(radiusAxisMap));
    dispatch(setLayout(layout));
    dispatch(setChartSize({ width, height }));
    dispatch(setMargin(margin));
  }

  /*
   * This pretends to be a single context but actually is split into multiple smaller ones.
   * Why?
   * Because one React Context only allows to set one value.
   * But we need to set multiple values.
   * If we do that with one context, then we force re-render on components that might not even be interested
   * in the part of the state that has changed.
   *
   * By splitting into smaller contexts, we allow each component to be optimized and only re-render when its dependencies change.
   *
   * To actually achieve the optimal re-render, it is necessary to use React.memo().
   * See the test file for details.
   */
  return (
    <UpdateIdContext.Provider value={updateId}>
      <MarginContext.Provider value={margin}>
        <LegendPayloadProvider>
          <ClipPathIdContext.Provider value={clipPathId}>
            <TooltipContextProvider value={tooltipContextValue}>{children}</TooltipContextProvider>
          </ClipPathIdContext.Provider>
        </LegendPayloadProvider>
      </MarginContext.Provider>
    </UpdateIdContext.Provider>
  );
};

export const useClipPathId = (): string | undefined => {
  return useContext(ClipPathIdContext);
};

export const selectXAxisMap = (state: RechartsRootState): XAxisMap | undefined => state.axis.xAxisMap;
export const selectYAxisMap = (state: RechartsRootState): YAxisMap | undefined => state.axis.yAxisMap;
export const selectPolarAngleAxisMap = (state: RechartsRootState): PolarAngleAxisMap | undefined =>
  state.axis.polarAngleAxisMap;
export const selectPolarRadiusAxisMap = (state: RechartsRootState): PolarRadiusAxisMap | undefined =>
  state.axis.polarRadiusAxisMap;
export const selectArbitraryXAxis: (state: RechartsRootState) => XAxisWithExtraData | undefined = createSelector(
  selectXAxisMap,
  getAnyElementOfObject,
);

export const selectArbitraryYAxis: (state: RechartsRootState) => YAxisWithExtraData | undefined = createSelector(
  selectYAxisMap,
  getAnyElementOfObject,
);

/**
 * This either finds and returns Axis by the specified ID, or returns undefined if an axis with this ID does not exist.
 *
 * @param axisId identifier of the axis - it's either autogenerated ('0'), or passed via `id` prop as <PolarAngleAxis id='foo' />
 * @returns axis configuration object, or undefined
 */
export const useMaybePolarAngleAxis = (axisId: string | number): PolarAngleAxisProps | undefined => {
  const polarAngleAxisMap = useAppSelector(selectPolarAngleAxisMap);
  return polarAngleAxisMap?.[axisId];
};

export const selectArbitraryPolarAngleAxis: (state: RechartsRootState) => PolarAngleAxisProps | undefined =
  createSelector(selectPolarAngleAxisMap, getAnyElementOfObject);

/**
 * This will find an arbitrary first PolarAngleAxis. If there's exactly one it always returns that one
 * - but if there are multiple then it can return any of those.
 *
 * @returns polarAngle axisOptions, or undefined - if there are no PolarAngleAxes
 */
export const useArbitraryPolarAngleAxis = (): PolarAngleAxisProps | undefined =>
  useAppSelector(selectArbitraryPolarAngleAxis);

/**
 * This either finds and returns Axis by the specified ID, or returns undefined if an axis with this ID does not exist.
 *
 * @param axisId identifier of the axis - it's either autogenerated ('0'), or passed via `id` prop as <PolarRadiusAxis id='foo' />
 * @returns axis configuration object, or undefined
 */
export const useMaybePolarRadiusAxis = (axisId: string | number): PolarRadiusAxisProps | undefined => {
  const polarRadiusAxisMap = useAppSelector(selectPolarRadiusAxisMap);
  return polarRadiusAxisMap?.[axisId];
};

export const selectArbitraryPolarRadiusAxis: (state: RechartsRootState) => PolarRadiusAxisProps | undefined =
  createSelector(selectPolarRadiusAxisMap, getAnyElementOfObject);

/**
 * This will find an arbitrary first PolarRadiusAxis . If there's exactly one it always returns that one
 * - but if there are multiple then it can return any of those.
 *
 * @returns polarAngle axisOptions, or undefined - if there are no PolarRadiusAxes
 */
export const useArbitraryPolarRadiusAxis = (): PolarRadiusAxisProps | undefined =>
  useAppSelector(selectArbitraryPolarRadiusAxis);

export const useViewBox = (): CartesianViewBox => {
  const panorama = useIsPanorama();
  const rootViewBox = useAppSelector(selectChartViewBox);
  const brushDimensions = useAppSelector(selectBrushDimensions);
  const brushPadding = useAppSelector(selectBrushSettings)?.padding;
  if (!panorama) {
    return rootViewBox;
  }
  return {
    width: brushDimensions.width - brushPadding.left - brushPadding.right,
    height: brushDimensions.height - brushPadding.top - brushPadding.bottom,
    x: brushPadding.left,
    y: brushPadding.top,
  };
};

const manyComponentsThrowErrorsIfOffsetIsUndefined: ChartOffset = {};
export const useOffset = (): ChartOffset => {
  return useAppSelector(selectChartOffset) ?? manyComponentsThrowErrorsIfOffsetIsUndefined;
};

export const useChartWidth = (): number => {
  return useAppSelector(selectChartWidth);
};

export const useChartHeight = (): number => {
  return useAppSelector(selectChartHeight);
};

const manyComponentsThrowErrorsIfMarginIsUndefined: Margin = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};
export const useMargin = (): Margin => {
  return useAppSelector(state => state.layout.margin) ?? manyComponentsThrowErrorsIfMarginIsUndefined;
};

export const useUpdateId = () => `brush-${useContext(UpdateIdContext)}`;

export const selectChartLayout = (state: RechartsRootState): LayoutType => state.layout.layoutType;

export const useChartLayout = () => useAppSelector(selectChartLayout);

export const ReportChartSize = (props: Size): null => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setChartSize(props));
  }, [dispatch, props]);

  return null;
};

export const ReportChartMargin = ({ margin }: { margin: Margin }): null => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setMargin(margin));
  }, [dispatch, margin]);
  return null;
};
