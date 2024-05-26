import { createSelector } from '@reduxjs/toolkit';
import { AxisPropsWithExtraComputedData, XAxisWithExtraData, YAxisWithExtraData } from '../chart/types';
import { useAppSelector } from '../state/hooks';
import { getBandSizeOfAxis, getTicksOfAxis } from '../util/ChartUtils';
import { LayoutType } from '../util/types';
import {
  selectArbitraryPolarAngleAxis,
  selectArbitraryPolarRadiusAxis,
  selectArbitraryXAxis,
  selectArbitraryYAxis,
  selectChartLayout,
} from './chartLayoutContext';

export const selectTooltipAxis = createSelector(
  selectChartLayout,
  selectArbitraryXAxis,
  selectArbitraryYAxis,
  selectArbitraryPolarAngleAxis,
  selectArbitraryPolarRadiusAxis,
  (
    layout: LayoutType,
    xAxis: XAxisWithExtraData,
    yAxis: YAxisWithExtraData,
    angleAxis: AxisPropsWithExtraComputedData,
    radiusAxis: AxisPropsWithExtraComputedData,
  ): AxisPropsWithExtraComputedData => {
    if (layout === 'horizontal') {
      return xAxis;
    }
    if (layout === 'vertical') {
      return yAxis;
    }
    if (layout === 'centric') {
      return angleAxis;
    }
    return radiusAxis;
  },
);

export const useTooltipAxis = (): AxisPropsWithExtraComputedData => useAppSelector(selectTooltipAxis);

export const useTooltipAxisBandSize = (): number | undefined => {
  const tooltipAxis = useTooltipAxis();
  const tooltipTicks = getTicksOfAxis(tooltipAxis, false, true);
  return getBandSizeOfAxis(tooltipAxis, tooltipTicks);
};
