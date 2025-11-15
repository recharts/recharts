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
import { calculateCartesianTooltipPos, calculatePolarTooltipPos } from '../../util/ChartUtils';
import {
  AxisType,
  CartesianLayout,
  ChartOffsetInternal,
  ChartPointer,
  Coordinate,
  DataKey,
  PolarCoordinate,
  PolarLayout,
  PolarViewBoxRequired,
  TickItem,
  TooltipEventType,
} from '../../util/types';
import { TooltipTrigger } from '../../chart/types';
import { selectChartDataWithIndexes } from './dataSelectors';
import { selectTooltipAxisDomain, selectTooltipAxisTicks, selectTooltipDisplayedData } from './tooltipSelectors';
import { AxisRange, selectTooltipAxisDataKey } from './axisSelectors';
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
import {
  calculateActiveTickIndex,
  getActiveCartesianCoordinate,
  getActivePolarCoordinate,
  isInCartesianRange,
} from '../../util/getActiveCoordinate';
import { inRangeOfSector } from '../../util/PolarUtils';

export const useChartName = (): string | undefined => {
  return useAppSelector(selectChartName);
};

const pickTooltipEventType = (
  _state: RechartsRootState,
  tooltipEventType: TooltipEventType | undefined,
): TooltipEventType | undefined => tooltipEventType;

const pickTrigger = (
  _state: RechartsRootState,
  _tooltipEventType: TooltipEventType | undefined,
  trigger: TooltipTrigger,
): TooltipTrigger => trigger;

const pickDefaultIndex = (
  _state: RechartsRootState,
  _tooltipEventType: TooltipEventType | undefined,
  _trigger: TooltipTrigger,
  defaultIndex?: TooltipIndex | undefined,
): TooltipIndex | undefined => defaultIndex;

export const selectOrderedTooltipTicks = createSelector(selectTooltipAxisTicks, (ticks: ReadonlyArray<TickItem>) =>
  sortBy(ticks, o => o.coordinate),
);

export const selectTooltipInteractionState: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType | undefined,
  trigger: TooltipTrigger,
  defaultIndex: TooltipIndex | undefined,
) => TooltipInteractionState | undefined = createSelector(
  [selectTooltipState, pickTooltipEventType, pickTrigger, pickDefaultIndex],
  combineTooltipInteractionState,
);

export const selectActiveIndex: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType | undefined,
  trigger: TooltipTrigger,
  defaultIndex: TooltipIndex | undefined,
) => TooltipIndex | null = createSelector(
  [selectTooltipInteractionState, selectTooltipDisplayedData, selectTooltipAxisDataKey, selectTooltipAxisDomain],
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
  tooltipEventType: TooltipEventType | undefined,
  trigger: TooltipTrigger,
  defaultIndex: TooltipIndex | undefined,
) => ReadonlyArray<TooltipPayloadConfiguration> | undefined = createSelector(
  [selectTooltipState, pickTooltipEventType, pickTrigger, pickDefaultIndex],
  combineTooltipPayloadConfigurations,
);

export const selectCoordinateForDefaultIndex: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType | undefined,
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
  tooltipEventType: TooltipEventType | undefined,
  trigger: TooltipTrigger,
  defaultIndex: TooltipIndex | undefined,
  // TODO the state is marked as containing Coordinate but actually in polar charts it contains PolarCoordinate, we should keep the polar state separate
) => Coordinate | PolarCoordinate | undefined = createSelector(
  [selectTooltipInteractionState, selectCoordinateForDefaultIndex],
  (
    tooltipInteractionState: TooltipInteractionState,
    defaultIndexCoordinate: Coordinate,
  ): Coordinate | PolarCoordinate | undefined => {
    return tooltipInteractionState.coordinate ?? defaultIndexCoordinate;
  },
);

export const selectActiveLabel: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType | undefined,
  trigger: TooltipTrigger,
  defaultIndex: TooltipIndex | undefined,
) => string | number | undefined = createSelector([selectTooltipAxisTicks, selectActiveIndex], combineActiveLabel);

export const selectTooltipPayload: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType | undefined,
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
  tooltipEventType: TooltipEventType | undefined,
  trigger: TooltipTrigger,
  defaultIndex: TooltipIndex | undefined,
) => { isActive: boolean; activeIndex: TooltipIndex | null } = createSelector(
  [selectTooltipInteractionState, selectActiveIndex],
  (tooltipInteractionState: TooltipInteractionState, activeIndex: TooltipIndex | null) => {
    return { isActive: tooltipInteractionState.active && activeIndex != null, activeIndex };
  },
);

const combineActiveCartesianProps = (
  chartEvent: ChartPointer | undefined,
  layout: CartesianLayout,
  tooltipAxisType: AxisType | undefined,
  tooltipAxisRange: AxisRange | undefined,
  tooltipTicks: ReadonlyArray<TickItem> | undefined,
  orderedTooltipTicks: ReadonlyArray<TickItem> | undefined,
  offset: ChartOffsetInternal,
): ActiveTooltipProps | undefined => {
  if (!chartEvent || !tooltipAxisType || !tooltipAxisRange || !tooltipTicks) {
    return undefined;
  }
  if (!isInCartesianRange(chartEvent, offset)) {
    return undefined;
  }
  const pos: number | undefined = calculateCartesianTooltipPos(chartEvent, layout);

  const activeIndex = calculateActiveTickIndex(
    pos,
    orderedTooltipTicks,
    tooltipTicks,
    tooltipAxisType,
    tooltipAxisRange,
  );

  const activeCoordinate = getActiveCartesianCoordinate(layout, tooltipTicks, activeIndex, chartEvent);

  return { activeIndex: String(activeIndex), activeCoordinate };
};

const combineActivePolarProps = (
  chartEvent: ChartPointer | undefined,
  layout: PolarLayout,
  polarViewBox: PolarViewBoxRequired | undefined,
  tooltipAxisType: AxisType | undefined,
  tooltipAxisRange: AxisRange | undefined,
  tooltipTicks: ReadonlyArray<TickItem> | undefined,
  orderedTooltipTicks: ReadonlyArray<TickItem> | undefined,
): ActiveTooltipProps | undefined => {
  if (!chartEvent || !tooltipAxisType || !tooltipAxisRange || !tooltipTicks || !polarViewBox) {
    return undefined;
  }
  const rangeObj = inRangeOfSector(chartEvent, polarViewBox);
  if (!rangeObj) {
    return undefined;
  }
  const pos: number | undefined = calculatePolarTooltipPos(rangeObj, layout);

  const activeIndex = calculateActiveTickIndex(
    pos,
    orderedTooltipTicks,
    tooltipTicks,
    tooltipAxisType,
    tooltipAxisRange,
  );

  const activeCoordinate: PolarCoordinate = getActivePolarCoordinate(layout, tooltipTicks, activeIndex, rangeObj);

  return { activeIndex: String(activeIndex), activeCoordinate };
};

export const combineActiveProps = (
  chartEvent: ChartPointer | undefined,
  layout: CartesianLayout | PolarLayout | undefined,
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
  if (layout === 'horizontal' || layout === 'vertical') {
    return combineActiveCartesianProps(
      chartEvent,
      layout,
      tooltipAxisType,
      tooltipAxisRange,
      tooltipTicks,
      orderedTooltipTicks,
      offset,
    );
  }
  return combineActivePolarProps(
    chartEvent,
    layout,
    polarViewBox,
    tooltipAxisType,
    tooltipAxisRange,
    tooltipTicks,
    orderedTooltipTicks,
  );
};
