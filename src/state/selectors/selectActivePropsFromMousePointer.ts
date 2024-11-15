import { RechartsRootState } from '../store';
import { MousePointer } from '../../chart/generateCategoricalChart';
import { ActiveTooltipProps } from '../tooltipSlice';
import { createSelector } from '@reduxjs/toolkit';
import { selectChartCoordinates, selectContainerScale } from './containerSelectors';
import {
  selectChartLayout,
  selectPolarAngleAxisMap,
  selectPolarRadiusAxisMap,
  selectXAxisMap,
  selectYAxisMap,
} from '../../context/chartLayoutContext';
import { selectTooltipAxis, selectTooltipAxisTicks } from './tooltipSelectors';
import { selectChartOffset } from './selectChartOffset';
import { combineActiveProps, selectOrderedTooltipTicks } from './selectors';

export const selectActivePropsFromMousePointer: (
  state: RechartsRootState,
  mousePointer: MousePointer,
) => ActiveTooltipProps = createSelector(
  [
    selectChartCoordinates,
    selectContainerScale,
    selectChartLayout,
    selectXAxisMap,
    selectYAxisMap,
    selectPolarAngleAxisMap,
    selectPolarRadiusAxisMap,
    selectTooltipAxis,
    selectTooltipAxisTicks,
    selectOrderedTooltipTicks,
    selectChartOffset,
  ],
  combineActiveProps,
);
