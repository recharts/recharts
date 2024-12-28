import { createSelector } from '@reduxjs/toolkit';
import { RechartsRootState } from '../store';
import {
  AppliedChartDataWithErrorDomain,
  AxisRange,
  AxisWithTicksSettings,
  combineAppliedNumericalValuesIncludingErrorValues,
  combineAppliedValues,
  combineAreasDomain,
  combineAxisDomain,
  combineAxisDomainWithNiceTicks,
  combineCategoricalDomain,
  combineDisplayedData,
  combineDomainOfStackGroups,
  combineDotsDomain,
  combineDuplicateDomain,
  combineGraphicalItemsData,
  combineGraphicalItemsSettings,
  combineLinesDomain,
  combineNiceTicks,
  combineNumericalDomain,
  combineRealScaleType,
  combineScaleFunction,
  combineStackGroups,
  filterGraphicalNotStackedItems,
  filterReferenceElements,
  getDomainDefinition,
  itemAxisPredicate,
  mergeDomains,
  selectAxisRange,
  selectAxisSettings,
  selectHasBar,
  selectReferenceAreas,
  selectReferenceDots,
  selectReferenceLines,
  StackGroup,
  XorYType,
} from './axisSelectors';
import { selectChartLayout } from '../../context/chartLayoutContext';
import { AxisId } from '../cartesianAxisSlice';
import { isCategoricalAxis, RechartsScale, StackId } from '../../util/ChartUtils';
import {
  AxisDomain,
  CategoricalDomain,
  DataKey,
  LayoutType,
  NumberDomain,
  TickItem,
  TooltipEventType,
} from '../../util/types';
import { AppliedChartData, ChartData } from '../chartDataSlice';
import { selectChartDataWithIndexes } from './dataSelectors';
import { GraphicalItemSettings } from '../graphicalItemsSlice';
import { ReferenceAreaSettings, ReferenceDotSettings, ReferenceLineSettings } from '../referenceElementsSlice';
import { selectChartName, selectStackOffsetType } from './rootPropsSelectors';
import { mathSign } from '../../util/DataUtils';
import { combineAxisRangeWithReverse } from './combiners/combineAxisRangeWithReverse';
import { TooltipIndex, TooltipInteractionState } from '../tooltipSlice';

import {
  combineTooltipEventType,
  selectDefaultTooltipEventType,
  selectValidateTooltipEventTypes,
} from './selectTooltipEventType';

import { combineActiveLabel } from './combiners/combineActiveLabel';

import { selectTooltipSettings } from './selectTooltipSettings';

import { combineTooltipInteractionState } from './combiners/combineTooltipInteractionState';

export const selectTooltipAxisType = (state: RechartsRootState): XorYType => {
  const layout = selectChartLayout(state);

  if (layout === 'horizontal') {
    return 'xAxis';
  }

  if (layout === 'vertical') {
    return 'yAxis';
  }

  if (layout === 'centric') {
    return 'angleAxis';
  }

  return 'radiusAxis';
};

export const selectTooltipAxisId = (state: RechartsRootState): AxisId => state.tooltip.settings.axisId;

export const selectTooltipAxis = (state: RechartsRootState): AxisWithTicksSettings => {
  const axisType = selectTooltipAxisType(state);
  const axisId = selectTooltipAxisId(state);
  return selectAxisSettings(state, axisType, axisId);
};

export const selectTooltipAxisRealScaleType: (state: RechartsRootState) => string | undefined = createSelector(
  [selectTooltipAxis, selectChartLayout, selectHasBar, selectChartName, selectTooltipAxisType],
  combineRealScaleType,
);

export const selectAllUnfilteredGraphicalItems: (state: RechartsRootState) => ReadonlyArray<GraphicalItemSettings> =
  createSelector(
    [
      (state: RechartsRootState) => state.graphicalItems.cartesianItems,
      (state: RechartsRootState) => state.graphicalItems.polarItems,
    ],
    (cartesianItems, polarItems) => [...cartesianItems, ...polarItems],
  );

const selectTooltipAxisPredicate = createSelector([selectTooltipAxisType, selectTooltipAxisId], itemAxisPredicate);

export const selectAllGraphicalItemsSettings = createSelector(
  [selectAllUnfilteredGraphicalItems, selectTooltipAxis, selectTooltipAxisPredicate],
  combineGraphicalItemsSettings,
);

export const selectTooltipGraphicalItemsData = createSelector(
  [selectAllGraphicalItemsSettings],
  combineGraphicalItemsData,
);

/**
 * Data for tooltip always use the data with indexes set by a Brush,
 * and never accept the isPanorama flag:
 * because Tooltip never displays inside the panorama anyway
 * so we don't need to worry what would happen there.
 */
export const selectTooltipDisplayedData: (state: RechartsRootState) => ChartData = createSelector(
  [selectTooltipGraphicalItemsData, selectChartDataWithIndexes],
  combineDisplayedData,
);

