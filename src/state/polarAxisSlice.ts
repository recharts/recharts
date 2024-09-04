import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { castDraft } from 'immer';
import { AxisId } from './cartesianAxisSlice';

export interface RadiusAxisSettings {
  id: AxisId;
}

export interface AngleAxisSettings {
  id: AxisId;
}

type PolarAxisState = {
  radiusAxis: Record<AxisId, RadiusAxisSettings>;
  angleAxis: Record<AxisId, AngleAxisSettings>;
};

const initialState: PolarAxisState = {
  radiusAxis: {},
  angleAxis: {},
};

const polarAxisSlice = createSlice({
  name: 'polarAxis',
  initialState,
  reducers: {
    addRadiusAxis(state, action: PayloadAction<RadiusAxisSettings>) {
      state.radiusAxis[action.payload.id] = castDraft(action.payload);
    },
    removeRadiusAxis(state, action: PayloadAction<RadiusAxisSettings>) {
      delete state.radiusAxis[action.payload.id];
    },
    addAngleAxis(state, action: PayloadAction<AngleAxisSettings>) {
      state.angleAxis[action.payload.id] = castDraft(action.payload);
    },
    removeAngleAxis(state, action: PayloadAction<AngleAxisSettings>) {
      delete state.angleAxis[action.payload.id];
    },
  },
});

export const { addRadiusAxis, removeRadiusAxis, addAngleAxis, removeAngleAxis } = polarAxisSlice.actions;

export const polarAxisReducer = polarAxisSlice.reducer;
