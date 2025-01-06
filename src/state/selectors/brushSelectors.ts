import { createSelector } from 'reselect';
import { RechartsRootState } from '../store';
import { selectChartOffset } from './selectChartOffset';
import { selectMargin } from './containerSelectors';
import { isNumber } from '../../util/DataUtils';

export const selectBrushSettings = (state: RechartsRootState) => state.brush;

export type BrushDimensions = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export const selectBrushDimensions = createSelector(
  [selectBrushSettings, selectChartOffset, selectMargin],
  (brushSettings, offset, margin) => ({
    height: brushSettings.height,
    x: isNumber(brushSettings.x) ? brushSettings.x : offset.left,
    y: isNumber(brushSettings.y)
      ? brushSettings.y
      : offset.top + offset.height + offset.brushBottom - (margin.bottom || 0),
    width: isNumber(brushSettings.width) ? brushSettings.width : offset.width,
  }),
);
