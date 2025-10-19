/**
 * This slice contains a registry of z-index values for various components.
 * The state is a map from z-index numbers to a string ID.
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ZIndexEntry = {
  elementId: string | undefined;
  consumers: number;
};

type ZIndexState = {
  zIndexMap: Record<number, ZIndexEntry>;
};

const initialState: ZIndexState = {
  zIndexMap: {},
};

const zIndexSlice = createSlice({
  name: 'zIndex',
  initialState,
  reducers: {
    registerZIndexPortal: (state, action: PayloadAction<{ zIndex: number }>) => {
      const { zIndex } = action.payload;
      if (state.zIndexMap[zIndex]) {
        state.zIndexMap[zIndex].consumers += 1;
      } else {
        state.zIndexMap[zIndex] = {
          consumers: 1,
          elementId: undefined,
        };
      }
    },
    unregisterZIndexPortal: (state, action: PayloadAction<{ zIndex: number }>) => {
      const { zIndex } = action.payload;
      if (state.zIndexMap[zIndex]) {
        state.zIndexMap[zIndex].consumers -= 1;
        if (state.zIndexMap[zIndex].consumers <= 0) {
          delete state.zIndexMap[zIndex];
        }
      }
    },
    registerZIndexPortalId: (state, action: PayloadAction<{ zIndex: number; elementId: string }>) => {
      const { zIndex, elementId } = action.payload;
      if (state.zIndexMap[zIndex]) {
        state.zIndexMap[zIndex].elementId = elementId;
      } else {
        state.zIndexMap[zIndex] = {
          consumers: 0,
          elementId,
        };
      }
    },
    unregisterZIndexPortalId: (state, action: PayloadAction<{ zIndex: number }>) => {
      const { zIndex } = action.payload;
      if (state.zIndexMap[zIndex]) {
        state.zIndexMap[zIndex].elementId = undefined;
      }
    },
  },
});

export const { registerZIndexPortal, unregisterZIndexPortal, registerZIndexPortalId, unregisterZIndexPortalId } =
  zIndexSlice.actions;

export const zIndexReducer = zIndexSlice.reducer;
