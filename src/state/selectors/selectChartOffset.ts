import { createSelector } from 'reselect';
import get from 'lodash/get';
import { selectLegendState } from './legendSelectors';
import { CartesianViewBox, ChartOffset, Margin } from '../../util/types';
import { XAxisSettings, YAxisSettings } from '../cartesianAxisSlice';
import { LegendState } from '../legendSlice';
import { appendOffsetOfLegend } from '../../util/ChartUtils';
import { selectChartHeight, selectChartWidth, selectMargin } from './containerSelectors';
import { selectAllXAxes, selectAllYAxes } from './selectAllAxes';
import { RechartsRootState } from '../store';

export const selectBrushHeight = (state: RechartsRootState) => state.brush.height;

export const selectChartOffset: (state: RechartsRootState) => ChartOffset = createSelector(
  selectChartWidth,
  selectChartHeight,
  selectMargin,
  selectBrushHeight,
  selectAllXAxes,
  selectAllYAxes,
  selectLegendState,
  (
    chartWidth: number,
    chartHeight: number,
    margin: Margin,
    brushHeight: number,
    xAxes: XAxisSettings[],
    yAxes: YAxisSettings[],
    legendState: LegendState,
  ): ChartOffset => {
    const offsetH = yAxes.reduce(
      (result, entry) => {
        const { orientation } = entry;

        if (!entry.mirror && !entry.hide) {
          return { ...result, [orientation]: result[orientation] + entry.width };
        }

        return result;
      },
      { left: margin.left || 0, right: margin.right || 0 },
    );

    const offsetV = xAxes.reduce(
      (result, entry) => {
        const { orientation } = entry;

        if (!entry.mirror && !entry.hide) {
          return { ...result, [orientation]: get(result, `${orientation}`) + entry.height };
        }

        return result;
      },
      { top: margin.top || 0, bottom: margin.bottom || 0 },
    );

    let offset: ChartOffset = { ...offsetV, ...offsetH };

    const brushBottom = offset.bottom;

    offset.bottom += brushHeight;

    offset = appendOffsetOfLegend(offset, legendState);

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
  selectChartOffset,
  (offset: ChartOffset): CartesianViewBox => ({
    x: offset.left,
    y: offset.top,
    width: offset.width,
    height: offset.height,
  }),
);

export const selectAxisViewBox = createSelector(
  selectChartWidth,
  selectChartHeight,
  (width: number, height: number): CartesianViewBox => ({
    x: 0,
    y: 0,
    width,
    height,
  }),
);
