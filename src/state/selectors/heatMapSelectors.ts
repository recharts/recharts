import { ReactElement } from 'react';
import { createSelector } from 'reselect';
import { computeHeatMapCells, HeatMapCellItem } from '../../cartesian/HeatMap';
import { TickItem } from '../../util/types';
import { AxisId } from '../cartesianAxisSlice';
import { ChartData, ChartDataState } from '../chartDataSlice';
import { GraphicalItemId } from '../graphicalItemsSlice';
import { HeatMapSettings } from '../types/HeatMapSettings';
import { RechartsRootState } from '../store';
import { selectChartDataWithIndexesIfNotInPanoramaPosition4 } from './dataSelectors';
import {
  BaseAxisWithScale,
  selectAxisWithScale,
  selectTicksOfGraphicalItem,
  selectUnfilteredCartesianItems,
} from './axisSelectors';

const selectXAxisWithScale = (
  state: RechartsRootState,
  xAxisId: AxisId,
  _yAxisId: AxisId,
  _id: GraphicalItemId,
  _cells: ReadonlyArray<ReactElement> | undefined,
  isPanorama: boolean,
) => selectAxisWithScale(state, 'xAxis', xAxisId, isPanorama);

const selectXAxisTicks = (
  state: RechartsRootState,
  xAxisId: AxisId,
  _yAxisId: AxisId,
  _id: GraphicalItemId,
  _cells: ReadonlyArray<ReactElement> | undefined,
  isPanorama: boolean,
) => selectTicksOfGraphicalItem(state, 'xAxis', xAxisId, isPanorama);

const selectYAxisWithScale = (
  state: RechartsRootState,
  _xAxisId: AxisId,
  yAxisId: AxisId,
  _id: GraphicalItemId,
  _cells: ReadonlyArray<ReactElement> | undefined,
  isPanorama: boolean,
) => selectAxisWithScale(state, 'yAxis', yAxisId, isPanorama);

const selectYAxisTicks = (
  state: RechartsRootState,
  _xAxisId: AxisId,
  yAxisId: AxisId,
  _id: GraphicalItemId,
  _cells: ReadonlyArray<ReactElement> | undefined,
  isPanorama: boolean,
) => selectTicksOfGraphicalItem(state, 'yAxis', yAxisId, isPanorama);

const pickHeatMapId = (_state: RechartsRootState, _xAxisId: AxisId, _yAxisId: AxisId, id: GraphicalItemId) => id;

const pickCells = (
  _state: RechartsRootState,
  _xAxisId: AxisId,
  _yAxisId: AxisId,
  _id: GraphicalItemId,
  cells: ReadonlyArray<ReactElement> | undefined,
): ReadonlyArray<ReactElement> | undefined => cells;

const heatMapChartDataSelector = (
  state: RechartsRootState,
  _xAxisId: AxisId,
  _yAxisId: AxisId,
  _id: GraphicalItemId,
  _cells: ReadonlyArray<ReactElement> | undefined,
  isPanorama: boolean,
): ChartDataState => selectChartDataWithIndexesIfNotInPanoramaPosition4(state, undefined, undefined, isPanorama);

const selectSynchronisedHeatMapSettings: (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  id: GraphicalItemId,
) => HeatMapSettings | undefined = createSelector(
  [selectUnfilteredCartesianItems, pickHeatMapId],
  (graphicalItems, id) =>
    graphicalItems.find((item): item is HeatMapSettings => item.type === 'heatMap' && item.id === id),
);

export const selectHeatMapCells: (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  id: GraphicalItemId,
  cells: ReadonlyArray<ReactElement> | undefined,
  isPanorama: boolean,
) => ReadonlyArray<HeatMapCellItem> | undefined = createSelector(
  [
    heatMapChartDataSelector,
    selectXAxisWithScale,
    selectXAxisTicks,
    selectYAxisWithScale,
    selectYAxisTicks,
    selectSynchronisedHeatMapSettings,
    pickCells,
  ],
  (
    { chartData, dataStartIndex, dataEndIndex }: ChartDataState,
    xAxis: BaseAxisWithScale | undefined,
    xAxisTicks: ReadonlyArray<TickItem> | undefined,
    yAxis: BaseAxisWithScale | undefined,
    yAxisTicks: ReadonlyArray<TickItem> | undefined,
    heatMapSettings: HeatMapSettings | undefined,
    cells,
  ): ReadonlyArray<HeatMapCellItem> | undefined => {
    if (heatMapSettings == null) {
      return undefined;
    }

    let displayedData: ChartData | undefined;
    if (heatMapSettings.data != null && heatMapSettings.data.length > 0) {
      displayedData = heatMapSettings.data;
    } else {
      displayedData = chartData?.slice(dataStartIndex, dataEndIndex + 1);
    }

    if (
      displayedData == null ||
      xAxis == null ||
      yAxis == null ||
      xAxisTicks == null ||
      yAxisTicks == null ||
      xAxisTicks.length === 0 ||
      yAxisTicks.length === 0
    ) {
      return undefined;
    }

    return computeHeatMapCells({
      displayedData,
      xAxis,
      yAxis,
      heatMapSettings,
      xAxisTicks,
      yAxisTicks,
      cells,
    });
  },
);
