import { LinePointItem } from '../../cartesian/Line';
import { RechartsRootState } from '../store';
import { AxisId } from '../cartesianAxisSlice';
import { DataKey } from '../../util/types';
import { ChartData } from '../chartDataSlice';
export type ResolvedLineSettings = {
    data: ChartData | undefined;
    dataKey: DataKey<any> | undefined;
};
export declare const selectLinePoints: (state: RechartsRootState, xAxisId: AxisId, yAxisId: AxisId, isPanorama: boolean, { dataKey, data }: ResolvedLineSettings) => ReadonlyArray<LinePointItem> | undefined;
