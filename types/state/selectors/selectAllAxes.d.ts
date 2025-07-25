import { RechartsRootState } from '../store';
import { XAxisSettings, YAxisSettings } from '../cartesianAxisSlice';
export declare const selectAllXAxes: (state: RechartsRootState) => ReadonlyArray<XAxisSettings>;
export declare const selectAllYAxes: (state: RechartsRootState) => ReadonlyArray<YAxisSettings>;
