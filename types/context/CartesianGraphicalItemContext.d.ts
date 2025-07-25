import * as React from 'react';
import { CartesianGraphicalItemType, ErrorBarsSettings, GraphicalItemId } from '../state/graphicalItemsSlice';
import { ChartData } from '../state/chartDataSlice';
import { AxisId } from '../state/cartesianAxisSlice';
import { DataKey } from '../util/types';
import { StackId } from '../util/ChartUtils';
import { ErrorBarDataPointFormatter } from '../cartesian/ErrorBar';
type ErrorBarContextType<T> = {
    data: ReadonlyArray<T>;
    xAxisId: AxisId;
    yAxisId: AxisId;
    dataPointFormatter: ErrorBarDataPointFormatter;
    errorBarOffset: number;
};
export declare function SetErrorBarContext<T>(props: ErrorBarContextType<T> & {
    children: React.ReactNode;
}): React.JSX.Element;
export declare const useErrorBarContext: () => ErrorBarContextType<any>;
type GraphicalItemContextProps = {
    id: string | undefined;
    type: CartesianGraphicalItemType;
    data: ChartData;
    xAxisId: AxisId;
    yAxisId: AxisId;
    zAxisId: AxisId;
    dataKey: DataKey<any>;
    stackId: StackId | undefined;
    hide: boolean;
    barSize: string | number | undefined;
    /**
     * Children must be a function that receives the resolved ID of the graphical item.
     * This ID will either be the one provided via props.id or generated automatically.
     */
    children: (id: GraphicalItemId) => React.ReactNode;
};
export declare const CartesianGraphicalItemContext: ({ id, children, xAxisId, yAxisId, zAxisId, dataKey, data, stackId, hide, type, barSize, }: GraphicalItemContextProps) => React.JSX.Element;
export declare function ReportErrorBarSettings(props: ErrorBarsSettings): null;
export {};
