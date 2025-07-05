import { createSelector } from 'reselect';
import { selectChartOffset } from './selectChartOffset';
import { selectChartHeight, selectChartWidth } from './containerSelectors';

export const selectPlotArea = createSelector(
  [selectChartOffset, selectChartWidth, selectChartHeight],
  (offset, chartWidth, chartHeight) => {
    if (!offset || chartWidth == null || chartHeight == null) {
      return undefined;
    }

    return {
      x: offset.left,
      y: offset.top,
      width: Math.max(0, chartWidth - offset.left - offset.right),
      height: Math.max(0, chartHeight - offset.top - offset.bottom),
    };
  },
);
