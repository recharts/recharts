import { ReactElement } from 'react';
import { createSelector } from 'reselect';
import { RechartsRootState } from '../store';
import { AxisId } from '../cartesianAxisSlice';
import { selectChartDataAndAlwaysIgnoreIndexes } from './dataSelectors';
import { selectAngleAxis, selectPolarViewBox, selectRadiusAxis } from './polarAxisSelectors';
import { selectPolarAxisScale, selectPolarAxisTicks } from './polarScaleSelectors';
import { GraphicalItemId } from '../graphicalItemsSlice';
import { ChartData, ChartDataState } from '../chartDataSlice';
import { TickItem } from '../../util/types';
import { PolarScatterPointItem, computePolarScatterPoints } from '../../polar/PolarScatter';
import { PolarScatterSettings } from '../types/PolarScatterSettings';
import { selectUnfilteredPolarItems } from './polarSelectors';
import { getBandSizeOfAxis } from '../../util/ChartUtils';
import { RechartsScale } from '../../util/scale/RechartsScale';
import { AngleAxisSettings, RadiusAxisSettings } from '../polarAxisSlice';
import { BaseAxisWithScale } from './axisSelectors';

type PolarAxisWithScale = BaseAxisWithScale & {
  allowDuplicatedCategory?: boolean;
};

const selectRadiusAxisScale = (
  state: RechartsRootState,
  radiusAxisId: AxisId,
  _angleAxisId: AxisId,
): RechartsScale | undefined => selectPolarAxisScale(state, 'radiusAxis', radiusAxisId);

const selectRadiusAxisWithScale: (
  state: RechartsRootState,
  radiusAxisId: AxisId,
  angleAxisId: AxisId,
) => PolarAxisWithScale | undefined = createSelector(
  [selectRadiusAxis, selectRadiusAxisScale],
  (axisSettings: RadiusAxisSettings | undefined, scale: RechartsScale | undefined): PolarAxisWithScale | undefined => {
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
): ReadonlyArray<TickItem> | undefined => selectPolarAxisTicks(state, 'radiusAxis', radiusAxisId, false);

const selectAngleAxisSettings = (
  state: RechartsRootState,
  _radiusAxisId: AxisId,
  angleAxisId: AxisId,
): AngleAxisSettings => selectAngleAxis(state, angleAxisId);

const selectAngleAxisScale = (
  state: RechartsRootState,
  _radiusAxisId: AxisId,
  angleAxisId: AxisId,
): RechartsScale | undefined => selectPolarAxisScale(state, 'angleAxis', angleAxisId);

const selectAngleAxisWithScale: (
  state: RechartsRootState,
  radiusAxisId: AxisId,
  angleAxisId: AxisId,
) => PolarAxisWithScale | undefined = createSelector(
  [selectAngleAxisSettings, selectAngleAxisScale],
  (axisSettings: AngleAxisSettings, scale: RechartsScale | undefined): PolarAxisWithScale | undefined => {
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
): ReadonlyArray<TickItem> | undefined => selectPolarAxisTicks(state, 'angleAxis', angleAxisId, false);

const pickId = (
  _state: RechartsRootState,
  _radiusAxisId: AxisId,
  _angleAxisId: AxisId,
  polarScatterId: GraphicalItemId,
): GraphicalItemId => polarScatterId;

const pickCells = (
  _state: RechartsRootState,
  _radiusAxisId: AxisId,
  _angleAxisId: AxisId,
  _polarScatterId: GraphicalItemId,
  cells: ReadonlyArray<ReactElement> | undefined,
): ReadonlyArray<ReactElement> | undefined => cells;

const selectPolarScatterSettings: (
  state: RechartsRootState,
  radiusAxisId: AxisId,
  angleAxisId: AxisId,
  polarScatterId: GraphicalItemId,
) => PolarScatterSettings | undefined = createSelector(
  [selectUnfilteredPolarItems, pickId],
  (graphicalItems, polarScatterId): PolarScatterSettings | undefined =>
    graphicalItems.find(
      (item): item is PolarScatterSettings => item.type === 'polarScatter' && item.id === polarScatterId,
    ),
);

export const selectPolarScatterPoints: (
  state: RechartsRootState,
  radiusAxisId: AxisId,
  angleAxisId: AxisId,
  polarScatterId: GraphicalItemId,
  cells: ReadonlyArray<ReactElement> | undefined,
) => ReadonlyArray<PolarScatterPointItem> | undefined = createSelector(
  [
    selectChartDataAndAlwaysIgnoreIndexes,
    selectRadiusAxisWithScale,
    selectRadiusAxisTicks,
    selectAngleAxisWithScale,
    selectAngleAxisTicks,
    selectPolarViewBox,
    selectPolarScatterSettings,
    pickCells,
  ],
  (
    { chartData, dataStartIndex, dataEndIndex }: ChartDataState,
    radiusAxis: PolarAxisWithScale | undefined,
    radiusAxisTicks: ReadonlyArray<TickItem> | undefined,
    angleAxis: PolarAxisWithScale | undefined,
    angleAxisTicks: ReadonlyArray<TickItem> | undefined,
    polarViewBox,
    polarScatterSettings: PolarScatterSettings | undefined,
    cells,
  ): ReadonlyArray<PolarScatterPointItem> | undefined => {
    if (
      polarScatterSettings == null ||
      polarViewBox == null ||
      radiusAxis == null ||
      angleAxis == null ||
      radiusAxisTicks == null ||
      angleAxisTicks == null
    ) {
      return undefined;
    }

    let displayedData: ChartData | undefined;
    if (polarScatterSettings.data != null) {
      displayedData = polarScatterSettings.data;
    } else {
      displayedData = chartData?.slice(dataStartIndex, dataEndIndex + 1);
    }

    if (displayedData == null) {
      return undefined;
    }

    return computePolarScatterPoints({
      displayedData,
      angleAxis,
      angleAxisTicks,
      angleBandSize: getBandSizeOfAxis(angleAxis, angleAxisTicks, false) ?? 0,
      radiusAxis,
      radiusAxisTicks,
      radiusBandSize: getBandSizeOfAxis(radiusAxis, radiusAxisTicks, false) ?? 0,
      polarViewBox,
      polarScatterSettings,
      cells,
    });
  },
);
