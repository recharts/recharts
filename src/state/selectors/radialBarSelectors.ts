import { createSelector } from '@reduxjs/toolkit';
import { ReactElement } from 'react';
import isNil from 'lodash/isNil';
import { Series } from 'victory-vendor/d3-shape';
import { computeRadialBarDataItems, RadialBarDataItem } from '../../polar/RadialBar';
import { selectChartDataWithIndexes } from './dataSelectors';
import { RechartsRootState } from '../store';
import { ChartDataState } from '../chartDataSlice';
import { AxisId } from '../cartesianAxisSlice';
import { DataKey, LayoutType, PolarViewBox, TickItem } from '../../util/types';
import { selectPolarAxisScale, selectPolarAxisTicks } from './polarScaleSelectors';
import { BaseAxisWithScale, combineStackGroups, StackGroup } from './axisSelectors';
import { selectAngleAxis, selectPolarViewBox, selectRadiusAxis } from './polarAxisSelectors';
import { selectChartLayout } from '../../context/chartLayoutContext';
import {
  BarPositionPosition,
  getBandSizeOfAxis,
  getBaseValueOfBar,
  isCategoricalAxis,
  RechartsScale,
  StackId,
} from '../../util/ChartUtils';
import {
  BarWithPosition,
  combineAllBarPositions,
  combineBarSizeList,
  combineStackedData,
  MaybeStackedGraphicalItem,
  SizeList,
} from './barSelectors';
import { selectBarCategoryGap, selectBarGap, selectRootBarSize, selectRootMaxBarSize } from './rootPropsSelectors';
import { PolarGraphicalItemSettings } from '../graphicalItemsSlice';
import {
  PolarAxisType,
  selectPolarDisplayedData,
  selectPolarItemsSettings,
  selectUnfilteredPolarItems,
} from './polarSelectors';
import { selectStackOffsetType } from './selectors';
import { AngleAxisSettings, RadiusAxisSettings } from '../polarAxisSlice';

export interface RadialBarSettings extends MaybeStackedGraphicalItem {
  dataKey: DataKey<any> | undefined;
  minPointSize: number;
  stackId: StackId | undefined;
  maxBarSize: number | undefined;
}

const selectRadiusAxisForRadialBar = (state: RechartsRootState, radiusAxisId: AxisId): RadiusAxisSettings =>
  selectRadiusAxis(state, radiusAxisId);

const selectRadiusAxisScaleForRadar = (state: RechartsRootState, radiusAxisId: AxisId): RechartsScale | undefined =>
  selectPolarAxisScale(state, 'radiusAxis', radiusAxisId);

export const selectRadiusAxisWithScale: (state: RechartsRootState, radiusAxisId: AxisId) => BaseAxisWithScale =
  createSelector(
    [selectRadiusAxisForRadialBar, selectRadiusAxisScaleForRadar],
    (axis: RadiusAxisSettings, scale: RechartsScale | undefined) => {
      if (axis == null || scale == null) {
        return undefined;
      }
      return { ...axis, scale };
    },
  );

export const selectRadiusAxisTicks = (
  state: RechartsRootState,
  radiusAxisId: AxisId,
): ReadonlyArray<TickItem> | undefined => {
  return selectPolarAxisTicks(state, 'radiusAxis', radiusAxisId);
};

const selectAngleAxisForRadialBar = (
  state: RechartsRootState,
  _radiusAxisId: AxisId,
  angleAxisId: AxisId,
): AngleAxisSettings => selectAngleAxis(state, angleAxisId);

const selectAngleAxisScaleForRadar = (
  state: RechartsRootState,
  _radiusAxisId: AxisId,
  angleAxisId: AxisId,
): RechartsScale | undefined => selectPolarAxisScale(state, 'angleAxis', angleAxisId);

export const selectAngleAxisWithScale: (
  state: RechartsRootState,
  _radiusAxisId: AxisId,
  angleAxisId: AxisId,
) => BaseAxisWithScale = createSelector(
  [selectAngleAxisForRadialBar, selectAngleAxisScaleForRadar],
  (axis: AngleAxisSettings, scale: RechartsScale | undefined) => {
    if (axis == null || scale == null) {
      return undefined;
    }
    return { ...axis, scale };
  },
);

const selectAngleAxisTicks = (
  state: RechartsRootState,
  _radiusAxisId: AxisId,
  angleAxisId: AxisId,
): ReadonlyArray<TickItem> | undefined => {
  return selectPolarAxisTicks(state, 'angleAxis', angleAxisId);
};

const pickRadialBarSettings = (
  _state: RechartsRootState,
  _radiusAxisId: AxisId,
  _angleAxisId: AxisId,
  radialBarSettings: RadialBarSettings,
): RadialBarSettings => radialBarSettings;

