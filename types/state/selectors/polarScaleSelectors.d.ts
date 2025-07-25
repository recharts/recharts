import { RechartsRootState } from '../store';
import { AxisId } from '../cartesianAxisSlice';
import { RechartsScale } from '../../util/ChartUtils';
import { CartesianTickItem } from '../../util/types';
export declare const selectPolarAxis: (state: RechartsRootState, axisType: "angleAxis" | "radiusAxis", axisId: AxisId) => import("../polarAxisSlice").RadiusAxisSettings;
export declare const selectPolarAxisScale: (state: RechartsRootState, axisType: 'angleAxis' | 'radiusAxis', polarAxisId: AxisId) => RechartsScale | undefined;
export declare const selectPolarCategoricalDomain: (state: RechartsRootState, axisType: 'angleAxis' | 'radiusAxis', polarAxisId: AxisId) => ReadonlyArray<unknown> | undefined;
export declare const selectPolarAxisTicks: (state: RechartsRootState, axisType: 'angleAxis' | 'radiusAxis', polarAxisId: AxisId, isPanorama: boolean) => ReadonlyArray<CartesianTickItem> | undefined;
export declare const selectPolarGraphicalItemAxisTicks: (state: RechartsRootState, axisType: 'angleAxis' | 'radiusAxis', polarAxisId: AxisId, isPanorama: boolean) => ReadonlyArray<CartesianTickItem> | undefined;
