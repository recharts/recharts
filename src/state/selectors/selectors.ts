import { createSelector } from 'reselect';
import sortBy from 'es-toolkit/compat/sortBy';
import { useAppSelector } from '../hooks';
import { RechartsRootState } from '../store';
import {
  ActiveTooltipProps,
  TooltipIndex,
  TooltipInteractionState,
  TooltipPayload,
  TooltipPayloadConfiguration,
} from '../tooltipSlice';
import { calculateActiveTickIndex, calculateTooltipPos, getActiveCoordinate, inRange } from '../../util/ChartUtils';
import {
  AxisType,
  ChartOffsetInternal,
  ChartPointer,
  Coordinate,
  DataKey,
  LayoutType,
  PolarViewBoxRequired,
  TickItem,
  TooltipEventType,
} from '../../util/types';
import { TooltipTrigger } from '../../chart/types';
import { selectChartDataWithIndexes } from './dataSelectors';
import { selectTooltipAxisTicks, selectTooltipDisplayedData } from './tooltipSelectors';
import { AxisRange } from './axisSelectors';
import { selectChartName } from './rootPropsSelectors';
import { selectChartLayout } from '../../context/chartLayoutContext';
import { selectChartOffsetInternal } from './selectChartOffsetInternal';
import { selectChartHeight, selectChartWidth } from './containerSelectors';
import { combineActiveLabel } from './combiners/combineActiveLabel';
import { combineTooltipInteractionState } from './combiners/combineTooltipInteractionState';
import { combineActiveTooltipIndex } from './combiners/combineActiveTooltipIndex';
import { combineCoordinateForDefaultIndex } from './combiners/combineCoordinateForDefaultIndex';
import { combineTooltipPayloadConfigurations } from './combiners/combineTooltipPayloadConfigurations';
import { selectTooltipPayloadSearcher } from './selectTooltipPayloadSearcher';
import { selectTooltipState } from './selectTooltipState';
import { combineTooltipPayload } from './combiners/combineTooltipPayload';
import { selectTooltipAxisDataKey } from './selectTooltipAxis';

export const useChartName = (): string | undefined => {
  return useAppSelector(selectChartName);
};

const pickTooltipEventType = (_state: RechartsRootState, tooltipEventType: TooltipEventType): TooltipEventType =>
  tooltipEventType;

const pickTrigger = (
  _state: RechartsRootState,
  _tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
): TooltipTrigger => trigger;

const pickDefaultIndex = (
  _state: RechartsRootState,
  _tooltipEventType: TooltipEventType,
  _trigger: TooltipTrigger,
  defaultIndex?: TooltipIndex | undefined,
): TooltipIndex | undefined => defaultIndex;

export const selectOrderedTooltipTicks = createSelector(selectTooltipAxisTicks, (ticks: ReadonlyArray<TickItem>) =>
  sortBy(ticks, o => o.coordinate),
);

export const selectTooltipInteractionState: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
  defaultIndex: TooltipIndex | undefined,
) => TooltipInteractionState | undefined = createSelector(
  [selectTooltipState, pickTooltipEventType, pickTrigger, pickDefaultIndex],
  combineTooltipInteractionState,
);

export const selectActiveIndex: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
  defaultIndex: TooltipIndex | undefined,
) => TooltipIndex | null = createSelector(
  [selectTooltipInteractionState, selectTooltipDisplayedData],
  combineActiveTooltipIndex,
);

export const selectTooltipDataKey = (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType | undefined,
  trigger: TooltipTrigger,
): DataKey<any> | undefined => {
  if (tooltipEventType == null) {
    return undefined;
  }
  const tooltipState = selectTooltipState(state);
  if (tooltipEventType === 'axis') {
    if (trigger === 'hover') {
      return tooltipState.axisInteraction.hover.dataKey;
    }
    return tooltipState.axisInteraction.click.dataKey;
  }
  if (trigger === 'hover') {
    return tooltipState.itemInteraction.hover.dataKey;
  }
  return tooltipState.itemInteraction.click.dataKey;
};

export const selectTooltipPayloadConfigurations: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
  defaultIndex: TooltipIndex | undefined,
) => ReadonlyArray<TooltipPayloadConfiguration> = createSelector(
  [selectTooltipState, pickTooltipEventType, pickTrigger, pickDefaultIndex],
  combineTooltipPayloadConfigurations,
);

export const selectCoordinateForDefaultIndex: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
  defaultIndex: TooltipIndex | undefined,
) => Coordinate | undefined = createSelector(
  [
    selectChartWidth,
    selectChartHeight,
    selectChartLayout,
    selectChartOffsetInternal,
    selectTooltipAxisTicks,
    pickDefaultIndex,
    selectTooltipPayloadConfigurations,
    selectTooltipPayloadSearcher,
  ],
  combineCoordinateForDefaultIndex,
);

export const selectActiveCoordinate: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
  defaultIndex: TooltipIndex | undefined,
  // TODO the state is marked as containing Coordinate but actually in polar charts it contains PolarCoordinate, we should keep the polar state separate
) => Coordinate | undefined = createSelector(
  [selectTooltipInteractionState, selectCoordinateForDefaultIndex],
  (tooltipInteractionState: TooltipInteractionState, defaultIndexCoordinate: Coordinate): Coordinate | undefined => {
    return tooltipInteractionState.coordinate ?? defaultIndexCoordinate;
  },
);

export const selectActiveLabel: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
  defaultIndex: TooltipIndex | undefined,
) => string | number | undefined = createSelector(selectTooltipAxisTicks, selectActiveIndex, combineActiveLabel);

export const selectTooltipPayload: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
  defaultIndex: TooltipIndex | undefined,
) => TooltipPayload | undefined = createSelector(
  [
    selectTooltipPayloadConfigurations,
    selectActiveIndex,
    selectChartDataWithIndexes,
    selectTooltipAxisDataKey,
    selectActiveLabel,
    selectTooltipPayloadSearcher,
    pickTooltipEventType,
  ],
  combineTooltipPayload,
);

export const selectIsTooltipActive: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
  defaultIndex: TooltipIndex | undefined,
) => { isActive: boolean; activeIndex: TooltipIndex | undefined } = createSelector(
  [selectTooltipInteractionState],
  (tooltipInteractionState: TooltipInteractionState) => {
    return { isActive: tooltipInteractionState.active, activeIndex: tooltipInteractionState.index };
  },
);

export const combineActiveProps = (
  chartEvent: ChartPointer | undefined,
  layout: LayoutType | undefined,
  polarViewBox: PolarViewBoxRequired | undefined,
  tooltipAxisType: AxisType | undefined,
  tooltipAxisRange: AxisRange | undefined,
  tooltipTicks: ReadonlyArray<TickItem> | undefined,
  orderedTooltipTicks: ReadonlyArray<TickItem> | undefined,
  offset: ChartOffsetInternal,
): ActiveTooltipProps | undefined => {
  if (!chartEvent || !layout || !tooltipAxisType || !tooltipAxisRange || !tooltipTicks) {
    return undefined;
  }
  const rangeObj = inRange(chartEvent.chartX, chartEvent.chartY, layout, polarViewBox, offset);
  if (!rangeObj) {
    return undefined;
  }
  const pos: number | undefined = calculateTooltipPos(rangeObj, layout);

  const activeIndex = calculateActiveTickIndex(
    pos,
    orderedTooltipTicks,
    tooltipTicks,
    tooltipAxisType,
    tooltipAxisRange,
  );

  const activeCoordinate = getActiveCoordinate(layout, tooltipTicks, activeIndex, rangeObj);

  return { activeIndex: String(activeIndex), activeCoordinate };
};
