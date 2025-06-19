import { createSelector } from 'reselect';
import { ReactElement } from 'react';
import { Series } from 'victory-vendor/d3-shape';
import { computeRadialBarDataItems, RadialBarDataItem } from '../../polar/RadialBar';
import { selectChartDataAndAlwaysIgnoreIndexes, selectChartDataWithIndexes } from './dataSelectors';
import { RechartsRootState } from '../store';
import { ChartDataState } from '../chartDataSlice';
import { AxisId } from '../cartesianAxisSlice';
import { DataKey, LayoutType, LegendType, PolarViewBoxRequired, TickItem } from '../../util/types';
import { selectPolarAxisScale, selectPolarAxisTicks, selectPolarGraphicalItemAxisTicks } from './polarScaleSelectors';
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
import {
  selectBarCategoryGap,
  selectBarGap,
  selectRootBarSize,
  selectRootMaxBarSize,
  selectStackOffsetType,
} from './rootPropsSelectors';
import { PolarGraphicalItemSettings } from '../graphicalItemsSlice';
import {
  PolarAxisType,
  selectPolarDisplayedData,
  selectPolarItemsSettings,
  selectUnfilteredPolarItems,
} from './polarSelectors';
import { AngleAxisSettings, RadiusAxisSettings } from '../polarAxisSlice';
import { LegendPayload } from '../../component/DefaultLegendContent';
import { isNullish } from '../../util/DataUtils';

export interface RadialBarSettings extends MaybeStackedGraphicalItem {
  dataKey: DataKey<any> | undefined;
  minPointSize: number | undefined;
  stackId: StackId | undefined;
  maxBarSize: number | undefined;
}

const selectRadiusAxisForRadialBar = (state: RechartsRootState, radiusAxisId: AxisId): RadiusAxisSettings =>
  selectRadiusAxis(state, radiusAxisId);

const selectRadiusAxisScaleForRadar = (state: RechartsRootState, radiusAxisId: AxisId): RechartsScale | undefined =>
  selectPolarAxisScale(state, 'radiusAxis', radiusAxisId);

export const selectRadiusAxisWithScale: (
  state: RechartsRootState,
  radiusAxisId: AxisId,
) => BaseAxisWithScale | undefined = createSelector(
  [selectRadiusAxisForRadialBar, selectRadiusAxisScaleForRadar],
  (axis: RadiusAxisSettings, scale: RechartsScale | undefined): BaseAxisWithScale | undefined => {
    if (axis == null || scale == null) {
      return undefined;
    }
    return { ...axis, scale };
  },
);

export const selectRadiusAxisTicks = (
  state: RechartsRootState,
  radiusAxisId: AxisId,
  _angleAxisId: AxisId,
  isPanorama: boolean,
): ReadonlyArray<TickItem> | undefined => {
  return selectPolarGraphicalItemAxisTicks(state, 'radiusAxis', radiusAxisId, isPanorama);
};

const selectAngleAxisForRadialBar = (
  state: RechartsRootState,
  _radiusAxisId: AxisId,
  angleAxisId: AxisId,
): AngleAxisSettings => selectAngleAxis(state, angleAxisId);

const selectAngleAxisScaleForRadialBar = (
  state: RechartsRootState,
  _radiusAxisId: AxisId,
  angleAxisId: AxisId,
): RechartsScale | undefined => selectPolarAxisScale(state, 'angleAxis', angleAxisId);

