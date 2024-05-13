import { createSelector } from '@reduxjs/toolkit';
import {
  selectArbitraryPolarAngleAxis,
  selectArbitraryPolarRadiusAxis,
  selectArbitraryXAxis,
  selectArbitraryYAxis,
  selectChartLayout,
} from './chartLayoutContext';
import { getBandSizeOfAxis, getTicksOfAxis } from '../util/ChartUtils';
import { useAppSelector } from '../state/hooks';
import { XAxisProps, YAxisProps } from '../index';
import { PolarAngleAxisProps } from '../polar/PolarAngleAxis';
import { BaseAxisProps, LayoutType } from '../util/types';
import { PolarRadiusAxisProps } from '../polar/PolarRadiusAxis';

export const selectTooltipAxis = createSelector(
  selectChartLayout,
  selectArbitraryXAxis,
  selectArbitraryYAxis,
  selectArbitraryPolarAngleAxis,
  selectArbitraryPolarRadiusAxis,
  (
    layout: LayoutType,
    xAxis: XAxisProps,
    yAxis: YAxisProps,
    angleAxis: PolarAngleAxisProps,
    radiusAxis: PolarRadiusAxisProps,
  ): BaseAxisProps => {
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

export const useTooltipAxis = (): BaseAxisProps => useAppSelector(selectTooltipAxis);

export const useTooltipAxisBandSize = (): number | undefined => {
  const tooltipAxis = useTooltipAxis();
  const tooltipTicks = getTicksOfAxis(tooltipAxis, false, true);
  return getBandSizeOfAxis(tooltipAxis, tooltipTicks);
};
