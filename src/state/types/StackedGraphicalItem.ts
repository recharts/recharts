import { GraphicalItemSettings } from '../graphicalItemsSlice';
import { NormalizedStackId } from '../../util/ChartUtils';
import { DataKey } from '../../util/types';
import type { AreaSettings } from './AreaSettings';
import type { BarSettings } from './BarSettings';
import type { RadialBarSettings } from './RadialBarSettings';

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

export type StackedGraphicalItem = (AreaSettings | BarSettings | RadialBarSettings) & DefinitelyStackedGraphicalItem;

export function isStacked<T extends GraphicalItemSettings>(
  graphicalItem: T,
): graphicalItem is T & DefinitelyStackedGraphicalItem {
  return 'stackId' in graphicalItem && graphicalItem.stackId != null && graphicalItem.dataKey != null;
}

export function isStackedGraphicalItem<T extends GraphicalItemSettings>(
  graphicalItem: T,
): graphicalItem is T & StackedGraphicalItem {
  return (
    'type' in graphicalItem &&
    (graphicalItem.type === 'area' || graphicalItem.type === 'bar' || graphicalItem.type === 'radialBar') &&
    isStacked(graphicalItem)
  );
}