export const selectAngleAxisWithScale: (
  state: RechartsRootState,
  _radiusAxisId: AxisId,
  angleAxisId: AxisId,
) => BaseAxisWithScale | undefined = createSelector(
  [selectAngleAxisForRadialBar, selectAngleAxisScaleForRadialBar],
  (axis: AngleAxisSettings, scale: RechartsScale | undefined): BaseAxisWithScale | undefined => {
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
  isPanorama: boolean,
): ReadonlyArray<TickItem> | undefined => {
  return selectPolarAxisTicks(state, 'angleAxis', angleAxisId, isPanorama);
};

const pickRadialBarSettings = (
  _state: RechartsRootState,
  _radiusAxisId: AxisId,
  _angleAxisId: AxisId,
  radialBarSettings: RadialBarSettings,
): RadialBarSettings => radialBarSettings;

const selectSynchronisedRadialBarSettings: (
  state: RechartsRootState,
  _radiusAxisId: AxisId,
  _angleAxisId: AxisId,
  radialBarSettings: RadialBarSettings,
) => RadialBarSettings | undefined = createSelector(
  [selectUnfilteredPolarItems, pickRadialBarSettings],
  (graphicalItems, radialBarSettingsFromProps) => {
    if (
      graphicalItems.some(
        pgis =>
          pgis.type === 'radialBar' &&
          radialBarSettingsFromProps.dataKey === pgis.dataKey &&
          radialBarSettingsFromProps.stackId === pgis.stackId,
      )
    ) {
      return radialBarSettingsFromProps;
    }
    return undefined;
  },
);

export const selectBandSizeOfPolarAxis: (
  state: RechartsRootState,
  radiusAxisId: AxisId,
  angleAxisId: AxisId,
  isPanorama: boolean,
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
    const maxBarSize: number | undefined = isNullish(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
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
  [selectAllPolarBarPositions, selectSynchronisedRadialBarSettings],
  (allBarPositions: ReadonlyArray<BarWithPosition>, barSettings: RadialBarSettings) => {
    if (allBarPositions == null || barSettings == null) {
      return undefined;
    }
    const position = allBarPositions.find(
      (p: BarWithPosition) =>
        p.stackId === barSettings.stackId && barSettings.dataKey != null && p.dataKeys.includes(barSettings.dataKey),
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
) => Series<Record<number, number>, DataKey<any>> | undefined = createSelector(
  [selectRadialBarStackGroups, selectSynchronisedRadialBarSettings],
  combineStackedData,
);

export const selectRadialBarSectors: (
  state: RechartsRootState,
  radiusAxisId: AxisId | undefined,
  angleAxisId: AxisId | undefined,
  radialBarSettings: RadialBarSettings,
  cells: ReadonlyArray<ReactElement> | undefined,
) => ReadonlyArray<RadialBarDataItem> = createSelector(
  [
    selectAngleAxisWithScale,
    selectAngleAxisTicks,
    selectRadiusAxisWithScale,
    selectRadiusAxisTicks,
    selectChartDataWithIndexes,
    selectSynchronisedRadialBarSettings,
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
    radialBarSettings: RadialBarSettings,
    bandSize: number | undefined,
    layout: LayoutType,
    baseValue: number | unknown,
    polarViewBox: PolarViewBoxRequired,
    cells: ReadonlyArray<ReactElement> | undefined,
    pos: BarPositionPosition | undefined,
    stackedData: Series<Record<number, number>, DataKey<any>> | undefined,
  ): ReadonlyArray<RadialBarDataItem> => {
    if (
      radialBarSettings == null ||
      radiusAxis == null ||
      angleAxis == null ||
      chartData == null ||
      bandSize == null ||
      pos == null ||
      (layout !== 'centric' && layout !== 'radial') ||
      radiusAxisTicks == null
    ) {
      return [];
    }
    const { dataKey, minPointSize } = radialBarSettings;
    const { cx, cy, startAngle, endAngle } = polarViewBox;
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

export const selectRadialBarLegendPayload: (
  state: RechartsRootState,
  legendType: LegendType | undefined,
) => ReadonlyArray<LegendPayload> = createSelector(
  [selectChartDataAndAlwaysIgnoreIndexes, (_s: RechartsRootState, l: LegendType) => l],
  (
    { chartData, dataStartIndex, dataEndIndex }: ChartDataState,
    legendType: LegendType,
  ): ReadonlyArray<LegendPayload> => {
    if (chartData == null) {
      return [];
    }
    const displayedData = chartData.slice(dataStartIndex, dataEndIndex + 1);

    if (displayedData.length === 0) {
      return [];
    }

    return displayedData.map((entry): LegendPayload => {
      return {
        type: legendType,
        // @ts-expect-error we need a better typing for our data inputs
        value: entry.name,
        // @ts-expect-error we need a better typing for our data inputs
        color: entry.fill,
        payload: entry,
      };
    });
  },
);
