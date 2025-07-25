import { RechartsRootState } from '../store';
import { Margin } from '../../util/types';
export declare const selectChartWidth: (state: RechartsRootState) => number;
export declare const selectChartHeight: (state: RechartsRootState) => number;
export declare const selectContainerScale: (state: RechartsRootState) => number;
export declare const selectMargin: (state: RechartsRootState) => Margin | undefined;
