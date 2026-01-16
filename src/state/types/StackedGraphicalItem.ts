import { GraphicalItemSettings } from '../graphicalItemsSlice';
import { NormalizedStackId } from '../../util/ChartUtils';
import { DataKey } from '../../util/types';

import { TypedDataKey } from '../../util/getTypedValue';

/**
 * Some graphical items allow data stacking. The stacks are optional,
 * so all props here are optional too.
 */
export interface MaybeStackedGraphicalItem<
  DataPointType = unknown,
  ValueAxisType = unknown,
> extends GraphicalItemSettings<DataPointType, ValueAxisType> {
  stackId: NormalizedStackId | undefined;
  /**
   * Bars have a size but Area does not.
   */
  barSize: number | string | undefined;
}

/**
 * Some graphical items allow data stacking.
 * This interface is used to represent the items that are stacked
 * because the user has provided the stackId and dataKey properties.
 */
export interface DefinitelyStackedGraphicalItem<
  DataPointType = unknown,
  ValueAxisType = unknown,
> extends MaybeStackedGraphicalItem<DataPointType, ValueAxisType> {
  stackId: NormalizedStackId;
  dataKey: TypedDataKey<DataPointType, ValueAxisType>;
}

export function isStacked<T extends GraphicalItemSettings<unknown>>(
  graphicalItem: T,
): graphicalItem is T & DefinitelyStackedGraphicalItem<unknown> {
  return 'stackId' in graphicalItem && graphicalItem.stackId != null && graphicalItem.dataKey != null;
}
