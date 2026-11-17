import { createSelector } from 'reselect';
import { AppliedChartData, ChartData } from '../chartDataSlice';
import { RechartsRootState } from '../store';
import { AxisId, BaseCartesianAxis } from '../cartesianAxisSlice';
import {
  selectChartDataAndAlwaysIgnoreIndexes,
  selectChartDataSliceIgnoringIndexes,
  selectChartDataWithIndexes,
} from './dataSelectors';
import {
  AppliedChartDataWithErrorDomain,
  combineAppliedValues,
  combineAxisDomain,
  combineAxisDomainWithNiceTicks,
  combineDisplayedData,
  combineDomainOfStackGroups,
  combineDomainOfAllAppliedNumericalValuesIncludingErrorValues,
  combineGraphicalItemsData,
  combineGraphicalItemsSettings,
  combineNiceTicks,
  combineNumericalDomain,
  combineStackGroups,
  combineStackOffsetTypeOfAxis,
  itemAxisPredicate,
  selectAllErrorBarSettings,
  selectBaseAxis,
  selectDomainDefinition,
  selectDomainFromUserPreference,
  selectRealScaleType,
  selectRenderableAxisSettings,
  selectTooltipAxis,
} from './axisSelectors';
import { PolarGraphicalItemSettings } from '../graphicalItemsSlice';
import { CategoricalDomain, LayoutType, NumberDomain, StackOffsetType } from '../../util/types';
import { getDataKeyOnAxis } from './effectiveDataKeySelectors';
import { selectChartLayout } from '../../context/chartLayoutContext';
import { getValueByDataKey } from '../../util/ChartUtils';
import { pickAxisType } from './pickAxisType';
import { pickAxisId } from './pickAxisId';
import { selectReverseStackOrder, selectStackOffsetType } from './rootPropsSelectors';
import { combineCheckedDomain } from './combiners/combineCheckedDomain';
import { combineDisplayedStackedData, DisplayedStackedData } from './combiners/combineDisplayedStackedData';
import { isStackedGraphicalItem, type StackedGraphicalItem } from '../types/StackedGraphicalItem';
import { AllStackGroups } from '../../util/stacks/stackTypes';
import { numberDomainEqualityCheck } from './numberDomainEqualityCheck';

export type PolarAxisType = 'angleAxis' | 'radiusAxis';

export const selectUnfilteredPolarItems = (state: RechartsRootState) => state.graphicalItems.polarItems;

const selectAxisPredicate: (
  _state: RechartsRootState,
  axisType: PolarAxisType,
  axisId: AxisId,
) => (item: PolarGraphicalItemSettings) => boolean = createSelector([pickAxisType, pickAxisId], itemAxisPredicate);

export const selectPolarItemsSettings: (
  state: RechartsRootState,
  axisType: PolarAxisType,
  polarAxisId: AxisId,
) => ReadonlyArray<PolarGraphicalItemSettings> = createSelector(
  [selectUnfilteredPolarItems, selectBaseAxis, selectAxisPredicate],
  combineGraphicalItemsSettings,
);

const selectPolarGraphicalItemsData: (
  state: RechartsRootState,
  axisType: PolarAxisType,
  polarAxisId: AxisId,
) => ChartData = createSelector([selectPolarItemsSettings], combineGraphicalItemsData);

export const selectPolarDisplayedData: (
  state: RechartsRootState,
  axisType: PolarAxisType,
  polarAxisId: AxisId,
) => ChartData = createSelector(
  [selectPolarGraphicalItemsData, selectChartDataAndAlwaysIgnoreIndexes],
  combineDisplayedData,
);

export const selectPolarAppliedValues: (
  state: RechartsRootState,
  axisType: PolarAxisType,
  axisId: AxisId,
) => AppliedChartData = createSelector(
  [selectPolarDisplayedData, selectBaseAxis, selectPolarItemsSettings, selectChartLayout, pickAxisType],
  combineAppliedValues,
);

export const selectAllPolarAppliedNumericalValues: (
  state: RechartsRootState,
  axisType: PolarAxisType,
  axisId: AxisId,
) => ReadonlyArray<AppliedChartDataWithErrorDomain> = createSelector(
  [selectPolarDisplayedData, selectBaseAxis, selectPolarItemsSettings, selectChartLayout, pickAxisType],
  (
    data: ChartData,
    axisSettings: BaseCartesianAxis,
    items: ReadonlyArray<PolarGraphicalItemSettings>,
    layout: LayoutType,
    axisType: PolarAxisType,
  ): ReadonlyArray<AppliedChartDataWithErrorDomain> => {
    if (items.length > 0) {
      return data
        .flatMap(entry => {
          return items.flatMap((item): AppliedChartDataWithErrorDomain | undefined => {
            const valueByDataKey: unknown = getValueByDataKey(
              entry,
              getDataKeyOnAxis(item.dataKey, axisSettings.dataKey, layout, axisType),
            );
            return {
              value: valueByDataKey,
              errorDomain: [], // polar charts do not have error bars
            };
          });
        })
        .filter(Boolean);
    }
    if (axisSettings?.dataKey != null) {
      return data.map((item): AppliedChartDataWithErrorDomain => ({
        value: getValueByDataKey(item, axisSettings.dataKey),
        errorDomain: [],
      }));
    }
    return data.map((entry): AppliedChartDataWithErrorDomain => ({ value: entry, errorDomain: [] }));
  },
);

