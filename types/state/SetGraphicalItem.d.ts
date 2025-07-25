import { CartesianGraphicalItemSettings, PolarGraphicalItemSettings } from './graphicalItemsSlice';
import { StackId } from '../util/ChartUtils';
type SetCartesianGraphicalItemProps = Omit<CartesianGraphicalItemSettings, 'stackId'> & {
    stackId: StackId | undefined;
};
export declare function SetCartesianGraphicalItem(props: SetCartesianGraphicalItemProps): null;
export declare function SetPolarGraphicalItem(props: PolarGraphicalItemSettings): null;
export {};
