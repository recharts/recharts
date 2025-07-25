import { MaybeStackedGraphicalItem } from '../../state/selectors/barSelectors';
import { StackSeriesIdentifier } from './stackTypes';
/**
 * Returns identifier for stack series which is one individual graphical item in the stack.
 * @param graphicalItem - The graphical item representing the series in the stack.
 * @return The identifier for the series in the stack
 */
export declare function getStackSeriesIdentifier(graphicalItem: MaybeStackedGraphicalItem | undefined): StackSeriesIdentifier | undefined;
