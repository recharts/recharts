import { createSelector } from 'reselect';
import { RechartsRootState } from '../store';
import { ActiveTooltipProps } from '../tooltipSlice';
import { selectChartLayout } from '../../context/chartLayoutContext';
import { selectTooltipAxisRangeWithReverse, selectTooltipAxisTicks } from './tooltipSelectors';
import { selectChartOffsetInternal } from './selectChartOffsetInternal';
import { combineActiveProps, selectOrderedTooltipTicks } from './selectors';
import { selectPolarViewBox } from './polarAxisSelectors';
import { ChartPointer } from '../../util/types';
import { selectTooltipAxisType } from './selectTooltipAxisType';

const pickChartPointer = (_state: RechartsRootState, chartPointer: ChartPointer) => chartPointer;

export const selectActivePropsFromChartPointer: (
  state: RechartsRootState,
  chartPointer: ChartPointer,
) => ActiveTooltipProps | undefined = createSelector(
  [
    pickChartPointer,
    selectChartLayout,
    selectPolarViewBox,
    selectTooltipAxisType,
    selectTooltipAxisRangeWithReverse,
    selectTooltipAxisTicks,
    selectOrderedTooltipTicks,
    selectChartOffsetInternal,
  ],
  combineActiveProps,
);
