import { createSelector } from 'reselect';
import { RechartsRootState } from '../state/store';
import { arrayContentsAreEqualCheck } from '../state/selectors/arrayEqualityCheck';

/**
 * Given a zIndex, returns the corresponding portal element ID.
 * If no zIndex is provided or if the zIndex is not registered, returns undefined.
 *
 * It also returns undefined in case the z-index portal has not been rendered yet.
 */
export const selectZIndexPortalId: (state: RechartsRootState, zIndex: number | undefined) => string | undefined =
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

export const selectAllRegisteredZIndexes: (state: RechartsRootState) => ReadonlyArray<number> = createSelector(
  (state: RechartsRootState) => state.zIndex.zIndexMap,
  zIndexMap => {
    return Object.keys(zIndexMap)
      .map(zIndexStr => parseInt(zIndexStr, 10))
      .sort((a, b) => a - b);
  },
  {
    memoizeOptions: {
      resultEqualityCheck: arrayContentsAreEqualCheck,
    },
  },
);
