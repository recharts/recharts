import { createSelector } from 'reselect';
import { computeLinePoints, LinePointItem } from '../../cartesian/Line';
import { RechartsRootState } from '../store';
import { AxisId } from '../cartesianAxisSlice';
import { selectChartDataWithIndexesIfNotInPanorama } from './dataSelectors';
import { selectChartLayout } from '../../context/chartLayoutContext';
import { selectAxisWithScale, selectTicksOfGraphicalItem, selectUnfilteredCartesianItems } from './axisSelectors';
import { getBandSizeOfAxis, isCategoricalAxis } from '../../util/ChartUtils';
import { ChartData } from '../chartDataSlice';
import { CartesianGraphicalItemSettings, GraphicalItemId } from '../graphicalItemsSlice';
import { LineSettings } from '../types/LineSettings';

const selectXAxisWithScale = (state: RechartsRootState, xAxisId: AxisId, _yAxisId: AxisId, isPanorama: boolean) =>
  selectAxisWithScale(state, 'xAxis', xAxisId, isPanorama);

const selectXAxisTicks = (state: RechartsRootState, xAxisId: AxisId, _yAxisId: AxisId, isPanorama: boolean) =>
  selectTicksOfGraphicalItem(state, 'xAxis', xAxisId, isPanorama);

const selectYAxisWithScale = (state: RechartsRootState, _xAxisId: AxisId, yAxisId: AxisId, isPanorama: boolean) =>
  selectAxisWithScale(state, 'yAxis', yAxisId, isPanorama);

const selectYAxisTicks = (state: RechartsRootState, _xAxisId: AxisId, yAxisId: AxisId, isPanorama: boolean) =>
  selectTicksOfGraphicalItem(state, 'yAxis', yAxisId, isPanorama);

const selectBandSize = createSelector(
  [selectChartLayout, selectXAxisWithScale, selectYAxisWithScale, selectXAxisTicks, selectYAxisTicks],
  (layout, xAxis, yAxis, xAxisTicks, yAxisTicks) => {
    if (isCategoricalAxis(layout, 'xAxis')) {
      return getBandSizeOfAxis(xAxis, xAxisTicks, false);
    }
    return getBandSizeOfAxis(yAxis, yAxisTicks, false);
  },
);

const pickLineId = (
  _state: RechartsRootState,
  _xAxisId: AxisId,
  _yAxisId: AxisId,
  _isPanorama: boolean,
  id: GraphicalItemId,
) => id;

function isLineSettings(item: CartesianGraphicalItemSettings): item is LineSettings {
  return item.type === 'line';
}

/*
 * There is a race condition problem because we read some data from props and some from the state.
 * The state is updated through a dispatch and is one render behind,
 * and so we have this weird one tick render where the displayedData in one selector have the old dataKey
 * but the new dataKey in another selector.
 *
 * So here instead of reading the dataKey from the props, we always read it from the state.
 */
const selectSynchronisedLineSettings: (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  isPanorama: boolean,
  id: GraphicalItemId,
) => LineSettings | undefined = createSelector(
  [selectUnfilteredCartesianItems, pickLineId],
  (graphicalItems, id: GraphicalItemId): LineSettings | undefined =>
    graphicalItems.filter(isLineSettings).find(x => x.id === id),
);

export const selectLinePoints: (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  isPanorama: boolean,
  id: GraphicalItemId,
) => ReadonlyArray<LinePointItem> | undefined = createSelector(
  [
    selectChartLayout,
    selectXAxisWithScale,
    selectYAxisWithScale,
    selectXAxisTicks,
    selectYAxisTicks,
    selectSynchronisedLineSettings,
    selectBandSize,
    selectChartDataWithIndexesIfNotInPanorama,
  ],
  (
    layout,
    xAxis,
    yAxis,
    xAxisTicks,
    yAxisTicks,
    lineSettings,
    bandSize,
    { chartData, dataStartIndex, dataEndIndex },
  ): ReadonlyArray<LinePointItem> | undefined => {
    if (
      lineSettings == null ||
      xAxis == null ||
      yAxis == null ||
      xAxisTicks == null ||
      yAxisTicks == null ||
      xAxisTicks.length === 0 ||
      yAxisTicks.length === 0 ||
      bandSize == null
    ) {
      return undefined;
    }

    const { dataKey, data } = lineSettings;
    let displayedData: ChartData | undefined;

    if (data != null && data.length > 0) {
      displayedData = data;
    } else {
      displayedData = chartData?.slice(dataStartIndex, dataEndIndex + 1);
    }

    if (displayedData == null) {
      return undefined;
    }

    return computeLinePoints({ layout, xAxis, yAxis, xAxisTicks, yAxisTicks, dataKey, bandSize, displayedData });
  },
);
