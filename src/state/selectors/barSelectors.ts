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
  StackDataPoint,
  StackGroup,
} from './axisSelectors';
import { AxisId } from '../cartesianAxisSlice';
import { getPercentValue, isNullish } from '../../util/DataUtils';
import { CartesianGraphicalItemSettings } from '../graphicalItemsSlice';
import { BarPositionPosition, getBandSizeOfAxis, NormalizedStackId, StackId } from '../../util/ChartUtils';
import { ChartOffset, DataKey, LayoutType, TickItem } from '../../util/types';
import { BarRectangleItem, computeBarRectangles } from '../../cartesian/Bar';
import { selectChartLayout } from '../../context/chartLayoutContext';
import { ChartData } from '../chartDataSlice';
import { selectChartDataWithIndexesIfNotInPanorama } from './dataSelectors';
import { MinPointSize } from '../../util/BarUtils';
import { selectChartOffset } from './selectChartOffset';
import { selectBarCategoryGap, selectBarGap, selectRootBarSize, selectRootMaxBarSize } from './rootPropsSelectors';
import { isWellBehavedNumber } from '../../util/isWellBehavedNumber';

export type BarSettings = {
  barSize: number | string | undefined;
  data: ChartData | undefined;
  dataKey: DataKey<any>;
  maxBarSize: number | undefined;
  minPointSize: MinPointSize;
  stackId: NormalizedStackId | undefined;
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

const pickMaxBarSize = (
  _state: RechartsRootState,
  _xAxisId: AxisId,
  _yAxisId: AxisId,
  _isPanorama: boolean,
  barSettings: BarSettings,
): number | undefined => barSettings.maxBarSize;

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
  const barSize: string | number | undefined = selfSize ?? globalSize;

  if (isNullish(barSize)) {
    return undefined;
  }
  return getPercentValue(barSize, totalSize, 0);
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
  barSize: number | undefined;
};

export type SizeList = ReadonlyArray<BarCategory>;

const selectBarStackGroups = (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  isPanorama: boolean,
): Record<StackId, StackGroup> | undefined => {
  const layout = selectChartLayout(state);
  if (layout === 'horizontal') {
    return selectStackGroups(state, 'yAxis', yAxisId, isPanorama);
  }
  return selectStackGroups(state, 'xAxis', xAxisId, isPanorama);
};

export const selectBarCartesianAxisSize = (state: RechartsRootState, xAxisId: AxisId, yAxisId: AxisId) => {
  const layout = selectChartLayout(state);
  if (layout === 'horizontal') {
    return selectCartesianAxisSize(state, 'xAxis', xAxisId);
  }
  return selectCartesianAxisSize(state, 'yAxis', yAxisId);
};

/**
 * Some graphical items allow data stacking. The stacks are optional,
 * so all props here are optional too.
 */
export interface MaybeStackedGraphicalItem {
  stackId: StackId | undefined;
  dataKey: DataKey<any> | undefined;
  barSize: number | string | undefined;
}

/**
 * Some graphical items allow data stacking.
 * This interface is used to represent the items that are stacked
 * because the user has provided the stackId and dataKey properties.
 */
export interface DefinitelyStackedGraphicalItem {
  stackId: StackId;
  dataKey: DataKey<any>;
  barSize: number | string | undefined;
}

function isStacked(graphicalItem: MaybeStackedGraphicalItem): graphicalItem is DefinitelyStackedGraphicalItem {
  return graphicalItem.stackId != null && graphicalItem.dataKey != null;
}

