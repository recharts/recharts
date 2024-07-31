import { createSelector } from '@reduxjs/toolkit';
import { RechartsRootState } from '../store';
import { XAxisSettings, YAxisSettings } from '../axisMapSlice';

export const selectAllXAxes: (state: RechartsRootState) => ReadonlyArray<XAxisSettings> = createSelector(
  (state: RechartsRootState) => state.axisMap.xAxis,
  (xAxisMap): ReadonlyArray<XAxisSettings> => {
    return Object.values(xAxisMap);
  },
);

export const selectAllYAxes: (state: RechartsRootState) => ReadonlyArray<YAxisSettings> = createSelector(
  (state: RechartsRootState) => state.axisMap.yAxis,
  (yAxisMap): ReadonlyArray<YAxisSettings> => {
    return Object.values(yAxisMap);
  },
);
