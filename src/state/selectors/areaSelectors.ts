import { createSelector } from '@reduxjs/toolkit';
import { Series } from 'victory-vendor/d3-shape';
import { Coordinate, DataKey } from '../../util/types';
import { BaseValue, computeArea } from '../../cartesian/Area';
import { selectAxisWithScale, selectStackGroups, selectTicksOfGraphicalItem, StackGroup } from './axisSelectors';
import { RechartsRootState } from '../store';
import { AxisId } from '../axisMapSlice';
import { selectChartLayout } from '../../context/chartLayoutContext';
import { selectChartDataWithIndexes } from './dataSelectors';
import { getBandSizeOfAxis, isCategoricalAxis, StackId } from '../../util/ChartUtils';
import { ChartData } from '../chartDataSlice';
import { Point as CurvePoint } from '../../shape/Curve';

export interface AreaPointItem extends CurvePoint {
  value?: number | number[];
  payload?: any;
}
export type AreaSettings = {
  connectNulls: boolean;
  baseValue: BaseValue | undefined;
  dataKey: DataKey<any>;
  stackId: StackId | undefined;
  data: ChartData | undefined;
};

export type ComputedArea = {
  points: ReadonlyArray<AreaPointItem>;
  baseLine: number | Coordinate[];
  isRange: boolean;
};

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

const selectGraphicalItemStackedData = (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  _isPanorama: boolean,
  areaSettings: AreaSettings,
) => {
  const layout = selectChartLayout(state);
  const isXAxisCategorical = isCategoricalAxis(layout, 'xAxis');
  let stackGroups: Record<StackId, StackGroup> | undefined;
  if (isXAxisCategorical) {
    stackGroups = selectStackGroups(state, 'yAxis', yAxisId);
  } else {
    stackGroups = selectStackGroups(state, 'xAxis', xAxisId);
  }
  if (stackGroups == null) {
    return undefined;
  }
  const { dataKey, stackId } = areaSettings;
  const groups: ReadonlyArray<Series<Record<string, unknown>, DataKey<any>>> = stackGroups[stackId]?.stackedData;
  return groups?.find(v => v.key === dataKey);
};

const pickAreaSettings = (
  _state: RechartsRootState,
  _xAxisId: AxisId,
  _yAxisId: AxisId,
  _isPanorama: boolean,
  areaSettings: AreaSettings,
) => areaSettings;

export const selectArea: (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  isPanorama: boolean,
  areaSettings: AreaSettings,
) => ComputedArea | undefined = createSelector(
  [
    selectChartLayout,
    selectXAxisWithScale,
    selectYAxisWithScale,
    selectXAxisTicks,
    selectYAxisTicks,
    selectGraphicalItemStackedData,
    selectChartDataWithIndexes,
    selectBandSize,
    pickAreaSettings,
  ],
  (
    layout,
    xAxis,
    yAxis,
    xAxisTicks,
    yAxisTicks,
    stackedData,
    { chartData, dataStartIndex, dataEndIndex },
    bandSize,
    areaSettings,
  ) => {
    if (
      (layout !== 'horizontal' && layout !== 'vertical') ||
      xAxis == null ||
      yAxis == null ||
      xAxisTicks == null ||
      yAxisTicks == null ||
      xAxisTicks.length === 0 ||
      yAxisTicks.length === 0
    ) {
      return undefined;
    }
    const { data } = areaSettings;

    let displayedData: ChartData | undefined;
    if (data?.length > 0) {
      displayedData = data;
    } else {
      displayedData = chartData?.slice(dataStartIndex, dataEndIndex + 1);
    }

    if (displayedData == null) {
      return undefined;
    }

    // Where is this supposed to come from? No charts have that as a prop.
    const chartBaseValue: undefined = undefined;

    return computeArea({
      layout,
      xAxis,
      yAxis,
      xAxisTicks,
      yAxisTicks,
      dataStartIndex,
      areaSettings,
      stackedData,
      displayedData,
      chartBaseValue,
      bandSize,
    });
  },
);
