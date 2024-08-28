import { createSelector } from '@reduxjs/toolkit';
import isNil from 'lodash/isNil';
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
  StackGroup,
} from './axisSelectors';
import { AxisId } from '../axisMapSlice';
import { getPercentValue } from '../../util/DataUtils';
import { CartesianGraphicalItemSettings } from '../graphicalItemsSlice';
import { BarPositionPosition, getBandSizeOfAxis, StackId } from '../../util/ChartUtils';
import { DataKey, LayoutType, TickItem } from '../../util/types';
import { BarRectangleItem, computeBarRectangles } from '../../cartesian/Bar';
import { selectChartLayout } from '../../context/chartLayoutContext';
import { ChartData } from '../chartDataSlice';
import { selectChartDataWithIndexes } from './dataSelectors';
import { MinPointSize } from '../../util/BarUtils';
import { selectChartOffset } from './selectChartOffset';
import { selectBarCategoryGap, selectBarGap, selectRootBarSize, selectRootMaxBarSize } from './rootPropsSelectors';

export type BarSettings = {
  barSize: number | string | undefined;
  data: ChartData | undefined;
  dataKey: DataKey<any>;
  maxBarSize: number | undefined;
  minPointSize: MinPointSize;
  stackId: StackId | undefined;
};

const pickXAxisId = (_state: RechartsRootState, xAxisId: AxisId): AxisId => xAxisId;

const pickYAxisId = (_state: RechartsRootState, _xAxisId: AxisId, yAxisId: AxisId): AxisId => yAxisId;

const pickIsPanorama = (_state: RechartsRootState, _xAxisId: AxisId, _yAxisId: AxisId, isPanorama: boolean): boolean =>
  isPanorama;

const pickBarSettings = (
  _state: RechartsRootState,
  _xAxisId: AxisId,
  _yAxisId: AxisId,
  _isPanorama: boolean,
  barSettings: BarSettings,
): BarSettings => barSettings;

const pickCells = (
  _state: RechartsRootState,
  _xAxisId: AxisId,
  _yAxisId: AxisId,
  _isPanorama: boolean,
  _barSettings: BarSettings,
  cells: ReadonlyArray<ReactElement> | undefined,
): ReadonlyArray<ReactElement> | undefined => cells;

const getBarSize = (
  globalSize: number | undefined,
  totalSize: number | undefined,
  selfSize: number | string | undefined,
): number | undefined => {
  const barSize: string | number | undefined = isNil(selfSize) ? globalSize : selfSize;

  return isNil(barSize) ? undefined : getPercentValue(barSize, totalSize, 0);
};

