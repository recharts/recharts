import { RechartsRootState } from '../store';

export const selectBrushHeight = (state: RechartsRootState) => state.brush.height;
