/**
 * @fileOverview
 * Every graphical item has one effective dataKey.
 *
 * The dataKey defined directly on the graphical item always wins.
 * When the item does not define its own, it inherits the dataKey of its value axis.
 * The value axis is the numerical axis where the item shows its value,
 * and which one that is depends on the chart layout.
 *
 * This file is the single place where that rule is defined.
 */
import { createSelector } from 'reselect';
import { DataKey, EvaluatedAxisDomainType, LayoutType } from '../../util/types';
import { isNotNil } from '../../util/DataUtils';
import { RechartsRootState } from '../store';
import { AxisId } from '../cartesianAxisSlice';
import { selectChartLayout } from '../../context/chartLayoutContext';
import { selectAllUnfilteredGraphicalItems } from './graphicalItemSelectors';
import { AllAxisTypes } from './selectTooltipAxisType';

/**
 * The parts of a graphical item that decide its effective dataKey.
 * Cartesian items have xAxisId and yAxisId, polar items have angleAxisId and radiusAxisId.
 */
export type GraphicalItemDataKeySource = {
  dataKey?: DataKey<any> | undefined;
  xAxisId?: AxisId;
  yAxisId?: AxisId;
  angleAxisId?: AxisId;
  radiusAxisId?: AxisId;
};

/**
 * The parts of an axis that decide which dataKey is used on it.
 */
export type AxisDataKeySource = {
  dataKey?: DataKey<any> | undefined;
  type?: EvaluatedAxisDomainType;
};

/**
 * Value axis is the numerical axis where graphical items display their value,
 * as opposed to the categorical axis where they display the category (or name, or index).
 *
 * The chart layout decides which axis that is. The axis must also be numerical:
 * an axis with `type="category"` in the value position keeps showing its own categories.
 *
 * @param layout chart layout
 * @param axisType kind of the axis
 * @param axis axis settings
 * @returns true if graphical items in this layout show their value on this axis
 */
export function isValueAxis(
  layout: LayoutType | undefined,
  axisType: AllAxisTypes,
  axis: AxisDataKeySource | undefined,
): boolean {
  if (axis?.type !== 'number') {
    return false;
  }
  return (
    (layout === 'horizontal' && axisType === 'yAxis') ||
    (layout === 'vertical' && axisType === 'xAxis') ||
    (layout === 'centric' && axisType === 'radiusAxis') ||
    (layout === 'radial' && axisType === 'angleAxis')
  );
}

/**
 * Decides which dataKey reads the value of a graphical item on the given axis.
 *
 * On the value axis the graphical item wins, and the axis is the fallback.
 * On all other axes the axis wins, and the graphical item is the fallback.
 *
 * @param itemDataKey dataKey of the graphical item
 * @param axis axis settings
 * @param layout chart layout
 * @param axisType kind of the axis
 * @returns dataKey to use when reading the item value on this axis
 */
export function getDataKeyOnAxis(
  itemDataKey: DataKey<any> | undefined,
  axis: AxisDataKeySource | undefined,
  layout: LayoutType | undefined,
  axisType: AllAxisTypes,
): DataKey<any> | undefined {
  if (isValueAxis(layout, axisType, axis)) {
    return itemDataKey ?? axis?.dataKey;
  }
  return axis?.dataKey ?? itemDataKey;
}

type AxisDataKeyState = Pick<RechartsRootState, 'cartesianAxis' | 'polarAxis'>;

function getValueAxisDataKey(
  item: GraphicalItemDataKeySource,
  layout: LayoutType | undefined,
  { cartesianAxis, polarAxis }: AxisDataKeyState,
): DataKey<any> | undefined {
  let axisType: AllAxisTypes, axis: AxisDataKeySource | undefined;
  switch (layout) {
    case 'horizontal':
      axisType = 'yAxis';
      axis = item.yAxisId == null ? undefined : cartesianAxis.yAxis[item.yAxisId];
      break;
    case 'vertical':
      axisType = 'xAxis';
      axis = item.xAxisId == null ? undefined : cartesianAxis.xAxis[item.xAxisId];
      break;
    case 'centric':
      axisType = 'radiusAxis';
      axis = item.radiusAxisId == null ? undefined : polarAxis.radiusAxis[item.radiusAxisId];
      break;
    case 'radial':
      axisType = 'angleAxis';
      axis = item.angleAxisId == null ? undefined : polarAxis.angleAxis[item.angleAxisId];
      break;
    default:
      return undefined;
  }
  return isValueAxis(layout, axisType, axis) ? axis?.dataKey : undefined;
}

/**
 * Returns the effective dataKey of a graphical item:
 * its own dataKey if it has one, otherwise the dataKey of its value axis.
 *
 * @param state Recharts root state
 * @param item graphical item props or settings
 * @returns effective dataKey, or undefined if neither the item nor its value axis define one
 */
export function selectEffectiveDataKey(
  state: RechartsRootState,
  item: GraphicalItemDataKeySource,
): DataKey<any> | undefined {
  return item.dataKey ?? getValueAxisDataKey(item, selectChartLayout(state), state);
}

/**
 * Effective dataKeys of all graphical items in the chart, including the hidden ones.
 * Items that do not have any effective dataKey are skipped.
 */
export const selectAllEffectiveGraphicalItemDataKeys: (state: RechartsRootState) => ReadonlyArray<DataKey<any>> =
  createSelector(
    [
      selectAllUnfilteredGraphicalItems,
      selectChartLayout,
      (state: RechartsRootState) => state.cartesianAxis,
      (state: RechartsRootState) => state.polarAxis,
    ],
    (graphicalItems, layout, cartesianAxis, polarAxis): ReadonlyArray<DataKey<any>> =>
      graphicalItems
        .map(item => item.dataKey ?? getValueAxisDataKey(item, layout, { cartesianAxis, polarAxis }))
        .filter(isNotNil),
  );
