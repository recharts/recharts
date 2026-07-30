import { createSelector } from 'reselect';
import { ReactElement } from 'react';
import { Series } from 'victory-vendor/d3-shape';
import { RechartsRootState } from '../store';
import {
  BaseAxisWithScale,
  selectAxisWithScale,
  selectCartesianAxisSize,
  selectStackGroups,
  selectTicksOfGraphicalItem,
  selectUnfilteredCartesianItems,
} from './axisSelectors';
import { isNullish, mathSign } from '../../util/DataUtils';
import { BarPositionPosition, getBandSizeOfAxis, StackId } from '../../util/ChartUtils';
import { minPointSizeCallback } from '../../util/BarUtils';
import { CartesianViewBoxRequired, ChartOffsetInternal, DataKey, LayoutType, TickItem } from '../../util/types';
import { BarRectangleItem, computeBarRectangles } from '../../cartesian/Bar';
import { selectChartLayout } from '../../context/chartLayoutContext';
import { ChartData } from '../chartDataSlice';
import { selectChartDataWithIndexesIfNotInPanoramaPosition3 } from './dataSelectors';
import { selectAxisViewBox, selectChartOffsetInternal } from './selectChartOffsetInternal';
import { selectBarCategoryGap, selectBarGap, selectRootBarSize, selectRootMaxBarSize } from './rootPropsSelectors';
import { AllStackGroups, StackDataPoint, StackSeriesIdentifier } from '../../util/stacks/stackTypes';
import { BarSettings } from '../types/BarSettings';
import { GraphicalItemId } from '../graphicalItemsSlice';
import { BarCategory, combineBarSizeList } from './combiners/combineBarSizeList';
import { combineAllBarPositions } from './combiners/combineAllBarPositions';
import { combineStackedData } from './combiners/combineStackedData';
import { selectXAxisIdFromGraphicalItemId, selectYAxisIdFromGraphicalItemId } from './graphicalItemSelectors';
import { combineBarPosition } from './combiners/combineBarPosition';

const pickIsPanorama = (_state: RechartsRootState, _id: GraphicalItemId, isPanorama: boolean): boolean => isPanorama;

const pickBarId = (_state: RechartsRootState, id: GraphicalItemId): GraphicalItemId => id;

const selectSynchronisedBarSettings: (state: RechartsRootState, id: GraphicalItemId) => BarSettings | undefined =
  createSelector([selectUnfilteredCartesianItems, pickBarId], (graphicalItems, id: GraphicalItemId) =>
    graphicalItems.filter(item => item.type === 'bar').find(item => item.id === id),
  );

export const selectMaxBarSize: (_state: RechartsRootState, id: GraphicalItemId) => number | undefined = createSelector(
  [selectSynchronisedBarSettings],
  (barSettings: BarSettings | undefined) => barSettings?.maxBarSize,
);

const pickCells = (
  _state: RechartsRootState,
  _id: GraphicalItemId,
  _isPanorama: boolean,
  cells: ReadonlyArray<ReactElement> | undefined,
): ReadonlyArray<ReactElement> | undefined => cells;

export const selectAllVisibleBars: (
  state: RechartsRootState,
  id: GraphicalItemId,
  isPanorama: boolean,
) => ReadonlyArray<BarSettings> = createSelector(
  [
    selectChartLayout,
    selectUnfilteredCartesianItems,
    selectXAxisIdFromGraphicalItemId,
    selectYAxisIdFromGraphicalItemId,
    pickIsPanorama,
  ],
  (layout: LayoutType, allItems, xAxisId, yAxisId, isPanorama) =>
    allItems
      .filter(i => {
        if (layout === 'horizontal') {
          return i.xAxisId === xAxisId;
        }
        return i.yAxisId === yAxisId;
      })
      .filter(i => i.isPanorama === isPanorama)
      .filter(i => i.hide === false)
      .filter(i => i.type === 'bar'),
);

export type SizeList = ReadonlyArray<BarCategory>;

