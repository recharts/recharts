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
  combineAxisRangeWithReverse,
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
import { AxisDomain, AxisTick, CategoricalDomain, LayoutType, NumberDomain, TickItem } from '../../util/types';
import { AppliedChartData, ChartData } from '../chartDataSlice';
import { selectChartDataWithIndexes } from './dataSelectors';
import { GraphicalItemSettings } from '../graphicalItemsSlice';
import { ReferenceAreaSettings, ReferenceDotSettings, ReferenceLineSettings } from '../referenceElementsSlice';
import { selectChartName, selectStackOffsetType } from './rootPropsSelectors';
import { isNan, mathSign } from '../../util/DataUtils';

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
  niceTicks: ReadonlyArray<number> | undefined,
  range: AxisRange | undefined,
  duplicateDomain: ReadonlyArray<unknown> | undefined,
  categoricalDomain: ReadonlyArray<unknown> | undefined,
  axisType: XorYType,
): ReadonlyArray<TickItem> | null => {
  if (!axis) {
    return null;
  }
  const { type, tickCount, ticks } = axis;

  const isCategorical = isCategoricalAxis(layout, axisType);

  const isGrid = false;
  const isAll = true;

  if (!scale) {
    return null;
  }

  const offsetForBand = realScaleType === 'scaleBand' ? scale.bandwidth() / 2 : 2;
  let offset = (isGrid || isAll) && type === 'category' && scale.bandwidth ? scale.bandwidth() / offsetForBand : 0;

  offset = axisType === 'angleAxis' && range?.length >= 2 ? mathSign(range[0] - range[1]) * 2 * offset : offset;

  // The ticks set by user should only affect the ticks adjacent to axis line
  if (isGrid && (ticks || niceTicks)) {
    const result = (ticks || niceTicks).map((entry: AxisTick) => {
      const scaleContent = duplicateDomain ? duplicateDomain.indexOf(entry) : entry;

      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: scale(scaleContent) + offset,
        value: entry,
        offset,
      };
    });

    return result.filter((row: TickItem) => !isNan(row.coordinate));
  }

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

  if (scale.ticks && !isAll) {
    return (
      scale
        .ticks(tickCount)
        // @ts-expect-error why does the offset go here? The type does not require it
        .map((entry: any): TickItem => ({ coordinate: scale(entry) + offset, value: entry, offset }))
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

export const selectTooltipAxisTicks = createSelector(
  [
    selectChartLayout,
    selectTooltipAxis,
    selectTooltipAxisRealScaleType,
    selectTooltipAxisScale,
    selectTooltipNiceTicks,
    selectTooltipAxisRange,
    selectTooltipDuplicateDomain,
    selectTooltipCategoricalDomain,
    selectTooltipAxisType,
  ],
  combineTicksOfTooltipAxis,
);
