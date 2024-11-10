import { createSelector } from '@reduxjs/toolkit';
import { RechartsRootState } from '../store';
import { AxisId } from '../cartesianAxisSlice';
import { selectPolarAxisTicks } from './polarScaleSelectors';
import { CartesianTickItem } from '../../util/types';

export type PolarAngles = Array<number>;

export type PolarRadius = Array<number>;

const selectAngleAxisTicks = (state: RechartsRootState, anglexisId: AxisId) =>
  selectPolarAxisTicks(state, 'angleAxis', anglexisId);

export const selectPolarGridAngles: (state: RechartsRootState, angleAxisId: AxisId) => PolarAngles = createSelector(
  [selectAngleAxisTicks],
  (ticks: ReadonlyArray<CartesianTickItem> | undefined): PolarAngles => {
    if (!ticks) {
      return undefined;
    }

    return ticks.map(tick => tick.coordinate);
  },
);

const selectRadiusAxisTicks = (state: RechartsRootState, radiusAxisId: AxisId) =>
  selectPolarAxisTicks(state, 'radiusAxis', radiusAxisId);

export const selectPolarGridRadii: (state: RechartsRootState, radiusAxisId: AxisId) => PolarRadius | undefined =
  createSelector([selectRadiusAxisTicks], (ticks: ReadonlyArray<CartesianTickItem> | undefined): PolarRadius => {
    if (!ticks) {
      return undefined;
    }

    return ticks.map(tick => tick.coordinate);
  });
