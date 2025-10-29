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
export const selectZIndexPortalId: (
  state: RechartsRootState,
  zIndex: number | undefined,
  isPanorama: boolean,
) => string | undefined = createSelector(
  (state: RechartsRootState) => state.zIndex.zIndexMap,
  (_: RechartsRootState, zIndex: number | undefined) => zIndex,
  (_: RechartsRootState, _zIndex: number | undefined, isPanorama: boolean) => isPanorama,
  (zIndexMap, zIndex, isPanorama) => {
    if (zIndex == null) {
      return undefined;
    }
    const entry = zIndexMap[zIndex];
    if (entry == null) {
      return undefined;
    }
    if (isPanorama) {
      return entry.panoramaElementId;
    }
    return entry.elementId;
  },
);

export const selectAllRegisteredZIndexes = createSelector(
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
