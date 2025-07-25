import { ReactElement } from 'react';
import { FunnelTrapezoidItem } from '../../cartesian/Funnel';
import { ChartData } from '../chartDataSlice';
import { RechartsRootState } from '../store';
import { DataKey, TooltipType } from '../../util/types';
type FunnelComposedData = {
    trapezoids: ReadonlyArray<FunnelTrapezoidItem>;
    data: ChartData | undefined;
};
export type ResolvedFunnelSettings = {
    dataKey: DataKey<any>;
    data: ChartData | undefined;
    nameKey: DataKey<any>;
    tooltipType?: TooltipType;
    lastShapeType?: 'triangle' | 'rectangle';
    reversed?: boolean;
    customWidth?: string | number;
    cells: ReadonlyArray<ReactElement>;
    presentationProps: Record<string, any> | null;
};
export declare const selectFunnelTrapezoids: (state: RechartsRootState, { dataKey, nameKey, tooltipType, lastShapeType, reversed, customWidth, cells, presentationProps, }: ResolvedFunnelSettings) => FunnelComposedData;
export {};
