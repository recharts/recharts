import { ReactElement } from 'react';
import { ScatterPointItem } from '../../cartesian/Scatter';
import { RechartsRootState } from '../store';
import { AxisId } from '../cartesianAxisSlice';
import { ChartData } from '../chartDataSlice';
import { DataKey } from '../../util/types';
import { TooltipType } from '../../component/DefaultTooltipContent';
export type ResolvedScatterSettings = {
    data: ChartData | undefined;
    dataKey: DataKey<any> | undefined;
    tooltipType: TooltipType | undefined;
    name: string | number | undefined;
};
export declare const selectScatterPoints: (state: RechartsRootState, xAxisId: AxisId, yAxisId: AxisId, zAxisId: AxisId, scatterSettings: ResolvedScatterSettings, cells: ReadonlyArray<ReactElement> | undefined, isPanorama: boolean) => ReadonlyArray<ScatterPointItem> | undefined;
