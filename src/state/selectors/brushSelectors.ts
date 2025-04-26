import { createSelector } from 'reselect';
import { RechartsRootState } from '../store';
import { selectChartOffset } from './selectChartOffset';
import { selectMargin } from './containerSelectors';
import { isNumber } from '../../util/DataUtils';
import { BrushSettings } from '../brushSlice';

export const selectBrushSettings = (state: RechartsRootState): BrushSettings => state.brush;

export type BrushDimensions = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export const selectBrushDimensions: (state: RechartsRootState) => BrushDimensions = createSelector(
  [selectBrushSettings, selectChartOffset, selectMargin],
  (brushSettings, offset, margin): BrushDimensions => ({
    height: brushSettings.height,
    x: isNumber(brushSettings.x) ? brushSettings.x : offset.left,
    y: isNumber(brushSettings.y)
      ? brushSettings.y
      : offset.top + offset.height + offset.brushBottom - (margin?.bottom || 0),
    width: isNumber(brushSettings.width) ? brushSettings.width : offset.width,
  }),
);
