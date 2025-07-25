import { ReactElement } from 'react';
import { RadialBarDataItem } from '../../polar/RadialBar';
import { RechartsRootState } from '../store';
import { AxisId } from '../cartesianAxisSlice';
import { DataKey, LegendType, TickItem } from '../../util/types';
import { BaseAxisWithScale } from './axisSelectors';
import { BarPositionPosition, StackId } from '../../util/ChartUtils';
import { BarWithPosition, MaybeStackedGraphicalItem, SizeList } from './barSelectors';
import { LegendPayload } from '../../component/DefaultLegendContent';
export interface RadialBarSettings extends MaybeStackedGraphicalItem {
    dataKey: DataKey<any> | undefined;
    minPointSize: number | undefined;
    stackId: StackId | undefined;
    maxBarSize: number | undefined;
}
export declare const selectRadiusAxisWithScale: (state: RechartsRootState, radiusAxisId: AxisId) => BaseAxisWithScale | undefined;
export declare const selectRadiusAxisTicks: (state: RechartsRootState, radiusAxisId: AxisId, _angleAxisId: AxisId, isPanorama: boolean) => ReadonlyArray<TickItem> | undefined;
export declare const selectAngleAxisWithScale: (state: RechartsRootState, _radiusAxisId: AxisId, angleAxisId: AxisId) => BaseAxisWithScale | undefined;
export declare const selectBandSizeOfPolarAxis: (state: RechartsRootState, radiusAxisId: AxisId, angleAxisId: AxisId, isPanorama: boolean) => number | undefined;
export declare const selectBaseValue: (state: RechartsRootState, radiusAxisId: AxisId, angleAxisId: AxisId) => number | unknown;
export declare const pickMaxBarSize: (_state: RechartsRootState, _radiusAxisId: AxisId, _angleAxisId: AxisId, radialBarSettings: RadialBarSettings, _cells: ReadonlyArray<ReactElement> | undefined) => number | undefined;
export declare const selectPolarBarSizeList: (state: RechartsRootState, radiusAxisId: AxisId, angleAxisId: AxisId, radialBarSettings: RadialBarSettings, cells: ReadonlyArray<ReactElement> | undefined) => SizeList | undefined;
export declare const selectPolarBarBandSize: (state: RechartsRootState, radiusAxisId: AxisId, angleAxisId: AxisId, radialBarSettings: RadialBarSettings, cells: ReadonlyArray<ReactElement> | undefined) => number | undefined;
export declare const selectAllPolarBarPositions: (state: RechartsRootState, radiusAxisId: AxisId, angleAxisId: AxisId, radialBarSettings: RadialBarSettings, cells: ReadonlyArray<ReactElement> | undefined) => ReadonlyArray<BarWithPosition> | undefined;
export declare const selectPolarBarPosition: (state: RechartsRootState, radiusAxisId: AxisId, angleAxisId: AxisId, radialBarSettings: RadialBarSettings, cells: ReadonlyArray<ReactElement> | undefined) => BarPositionPosition | undefined;
export declare const selectRadialBarSectors: (state: RechartsRootState, radiusAxisId: AxisId | undefined, angleAxisId: AxisId | undefined, radialBarSettings: RadialBarSettings, cells: ReadonlyArray<ReactElement> | undefined) => ReadonlyArray<RadialBarDataItem>;
export declare const selectRadialBarLegendPayload: (state: RechartsRootState, legendType: LegendType | undefined) => ReadonlyArray<LegendPayload>;
