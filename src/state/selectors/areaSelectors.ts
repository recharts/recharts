import { createSelector } from 'reselect';
import { SeriesPoint } from 'victory-vendor/d3-shape';
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
import { selectChartDataWithIndexesIfNotInPanoramaPosition3 } from './dataSelectors';
import { getBandSizeOfAxis, isCategoricalAxis, StackId } from '../../util/ChartUtils';
import { ChartData } from '../chartDataSlice';
import { getStackSeriesIdentifier } from '../../util/stacks/getStackSeriesIdentifier';
import { StackDataPoint, StackGroup, StackSeries, StackSeriesIdentifier } from '../../util/stacks/stackTypes';
import { AreaSettings } from '../types/AreaSettings';
import { GraphicalItemId } from '../graphicalItemsSlice';
import { selectChartBaseValue } from './rootPropsSelectors';
import { selectXAxisIdFromGraphicalItemId, selectYAxisIdFromGraphicalItemId } from './graphicalItemSelectors';

export interface AreaPointItem extends NullableCoordinate {
  x: number | null;
  y: number | null;
  value?: ReadonlyArray<unknown>;
  payload?: any;
}

export type ComputedArea = {
  points: ReadonlyArray<AreaPointItem>;
  baseLine: number | ReadonlyArray<AreaPointItem>;
  isRange: boolean;
};

const selectXAxisWithScale = (state: RechartsRootState, graphicalItemId: GraphicalItemId, isPanorama: boolean) =>
  selectAxisWithScale(state, 'xAxis', selectXAxisIdFromGraphicalItemId(state, graphicalItemId), isPanorama);

const selectXAxisTicks = (state: RechartsRootState, graphicalItemId: GraphicalItemId, isPanorama: boolean) =>
  selectTicksOfGraphicalItem(state, 'xAxis', selectXAxisIdFromGraphicalItemId(state, graphicalItemId), isPanorama);

const selectYAxisWithScale = (state: RechartsRootState, graphicalItemId: GraphicalItemId, isPanorama: boolean) =>
  selectAxisWithScale(state, 'yAxis', selectYAxisIdFromGraphicalItemId(state, graphicalItemId), isPanorama);

const selectYAxisTicks = (state: RechartsRootState, graphicalItemId: GraphicalItemId, isPanorama: boolean) =>
  selectTicksOfGraphicalItem(state, 'yAxis', selectYAxisIdFromGraphicalItemId(state, graphicalItemId), isPanorama);

const selectBandSize = createSelector(
  [selectChartLayout, selectXAxisWithScale, selectYAxisWithScale, selectXAxisTicks, selectYAxisTicks],
  (layout, xAxis, yAxis, xAxisTicks, yAxisTicks) => {
    if (isCategoricalAxis(layout, 'xAxis')) {
      return getBandSizeOfAxis(xAxis, xAxisTicks, false);
    }
    return getBandSizeOfAxis(yAxis, yAxisTicks, false);
  },
);

const pickAreaId = (_state: RechartsRootState, id: GraphicalItemId): GraphicalItemId => id;

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
  id: GraphicalItemId,
  isPanorama: boolean,
) => AreaSettings | undefined = createSelector(
  [selectUnfilteredCartesianItems, pickAreaId],
  (graphicalItems, id: GraphicalItemId) =>
    graphicalItems.filter(item => item.type === 'area').find(item => item.id === id),
);

const selectNumericalAxisType = (state: RechartsRootState): 'xAxis' | 'yAxis' => {
  const layout = selectChartLayout(state);
  const isXAxisCategorical = isCategoricalAxis(layout, 'xAxis');
  return isXAxisCategorical ? 'yAxis' : 'xAxis';
};

const selectNumericalAxisIdFromGraphicalItemId = (
  state: RechartsRootState,
  graphicalItemId: GraphicalItemId,
): AxisId => {
  const axisType = selectNumericalAxisType(state);
  if (axisType === 'yAxis') {
    return selectYAxisIdFromGraphicalItemId(state, graphicalItemId);
  }
  return selectXAxisIdFromGraphicalItemId(state, graphicalItemId);
};

const selectNumericalAxisStackGroups = (
  state: RechartsRootState,
  graphicalItemId: GraphicalItemId,
  isPanorama: boolean,
): Record<StackId, StackGroup> | undefined =>
  selectStackGroups(
    state,
    selectNumericalAxisType(state),
    selectNumericalAxisIdFromGraphicalItemId(state, graphicalItemId),
    isPanorama,
  );

export const selectGraphicalItemStackedData: (
  state: RechartsRootState,
  id: GraphicalItemId,
  isPanorama: boolean,
) => ReadonlyArray<StackDataPoint> | undefined = createSelector(
  [selectSynchronisedAreaSettings, selectNumericalAxisStackGroups],
  (areaSettings: AreaSettings | undefined, stackGroups: Record<StackId, StackGroup> | undefined) => {
    if (areaSettings == null || stackGroups == null) {
      return undefined;
    }
    const { stackId } = areaSettings;
    const stackSeriesIdentifier: StackSeriesIdentifier | undefined = getStackSeriesIdentifier(areaSettings);
    if (stackId == null || stackSeriesIdentifier == null) {
      return undefined;
    }
    const groups: ReadonlyArray<StackSeries> | undefined = stackGroups[stackId]?.stackedData;
    const found: StackSeries | undefined = groups?.find(v => v.key === stackSeriesIdentifier);
    if (found == null) {
      return undefined;
    }
    return found.map((item: SeriesPoint<StackDataPoint>): StackDataPoint => [item[0], item[1]]);
  },
);

export const selectArea: (
  state: RechartsRootState,
  id: GraphicalItemId,
  isPanorama: boolean,
) => ComputedArea | undefined = createSelector(
  [
    selectChartLayout,
    selectXAxisWithScale,
    selectYAxisWithScale,
    selectXAxisTicks,
    selectYAxisTicks,
    selectGraphicalItemStackedData,
    selectChartDataWithIndexesIfNotInPanoramaPosition3,
    selectBandSize,
    selectSynchronisedAreaSettings,
    selectChartBaseValue,
  ],
  (
    layout,
    xAxis,
    yAxis,
    xAxisTicks,
    yAxisTicks,
    stackedData: ReadonlyArray<StackDataPoint> | undefined,
    { chartData, dataStartIndex, dataEndIndex },
    bandSize,
    areaSettings,
    chartBaseValue,
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