const unsupportedInPolarChart = (): undefined => undefined;

const selectStackedPolarItems: (
  state: RechartsRootState,
  axisType: PolarAxisType,
  polarAxisId: AxisId,
) => ReadonlyArray<StackedGraphicalItem> = createSelector(
  [selectPolarItemsSettings],
  (allPolarItems: ReadonlyArray<PolarGraphicalItemSettings>): ReadonlyArray<StackedGraphicalItem> =>
    allPolarItems.filter(isStackedGraphicalItem),
);

const selectPolarCombinedStackedData: (
  state: RechartsRootState,
  axisType: PolarAxisType,
  polarAxisId: AxisId,
) => DisplayedStackedData = createSelector(
  [selectStackedPolarItems, selectChartDataAndAlwaysIgnoreIndexes, selectTooltipAxis],
  combineDisplayedStackedData,
);

/**
 * Stack groups are groups of polar graphical items that stack on each other.
 * Graphical items without a stack ID are not present in the stack groups.
 */
export const selectPolarStackGroups: (
  state: RechartsRootState,
  axisType: PolarAxisType,
  polarAxisId: AxisId,
) => AllStackGroups | undefined = createSelector(
  [selectPolarCombinedStackedData, selectStackedPolarItems, selectStackOffsetType, selectReverseStackOrder],
  combineStackGroups,
);

const selectDomainOfPolarStackGroups: (
  state: RechartsRootState,
  axisType: PolarAxisType,
  axisId: AxisId,
) => NumberDomain | undefined = createSelector(
  [
    selectPolarStackGroups,
    selectChartDataWithIndexes,
    pickAxisType,
    selectDomainFromUserPreference,
    selectAllErrorBarSettings,
  ],
  combineDomainOfStackGroups,
  {
    memoizeOptions: {
      resultEqualityCheck: numberDomainEqualityCheck,
    },
  },
);

const selectDomainOfAllPolarAppliedNumericalValues: (
  state: RechartsRootState,
  axisType: PolarAxisType,
  axisId: AxisId,
) => NumberDomain | undefined = createSelector(
  [
    selectPolarDisplayedData,
    selectBaseAxis,
    selectPolarItemsSettings,
    selectAllErrorBarSettings,
    pickAxisType,
    selectChartDataSliceIgnoringIndexes,
    selectChartLayout,
  ],
  combineDomainOfAllAppliedNumericalValuesIncludingErrorValues,
);

const selectPolarNumericalDomain: (
  state: RechartsRootState,
  axisType: PolarAxisType,
  axisId: AxisId,
) => NumberDomain | undefined = createSelector(
  [
    selectBaseAxis,
    selectDomainDefinition,
    selectDomainFromUserPreference,
    selectDomainOfPolarStackGroups,
    selectDomainOfAllPolarAppliedNumericalValues,
    unsupportedInPolarChart,
    selectChartLayout,
    pickAxisType,
  ],
  combineNumericalDomain,
);

const selectPolarStackOffsetTypeOfAxis: (
  state: RechartsRootState,
  axisType: PolarAxisType,
  polarAxisId: AxisId,
) => StackOffsetType = createSelector(
  [selectStackOffsetType, selectUnfilteredPolarItems, selectAxisPredicate],
  combineStackOffsetTypeOfAxis,
);

export const selectPolarAxisDomain: (
  state: RechartsRootState,
  axisType: PolarAxisType,
  polarAxisId: AxisId,
) => NumberDomain | CategoricalDomain | undefined = createSelector(
  [
    selectBaseAxis,
    selectChartLayout,
    selectPolarDisplayedData,
    selectPolarAppliedValues,
    selectPolarStackOffsetTypeOfAxis,
    pickAxisType,
    selectPolarNumericalDomain,
  ],
  combineAxisDomain,
);

export const selectPolarNiceTicks = createSelector(
  [selectPolarAxisDomain, selectRenderableAxisSettings, selectRealScaleType],
  combineNiceTicks,
);

export const selectPolarAxisDomainIncludingNiceTicks: (
  state: RechartsRootState,
  axisType: PolarAxisType,
  polarAxisId: AxisId,
) => NumberDomain | CategoricalDomain | undefined = createSelector(
  [selectBaseAxis, selectPolarAxisDomain, selectPolarNiceTicks, pickAxisType],
  combineAxisDomainWithNiceTicks,
);

export const selectPolarAxisCheckedDomain: (
  state: RechartsRootState,
  axisType: PolarAxisType,
  polarAxisId: AxisId,
) => NumberDomain | CategoricalDomain | undefined = createSelector(
  [selectRealScaleType, selectPolarAxisDomainIncludingNiceTicks],
  combineCheckedDomain,
);
