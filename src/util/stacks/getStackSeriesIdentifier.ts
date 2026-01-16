import { StackSeriesIdentifier } from './stackTypes';
import { MaybeStackedGraphicalItem } from '../../state/types/StackedGraphicalItem';

export function getStackSeriesIdentifier<T = unknown>(graphicalItem: MaybeStackedGraphicalItem<T>): StackSeriesIdentifier;
export function getStackSeriesIdentifier(graphicalItem: undefined): undefined;
export function getStackSeriesIdentifier<T = unknown>(
  graphicalItem: MaybeStackedGraphicalItem<T> | undefined,
): StackSeriesIdentifier | undefined;
/**
 * Returns identifier for stack series which is one individual graphical item in the stack.
 * @param graphicalItem - The graphical item representing the series in the stack.
 * @return The identifier for the series in the stack
 */
export function getStackSeriesIdentifier<T = unknown>(
  graphicalItem: MaybeStackedGraphicalItem<T> | undefined,
): StackSeriesIdentifier | undefined {
  return graphicalItem?.id;
}
