import { createSelector } from 'reselect';
import { selectChartOffsetInternal } from './selectChartOffsetInternal';
import { ChartOffsetInternal } from '../../util/types';
import { ChartOffset } from '../../types';

export const selectChartOffset = createSelector(
  [selectChartOffsetInternal],
  (offsetInternal: ChartOffsetInternal): ChartOffset => {
    if (!offsetInternal) {
      return undefined;
    }
    return {
      top: offsetInternal.top,
      bottom: offsetInternal.bottom,
      left: offsetInternal.left,
      right: offsetInternal.right,
    };
  },
);
