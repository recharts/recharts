import { createSelector } from 'reselect';
import { RechartsRootState } from '../store';
import { selectChartOffset } from './selectChartOffset';
import { selectMargin } from './containerSelectors';
import { isNumber } from '../../util/DataUtils';
import { BrushSettings, BrushState } from '../brushSlice';

export const selectBrushState = (state: RechartsRootState): BrushState => state.brush;

export const selectAllBrushSettings = (state: RechartsRootState): Record<string, BrushSettings> =>
  state.brush.brushes;

export const selectBrushSettings = (brushId: string) => (state: RechartsRootState): BrushSettings | undefined =>
  state.brush.brushes[brushId];

export type BrushDimensions = {
  x: number;
  y: number;
  width: number;
  height: number;
};

const VERTICAL_BRUSH_GAP = 10;

export const selectBrushDimensions = (brushId: string): ((state: RechartsRootState) => BrushDimensions | null) =>
  createSelector(
    [selectBrushSettings(brushId), selectChartOffset, selectMargin],
    (brushSettings, offset, margin): BrushDimensions | null => {
      if (!brushSettings) {
        return null;
      }

      const { layout, x, y, width, height } = brushSettings;

      if (layout === 'vertical') {
        return {
          x: isNumber(x) ? x : offset.left + offset.width + VERTICAL_BRUSH_GAP,
          y: isNumber(y) ? y : offset.top,
          width: isNumber(width) ? width : 0,
          height: offset.height,
        };
      }

      // Horizontal layout (default)
      return {
        height,
        x: isNumber(x) ? x : offset.left,
        y: isNumber(y)
          ? y
          : offset.top + offset.height + offset.brushBottom - (margin?.bottom || 0),
        width: isNumber(width) ? width : offset.width,
      };
    },
  );

// Legacy selector for backward compatibility - returns the first brush dimensions or defaults
export const selectDefaultBrushDimensions: (state: RechartsRootState) => BrushDimensions = createSelector(
  [selectAllBrushSettings, selectChartOffset, selectMargin],
  (allBrushSettings, offset, margin): BrushDimensions => {
    const brushIds = Object.keys(allBrushSettings);
    const firstBrushSettings = brushIds.length > 0 ? allBrushSettings[brushIds[0]] : null;

    if (!firstBrushSettings) {
      // Return default dimensions when no brush is present
      return {
        height: 40,
        x: offset.left,
        y: offset.top + offset.height + offset.brushBottom - (margin?.bottom || 0),
        width: offset.width,
      };
    }

    const { layout, x, y, width, height } = firstBrushSettings;

    if (layout === 'vertical') {
      return {
        x: isNumber(x) ? x : offset.left + offset.width + VERTICAL_BRUSH_GAP,
        y: isNumber(y) ? y : offset.top,
        width: isNumber(width) ? width : 0,
        height: offset.height,
      };
    }

    // Horizontal layout (default)
    return {
      height,
      x: isNumber(x) ? x : offset.left,
      y: isNumber(y)
        ? y
        : offset.top + offset.height + offset.brushBottom - (margin?.bottom || 0),
      width: isNumber(width) ? width : offset.width,
    };
  },
);
