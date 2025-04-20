import React, { createContext, ReactNode, useContext, useEffect } from 'react';
import { CartesianViewBox, ChartOffset, LayoutType, Margin, Size } from '../util/types';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { RechartsRootState } from '../state/store';
import { setChartSize, setMargin } from '../state/layoutSlice';
import { selectChartOffset, selectChartViewBox } from '../state/selectors/selectChartOffset';
import { selectChartHeight, selectChartWidth } from '../state/selectors/containerSelectors';
import { useIsPanorama } from './PanoramaContext';
import { selectBrushDimensions, selectBrushSettings } from '../state/selectors/brushSelectors';

export const ClipPathIdContext = createContext<string | undefined>(undefined);

export type ChartLayoutContextProviderProps = {
  children: ReactNode;
  clipPathId: string;
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
  const { clipPathId, children } = props;

  return <ClipPathIdContext.Provider value={clipPathId}>{children}</ClipPathIdContext.Provider>;
};

export const useClipPathId = (): string | undefined => {
  return useContext(ClipPathIdContext);
};

export const useViewBox = (): CartesianViewBox => {
  const panorama = useIsPanorama();
  const rootViewBox = useAppSelector(selectChartViewBox);
  const brushDimensions = useAppSelector(selectBrushDimensions);
  const brushPadding = useAppSelector(selectBrushSettings)?.padding;
  if (!panorama || !brushDimensions || !brushPadding) {
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
