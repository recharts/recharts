import { createSelector } from 'reselect';

import get from 'es-toolkit/compat/get';
import { selectLegendSettings, selectLegendSize } from './legendSelectors';
import {
  CartesianViewBoxRequired,
  ChartOffsetRequired,
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

export const selectChartOffset: (state: RechartsRootState) => ChartOffsetRequired = createSelector(
  [
    selectChartWidth,
    selectChartHeight,
    selectMargin,
    selectBrushHeight,
    selectAllXAxes,
    selectAllYAxes,
    selectLegendSettings,
    selectLegendSize,
  ],
  (
    chartWidth: number,
    chartHeight: number,
    margin: Margin,
    brushHeight: number,
    xAxes: XAxisSettings[],
    yAxes: YAxisSettings[],
    legendSettings: LegendSettings,
    legendSize: Size,
  ): ChartOffsetRequired => {
    const offsetH: OffsetHorizontal = yAxes.reduce(
      (result: OffsetHorizontal, entry: YAxisSettings): OffsetHorizontal => {
        const { orientation } = entry;

        if (!entry.mirror && !entry.hide) {
          const width = typeof entry.width === 'number' ? entry.width : DEFAULT_Y_AXIS_WIDTH;
          return { ...result, [orientation]: result[orientation] + width };
        }

        return result;
      },
      { left: margin.left || 0, right: margin.right || 0 },
    );

    const offsetV: OffsetVertical = xAxes.reduce(
      (result: OffsetVertical, entry: XAxisSettings): OffsetVertical => {
        const { orientation } = entry;

        if (!entry.mirror && !entry.hide) {
          return { ...result, [orientation]: get(result, `${orientation}`) + entry.height };
        }

        return result;
      },
      { top: margin.top || 0, bottom: margin.bottom || 0 },
    );

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
  selectChartOffset,
  (offset: ChartOffsetRequired): CartesianViewBoxRequired => ({
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
