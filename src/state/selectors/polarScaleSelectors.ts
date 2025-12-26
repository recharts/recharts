import { createSelector } from 'reselect';
import { RechartsRootState } from '../store';
import { AxisId } from '../cartesianAxisSlice';
import {
  combineAxisTicks,
  combineCategoricalDomain,
  combineGraphicalItemTicks,
  combineScaleFunction,
  selectRenderableAxisSettings,
  selectDuplicateDomain,
  selectRealScaleType,
} from './axisSelectors';
import {
  selectAngleAxis,
  selectAngleAxisRangeWithReversed,
  selectRadiusAxis,
  selectRadiusAxisRangeWithReversed,
} from './polarAxisSelectors';
import { CartesianTickItem } from '../../util/types';
import { selectChartLayout } from '../../context/chartLayoutContext';
import {
  selectPolarAppliedValues,
  selectPolarAxisDomainIncludingNiceTicks,
  selectPolarNiceTicks,
} from './polarSelectors';
import { pickAxisType } from './pickAxisType';
import { RechartsScale } from '../../util/scale/RechartsScale';

export const selectPolarAxis = (state: RechartsRootState, axisType: 'angleAxis' | 'radiusAxis', axisId: AxisId) => {
  switch (axisType) {
    case 'angleAxis': {
      return selectAngleAxis(state, axisId);
    }
    case 'radiusAxis': {
      return selectRadiusAxis(state, axisId);
    }
    default: {
      throw new Error(`Unexpected axis type: ${axisType}`);
    }
  }
};

const selectPolarAxisRangeWithReversed = (
  state: RechartsRootState,
  axisType: 'angleAxis' | 'radiusAxis',
  axisId: AxisId,
) => {
  switch (axisType) {
    case 'angleAxis': {
      return selectAngleAxisRangeWithReversed(state, axisId);
    }
    case 'radiusAxis': {
      return selectRadiusAxisRangeWithReversed(state, axisId);
    }
    default: {
      throw new Error(`Unexpected axis type: ${axisType}`);
    }
  }
};

export const selectPolarAxisScale: (
  state: RechartsRootState,
  axisType: 'angleAxis' | 'radiusAxis',
  polarAxisId: AxisId,
) => RechartsScale | undefined = createSelector(
  [selectPolarAxis, selectRealScaleType, selectPolarAxisDomainIncludingNiceTicks, selectPolarAxisRangeWithReversed],
  combineScaleFunction,
);

export const selectPolarCategoricalDomain: (
  state: RechartsRootState,
  axisType: 'angleAxis' | 'radiusAxis',
  polarAxisId: AxisId,
) => ReadonlyArray<unknown> | undefined = createSelector(
  [selectChartLayout, selectPolarAppliedValues, selectRenderableAxisSettings, pickAxisType],
  combineCategoricalDomain,
);

export const selectPolarAxisTicks: (
  state: RechartsRootState,
  axisType: 'angleAxis' | 'radiusAxis',
  polarAxisId: AxisId,
  isPanorama: boolean,
) => ReadonlyArray<CartesianTickItem> | undefined = createSelector(
  [
    selectChartLayout,
    selectPolarAxis,
    selectRealScaleType,
    selectPolarAxisScale,
    selectPolarNiceTicks,
    selectPolarAxisRangeWithReversed,
    selectDuplicateDomain,
    selectPolarCategoricalDomain,
    pickAxisType,
  ],
  combineAxisTicks,
);

export const selectPolarAngleAxisTicks: (
  state: RechartsRootState,
  axisType: 'angleAxis',
  polarAxisId: AxisId,
  isPanorama: boolean,
) => ReadonlyArray<CartesianTickItem> | undefined = createSelector([selectPolarAxisTicks], ticks => {
  /*
   * Angle axis is circular; so here we need to look for ticks that overlap (i.e., 0 and 360 degrees)
   * and remove the duplicate tick to avoid rendering issues.
   */
  if (!ticks) {
    return undefined;
  }

  const uniqueTicksMap = new Map<number, CartesianTickItem>();
  ticks.forEach(tick => {
    const normalizedCoordinate = (tick.coordinate + 360) % 360;
    if (!uniqueTicksMap.has(normalizedCoordinate)) {
      uniqueTicksMap.set(normalizedCoordinate, tick);
    }
  });

  return Array.from(uniqueTicksMap.values());
});

export const selectPolarGraphicalItemAxisTicks: (
  state: RechartsRootState,
  axisType: 'angleAxis' | 'radiusAxis',
  polarAxisId: AxisId,
  isPanorama: boolean,
) => ReadonlyArray<CartesianTickItem> | undefined = createSelector(
  [
    selectChartLayout,
    selectPolarAxis,
    selectPolarAxisScale,
    selectPolarAxisRangeWithReversed,
    selectDuplicateDomain,
    selectPolarCategoricalDomain,
    pickAxisType,
  ],
  combineGraphicalItemTicks,
);
