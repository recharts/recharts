import { createSelector } from 'reselect';

import { selectLegendSettings, selectLegendSize } from './legendSelectors';
import {
  CartesianViewBoxRequired,
  ChartOffsetInternal,
  Margin,
  OffsetHorizontal,
  OffsetVertical,
  Size,
} from '../../util/types';
import { XAxisSettings, YAxisSettings } from '../cartesianAxisSlice';
import { LegendSettings } from '../legendSlice';
import { appendOffsetOfLegend } from '../../util/ChartUtils';
import { selectChartHeight, selectChartWidth, selectMargin } from './containerSelectors';
import { selectAllXAxes, selectAllYAxes } from './selectAllAxes';
import { DEFAULT_Y_AXIS_WIDTH } from '../../util/Constants';
import { RechartsRootState } from '../store';

export const selectBrushHeight = (state: RechartsRootState) => state.brush.height;

function selectLeftAxesOffset(state: RechartsRootState): number {
  const yAxes = selectAllYAxes(state);
  return yAxes.reduce((result: number, entry: YAxisSettings): number => {
    if (entry.orientation === 'left' && !entry.mirror && !entry.hide) {
      const width = typeof entry.width === 'number' ? entry.width : DEFAULT_Y_AXIS_WIDTH;
      return result + width;
    }
    return result;
  }, 0);
}

function selectRightAxesOffset(state: RechartsRootState): number {
  const yAxes = selectAllYAxes(state);
  return yAxes.reduce((result: number, entry: YAxisSettings): number => {
    if (entry.orientation === 'right' && !entry.mirror && !entry.hide) {
      const width = typeof entry.width === 'number' ? entry.width : DEFAULT_Y_AXIS_WIDTH;
      return result + width;
    }
    return result;
  }, 0);
}

function selectTopAxesOffset(state: RechartsRootState): number {
  const xAxes = selectAllXAxes(state);
  return xAxes.reduce((result: number, entry: XAxisSettings): number => {
    if (entry.orientation === 'top' && !entry.mirror && !entry.hide) {
      return result + entry.height;
    }
    return result;
  }, 0);
}

function selectBottomAxesOffset(state: RechartsRootState): number {
  const xAxes = selectAllXAxes(state);
  return xAxes.reduce((result: number, entry: XAxisSettings): number => {
    if (entry.orientation === 'bottom' && !entry.mirror && !entry.hide) {
      return result + entry.height;
    }
    return result;
  }, 0);
}

/**
 * For internal use only.
 *
 * @param root state
 * @return ChartOffsetInternal
 */
export const selectChartOffsetInternal: (state: RechartsRootState) => ChartOffsetInternal = createSelector(
  [
    selectChartWidth,
    selectChartHeight,
    selectMargin,
    selectBrushHeight,
    selectLeftAxesOffset,
    selectRightAxesOffset,
    selectTopAxesOffset,
    selectBottomAxesOffset,
    selectLegendSettings,
    selectLegendSize,
  ],
  (
    chartWidth: number,
    chartHeight: number,
    margin: Margin,
    brushHeight: number,
    leftAxesOffset: number,
    rightAxesOffset: number,
    topAxesOffset: number,
    bottomAxesOffset: number,
    legendSettings: LegendSettings,
    legendSize: Size,
  ): ChartOffsetInternal => {
    const offsetH: OffsetHorizontal = {
      left: (margin.left || 0) + leftAxesOffset,
      right: (margin.right || 0) + rightAxesOffset,
    };

    const offsetV: OffsetVertical = {
      top: (margin.top || 0) + topAxesOffset,
      bottom: (margin.bottom || 0) + bottomAxesOffset,
    };

    let offset = { ...offsetV, ...offsetH };

    const brushBottom = offset.bottom;

    offset.bottom += brushHeight;

    offset = appendOffsetOfLegend(offset, legendSettings, legendSize);

    const offsetWidth = chartWidth - offset.left - offset.right;
    const offsetHeight = chartHeight - offset.top - offset.bottom;

    return {
      brushBottom,
      ...offset,
      // never return negative values for height and width
      width: Math.max(offsetWidth, 0),
      height: Math.max(offsetHeight, 0),
    };
  },
);

export const selectChartViewBox = createSelector(
  selectChartOffsetInternal,
  (offset: ChartOffsetInternal): CartesianViewBoxRequired => ({
    x: offset.left,
    y: offset.top,
    width: offset.width,
    height: offset.height,
  }),
);

export const selectAxisViewBox = createSelector(
  selectChartWidth,
  selectChartHeight,
  (width: number, height: number): CartesianViewBoxRequired => ({
    x: 0,
    y: 0,
    width,
    height,
  }),
);
