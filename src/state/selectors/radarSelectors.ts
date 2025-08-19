import { createSelector } from 'reselect';
import { RechartsRootState } from '../store';
import { AngleAxisForRadar, computeRadarPoints, RadarComposedData, RadiusAxisForRadar } from '../../polar/Radar';
import { BaseAxisWithScale } from './axisSelectors';
import { selectPolarAxisScale, selectPolarAxisTicks } from './polarScaleSelectors';
import { selectAngleAxis, selectPolarViewBox, selectRadiusAxis } from './polarAxisSelectors';
import { AxisId } from '../cartesianAxisSlice';
import { selectChartDataAndAlwaysIgnoreIndexes } from './dataSelectors';
import { ChartDataState } from '../chartDataSlice';
import { DataKey, LayoutType, PolarViewBoxRequired, TickItem } from '../../util/types';
import { selectChartLayout } from '../../context/chartLayoutContext';
import { getBandSizeOfAxis, isCategoricalAxis, RechartsScale } from '../../util/ChartUtils';
import { AngleAxisSettings, RadiusAxisSettings } from '../polarAxisSlice';
import { selectUnfilteredPolarItems } from './polarSelectors';
import { GraphicalItemId } from '../graphicalItemsSlice';

const selectRadiusAxisScale = (state: RechartsRootState, radiusAxisId: AxisId): RechartsScale | undefined =>
  selectPolarAxisScale(state, 'radiusAxis', radiusAxisId);

const selectRadiusAxisForRadar: (state: RechartsRootState, radiusAxisId: AxisId) => RadiusAxisForRadar | undefined =
  createSelector([selectRadiusAxisScale], (scale: RechartsScale | undefined): RadiusAxisForRadar | undefined => {
    if (scale == null) {
      return undefined;
    }
    return { scale };
  });

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

const selectRadiusAxisTicks = (
  state: RechartsRootState,
  radiusAxisId: AxisId,
  _angleAxisId: AxisId,
  isPanorama: boolean,
): ReadonlyArray<TickItem> | undefined => {
  return selectPolarAxisTicks(state, 'radiusAxis', radiusAxisId, isPanorama);
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
  isPanorama: boolean,
): ReadonlyArray<TickItem> | undefined => {
  return selectPolarAxisTicks(state, 'angleAxis', angleAxisId, isPanorama);
};

export const selectAngleAxisWithScaleAndViewport: (
  state: RechartsRootState,
  _radiusAxisId: AxisId,
  angleAxisId: AxisId,
) => AngleAxisForRadar | undefined = createSelector(
  [selectAngleAxisForRadar, selectPolarAxisScaleForRadar, selectPolarViewBox],
  (
    axisOptions: AngleAxisSettings,
    scale: RechartsScale | undefined,
    polarViewBox: PolarViewBoxRequired | undefined,
  ): AngleAxisForRadar | undefined => {
    if (polarViewBox == null || scale == null) {
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

const pickId = (
  _state: RechartsRootState,
  _radiusAxisId: AxisId,
  _angleAxisId: AxisId,
  _isPanorama: boolean,
  radarId: GraphicalItemId,
): GraphicalItemId => radarId;

const selectBandSizeOfAxis: (
  state: RechartsRootState,
  radiusAxisId: AxisId,
  angleAxisId: AxisId,
  isPanorama: boolean,
  radarId: GraphicalItemId,
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

const selectSynchronisedRadarDataKey: (
  state: RechartsRootState,
  _radiusAxisId: AxisId,
  _angleAxisId: AxisId,
  _isPanorama: boolean,
  radarId: GraphicalItemId,
) => DataKey<any> | undefined = createSelector([selectUnfilteredPolarItems, pickId], (graphicalItems, radarId) => {
  if (graphicalItems == null) {
    return undefined;
  }
  // Find the radar item with the given radarId
  const pgis = graphicalItems.find(item => item.type === 'radar' && radarId === item.id);
  // If found, return its dataKey
  return pgis?.dataKey;
});

export const selectRadarPoints: (
  state: RechartsRootState,
  radiusAxisId: AxisId,
  angleAxisId: AxisId,
  isPanorama: boolean,
  radarId: GraphicalItemId,
) => RadarComposedData | undefined = createSelector(
  [
    selectRadiusAxisForRadar,
    selectAngleAxisWithScaleAndViewport,
    selectChartDataAndAlwaysIgnoreIndexes,
    selectSynchronisedRadarDataKey,
    selectBandSizeOfAxis,
  ],
  (
    radiusAxis: RadiusAxisForRadar,
    angleAxis: AngleAxisForRadar,
    { chartData, dataStartIndex, dataEndIndex }: ChartDataState,
    dataKey: DataKey<any> | undefined,
    bandSize: number | undefined,
  ): RadarComposedData | undefined => {
    if (radiusAxis == null || angleAxis == null || chartData == null || bandSize == null || dataKey == null) {
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
