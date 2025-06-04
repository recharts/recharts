import { createSelector } from 'reselect';
import { ReactElement } from 'react';
import { computeScatterPoints, ScatterPointItem } from '../../cartesian/Scatter';
import { RechartsRootState } from '../store';
import { AxisId } from '../cartesianAxisSlice';
import { selectChartDataWithIndexesIfNotInPanorama } from './dataSelectors';
import { ChartData, ChartDataState } from '../chartDataSlice';
import {
  selectAxisWithScale,
  selectZAxisWithScale,
  selectTicksOfGraphicalItem,
  ZAxisWithScale,
  selectUnfilteredCartesianItems,
} from './axisSelectors';
import { DataKey } from '../../util/types';
import { TooltipType } from '../../component/DefaultTooltipContent';

export type ResolvedScatterSettings = {
  data: ChartData | undefined;
  dataKey: DataKey<any> | undefined;
  tooltipType: TooltipType | undefined;
  name: string | number | undefined;
};

const selectXAxisWithScale = (
  state: RechartsRootState,
  xAxisId: AxisId,
  _yAxisId: AxisId,
  _zAxisId: AxisId,
  _scatterSettings: ResolvedScatterSettings,
  _cells: ReadonlyArray<ReactElement> | undefined,
  isPanorama: boolean,
) => selectAxisWithScale(state, 'xAxis', xAxisId, isPanorama);

const selectXAxisTicks = (
  state: RechartsRootState,
  xAxisId: AxisId,
  _yAxisId: AxisId,
  _zAxisId: AxisId,
  _scatterSettings: ResolvedScatterSettings,
  _cells: ReadonlyArray<ReactElement> | undefined,
  isPanorama: boolean,
) => selectTicksOfGraphicalItem(state, 'xAxis', xAxisId, isPanorama);

const selectYAxisWithScale = (
  state: RechartsRootState,
  _xAxisId: AxisId,
  yAxisId: AxisId,
  _zAxisId: AxisId,
  _scatterSettings: ResolvedScatterSettings,
  _cells: ReadonlyArray<ReactElement> | undefined,
  isPanorama: boolean,
) => selectAxisWithScale(state, 'yAxis', yAxisId, isPanorama);

const selectYAxisTicks = (
  state: RechartsRootState,
  _xAxisId: AxisId,
  yAxisId: AxisId,
  _zAxisId: AxisId,
  _scatterSettings: ResolvedScatterSettings,
  _cells: ReadonlyArray<ReactElement> | undefined,
  isPanorama: boolean,
) => selectTicksOfGraphicalItem(state, 'yAxis', yAxisId, isPanorama);

const selectZAxis = (state: RechartsRootState, _xAxisId: AxisId, _yAxisId: AxisId, zAxisId: AxisId) =>
  selectZAxisWithScale(state, 'zAxis', zAxisId, false);

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

const scatterChartDataSelector = (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  _zAxisId: AxisId,
  _scatterSettings: ResolvedScatterSettings,
  _cells: ReadonlyArray<ReactElement> | undefined,
  isPanorama: boolean,
): ChartDataState => selectChartDataWithIndexesIfNotInPanorama(state, xAxisId, yAxisId, isPanorama);

const selectSynchronisedScatterSettings: (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  _zAxisId: AxisId,
  scatterSettings: ResolvedScatterSettings,
) => ResolvedScatterSettings | undefined = createSelector(
  [selectUnfilteredCartesianItems, pickScatterSettings],
  (graphicalItems, scatterSettingsFromProps) => {
    if (
      graphicalItems.some(
        cgis =>
          cgis.type === 'scatter' &&
          scatterSettingsFromProps.dataKey === cgis.dataKey &&
          scatterSettingsFromProps.data === cgis.data,
      )
    ) {
      return scatterSettingsFromProps;
    }
    return undefined;
  },
);

export const selectScatterPoints: (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  zAxisId: AxisId,
  scatterSettings: ResolvedScatterSettings,
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
    scatterSettings: ResolvedScatterSettings,
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
