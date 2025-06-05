import { RechartsRootState } from '../store';

export const selectZoomState = (state: RechartsRootState) => state.zoom;

export const selectDisableZoomAnimation = (state: RechartsRootState): boolean => state.zoom.disableAnimation ?? false;