export const selectBandSizeOfPolarAxis: (
  state: RechartsRootState,
  radiusAxisId: AxisId,
  angleAxisId: AxisId,
) => number | undefined = createSelector(
  [selectChartLayout, selectRadiusAxisWithScale, selectRadiusAxisTicks, selectAngleAxisWithScale, selectAngleAxisTicks],
  (
    layout: LayoutType,
    radiusAxis: BaseAxisWithScale | undefined,
    radiusAxisTicks: ReadonlyArray<TickItem> | undefined,
    angleAxis: BaseAxisWithScale | undefined,
    angleAxisTicks: ReadonlyArray<TickItem> | undefined,
  ) => {
    if (isCategoricalAxis(layout, 'radiusAxis')) {
      return getBandSizeOfAxis(radiusAxis, radiusAxisTicks, false);
    }
    return getBandSizeOfAxis(angleAxis, angleAxisTicks, false);
  },
);

export const selectBaseValue: (
  state: RechartsRootState,
  radiusAxisId: AxisId,
  angleAxisId: AxisId,
) => number | unknown = createSelector(
  [selectAngleAxisWithScale, selectRadiusAxisWithScale, selectChartLayout],
  (angleAxis, radiusAxis, layout) => {
    const numericAxis = layout === 'radial' ? angleAxis : radiusAxis;
    if (numericAxis == null || numericAxis.scale == null) {
      return undefined;
    }
    return getBaseValueOfBar({ numericAxis });
  },
);

const pickCells = (
  _state: RechartsRootState,
  _radiusAxisId: AxisId,
  _angleAxisId: AxisId,
  _radialBarSettings: RadialBarSettings,
  cells: ReadonlyArray<ReactElement> | undefined,
) => cells;

const pickAngleAxisId = (
  _state: RechartsRootState,
  _radiusAxisId: AxisId,
  angleAxisId: AxisId,
  _radialBarSettings: RadialBarSettings,
  _cells: ReadonlyArray<ReactElement> | undefined,
): AxisId => angleAxisId;

const pickRadiusAxisId = (
  _state: RechartsRootState,
  radiusAxisId: AxisId,
  _angleAxisId: AxisId,
  _radialBarSettings: RadialBarSettings,
  _cells: ReadonlyArray<ReactElement> | undefined,
): AxisId => radiusAxisId;

export const pickMaxBarSize = (
  _state: RechartsRootState,
  _radiusAxisId: AxisId,
  _angleAxisId: AxisId,
  radialBarSettings: RadialBarSettings,
  _cells: ReadonlyArray<ReactElement> | undefined,
): number | undefined => radialBarSettings.maxBarSize;

const selectAllVisibleRadialBars: (
  state: RechartsRootState,
  radiusAxisId: AxisId,
  angleAxisId: AxisId,
  radialBarSettings: RadialBarSettings,
  cells: ReadonlyArray<ReactElement> | undefined,
) => ReadonlyArray<PolarGraphicalItemSettings> = createSelector(
  [selectChartLayout, selectUnfilteredPolarItems, pickAngleAxisId, pickRadiusAxisId],
  (
    layout: LayoutType,
    allItems: ReadonlyArray<PolarGraphicalItemSettings>,
    angleAxisId: AxisId,
    radiusAxisId: AxisId,
  ): ReadonlyArray<PolarGraphicalItemSettings> => {
    return allItems
      .filter(i => {
        if (layout === 'centric') {
          return i.angleAxisId === angleAxisId;
        }
        return i.radiusAxisId === radiusAxisId;
      })
      .filter(i => i.hide === false)
      .filter(i => i.type === 'radialBar');
  },
);

/**
 * The generator never returned the totalSize which means that barSize in polar chart can not support percent values.
 * We can add that if we want to I suppose.
 * @returns undefined - but it should be a total size of numerical axis in polar chart
 */
const selectPolarBarAxisSize = (): undefined => undefined;

export const selectPolarBarSizeList: (
  state: RechartsRootState,
  radiusAxisId: AxisId,
  angleAxisId: AxisId,
  radialBarSettings: RadialBarSettings,
  cells: ReadonlyArray<ReactElement> | undefined,
) => SizeList | undefined = createSelector(
  [selectAllVisibleRadialBars, selectRootBarSize, selectPolarBarAxisSize],
  combineBarSizeList,
);

