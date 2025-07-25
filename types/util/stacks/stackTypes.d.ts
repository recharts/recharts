import { Series } from 'victory-vendor/d3-shape';
import { MaybeStackedGraphicalItem } from '../../state/selectors/barSelectors';
import { StackId } from '../ChartUtils';
import { GraphicalItemId } from '../../state/graphicalItemsSlice';
/**
 * Collection of all stacks in the chart.
 * A simple stacked chart will have a single stack. Recharts allows for multiple stacks.
 * In a chart without stacks, this will be an empty object.
 */
export type AllStackGroups = Record<StackId, StackGroup>;
/**
 * One stack group is a collection of series that are stacked together.
 * The stack series and graphical items are joined by the StackSeriesIdentifier.
 */
export type StackGroup = {
    readonly stackedData: ReadonlyArray<StackSeries>;
    readonly graphicalItems: ReadonlyArray<MaybeStackedGraphicalItem>;
};
/**
 * Stack series is a collection of data points. This represents one individual graphical item in the stack.
 * There are presumably other series in the stack, which are represented by other `StackSeries` objects
 * that this object will not know about.
 * The coordinates of the data points in the series already include the baseline of the previous series in the stack.
 */
export type StackSeries = Series<StackDataPoint, StackSeriesIdentifier>;
/**
 * Stack data point is a tuple of two numbers:
 * first, where the previous stack series ended,
 * and second, where the current stack series ends.
 * This allows for setting the baseline of the next series in the stack.
 */
export type StackDataPoint = [number, number];
/**
 * Identifier for a series in the stack.
 * Used to join the stack series with the graphical items in the stack.
 */
export type StackSeriesIdentifier = GraphicalItemId;
