import { RechartsRootState } from '../store';
import { XAxisSettings, YAxisSettings } from '../axisMapSlice';

export const selectAllXAxes: (state: RechartsRootState) => ReadonlyArray<XAxisSettings> = (
  state: RechartsRootState,
): ReadonlyArray<XAxisSettings> => {
  return Object.values(state.axisMap.xAxis);
};

export const selectAllYAxes: (state: RechartsRootState) => ReadonlyArray<YAxisSettings> = (
  state: RechartsRootState,
): ReadonlyArray<YAxisSettings> => {
  return Object.values(state.axisMap.yAxis);
};
