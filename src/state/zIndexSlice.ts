/**
 * This slice contains a registry of z-index values for various components.
 * The state is a map from z-index numbers to a string ID.
 */
import { createSlice, PayloadAction, prepareAutoBatched } from '@reduxjs/toolkit';

import { DefaultZIndexes } from '../zIndex/DefaultZIndexes';

type ZIndexEntry = {
  /**
   * The ID of the HTML element that corresponds to this z-index.
   * This ID is used to create a React portal for rendering components at this z-index.
   *
   * If undefined, it means no element is currently registered for this z-index,
   * and registration is in progress. If that happens, wait for the next render cycle.
   */
  elementId: string | undefined;
  /**
   * Panorama items can't mix with normal items in the same z-index layer,
   * because they are rendered in a different SVG element.
   * So we need to have a separate element ID for panorama z-index portals.
   */
  panoramaElementId: string | undefined;
  consumers: number;
};

type ZIndexState = {
  zIndexMap: Record<number, ZIndexEntry>;
};

const seed: ZIndexState['zIndexMap'] = {};

const initialState: ZIndexState = {
  zIndexMap: Object.values(DefaultZIndexes).reduce(
    (acc: ZIndexState['zIndexMap'], current: number): ZIndexState['zIndexMap'] => ({
      ...acc,
      [current]: {
        elementId: undefined,
        panoramaElementId: undefined,
        consumers: 0,
      },
    }),
    seed,
  ),
};

const defaultZIndexSet = new Set<number>(Object.values(DefaultZIndexes));
function isDefaultZIndex(zIndex: number): boolean {
  return defaultZIndexSet.has(zIndex);
}

const zIndexSlice = createSlice({
  name: 'zIndex',
  initialState,
  reducers: {
    registerZIndexPortal: {
      reducer: (state, action: PayloadAction<{ zIndex: number }>) => {
        const { zIndex } = action.payload;
        if (state.zIndexMap[zIndex]) {
          state.zIndexMap[zIndex].consumers += 1;
        } else {
          state.zIndexMap[zIndex] = {
            consumers: 1,
            elementId: undefined,
            panoramaElementId: undefined,
          };
        }
      },
      prepare: prepareAutoBatched<{ zIndex: number }>(),
    },
    unregisterZIndexPortal: {
      reducer: (state, action: PayloadAction<{ zIndex: number }>) => {
        const { zIndex } = action.payload;
        if (state.zIndexMap[zIndex]) {
          state.zIndexMap[zIndex].consumers -= 1;
          /*
           * Garbage collect unused z-index entries, except for default z-indexes.
           * Default z-indexes are always rendered, regardless of whether there are consumers or not.
           * And because of that, even if we delete this entry, the ZIndexPortal provider will still be rendered
           * and React is not going to re-create it, and it won't re-register the element ID.
           * So let's not delete default z-index entries.
           */
          if (state.zIndexMap[zIndex].consumers <= 0 && !isDefaultZIndex(zIndex)) {
            delete state.zIndexMap[zIndex];
          }
        }
      },
      prepare: prepareAutoBatched<{ zIndex: number }>(),
    },
    registerZIndexPortalId: {
      reducer: (state, action: PayloadAction<{ zIndex: number; elementId: string; isPanorama: boolean }>) => {
        const { zIndex, elementId, isPanorama } = action.payload;
        if (state.zIndexMap[zIndex]) {
          if (isPanorama) {
            state.zIndexMap[zIndex].panoramaElementId = elementId;
          } else {
            state.zIndexMap[zIndex].elementId = elementId;
          }
        } else {
          state.zIndexMap[zIndex] = {
            consumers: 0,
            elementId: isPanorama ? undefined : elementId,
            panoramaElementId: isPanorama ? elementId : undefined,
          };
        }
      },
      prepare: prepareAutoBatched<{ zIndex: number; elementId: string; isPanorama: boolean }>(),
    },
    unregisterZIndexPortalId: {
      reducer: (state, action: PayloadAction<{ zIndex: number; isPanorama: boolean }>) => {
        const { zIndex } = action.payload;
        if (state.zIndexMap[zIndex]) {
          if (action.payload.isPanorama) {
            state.zIndexMap[zIndex].panoramaElementId = undefined;
          } else {
            state.zIndexMap[zIndex].elementId = undefined;
          }
        }
      },
      prepare: prepareAutoBatched<{ zIndex: number; isPanorama: boolean }>(),
    },
  },
});

export const { registerZIndexPortal, unregisterZIndexPortal, registerZIndexPortalId, unregisterZIndexPortalId } =
  zIndexSlice.actions;

export const zIndexReducer = zIndexSlice.reducer;
