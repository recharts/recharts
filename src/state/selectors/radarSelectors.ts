import { createSelector } from '@reduxjs/toolkit';
import { RechartsRootState } from '../store';
import { AngleAxisForRadar, computeRadarPoints, RadarComposedData, RadiusAxisForRadar } from '../../polar/Radar';
import { BaseAxisWithScale, selectBaseAxis } from './axisSelectors';
import { selectPolarAxisScale, selectPolarAxisTicks } from './polarScaleSelectors';
import { selectAngleAxis, selectPolarViewBox, selectRadiusAxis } from './polarAxisSelectors';
import { AxisId } from '../cartesianAxisSlice';
import { selectChartDataWithIndexes } from './dataSelectors';
import { ChartDataState } from '../chartDataSlice';
import { DataKey, LayoutType, TickItem } from '../../util/types';
import { selectChartLayout } from '../../context/chartLayoutContext';
import { getBandSizeOfAxis, isCategoricalAxis } from '../../util/ChartUtils';

const selectRadiusAxisForRadar = (state: RechartsRootState, radiusAxisId: AxisId): RadiusAxisForRadar => {
  const scale = selectPolarAxisScale(state, 'radiusAxis', radiusAxisId);
  if (scale == null) {
    return undefined;
  }
  return { scale };
};

const selectRadiusAxisForBandSize = (state: RechartsRootState, radiusAxisId: AxisId): BaseAxisWithScale | undefined => {
  const axisSettings = selectRadiusAxis(state, radiusAxisId);
  const scale = selectPolarAxisScale(state, 'radiusAxis', radiusAxisId);
  if (axisSettings == null || scale == null) {
    return undefined;
  }
  return {
    ...axisSettings,
    scale,
  };
};

const selectRadiusAxisTicks = (state: RechartsRootState, radiusAxisId: AxisId): ReadonlyArray<TickItem> | undefined => {
  return selectPolarAxisTicks(state, 'radiusAxis', radiusAxisId);
};

const selectAngleAxisForBandSize = (
  state: RechartsRootState,
  _radiusAxisId: AxisId,
  angleAxisId: AxisId,
): BaseAxisWithScale | undefined => {
  const axisSettings = selectAngleAxis(state, angleAxisId);
  const scale = selectPolarAxisScale(state, 'angleAxis', angleAxisId);
  if (axisSettings == null || scale == null) {
    return undefined;
  }
  return {
    ...axisSettings,
    scale,
  };
};

const selectAngleAxisTicks = (
  state: RechartsRootState,
  _radiusAxisId: AxisId,
  angleAxisId: AxisId,
): ReadonlyArray<TickItem> | undefined => {
  return selectPolarAxisTicks(state, 'angleAxis', angleAxisId);
};

const selectAngleAxisForRadar = (
  state: RechartsRootState,
  _radiusAxisId: AxisId,
  angleAxisId: AxisId,
): AngleAxisForRadar => {
  const axisOptions = selectBaseAxis(state, 'angleAxis', angleAxisId);
  const scale = selectPolarAxisScale(state, 'angleAxis', angleAxisId);
  const { cx, cy } = selectPolarViewBox(state);
  return {
    scale,
    type: axisOptions.type,
    dataKey: axisOptions.dataKey,
    cx,
    cy,
  };
};

const pickDataKey = (
  _state: RechartsRootState,
  _radiusAxisId: AxisId,
  _angleAxisId: AxisId,
  radarDataKey: DataKey<any> | undefined,
): DataKey<any> | undefined => radarDataKey;

const selectBandSizeOfAxis: (
  state: RechartsRootState,
  radiusAxisId: AxisId,
  angleAxisId: AxisId,
  radarDataKey: DataKey<any> | undefined,
) => number | undefined = createSelector(
  [
    selectChartLayout,
    selectRadiusAxisForBandSize,
    selectRadiusAxisTicks,
    selectAngleAxisForBandSize,
    selectAngleAxisTicks,
  ],
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

export const selectRadarPoints: (
  state: RechartsRootState,
  radiusAxisId: AxisId,
  angleAxisId: AxisId,
  radarDataKey: DataKey<any> | undefined,
) => RadarComposedData = createSelector(
  [selectRadiusAxisForRadar, selectAngleAxisForRadar, selectChartDataWithIndexes, pickDataKey, selectBandSizeOfAxis],
  (
    radiusAxis: RadiusAxisForRadar,
    angleAxis: AngleAxisForRadar,
    { chartData, dataStartIndex, dataEndIndex }: ChartDataState,
    dataKey: DataKey<any> | undefined,
    bandSize: number | undefined,
  ) => {
    if (radiusAxis == null || angleAxis == null || chartData == null || bandSize == null) {
      return undefined;
    }
    const displayedData = chartData.slice(dataStartIndex, dataEndIndex + 1);
    return computeRadarPoints({
      radiusAxis,
      angleAxis,
      displayedData,
      dataKey,
      bandSize,
    });
  },
);