const selectAllTooltipAppliedValues: (state: RechartsRootState) => AppliedChartData = createSelector(
  [selectTooltipDisplayedData, selectTooltipAxis, selectAllGraphicalItemsSettings],
  combineAppliedValues,
);

const selectTooltipAxisDomainDefinition: (state: RechartsRootState) => AxisDomain | undefined = createSelector(
  [selectTooltipAxis],
  getDomainDefinition,
);

const selectTooltipStackGroups: (state: RechartsRootState) => Record<StackId, StackGroup> = createSelector(
  [selectTooltipDisplayedData, selectAllGraphicalItemsSettings, selectStackOffsetType],
  combineStackGroups,
);

const selectTooltipDomainOfStackGroups: (state: RechartsRootState) => NumberDomain | undefined = createSelector(
  [selectTooltipStackGroups, selectChartDataWithIndexes, selectTooltipAxisType],
  combineDomainOfStackGroups,
);

const selectTooltipItemsSettingsExceptStacked: (state: RechartsRootState) => ReadonlyArray<GraphicalItemSettings> =
  createSelector([selectAllGraphicalItemsSettings], filterGraphicalNotStackedItems);

const selectTooltipAllAppliedNumericalValuesIncludingErrorValues: (
  state: RechartsRootState,
) => ReadonlyArray<AppliedChartDataWithErrorDomain> = createSelector(
  [selectTooltipDisplayedData, selectTooltipAxis, selectTooltipItemsSettingsExceptStacked, selectTooltipAxisType],
  combineAppliedNumericalValuesIncludingErrorValues,
);

const selectReferenceDotsByTooltipAxis: (state: RechartsRootState) => ReadonlyArray<ReferenceDotSettings> | undefined =
  createSelector([selectReferenceDots, selectTooltipAxisType, selectTooltipAxisId], filterReferenceElements);

const selectTooltipReferenceDotsDomain: (state: RechartsRootState) => NumberDomain | undefined = createSelector(
  [selectReferenceDotsByTooltipAxis, selectTooltipAxisType],
  combineDotsDomain,
);

const selectReferenceAreasByTooltipAxis: (
  state: RechartsRootState,
) => ReadonlyArray<ReferenceAreaSettings> | undefined = createSelector(
  [selectReferenceAreas, selectTooltipAxisType, selectTooltipAxisId],
  filterReferenceElements,
);

const selectTooltipReferenceAreasDomain: (state: RechartsRootState) => NumberDomain | undefined = createSelector(
  [selectReferenceAreasByTooltipAxis, selectTooltipAxisType],
  combineAreasDomain,
);

const selectReferenceLinesByTooltipAxis: (
  state: RechartsRootState,
) => ReadonlyArray<ReferenceLineSettings> | undefined = createSelector(
  [selectReferenceLines, selectTooltipAxisType, selectTooltipAxisId],
  filterReferenceElements,
);

const selectTooltipReferenceLinesDomain: (state: RechartsRootState) => NumberDomain | undefined = createSelector(
  [selectReferenceLinesByTooltipAxis, selectTooltipAxisType],
  combineLinesDomain,
);

const selectTooltipReferenceElementsDomain: (state: RechartsRootState) => NumberDomain | undefined = createSelector(
  [selectTooltipReferenceDotsDomain, selectTooltipReferenceLinesDomain, selectTooltipReferenceAreasDomain],
  mergeDomains,
);

const selectTooltipNumericalDomain: (state: RechartsRootState) => NumberDomain | undefined = createSelector(
  [
    selectTooltipAxis,
    selectTooltipAxisDomainDefinition,
    selectTooltipDomainOfStackGroups,
    selectTooltipAllAppliedNumericalValuesIncludingErrorValues,
    selectTooltipReferenceElementsDomain,
  ],
  combineNumericalDomain,
);

export const selectTooltipAxisDomain: (state: RechartsRootState) => NumberDomain | CategoricalDomain | undefined =
  createSelector(
    [
      selectTooltipAxis,
      selectChartLayout,
      selectTooltipDisplayedData,
      selectAllTooltipAppliedValues,
      selectStackOffsetType,
      selectTooltipAxisType,
      selectTooltipNumericalDomain,
    ],
    combineAxisDomain,
  );

const selectTooltipNiceTicks: (state: RechartsRootState) => ReadonlyArray<number | string> = createSelector(
  [selectTooltipAxisDomain, selectTooltipAxis, selectTooltipAxisRealScaleType],
  combineNiceTicks,
);

export const selectTooltipAxisDomainIncludingNiceTicks: (state: RechartsRootState) => NumberDomain | CategoricalDomain =
  createSelector(
    [selectTooltipAxis, selectTooltipAxisDomain, selectTooltipNiceTicks, selectTooltipAxisType],
    combineAxisDomainWithNiceTicks,
  );

const selectTooltipAxisRange = (state: RechartsRootState): AxisRange | undefined => {
  const axisType = selectTooltipAxisType(state);
  const axisId = selectTooltipAxisId(state);
  const isPanorama = false; // Tooltip never displays in panorama so this is safe to assume
  return selectAxisRange(state, axisType, axisId, isPanorama);
};

