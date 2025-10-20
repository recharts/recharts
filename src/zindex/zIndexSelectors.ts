import { createSelector } from 'reselect';
import { RechartsRootState } from '../state/store';

export const selectZIndexQuerySelector: (state: RechartsRootState, zIndex: number | undefined) => string | undefined =
  createSelector(
    (state: RechartsRootState) => state.zIndex.zIndexMap,
    (_: RechartsRootState, zIndex: number) => zIndex,
    (zIndexMap, zIndex) => {
      if (zIndex == null) {
        return undefined;
      }
      return zIndexMap[zIndex]?.elementId;
    },
  );
