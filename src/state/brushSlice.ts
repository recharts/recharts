import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type BrushSettings = {
  height: number;
};

const initialState: BrushSettings = {
  height: 0,
};
export const brushSlice = createSlice({
  name: 'brush',
  initialState,
  reducers: {
    setBrushHeight(state, action: PayloadAction<number>) {
      state.height = action.payload;
    },
  },
});

export const { setBrushHeight } = brushSlice.actions;

export const brushReducer = brushSlice.reducer;
