import { RechartsRootState } from '../store';
import { StackOffsetType } from '../../util/types';

export const selectRootMaxBarSize = (state: RechartsRootState): number | undefined => state.rootProps.maxBarSize;
export const selectBarGap = (state: RechartsRootState): string | number | undefined => state.rootProps.barGap;
export const selectBarCategoryGap = (state: RechartsRootState): string | number | undefined =>
  state.rootProps.barCategoryGap;
export const selectRootBarSize = (state: RechartsRootState): string | number | undefined => state.rootProps.barSize;
export const selectStackOffsetType = (state: RechartsRootState): StackOffsetType => state.rootProps.stackOffset;
export const selectChartName = (state: RechartsRootState) => state.options.chartName;
