import { createSelector } from '@reduxjs/toolkit';
import get from 'lodash/get';
import { selectBrushHeight } from './brushSelectors';
import { selectAllXAxes, selectAllYAxes } from './axisSelectors';
import { selectLegendState } from './legendSelectors';
import { ChartOffset, Margin } from '../../util/types';
import { XAxisSettings, YAxisSettings } from '../axisMapSlice';
import { LegendState } from '../legendSlice';
import { appendOffsetOfLegend } from '../../util/ChartUtils';
import { selectChartHeight, selectChartWidth, selectMargin } from './containerSelectors';

export const selectChartOffset = createSelector(
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
