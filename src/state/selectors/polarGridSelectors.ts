import { createSelector } from '@reduxjs/toolkit';
import { RechartsRootState } from '../store';
import { AxisId } from '../cartesianAxisSlice';
import { selectPolarAxisTicks } from './polarScaleSelectors';
import { CartesianTickItem } from '../../util/types';

export type PolarAngles = Array<number>;

export type PolarRadius = Array<number>;

export const selectPolarGridAngles: (
  state: RechartsRootState,
  axisType: 'angleAxis' | 'radiusAxis',
  polarAxisId: AxisId,
) => PolarAngles = createSelector(
  [selectPolarAxisTicks],
  (ticks: ReadonlyArray<CartesianTickItem> | undefined): PolarAngles => {
    if (!ticks) {
      return undefined;
    }

    return ticks.map(tick => tick.coordinate);
  },
);
