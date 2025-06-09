import { createSelector } from 'reselect';
// @ts-expect-error not installing types for lodash.get, I just want to see the bundle size difference
import get from 'lodash.get';
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
import { RechartsRootState } from '../store';
import { BrushState } from '../brushSlice';

export const selectBrushHeight = (state: RechartsRootState) => {
  const brushes = Object.values(state.brush.brushes);
  const horizontalBrush = brushes.find(brush => brush.layout !== 'vertical');
  return horizontalBrush?.height || 0;
};

const selectBrushState = (state: RechartsRootState): BrushState => state.brush;
const VERTICAL_BRUSH_GAP = 10;

export const selectChartOffset: (state: RechartsRootState) => ChartOffsetRequired = createSelector(
  [
    selectChartWidth,
    selectChartHeight,
    selectMargin,
    selectBrushState,
    selectAllXAxes,
    selectAllYAxes,
    selectLegendSettings,
    selectLegendSize,
  ],
  (
    chartWidth: number,
    chartHeight: number,
    margin: Margin,
    brushState: BrushState,
    xAxes: XAxisSettings[],
    yAxes: YAxisSettings[],
    legendSettings: LegendSettings,
    legendSize: Size,
  ): ChartOffsetRequired => {
    const offsetH: OffsetHorizontal = yAxes.reduce(
      (result: OffsetHorizontal, entry: YAxisSettings): OffsetHorizontal => {
        const { orientation } = entry;

        if (!entry.mirror && !entry.hide) {
          return { ...result, [orientation]: result[orientation] + entry.width };
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

    // Handle multiple brushes
    const brushes = Object.values(brushState.brushes);
    brushes.forEach(brushSettings => {
      if (brushSettings.layout === 'vertical') {
        offset.right += (brushSettings.width || 0) + VERTICAL_BRUSH_GAP;
      } else {
        offset.bottom += brushSettings.height;
      }
    });

    offset = appendOffsetOfLegend(offset, legendSettings, legendSize);

    const offsetWidth = chartWidth - offset.left - offset.right;
    const offsetHeight = chartHeight - offset.top - offset.bottom;

    return {
      brushBottom,
      ...offset,
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
