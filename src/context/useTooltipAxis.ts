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
import { RechartsRootState } from '../state/store';
import { selectTooltipSettings } from '../state/selectors/selectors';
import { AxisWithTicksSettings, selectAxisSettings, XorYType } from '../state/selectors/axisSelectors';
import { AxisId } from '../state/cartesianAxisSlice';

export const useTooltipAxis = (): AxisWithTicksSettings => useAppSelector(selectTooltipAxis);

export const useTooltipAxisBandSize = (): number | undefined => {
  const tooltipAxis = useTooltipAxis();
  const tooltipTicks = getTicksOfAxis(tooltipAxis, false, true);
  // @ts-expect-error Property id is missing in type AxisPropsWithExtraComputedData but required in type BaseAxis
  return getBandSizeOfAxis(tooltipAxis, tooltipTicks);
};
