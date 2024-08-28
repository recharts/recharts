import { RechartsRootState } from '../store';

export const selectRootMaxBarSize = (state: RechartsRootState): number | undefined => state.rootProps.maxBarSize;
export const selectBarGap = (state: RechartsRootState): string | number | undefined => state.rootProps.barGap;
export const selectBarCategoryGap = (state: RechartsRootState): string | number | undefined =>
  state.rootProps.barCategoryGap;
export const selectRootBarSize = (state: RechartsRootState): string | number | undefined => state.rootProps.barSize;
