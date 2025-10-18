/**
 * This slice contains a registry of z-index values for various components.
 * The state is a map from z-index numbers to a string ID.
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ZIndexState = {
  zIndexMap: Record<number, string>;
};

const initialState: ZIndexState = {
  zIndexMap: {},
};

const zIndexSlice = createSlice({
  name: 'zIndex',
  initialState,
  reducers: {
    registerZIndexPortal: (state, action: PayloadAction<{ zIndex: number; id: string }>) => {
      const { zIndex, id } = action.payload;
      state.zIndexMap[zIndex] = id;
    },
    unregisterZIndexPortal: (state, action: PayloadAction<{ zIndex: number }>) => {
      const { zIndex } = action.payload;
      delete state.zIndexMap[zIndex];
    },
  },
});

export const { registerZIndexPortal, unregisterZIndexPortal } = zIndexSlice.actions;

export const zIndexReducer = zIndexSlice.reducer;
