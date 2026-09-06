import { createSelector } from 'reselect';
import { RechartsRootState } from '../store';
import { AxisId } from '../cartesianAxisSlice';
import { selectPolarAngleAxisTicks, selectPolarAxisTicks } from './polarScaleSelectors';
import { CartesianTickItem } from '../../util/types';

export type PolarAngles = Array<number>;

export type PolarRadius = Array<number>;

// The angle axis is circular, so its first and last tick can land on the same angle.
const selectAngleAxisTicks = (state: RechartsRootState, anglexisId: AxisId) =>
  selectPolarAngleAxisTicks(state, 'angleAxis', anglexisId, false);

export const selectPolarGridAngles: (state: RechartsRootState, angleAxisId: AxisId) => PolarAngles | undefined =
  createSelector(
    [selectAngleAxisTicks],
    (ticks: ReadonlyArray<CartesianTickItem> | undefined): PolarAngles | undefined => {
      if (!ticks) {
        return undefined;
      }

      return ticks.map(tick => tick.coordinate);
    },
  );

const selectRadiusAxisTicks = (state: RechartsRootState, radiusAxisId: AxisId) =>
  selectPolarAxisTicks(state, 'radiusAxis', radiusAxisId, false);

export const selectPolarGridRadii: (state: RechartsRootState, radiusAxisId: AxisId) => PolarRadius | undefined =
  createSelector(
    [selectRadiusAxisTicks],
    (ticks: ReadonlyArray<CartesianTickItem> | undefined): PolarRadius | undefined => {
      if (!ticks) {
        return undefined;
      }

      return ticks.map(tick => tick.coordinate);
    },
  );
