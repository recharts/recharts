import { createSelector } from 'reselect';
import { RechartsRootState } from '../state/store';
import { arrayContentsAreEqualCheck } from '../state/selectors/arrayEqualityCheck';

import { DefaultZIndexes } from './DefaultZIndexes';

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
    const allNumbers = Object.keys(zIndexMap)
      .map(zIndexStr => parseInt(zIndexStr, 10))
      .concat(Object.values(DefaultZIndexes));
    const uniqueNumbers = Array.from(new Set(allNumbers));
    return uniqueNumbers.sort((a, b) => a - b);
  },
  {
    memoizeOptions: {
      resultEqualityCheck: arrayContentsAreEqualCheck,
    },
  },
);