export const selectTooltipAxisRangeWithReverse: (state: RechartsRootState) => AxisRange | undefined = createSelector(
  [selectTooltipAxis, selectTooltipAxisRange],
  combineAxisRangeWithReverse,
);

export const selectTooltipAxisScale: (state: RechartsRootState) => RechartsScale | undefined = createSelector(
  [
    selectTooltipAxis,
    selectTooltipAxisRealScaleType,
    selectTooltipAxisDomainIncludingNiceTicks,
    selectTooltipAxisRangeWithReverse,
  ],
  combineScaleFunction,
);

const selectTooltipDuplicateDomain: (state: RechartsRootState) => ReadonlyArray<unknown> | undefined = createSelector(
  [selectChartLayout, selectAllTooltipAppliedValues, selectTooltipAxis, selectTooltipAxisType],
  combineDuplicateDomain,
);

export const selectTooltipCategoricalDomain: (state: RechartsRootState) => ReadonlyArray<unknown> | undefined =
  createSelector(
    [selectChartLayout, selectAllTooltipAppliedValues, selectTooltipAxis, selectTooltipAxisType],
    combineCategoricalDomain,
  );

export const combineTicksOfTooltipAxis = (
  layout: LayoutType,
  axis: AxisWithTicksSettings,
  realScaleType: string,
  scale: RechartsScale | undefined,
  range: AxisRange | undefined,
  duplicateDomain: ReadonlyArray<unknown> | undefined,
  categoricalDomain: ReadonlyArray<unknown> | undefined,
  axisType: XorYType,
): ReadonlyArray<TickItem> | null => {
  if (!axis) {
    return null;
  }
  const { type } = axis;

  const isCategorical = isCategoricalAxis(layout, axisType);

  if (!scale) {
    return null;
  }

  const offsetForBand = realScaleType === 'scaleBand' ? scale.bandwidth() / 2 : 2;
  let offset = type === 'category' && scale.bandwidth ? scale.bandwidth() / offsetForBand : 0;

  offset = axisType === 'angleAxis' && range?.length >= 2 ? mathSign(range[0] - range[1]) * 2 * offset : offset;

  // When axis is a categorical axis, but the type of axis is number or the scale of axis is not "auto"
  if (isCategorical && categoricalDomain) {
    return categoricalDomain.map(
      (entry: any, index: number): TickItem => ({
        coordinate: scale(entry) + offset,
        value: entry,
        index,
        // @ts-expect-error why does the offset go here? The type does not require it
        offset,
      }),
    );
  }

  // When axis has duplicated text, serial numbers are used to generate scale
  return scale.domain().map(
    (entry: any, index: number): TickItem => ({
      coordinate: scale(entry) + offset,
      value: duplicateDomain ? duplicateDomain[entry] : entry,
      index,
      // @ts-expect-error why does the offset go here? The type does not require it
      offset,
    }),
  );
};

export const selectTooltipAxisTicks: (state: RechartsRootState) => ReadonlyArray<TickItem> | null = createSelector(
  [
    selectChartLayout,
    selectTooltipAxis,
    selectTooltipAxisRealScaleType,
    selectTooltipAxisScale,
    selectTooltipAxisRange,
    selectTooltipDuplicateDomain,
    selectTooltipCategoricalDomain,
    selectTooltipAxisType,
  ],
  combineTicksOfTooltipAxis,
);

const selectTooltipEventType: (state: RechartsRootState) => TooltipEventType | undefined = createSelector(
  [selectDefaultTooltipEventType, selectValidateTooltipEventTypes, selectTooltipSettings],
  (defaultTooltipEventType, validateTooltipEventType, settings) =>
    combineTooltipEventType(settings.shared, defaultTooltipEventType, validateTooltipEventType),
);

const selectTooltipInteractionState: (state: RechartsRootState) => TooltipInteractionState | undefined = createSelector(
  [
    (state: RechartsRootState) => state.tooltip,
    selectTooltipEventType,
    (state: RechartsRootState) => state.tooltip.settings.trigger,
    (state: RechartsRootState) => state.tooltip.settings.defaultIndex,
  ],
  combineTooltipInteractionState,
);

export const selectActiveTooltipIndex: (state: RechartsRootState) => TooltipIndex | undefined = createSelector(
  [selectTooltipInteractionState],
  (tooltipInteraction: TooltipInteractionState): TooltipIndex | undefined => tooltipInteraction?.index,
);

export const selectActiveLabel: (state: RechartsRootState) => string | undefined = createSelector(
  [selectTooltipAxisTicks, selectActiveTooltipIndex],
  combineActiveLabel,
);

export const selectActiveTooltipDataKey: (state: RechartsRootState) => DataKey<any> | undefined = createSelector(
  [selectTooltipInteractionState],
  (tooltipInteraction: TooltipInteractionState): DataKey<any> | undefined => {
    if (!tooltipInteraction) {
      return undefined;
    }

    return tooltipInteraction.dataKey;
  },
);
