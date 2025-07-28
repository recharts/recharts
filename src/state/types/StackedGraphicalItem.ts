import { GraphicalItemSettings } from '../graphicalItemsSlice';
import { NormalizedStackId } from '../../util/ChartUtils';
import { DataKey } from '../../util/types';

/**
 * Some graphical items allow data stacking. The stacks are optional,
 * so all props here are optional too.
 */
export interface MaybeStackedGraphicalItem extends GraphicalItemSettings {
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
export interface DefinitelyStackedGraphicalItem extends MaybeStackedGraphicalItem {
  stackId: NormalizedStackId;
  dataKey: DataKey<any>;
}

export function isStacked(graphicalItem: MaybeStackedGraphicalItem): graphicalItem is DefinitelyStackedGraphicalItem {
  return graphicalItem.stackId != null && graphicalItem.dataKey != null;
}
