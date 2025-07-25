import { RechartsRootState } from '../store';
import { AxisId } from '../cartesianAxisSlice';
export type PolarAngles = Array<number>;
export type PolarRadius = Array<number>;
export declare const selectPolarGridAngles: (state: RechartsRootState, angleAxisId: AxisId) => PolarAngles | undefined;
export declare const selectPolarGridRadii: (state: RechartsRootState, radiusAxisId: AxisId) => PolarRadius | undefined;
