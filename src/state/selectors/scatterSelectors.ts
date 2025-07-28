import { createSelector } from 'reselect';
import { ReactElement } from 'react';
import { computeScatterPoints, ScatterPointItem } from '../../cartesian/Scatter';
import { RechartsRootState } from '../store';
import { AxisId } from '../cartesianAxisSlice';
import { selectChartDataWithIndexesIfNotInPanorama } from './dataSelectors';
import { ChartData, ChartDataState } from '../chartDataSlice';
import {
  selectAxisWithScale,
  selectTicksOfGraphicalItem,
  selectUnfilteredCartesianItems,
  selectZAxisWithScale,
  ZAxisWithScale,
} from './axisSelectors';
import { ScatterSettings } from '../types/ScatterSettings';
import { GraphicalItemId } from '../graphicalItemsSlice';

const selectXAxisWithScale = (
  state: RechartsRootState,
  xAxisId: AxisId,
  _yAxisId: AxisId,
  _zAxisId: AxisId,
  _id: GraphicalItemId,
  _cells: ReadonlyArray<ReactElement> | undefined,
  isPanorama: boolean,
) => selectAxisWithScale(state, 'xAxis', xAxisId, isPanorama);

const selectXAxisTicks = (
  state: RechartsRootState,
  xAxisId: AxisId,
  _yAxisId: AxisId,
  _zAxisId: AxisId,
  _id: GraphicalItemId,
  _cells: ReadonlyArray<ReactElement> | undefined,
  isPanorama: boolean,
) => selectTicksOfGraphicalItem(state, 'xAxis', xAxisId, isPanorama);

const selectYAxisWithScale = (
  state: RechartsRootState,
  _xAxisId: AxisId,
  yAxisId: AxisId,
  _zAxisId: AxisId,
  _id: GraphicalItemId,
  _cells: ReadonlyArray<ReactElement> | undefined,
  isPanorama: boolean,
) => selectAxisWithScale(state, 'yAxis', yAxisId, isPanorama);

const selectYAxisTicks = (
  state: RechartsRootState,
  _xAxisId: AxisId,
  yAxisId: AxisId,
  _zAxisId: AxisId,
  _id: GraphicalItemId,
  _cells: ReadonlyArray<ReactElement> | undefined,
  isPanorama: boolean,
) => selectTicksOfGraphicalItem(state, 'yAxis', yAxisId, isPanorama);

const selectZAxis = (state: RechartsRootState, _xAxisId: AxisId, _yAxisId: AxisId, zAxisId: AxisId) =>
  selectZAxisWithScale(state, 'zAxis', zAxisId, false);

const pickScatterId = (
  _state: RechartsRootState,
  _xAxisId: AxisId,
  _yAxisId: AxisId,
  _zAxisId: AxisId,
  id: GraphicalItemId,
) => id;

const pickCells = (
  _state: RechartsRootState,
  _xAxisId: AxisId,
  _yAxisId: AxisId,
  _zAxisId: AxisId,
  _id: GraphicalItemId,
  cells: ReadonlyArray<ReactElement> | undefined,
): ReadonlyArray<ReactElement> | undefined => cells;

const scatterChartDataSelector = (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  _zAxisId: AxisId,
  _id: GraphicalItemId,
  _cells: ReadonlyArray<ReactElement> | undefined,
  isPanorama: boolean,
): ChartDataState => selectChartDataWithIndexesIfNotInPanorama(state, xAxisId, yAxisId, isPanorama);

const selectSynchronisedScatterSettings: (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  _zAxisId: AxisId,
  id: GraphicalItemId,
) => ScatterSettings | undefined = createSelector(
  [selectUnfilteredCartesianItems, pickScatterId],
  (graphicalItems, id) => {
    return graphicalItems.filter(item => item.type === 'scatter').find(item => item.id === id);
  },
);

export const selectScatterPoints: (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  zAxisId: AxisId,
  id: GraphicalItemId,
  cells: ReadonlyArray<ReactElement> | undefined,
  isPanorama: boolean,
) => ReadonlyArray<ScatterPointItem> | undefined = createSelector(
  [
    scatterChartDataSelector,
    selectXAxisWithScale,
    selectXAxisTicks,
    selectYAxisWithScale,
    selectYAxisTicks,
    selectZAxis,
    selectSynchronisedScatterSettings,
    pickCells,
  ],
  (
    { chartData, dataStartIndex, dataEndIndex }: ChartDataState,
    xAxis,
    xAxisTicks,
    yAxis,
    yAxisTicks,
    zAxis: ZAxisWithScale,
    scatterSettings: ScatterSettings,
    cells,
  ): ReadonlyArray<ScatterPointItem> | undefined => {
    if (scatterSettings == null) {
      return undefined;
    }
    let displayedData: ChartData | undefined;
    if (scatterSettings?.data != null && scatterSettings.data.length > 0) {
      displayedData = scatterSettings.data;
    } else {
      displayedData = chartData?.slice(dataStartIndex, dataEndIndex + 1);
    }
    if (
      displayedData == null ||
      xAxis == null ||
      yAxis == null ||
      xAxisTicks == null ||
      yAxisTicks == null ||
      xAxisTicks?.length === 0 ||
      yAxisTicks?.length === 0
    ) {
      return undefined;
    }
    return computeScatterPoints({
      displayedData,
      xAxis,
      yAxis,
      zAxis,
      scatterSettings,
      xAxisTicks,
      yAxisTicks,
      cells,
    });
  },
);