const selectBarStackGroups = (
  state: RechartsRootState,
  id: GraphicalItemId,
  isPanorama: boolean,
): AllStackGroups | undefined => {
  const layout = selectChartLayout(state);
  const xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
  const yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
  if (xAxisId == null || yAxisId == null) {
    return undefined;
  }
  if (layout === 'horizontal') {
    return selectStackGroups(state, 'yAxis', yAxisId, isPanorama);
  }
  return selectStackGroups(state, 'xAxis', xAxisId, isPanorama);
};

export const selectBarCartesianAxisSize = (state: RechartsRootState, id: GraphicalItemId) => {
  const layout = selectChartLayout(state);
  const xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
  const yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
  if (xAxisId == null || yAxisId == null) {
    return undefined;
  }
  if (layout === 'horizontal') {
    return selectCartesianAxisSize(state, 'xAxis', xAxisId);
  }
  return selectCartesianAxisSize(state, 'yAxis', yAxisId);
};

export const selectBarSizeList: (state: RechartsRootState, id: GraphicalItemId, isPanorama: boolean) => SizeList =
  createSelector([selectAllVisibleBars, selectRootBarSize, selectBarCartesianAxisSize], combineBarSizeList);

export const selectBarBandSize: (state: RechartsRootState, id: GraphicalItemId, isPanorama: boolean) => number = (
  state: RechartsRootState,
  id: GraphicalItemId,
  isPanorama: boolean,
): number => {
  const barSettings: BarSettings | undefined = selectSynchronisedBarSettings(state, id);
  if (barSettings == null) {
    return 0;
  }
  const xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
  const yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
  if (xAxisId == null || yAxisId == null) {
    return 0;
  }
  const layout = selectChartLayout(state);
  const globalMaxBarSize: number | undefined = selectRootMaxBarSize(state);
  const { maxBarSize: childMaxBarSize } = barSettings;
  const maxBarSize: number | undefined = isNullish(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
  let axis: BaseAxisWithScale | undefined, ticks: ReadonlyArray<TickItem> | undefined;
  if (layout === 'horizontal') {
    axis = selectAxisWithScale(state, 'xAxis', xAxisId, isPanorama);
    ticks = selectTicksOfGraphicalItem(state, 'xAxis', xAxisId, isPanorama);
  } else {
    axis = selectAxisWithScale(state, 'yAxis', yAxisId, isPanorama);
    ticks = selectTicksOfGraphicalItem(state, 'yAxis', yAxisId, isPanorama);
  }
  return getBandSizeOfAxis(axis, ticks, true) ?? maxBarSize ?? 0;
};

export const selectAxisBandSize = (
  state: RechartsRootState,
  id: GraphicalItemId,
  isPanorama: boolean,
): number | undefined => {
  const layout = selectChartLayout(state);
  const xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
  const yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
  if (xAxisId == null || yAxisId == null) {
    return undefined;
  }
  let axis: BaseAxisWithScale | undefined, ticks: ReadonlyArray<TickItem> | undefined;
  if (layout === 'horizontal') {
    axis = selectAxisWithScale(state, 'xAxis', xAxisId, isPanorama);
    ticks = selectTicksOfGraphicalItem(state, 'xAxis', xAxisId, isPanorama);
  } else {
    axis = selectAxisWithScale(state, 'yAxis', yAxisId, isPanorama);
    ticks = selectTicksOfGraphicalItem(state, 'yAxis', yAxisId, isPanorama);
  }
  return getBandSizeOfAxis(axis, ticks);
};

export type BarWithPosition = {
  stackId: StackId | undefined;
  /**
   * List of dataKeys of items stacked at this position.
   * All of these Bars are either sharing the same stackId,
   * or this is an array with one Bar because it has no stackId defined.
   *
   * This structure limits us to having one dataKey only once per stack which I think is reasonable.
   * People who want to have the same data twice can duplicate their data to have two distinct dataKeys.
   */
  dataKeys: ReadonlyArray<DataKey<any>>;
  /**
   * Position of this stack in absolute pixels measured from the start of the chart
   */
  position: BarPositionPosition;
};

export const selectAllBarPositions: (
  state: RechartsRootState,
  id: GraphicalItemId,
  isPanorama: boolean,
) => ReadonlyArray<BarWithPosition> | undefined = createSelector(
  [
    selectBarSizeList,
    selectRootMaxBarSize,
    selectBarGap,
    selectBarCategoryGap,
    selectBarBandSize,
    selectAxisBandSize,
    selectMaxBarSize,
  ],
  combineAllBarPositions,
);

const selectXAxisWithScale = (state: RechartsRootState, id: GraphicalItemId, isPanorama: boolean) => {
  const xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
  if (xAxisId == null) {
    return undefined;
  }
  return selectAxisWithScale(state, 'xAxis', xAxisId, isPanorama);
};

const selectYAxisWithScale = (state: RechartsRootState, id: GraphicalItemId, isPanorama: boolean) => {
  const yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
  if (yAxisId == null) {
    return undefined;
  }
  return selectAxisWithScale(state, 'yAxis', yAxisId, isPanorama);
};

const selectXAxisTicks = (state: RechartsRootState, id: GraphicalItemId, isPanorama: boolean) => {
  const xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
  if (xAxisId == null) {
    return undefined;
  }
  return selectTicksOfGraphicalItem(state, 'xAxis', xAxisId, isPanorama);
};

const selectYAxisTicks = (state: RechartsRootState, id: GraphicalItemId, isPanorama: boolean) => {
  const yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
  if (yAxisId == null) {
    return undefined;
  }
  return selectTicksOfGraphicalItem(state, 'yAxis', yAxisId, isPanorama);
};

export const selectBarPosition: (
  state: RechartsRootState,
  id: GraphicalItemId,
  isPanorama: boolean,
) => BarPositionPosition | undefined = createSelector(
  [selectAllBarPositions, selectSynchronisedBarSettings],
  combineBarPosition,
);

export const selectStackedDataOfItem: (
  state: RechartsRootState,
  id: GraphicalItemId,
  isPanorama: boolean,
) => Series<StackDataPoint, StackSeriesIdentifier> | undefined = createSelector(
  [selectBarStackGroups, selectSynchronisedBarSettings],
  combineStackedData,
);

/**
 * When a stacked segment is shorter than its `minPointSize`, it gets inflated to that minimum size.
 * That inflation always keeps the segment's base-ward edge (the edge touching the previous segment in
 * the stack) fixed and only extends the far edge - so a segment stacked on top of an inflated one would
 * otherwise start from the segment's *natural* (un-inflated) position and overlap it.
 *
 * This selector computes, per data index, how far the segments *before* this one in the stack were
 * pushed out by their own `minPointSize` inflation, so that this segment's whole rectangle can be
 * translated by the same amount and stay attached without overlapping.
 *
 * Sign follows the same convention as the per-segment inflation delta: positive means "further away
 * from the stack's zero baseline", matching whichever direction that already means in `computeBarRectangles`
 * for the given layout.
 */
export const selectStackedMinPointSizeShift: (
  state: RechartsRootState,
  id: GraphicalItemId,
  isPanorama: boolean,
) => ReadonlyArray<number> | undefined = createSelector(
  [selectBarStackGroups, selectSynchronisedBarSettings, selectChartLayout, selectXAxisWithScale, selectYAxisWithScale],
  (
    stackGroups: AllStackGroups | undefined,
    barSettings: BarSettings | undefined,
    layout: LayoutType,
    xAxis: BaseAxisWithScale | undefined,
    yAxis: BaseAxisWithScale | undefined,
  ): ReadonlyArray<number> | undefined => {
    if (stackGroups == null || barSettings?.stackId == null) {
      return undefined;
    }
    const stackGroup = stackGroups[barSettings.stackId];
    if (stackGroup == null) {
      return undefined;
    }
    const numericAxis = layout === 'horizontal' ? yAxis : xAxis;
    if (numericAxis?.scale == null) {
      return undefined;
    }
    const { stackedData, graphicalItems } = stackGroup;
    const myIndex = graphicalItems.findIndex(item => item.id === barSettings.id);
    if (myIndex <= 0) {
      return undefined;
    }
    const shifts: Array<number> = [];
    for (let seriesIndex = 0; seriesIndex < myIndex; seriesIndex++) {
      const series = stackedData[seriesIndex];
      const item = graphicalItems[seriesIndex];
      if (series == null || item == null || item.type !== 'bar') {
        continue;
      }
      const minPointSizeProp = item.minPointSize;
      series.forEach((point, dataIndex) => {
        if (point == null) {
          return;
        }
        const start = numericAxis.scale.map(point[0]);
        const end = numericAxis.scale.map(point[1]);
        if (start == null || end == null) {
          return;
        }
        const naturalSize = layout === 'horizontal' ? start - end : end - start;
        const minPointSize = minPointSizeCallback(minPointSizeProp, 0)(point[1], dataIndex);
        if (Math.abs(minPointSize) > 0 && Math.abs(naturalSize) < Math.abs(minPointSize)) {
          const delta = mathSign(naturalSize || minPointSize) * (Math.abs(minPointSize) - Math.abs(naturalSize));
          shifts[dataIndex] = (shifts[dataIndex] ?? 0) + delta;
        }
      });
    }
    return shifts;
  },
);

export const selectBarRectangles: (
  state: RechartsRootState,
  id: GraphicalItemId,
  isPanorama: boolean,
  cells: ReadonlyArray<ReactElement> | undefined,
) => ReadonlyArray<BarRectangleItem> | undefined = createSelector(
  [
    selectChartOffsetInternal,
    selectAxisViewBox,
    selectXAxisWithScale,
    selectYAxisWithScale,
    selectXAxisTicks,
    selectYAxisTicks,
    selectBarPosition,
    selectChartLayout,
    selectChartDataWithIndexesIfNotInPanoramaPosition3,
    selectAxisBandSize,
    selectStackedDataOfItem,
    selectStackedMinPointSizeShift,
    selectSynchronisedBarSettings,
    pickCells,
  ],
  (
    offset: ChartOffsetInternal,
    axisViewBox: CartesianViewBoxRequired,
    xAxis: BaseAxisWithScale | undefined,
    yAxis: BaseAxisWithScale | undefined,
    xAxisTicks,
    yAxisTicks,
    pos: BarPositionPosition | undefined,
    layout: LayoutType,
    { chartData, dataStartIndex, dataEndIndex },
    bandSize,
    stackedData,
    stackedMinPointSizeShift: ReadonlyArray<number> | undefined,
    barSettings: BarSettings | undefined,
    cells,
  ): ReadonlyArray<BarRectangleItem> | undefined => {
    if (
      barSettings == null ||
      pos == null ||
      axisViewBox == null ||
      (layout !== 'horizontal' && layout !== 'vertical') ||
      xAxis == null ||
      yAxis == null ||
      xAxisTicks == null ||
      yAxisTicks == null ||
      bandSize == null
    ) {
      return undefined;
    }
    const { data } = barSettings;

    let displayedData: ChartData | undefined;
    if (data != null && data.length > 0) {
      displayedData = data;
    } else {
      displayedData = chartData?.slice(dataStartIndex, dataEndIndex + 1);
    }

    if (displayedData == null) {
      return undefined;
    }

    return computeBarRectangles({
      layout,
      barSettings,
      pos,
      parentViewBox: axisViewBox,
      bandSize,
      xAxis,
      yAxis,
      xAxisTicks,
      yAxisTicks,
      stackedData,
      stackedMinPointSizeShift,
      displayedData,
      offset,
      cells,
      dataStartIndex,
    });
  },
);