export const combineBarSizeList = (
  allBars: ReadonlyArray<MaybeStackedGraphicalItem>,
  globalSize: number | undefined,
  totalSize: number | undefined,
): SizeList | undefined => {
  const initialValue: Record<StackId, Array<DefinitelyStackedGraphicalItem>> = {};

  const stackedBars: ReadonlyArray<DefinitelyStackedGraphicalItem> = allBars.filter(isStacked);
  const unstackedBars = allBars.filter(b => b.stackId == null);

  const groupByStack: Record<StackId, Array<DefinitelyStackedGraphicalItem>> = stackedBars.reduce((acc, bar) => {
    if (!acc[bar.stackId]) {
      acc[bar.stackId] = [];
    }
    acc[bar.stackId].push(bar);
    return acc;
  }, initialValue);

  const stackedSizeList: SizeList = Object.entries(groupByStack).map(([stackId, bars]): BarCategory => {
    const dataKeys = bars.map(b => b.dataKey);
    const barSize: number | undefined = getBarSize(globalSize, totalSize, bars[0].barSize);
    return { stackId, dataKeys, barSize };
  });

  const unstackedSizeList: SizeList = unstackedBars.map((b): BarCategory => {
    const dataKeys = [b.dataKey].filter(dk => dk != null);
    const barSize: number | undefined = getBarSize(globalSize, totalSize, b.barSize);
    return { stackId: undefined, dataKeys, barSize };
  });

  return [...stackedSizeList, ...unstackedSizeList];
};
export const selectBarSizeList: (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  isPanorama: boolean,
  barSettings: BarSettings,
) => SizeList | undefined = createSelector(
  [selectAllVisibleBars, selectRootBarSize, selectBarCartesianAxisSize],
  combineBarSizeList,
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

const selectAxisBandSize = (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  isPanorama: boolean,
): number | undefined => {
  const layout = selectChartLayout(state);
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

function getBarPositions(
  barGap: string | number,
  barCategoryGap: string | number,
  bandSize: number,
  sizeList: SizeList,
  maxBarSize: number | undefined,
): ReadonlyArray<BarWithPosition> | undefined {
  const len = sizeList.length;
  if (len < 1) {
    return undefined;
  }

  let realBarGap = getPercentValue(barGap, bandSize, 0, true);

  let result: ReadonlyArray<BarWithPosition>;
  const initialValue: ReadonlyArray<BarWithPosition> = [];

  // whether is barSize set by user
  // Okay but why does it check only for the first element? What if the first element is set but others are not?
  if (isWellBehavedNumber(sizeList[0].barSize)) {
    let useFull = false;
    let fullBarSize: number = bandSize / len;
    let sum = sizeList.reduce((res, entry) => res + (entry.barSize || 0), 0);
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
            size: useFull ? fullBarSize : (entry.barSize ?? 0),
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
    const size = isWellBehavedNumber(maxBarSize) ? Math.min(originalSize, maxBarSize) : originalSize;
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

export const combineAllBarPositions = (
  sizeList: SizeList,
  globalMaxBarSize: number,
  barGap: string | number,
  barCategoryGap: string | number,
  barBandSize: number,
  bandSize: number,
  childMaxBarSize: number | undefined,
): ReadonlyArray<BarWithPosition> | undefined => {
  const maxBarSize: number | undefined = isNullish(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;

  let allBarPositions: ReadonlyArray<BarWithPosition> | undefined = getBarPositions(
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
    pickMaxBarSize,
  ],
  combineAllBarPositions,
);

const selectXAxisWithScale = (state: RechartsRootState, xAxisId: AxisId, _yAxisId: AxisId, isPanorama: boolean) =>
  selectAxisWithScale(state, 'xAxis', xAxisId, isPanorama);

const selectYAxisWithScale = (state: RechartsRootState, _xAxisId: AxisId, yAxisId: AxisId, isPanorama: boolean) =>
  selectAxisWithScale(state, 'yAxis', yAxisId, isPanorama);

const selectXAxisTicks = (state: RechartsRootState, xAxisId: AxisId, _yAxisId: AxisId, isPanorama: boolean) =>
  selectTicksOfGraphicalItem(state, 'xAxis', xAxisId, isPanorama);

const selectYAxisTicks = (state: RechartsRootState, _xAxisId: AxisId, yAxisId: AxisId, isPanorama: boolean) =>
  selectTicksOfGraphicalItem(state, 'yAxis', yAxisId, isPanorama);

export const selectBarPosition: (
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

export const combineStackedData = (
  stackGroups: Record<StackId, StackGroup> | undefined,
  barSettings: MaybeStackedGraphicalItem | undefined,
): Series<StackDataPoint, DataKey<any>> | undefined => {
  if (!stackGroups || barSettings?.dataKey == null) {
    return undefined;
  }
  const { stackId } = barSettings;
  if (stackId == null) {
    return undefined;
  }
  const stackGroup: StackGroup = stackGroups[stackId];
  if (!stackGroup) {
    return undefined;
  }
  const { stackedData }: StackGroup = stackGroup;
  if (!stackedData) {
    return undefined;
  }
  const stack: Series<StackDataPoint, DataKey<any>> = stackedData.find(sd => sd.key === barSettings.dataKey);
  return stack;
};

const selectSynchronisedBarSettings: (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  isPanorama: boolean,
  barSettings: BarSettings,
) => BarSettings | undefined = createSelector(
  [selectUnfilteredCartesianItems, pickBarSettings],
  (graphicalItems, barSettingsFromProps) => {
    if (
      graphicalItems.some(
        cgis =>
          cgis.type === 'bar' &&
          barSettingsFromProps.dataKey === cgis.dataKey &&
          barSettingsFromProps.stackId === cgis.stackId &&
          // barSettingsFromProps.data === cgis.data && // bar doesn't support data and one is undefined and another is null and this condition breaks
          barSettingsFromProps.stackId === cgis.stackId,
      )
    ) {
      return barSettingsFromProps;
    }
    return undefined;
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
  combineStackedData,
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
    selectChartDataWithIndexesIfNotInPanorama,
    selectAxisBandSize,
    selectStackedDataOfItem,
    selectSynchronisedBarSettings,
    pickCells,
  ],
  (
    offset: ChartOffset,
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
      barSettings == null ||
      pos == null ||
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
      bandSize,
      xAxis,
      yAxis,
      xAxisTicks,
      yAxisTicks,
      stackedData,
      displayedData,
      offset,
      cells,
    });
  },
);
