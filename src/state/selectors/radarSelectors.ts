import { createSelector } from '@reduxjs/toolkit';
import { RechartsRootState } from '../store';
import { AngleAxisForRadar, computeRadarPoints, RadarComposedData, RadiusAxisForRadar } from '../../polar/Radar';
import { BaseAxisWithScale } from './axisSelectors';
import { selectPolarAxisScale, selectPolarAxisTicks } from './polarScaleSelectors';
import { selectAngleAxis, selectPolarViewBox, selectRadiusAxis } from './polarAxisSelectors';
import { AxisId } from '../cartesianAxisSlice';
import { selectChartDataWithIndexes } from './dataSelectors';
import { ChartDataState } from '../chartDataSlice';
import { DataKey, LayoutType, PolarViewBox, TickItem } from '../../util/types';
import { selectChartLayout } from '../../context/chartLayoutContext';
import { getBandSizeOfAxis, isCategoricalAxis, RechartsScale } from '../../util/ChartUtils';
import { AngleAxisSettings, RadiusAxisSettings } from '../polarAxisSlice';

const selectRadiusAxisScale = (state: RechartsRootState, radiusAxisId: AxisId): RechartsScale | undefined =>
  selectPolarAxisScale(state, 'radiusAxis', radiusAxisId);

const selectRadiusAxisForRadar: (state: RechartsRootState, radiusAxisId: AxisId) => RadiusAxisForRadar = createSelector(
  [selectRadiusAxisScale],
  (scale: RechartsScale | undefined): RadiusAxisForRadar => {
    if (scale == null) {
      return undefined;
    }
    return { scale };
  },
);

export const selectRadiusAxisForBandSize: (
  state: RechartsRootState,
  radiusAxisId: AxisId,
) => BaseAxisWithScale | undefined = createSelector(
  [selectRadiusAxis, selectRadiusAxisScale],
  (axisSettings: RadiusAxisSettings | undefined, scale: RechartsScale | undefined): BaseAxisWithScale | undefined => {
    if (axisSettings == null || scale == null) {
      return undefined;
    }
    return {
      ...axisSettings,
      scale,
    };
  },
);

const selectRadiusAxisTicks = (state: RechartsRootState, radiusAxisId: AxisId): ReadonlyArray<TickItem> | undefined => {
  return selectPolarAxisTicks(state, 'radiusAxis', radiusAxisId);
};

const selectAngleAxisForRadar = (
  state: RechartsRootState,
  _radiusAxisId: AxisId,
  angleAxisId: AxisId,
): AngleAxisSettings => selectAngleAxis(state, angleAxisId);

const selectPolarAxisScaleForRadar = (
  state: RechartsRootState,
  _radiusAxisId: AxisId,
  angleAxisId: AxisId,
): RechartsScale | undefined => selectPolarAxisScale(state, 'angleAxis', angleAxisId);

export const selectAngleAxisForBandSize: (
  state: RechartsRootState,
  _radiusAxisId: AxisId,
  angleAxisId: AxisId,
) => BaseAxisWithScale | undefined = createSelector(
  [selectAngleAxisForRadar, selectPolarAxisScaleForRadar],
  (axisSettings: AngleAxisSettings, scale: RechartsScale | undefined): BaseAxisWithScale | undefined => {
    if (axisSettings == null || scale == null) {
      return undefined;
    }
    return {
      ...axisSettings,
      scale,
    };
  },
);

const selectAngleAxisTicks = (
  state: RechartsRootState,
  _radiusAxisId: AxisId,
  angleAxisId: AxisId,
): ReadonlyArray<TickItem> | undefined => {
  return selectPolarAxisTicks(state, 'angleAxis', angleAxisId);
};

export const selectAngleAxisWithScaleAndViewport: (
  state: RechartsRootState,
  _radiusAxisId: AxisId,
  angleAxisId: AxisId,
) => AngleAxisForRadar = createSelector(
  [selectAngleAxisForRadar, selectPolarAxisScaleForRadar, selectPolarViewBox],
  (axisOptions: AngleAxisSettings, scale: RechartsScale | undefined, polarViewBox: PolarViewBox | undefined) => {
    if (polarViewBox == null) {
      return undefined;
    }
    return {
      scale,
      type: axisOptions.type,
      dataKey: axisOptions.dataKey,
      cx: polarViewBox.cx,
      cy: polarViewBox.cy,
    };
  },
);

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
  [
    selectRadiusAxisForRadar,
    selectAngleAxisWithScaleAndViewport,
    selectChartDataWithIndexes,
    pickDataKey,
    selectBandSizeOfAxis,
  ],
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
