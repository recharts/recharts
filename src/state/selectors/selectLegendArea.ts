import { createSelector } from 'reselect';
import { RechartsRootState } from '../store';
import { CartesianViewBoxRequired, Margin } from '../../util/types';
import { selectChartHeight, selectChartWidth, selectMargin, selectTitleHeight } from './containerSelectors';

export const selectLegendArea: (state: RechartsRootState) => CartesianViewBoxRequired = createSelector(
  [selectChartWidth, selectChartHeight, selectMargin, selectTitleHeight],
  (chartWidth: number, chartHeight: number, margin: Margin, titleHeight: number) => {
    return {
      x: margin.left || 0,
      y: (margin.top || 0) + titleHeight,
      width: Math.max(chartWidth - (margin.left || 0) - (margin.right || 0), 0),
      height: Math.max(chartHeight - titleHeight - (margin.top || 0) - (margin.bottom || 0), 0),
    };
  },
);
