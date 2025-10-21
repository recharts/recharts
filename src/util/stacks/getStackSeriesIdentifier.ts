import { StackSeriesIdentifier } from './stackTypes';
import { MaybeStackedGraphicalItem } from '../../state/types/StackedGraphicalItem';

export function getStackSeriesIdentifier(graphicalItem: MaybeStackedGraphicalItem): StackSeriesIdentifier;
export function getStackSeriesIdentifier(graphicalItem: undefined): undefined;
export function getStackSeriesIdentifier(
  graphicalItem: MaybeStackedGraphicalItem | undefined,
): StackSeriesIdentifier | undefined;
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