export const selectAllVisibleBars: (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  isPanorama: boolean,
) => ReadonlyArray<CartesianGraphicalItemSettings> = createSelector(
  [selectChartLayout, selectUnfilteredCartesianItems, pickXAxisId, pickYAxisId, pickIsPanorama],
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

type BarCategory = {
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
   * Width (in horizontal chart) or height (in vertical chart) of this stack of items
   */
  barSize: number;
};

type SizeList = ReadonlyArray<BarCategory>;

const selectBarStackGroups = (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
): Record<StackId, StackGroup> | undefined => {
  const layout = selectChartLayout(state);
  if (layout === 'horizontal') {
    return selectStackGroups(state, 'yAxis', yAxisId);
  }
  return selectStackGroups(state, 'xAxis', xAxisId);
};

export const selectBarCartesianAxisSize = (state: RechartsRootState, xAxisId: AxisId, yAxisId: AxisId) => {
  const layout = selectChartLayout(state);
  if (layout === 'horizontal') {
    return selectCartesianAxisSize(state, 'xAxis', xAxisId);
  }
  return selectCartesianAxisSize(state, 'yAxis', yAxisId);
};

export const selectBarSizeList: (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  isPanorama: boolean,
  barSettings: BarSettings,
) => SizeList | undefined = createSelector(
  [selectAllVisibleBars, selectRootBarSize, selectBarCartesianAxisSize],
  (allBars: ReadonlyArray<CartesianGraphicalItemSettings>, globalSize: number | undefined, totalSize) => {
    const initialValue: Record<StackId, Array<CartesianGraphicalItemSettings>> = {};

    const stackedBars = allBars.filter(b => b.stackId != null);
    const unstackedBars = allBars.filter(b => b.stackId == null);

    const groupByStack: Record<StackId, Array<CartesianGraphicalItemSettings>> = stackedBars.reduce((acc, bar) => {
      if (!acc[bar.stackId]) {
        acc[bar.stackId] = [];
      }
      acc[bar.stackId].push(bar);
      return acc;
    }, initialValue);

    const stackedSizeList = Object.entries(groupByStack).map(([stackId, bars]) => {
      const dataKeys = bars.map(b => b.dataKey);
      const barSize = getBarSize(globalSize, totalSize, bars[0].barSize);
      return { stackId, dataKeys, barSize };
    });

    const unstackedSizeList = unstackedBars.map(b => {
      const dataKeys = [b.dataKey];
      const barSize = getBarSize(globalSize, totalSize, b.barSize);
      return { stackId: undefined, dataKeys, barSize };
    });

    return [...stackedSizeList, ...unstackedSizeList];
  },
);

export const selectBarBandSize: (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  isPanorama: boolean,
  barSettings: BarSettings,
) => number | undefined = (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  isPanorama: boolean,
  barSettings: BarSettings,
): number | undefined => {
  const layout = selectChartLayout(state);
  const globalMaxBarSize = selectRootMaxBarSize(state);
  const { maxBarSize: childMaxBarSize } = barSettings;
  const maxBarSize: number = isNil(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
  let axis: BaseAxisWithScale, ticks: ReadonlyArray<TickItem>;
  if (layout === 'horizontal') {
    axis = selectAxisWithScale(state, 'xAxis', xAxisId, isPanorama);
    ticks = selectTicksOfGraphicalItem(state, 'xAxis', xAxisId, isPanorama);
  } else {
    axis = selectAxisWithScale(state, 'yAxis', yAxisId, isPanorama);
    ticks = selectTicksOfGraphicalItem(state, 'yAxis', yAxisId, isPanorama);
  }
  return getBandSizeOfAxis(axis, ticks, true) ?? maxBarSize ?? 0;
};

const selectAxisBandSize = (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  isPanorama: boolean,
): number | undefined => {
  const layout = selectChartLayout(state);
  let axis: BaseAxisWithScale, ticks: ReadonlyArray<TickItem>;
  if (layout === 'horizontal') {
    axis = selectAxisWithScale(state, 'xAxis', xAxisId, isPanorama);
    ticks = selectTicksOfGraphicalItem(state, 'xAxis', xAxisId, isPanorama);
  } else {
    axis = selectAxisWithScale(state, 'yAxis', yAxisId, isPanorama);
    ticks = selectTicksOfGraphicalItem(state, 'yAxis', yAxisId, isPanorama);
  }
  return getBandSizeOfAxis(axis, ticks);
};

function getBarPositions(
  barGap: string | number,
  barCategoryGap: string | number,
  bandSize: number,
  sizeList: SizeList,
  maxBarSize: number,
): ReadonlyArray<BarWithPosition> {
  const len = sizeList.length;
  if (len < 1) return null;

  let realBarGap = getPercentValue(barGap, bandSize, 0, true);

  let result: ReadonlyArray<BarWithPosition>;
  const initialValue: ReadonlyArray<BarWithPosition> = [];

  // whether is barSize set by user
  // Okay but why does it check only for the first element? What if the first element is set but others are not?
  if (sizeList[0].barSize === +sizeList[0].barSize) {
    let useFull = false;
    let fullBarSize = bandSize / len;
    let sum = sizeList.reduce((res, entry) => res + entry.barSize || 0, 0);
    sum += (len - 1) * realBarGap;

    if (sum >= bandSize) {
      sum -= (len - 1) * realBarGap;
      realBarGap = 0;
    }
    if (sum >= bandSize && fullBarSize > 0) {
      useFull = true;
      fullBarSize *= 0.9;
      sum = len * fullBarSize;
    }

    const offset = ((bandSize - sum) / 2) >> 0;
    let prev: BarPositionPosition = { offset: offset - realBarGap, size: 0 };

    result = sizeList.reduce(
      (res: ReadonlyArray<BarWithPosition>, entry: BarCategory): ReadonlyArray<BarWithPosition> => {
        const newPosition: BarWithPosition = {
          stackId: entry.stackId,
          dataKeys: entry.dataKeys,
          position: {
            offset: prev.offset + prev.size + realBarGap,
            size: useFull ? fullBarSize : entry.barSize,
          },
        };
        const newRes: Array<BarWithPosition> = [...res, newPosition];

        prev = newRes[newRes.length - 1].position;

        return newRes;
      },
      initialValue,
    );
  } else {
    const offset = getPercentValue(barCategoryGap, bandSize, 0, true);

    if (bandSize - 2 * offset - (len - 1) * realBarGap <= 0) {
      realBarGap = 0;
    }

    let originalSize = (bandSize - 2 * offset - (len - 1) * realBarGap) / len;
    if (originalSize > 1) {
      originalSize >>= 0;
    }
    const size = maxBarSize === +maxBarSize ? Math.min(originalSize, maxBarSize) : originalSize;

    result = sizeList.reduce(
      (res: ReadonlyArray<BarWithPosition>, entry: BarCategory, i): ReadonlyArray<BarWithPosition> => [
        ...res,
        {
          stackId: entry.stackId,
          dataKeys: entry.dataKeys,
          position: {
            offset: offset + (originalSize + realBarGap) * i + (originalSize - size) / 2,
            size,
          },
        },
      ],
      initialValue,
    );
  }

  return result;
}

type BarWithPosition = {
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
  xAxisId: AxisId,
  yAxisId: AxisId,
  isPanorama: boolean,
  barSettings: BarSettings,
) => ReadonlyArray<BarWithPosition> | undefined = createSelector(
  [
    selectBarSizeList,
    selectRootMaxBarSize,
    selectBarGap,
    selectBarCategoryGap,
    selectBarBandSize,
    selectAxisBandSize,
    pickBarSettings,
  ],
  (
    sizeList: SizeList,
    globalMaxBarSize,
    barGap,
    barCategoryGap,
    barBandSize,
    bandSize,
    barSettings,
  ): ReadonlyArray<BarWithPosition> | undefined => {
    const childMaxBarSize = barSettings.maxBarSize;
    const maxBarSize: number = isNil(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;

    let allBarPositions = getBarPositions(
      barGap,
      barCategoryGap,
      barBandSize !== bandSize ? barBandSize : bandSize,
      sizeList,
      maxBarSize,
    );

    if (barBandSize !== bandSize && allBarPositions != null) {
      allBarPositions = allBarPositions.map(pos => ({
        ...pos,
        position: { ...pos.position, offset: pos.position.offset - barBandSize / 2 },
      }));
    }

    return allBarPositions;
  },
);

const selectXAxisWithScale = (state: RechartsRootState, xAxisId: AxisId, _yAxisId: AxisId, isPanorama: boolean) =>
  selectAxisWithScale(state, 'xAxis', xAxisId, isPanorama);

const selectYAxisWithScale = (state: RechartsRootState, _xAxisId: AxisId, yAxisId: AxisId, isPanorama: boolean) =>
  selectAxisWithScale(state, 'yAxis', yAxisId, isPanorama);

const selectXAxisTicks = (state: RechartsRootState, xAxisId: AxisId, _yAxisId: AxisId, isPanorama: boolean) =>
  selectTicksOfGraphicalItem(state, 'xAxis', xAxisId, isPanorama);

const selectYAxisTicks = (state: RechartsRootState, _xAxisId: AxisId, yAxisId: AxisId, isPanorama: boolean) =>
  selectTicksOfGraphicalItem(state, 'yAxis', yAxisId, isPanorama);

const selectBarPosition: (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  isPanorama: boolean,
  barSettings: BarSettings,
) => BarPositionPosition | undefined = createSelector(
  [selectAllBarPositions, pickBarSettings],
  (allBarPositions: ReadonlyArray<BarWithPosition>, barSettings) => {
    if (allBarPositions == null) {
      return undefined;
    }
    const position = allBarPositions.find(
      (p: BarWithPosition) => p.stackId === barSettings.stackId && p.dataKeys.includes(barSettings.dataKey),
    );
    if (position == null) {
      return undefined;
    }
    return position.position;
  },
);

const selectStackedDataOfItem: (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  isPanorama: boolean,
  barSettings: BarSettings,
) => Series<Record<number, number>, DataKey<any>> | undefined = createSelector(
  [selectBarStackGroups, pickBarSettings],
  (stackGroups, barSettings) => {
    if (!stackGroups || barSettings?.dataKey == null) {
      return undefined;
    }
    const { stackId } = barSettings;
    const stackGroup: StackGroup = stackGroups[stackId];
    if (!stackGroup) {
      return undefined;
    }
    const { stackedData }: StackGroup = stackGroup;
    if (!stackedData) {
      return undefined;
    }
    // @ts-expect-error bar assumes numeric stacks, d3 returns string, unknown
    const stack: Series<Record<number, number>, DataKey<any>> = stackedData.find(sd => sd.key === barSettings.dataKey);
    return stack;
  },
);

export const selectBarRectangles: (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  isPanorama: boolean,
  barSettings: BarSettings,
  cells: ReadonlyArray<ReactElement> | undefined,
) => ReadonlyArray<BarRectangleItem> | undefined = createSelector(
  [
    selectChartOffset,
    selectXAxisWithScale,
    selectYAxisWithScale,
    selectXAxisTicks,
    selectYAxisTicks,
    selectBarPosition,
    selectChartLayout,
    selectChartDataWithIndexes,
    selectAxisBandSize,
    selectStackedDataOfItem,
    pickBarSettings,
    pickCells,
  ],
  (
    offset,
    xAxis: BaseAxisWithScale,
    yAxis: BaseAxisWithScale,
    xAxisTicks,
    yAxisTicks,
    pos: BarPositionPosition | undefined,
    layout: LayoutType,
    { chartData, dataStartIndex, dataEndIndex },
    bandSize,
    stackedData,
    barSettings: BarSettings,
    cells,
  ): ReadonlyArray<BarRectangleItem> | undefined => {
    if (
      pos == null ||
      (layout !== 'horizontal' && layout !== 'vertical') ||
      xAxis == null ||
      yAxis == null ||
      xAxisTicks == null ||
      yAxisTicks == null
    ) {
      return undefined;
    }
    const { data } = barSettings;

    let displayedData: ChartData | undefined;
    if (data?.length > 0) {
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
      bandSize,
      xAxis,
      yAxis,
      xAxisTicks,
      yAxisTicks,
      stackedData,
      dataStartIndex,
      displayedData,
      offset,
      cells,
    });
  },
);
