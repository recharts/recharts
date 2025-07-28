import { createSelector } from 'reselect';
import { Series } from 'victory-vendor/d3-shape';
import { NullableCoordinate } from '../../util/types';
import { computeArea } from '../../cartesian/Area';
import {
  selectAxisWithScale,
  selectStackGroups,
  selectTicksOfGraphicalItem,
  selectUnfilteredCartesianItems,
} from './axisSelectors';
import { RechartsRootState } from '../store';
import { AxisId } from '../cartesianAxisSlice';
import { selectChartLayout } from '../../context/chartLayoutContext';
import { selectChartDataWithIndexesIfNotInPanorama } from './dataSelectors';
import { getBandSizeOfAxis, isCategoricalAxis, StackId } from '../../util/ChartUtils';
import { ChartData } from '../chartDataSlice';
import { NullablePoint } from '../../shape/Curve';
import { getStackSeriesIdentifier } from '../../util/stacks/getStackSeriesIdentifier';
import { StackDataPoint, StackGroup, StackSeriesIdentifier } from '../../util/stacks/stackTypes';
import { AreaSettings } from '../types/AreaSettings';
import { GraphicalItemId } from '../graphicalItemsSlice';

export interface AreaPointItem extends NullablePoint {
  x: number | null;
  y: number | null;
  value?: number | number[];
  payload?: any;
}

export type ComputedArea = {
  points: ReadonlyArray<AreaPointItem>;
  baseLine: number | NullableCoordinate[];
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

const pickAreaId = (
  _state: RechartsRootState,
  _xAxisId: AxisId,
  _yAxisId: AxisId,
  _isPanorama: boolean,
  id: GraphicalItemId,
): GraphicalItemId => id;

/*
 * There is a race condition problem because we read some data from props and some from the state.
 * The state is updated through a dispatch and is one render behind,
 * and so we have this weird one tick render where the displayedData in one selector have the old dataKey
 * but the new dataKey in another selector.
 *
 * A proper fix is to either move everything into the state, or read the dataKey always from props
 * - but this is a smaller change.
 */
const selectSynchronisedAreaSettings: (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  isPanorama: boolean,
  id: GraphicalItemId,
) => AreaSettings | undefined = createSelector(
  [selectUnfilteredCartesianItems, pickAreaId],
  (graphicalItems, id: GraphicalItemId) =>
    graphicalItems.filter(item => item.type === 'area').find(item => item.id === id),
);

export const selectGraphicalItemStackedData = (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  isPanorama: boolean,
  id: GraphicalItemId,
) => {
  const areaSettings = selectSynchronisedAreaSettings(state, xAxisId, yAxisId, isPanorama, id);
  if (areaSettings == null) {
    return undefined;
  }
  const layout = selectChartLayout(state);
  const isXAxisCategorical = isCategoricalAxis(layout, 'xAxis');
  let stackGroups: Record<StackId, StackGroup> | undefined;
  if (isXAxisCategorical) {
    stackGroups = selectStackGroups(state, 'yAxis', yAxisId, isPanorama);
  } else {
    stackGroups = selectStackGroups(state, 'xAxis', xAxisId, isPanorama);
  }
  if (stackGroups == null) {
    return undefined;
  }
  const { stackId } = areaSettings;
  const stackSeriesIdentifier: StackSeriesIdentifier | undefined = getStackSeriesIdentifier(areaSettings);
  if (stackId == null || stackSeriesIdentifier == null) {
    return undefined;
  }
  const groups: ReadonlyArray<Series<StackDataPoint, StackSeriesIdentifier>> = stackGroups[stackId]?.stackedData;
  return groups?.find(v => v.key === stackSeriesIdentifier);
};

export const selectArea: (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  isPanorama: boolean,
  id: GraphicalItemId,
) => ComputedArea | undefined = createSelector(
  [
    selectChartLayout,
    selectXAxisWithScale,
    selectYAxisWithScale,
    selectXAxisTicks,
    selectYAxisTicks,
    selectGraphicalItemStackedData,
    selectChartDataWithIndexesIfNotInPanorama,
    selectBandSize,
    selectSynchronisedAreaSettings,
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
      areaSettings == null ||
      (layout !== 'horizontal' && layout !== 'vertical') ||
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
    const { data } = areaSettings;

    let displayedData: ChartData | undefined;
    if (data && data.length > 0) {
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
