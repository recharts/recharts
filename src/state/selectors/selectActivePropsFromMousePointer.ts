import { createSelector } from '@reduxjs/toolkit';
import { RechartsRootState } from '../store';
import { MousePointer } from '../../chart/generateCategoricalChart';
import { ActiveTooltipProps } from '../tooltipSlice';
import { selectChartCoordinates, selectContainerScale } from './containerSelectors';
import { selectChartLayout } from '../../context/chartLayoutContext';
import { selectTooltipAxisRangeWithReverse, selectTooltipAxisTicks, selectTooltipAxisType } from './tooltipSelectors';
import { selectChartOffset } from './selectChartOffset';
import { combineActiveProps, selectOrderedTooltipTicks } from './selectors';
import { selectPolarViewBox } from './polarAxisSelectors';

export const selectActivePropsFromMousePointer: (
  state: RechartsRootState,
  mousePointer: MousePointer,
) => ActiveTooltipProps = createSelector(
  [
    selectChartCoordinates,
    selectContainerScale,
    selectChartLayout,
    selectPolarViewBox,
    selectTooltipAxisType,
    selectTooltipAxisRangeWithReverse,
    selectTooltipAxisTicks,
    selectOrderedTooltipTicks,
    selectChartOffset,
  ],
  combineActiveProps,
);
