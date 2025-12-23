import { createSelector } from 'reselect';
import { RechartsRootState } from '../store';
import { CartesianViewBoxRequired, Margin } from '../../util/types';
import { selectChartHeight, selectChartWidth, selectMargin } from './containerSelectors';

export const selectLegendArea: (state: RechartsRootState) => CartesianViewBoxRequired = createSelector(
  [selectChartWidth, selectChartHeight, selectMargin],
  (chartWidth: number, chartHeight: number, margin: Margin) => {
    return {
      x: margin.left || 0,
      y: margin.top || 0,
      width: Math.max(chartWidth - (margin.left || 0) - (margin.right || 0), 0),
      height: Math.max(chartHeight - (margin.top || 0) - (margin.bottom || 0), 0),
    };
  },
);
