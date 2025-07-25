import { StackSeriesIdentifier } from './stackTypes';
import { MaybeStackedGraphicalItem } from '../../state/types/StackedGraphicalItem';

/**
 * Returns identifier for stack series which is one individual graphical item in the stack.
 * @param graphicalItem - The graphical item representing the series in the stack.
 * @return The identifier for the series in the stack
 */
export function getStackSeriesIdentifier(
  graphicalItem: MaybeStackedGraphicalItem | undefined,
): StackSeriesIdentifier | undefined {
  return graphicalItem?.id;
}
