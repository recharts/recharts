import { createSelector } from '@reduxjs/toolkit';
import { ReactElement } from 'react';
import { computeScatterPoints, ScatterPointItem } from '../../cartesian/Scatter';
import { RechartsRootState } from '../store';
import { AxisId } from '../axisMapSlice';
import { selectChartDataWithIndexes } from './dataSelectors';
import { ChartData, ChartDataState } from '../chartDataSlice';
import { selectAxisWithScale, selectZAxisWithScale, selectTicksOfGraphicalItem, ZAxisWithScale } from './axisSelectors';
import { DataKey } from '../../util/types';
import { TooltipType } from '../../component/DefaultTooltipContent';

export type ResolvedScatterSettings = {
  data: ChartData | undefined;
  dataKey: DataKey<any> | undefined;
  tooltipType: TooltipType | undefined;
  name: string | number;
};

const selectXAxisWithScale = (state: RechartsRootState, xAxisId: AxisId) =>
  selectAxisWithScale(state, 'xAxis', xAxisId);
const selectXAxisTicks = (state: RechartsRootState, xAxisId: AxisId) =>
  selectTicksOfGraphicalItem(state, 'xAxis', xAxisId);
const selectYAxisWithScale = (state: RechartsRootState, _xAxisId: AxisId, yAxisId: AxisId) =>
  selectAxisWithScale(state, 'yAxis', yAxisId);
const selectYAxisTicks = (state: RechartsRootState, _xAxisId: AxisId, yAxisId: AxisId) =>
  selectTicksOfGraphicalItem(state, 'yAxis', yAxisId);
const selectZAxis = (state: RechartsRootState, _xAxisId: AxisId, _yAxisId: AxisId, zAxisId: AxisId) =>
  selectZAxisWithScale(state, 'zAxis', zAxisId);
const pickScatterSettings = (
  _state: RechartsRootState,
  _xAxisId: AxisId,
  _yAxisId: AxisId,
  _zAxisId: AxisId,
  scatterSettings: ResolvedScatterSettings,
) => scatterSettings;
const pickCells = (
  _state: RechartsRootState,
  _xAxisId: AxisId,
  _yAxisId: AxisId,
  _zAxisId: AxisId,
  _scatterSettings: ResolvedScatterSettings,
  cells: ReadonlyArray<ReactElement> | undefined,
): ReadonlyArray<ReactElement> | undefined => cells;
export const selectScatterPoints: (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  zAxisId: AxisId,
  scatterSettings: ResolvedScatterSettings,
  cells: ReadonlyArray<ReactElement> | undefined,
) => ReadonlyArray<ScatterPointItem> = createSelector(
  selectChartDataWithIndexes,
  selectXAxisWithScale,
  selectXAxisTicks,
  selectYAxisWithScale,
  selectYAxisTicks,
  selectZAxis,
  pickScatterSettings,
  pickCells,
  (
    { chartData, dataStartIndex, dataEndIndex }: ChartDataState,
    xAxis,
    xAxisTicks,
    yAxis,
    yAxisTicks,
    zAxis: ZAxisWithScale,
    scatterSettings: ResolvedScatterSettings,
    cells,
  ): ReadonlyArray<ScatterPointItem> | undefined => {
    let displayedData: ChartData | undefined;
    if (scatterSettings?.data?.length > 0) {
      displayedData = scatterSettings.data;
    } else {
      displayedData = chartData?.slice(dataStartIndex, dataEndIndex + 1);
    }

    if (
      displayedData == null ||
      xAxis == null ||
      yAxis == null ||
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