export const selectPolarBarBandSize: (
  state: RechartsRootState,
  radiusAxisId: AxisId,
  angleAxisId: AxisId,
  radialBarSettings: RadialBarSettings,
  cells: ReadonlyArray<ReactElement> | undefined,
) => number | undefined = createSelector(
  [
    selectChartLayout,
    selectRootMaxBarSize,
    selectAngleAxisWithScale,
    selectAngleAxisTicks,
    selectRadiusAxisWithScale,
    selectRadiusAxisTicks,
    pickMaxBarSize,
  ],
  (
    layout: LayoutType,
    globalMaxBarSize: number | undefined,
    angleAxis,
    angleAxisTicks,
    radiusAxis,
    radiusAxisTicks,
    childMaxBarSize: number | undefined,
  ): number | undefined => {
    const maxBarSize: number = isNil(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
    if (layout === 'centric') {
      return getBandSizeOfAxis(angleAxis, angleAxisTicks, true) ?? maxBarSize ?? 0;
    }
    return getBandSizeOfAxis(radiusAxis, radiusAxisTicks, true) ?? maxBarSize ?? 0;
  },
);

export const selectAllPolarBarPositions: (
  state: RechartsRootState,
  radiusAxisId: AxisId,
  angleAxisId: AxisId,
  radialBarSettings: RadialBarSettings,
  cells: ReadonlyArray<ReactElement> | undefined,
) => ReadonlyArray<BarWithPosition> | undefined = createSelector(
  [
    selectPolarBarSizeList,
    selectRootMaxBarSize,
    selectBarGap,
    selectBarCategoryGap,
    selectPolarBarBandSize,
    selectBandSizeOfPolarAxis,
    pickMaxBarSize,
  ],
  combineAllBarPositions,
);

export const selectPolarBarPosition: (
  state: RechartsRootState,
  radiusAxisId: AxisId,
  angleAxisId: AxisId,
  radialBarSettings: RadialBarSettings,
  cells: ReadonlyArray<ReactElement> | undefined,
) => BarPositionPosition | undefined = createSelector(
  [selectAllPolarBarPositions, pickRadialBarSettings],
  (allBarPositions: ReadonlyArray<BarWithPosition>, barSettings: RadialBarSettings) => {
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

const selectStackGroups: (
  state: RechartsRootState,
  axisType: PolarAxisType,
  polarAxisId: AxisId,
) => Record<StackId, StackGroup> | undefined = createSelector(
  [selectPolarDisplayedData, selectPolarItemsSettings, selectStackOffsetType],
  combineStackGroups,
);

const selectRadialBarStackGroups: (
  state: RechartsRootState,
  radiusAxisId: AxisId,
  angleAxisId: AxisId,
  radialBarSettings: RadialBarSettings,
  cells: ReadonlyArray<ReactElement> | undefined,
) => Record<StackId, StackGroup> | undefined = (state, radiusAxisId, angleAxisId) => {
  const layout = selectChartLayout(state);
  if (layout === 'centric') {
    return selectStackGroups(state, 'radiusAxis', radiusAxisId);
  }
  return selectStackGroups(state, 'angleAxis', angleAxisId);
};

const selectPolarStackedData: (
  state: RechartsRootState,
  radiusAxisId: AxisId,
  angleAxisId: AxisId,
  radialBarSettings: RadialBarSettings,
  cells: ReadonlyArray<ReactElement> | undefined,
) => Series<Record<number, number>, DataKey<any>> = createSelector(
  [selectRadialBarStackGroups, pickRadialBarSettings],
  combineStackedData,
);

export const selectRadialBarSectors: (
  state: RechartsRootState,
  radiusAxisId: AxisId,
  angleAxisId: AxisId,
  radialBarSettings: RadialBarSettings,
  cells: ReadonlyArray<ReactElement> | undefined,
) => ReadonlyArray<RadialBarDataItem> = createSelector(
  [
    selectAngleAxisWithScale,
    selectAngleAxisTicks,
    selectRadiusAxisWithScale,
    selectRadiusAxisTicks,
    selectChartDataWithIndexes,
    pickRadialBarSettings,
    selectBandSizeOfPolarAxis,
    selectChartLayout,
    selectBaseValue,
    selectPolarViewBox,
    pickCells,
    selectPolarBarPosition,
    selectPolarStackedData,
  ],
  (
    angleAxis: BaseAxisWithScale,
    angleAxisTicks: ReadonlyArray<TickItem> | undefined,
    radiusAxis: BaseAxisWithScale,
    radiusAxisTicks: ReadonlyArray<TickItem> | undefined,
    { chartData, dataStartIndex, dataEndIndex }: ChartDataState,
    { dataKey, minPointSize }: RadialBarSettings,
    bandSize: number | undefined,
    layout: LayoutType,
    baseValue: number | unknown,
    { cx, cy, startAngle, endAngle }: PolarViewBox,
    cells: ReadonlyArray<ReactElement> | undefined,
    pos: BarPositionPosition | undefined,
    stackedData: Series<Record<number, number>, DataKey<any>> | undefined,
  ) => {
    if (radiusAxis == null || angleAxis == null || chartData == null || bandSize == null || pos == null) {
      return undefined;
    }
    const displayedData = chartData.slice(dataStartIndex, dataEndIndex + 1);
    const numericAxis = layout === 'centric' ? radiusAxis : angleAxis;
    const stackedDomain: ReadonlyArray<unknown> | null = stackedData ? numericAxis.scale.domain() : null;
    return computeRadialBarDataItems({
      angleAxis,
      angleAxisTicks,
      bandSize,
      baseValue,
      cells,
      cx,
      cy,
      dataKey,
      dataStartIndex,
      displayedData,
      endAngle,
      layout,
      minPointSize,
      pos,
      radiusAxis,
      radiusAxisTicks,
      stackedData,
      stackedDomain,
      startAngle,
    });
  },
);
