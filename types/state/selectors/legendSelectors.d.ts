import { RechartsRootState } from '../store';
import { LegendSettings } from '../legendSlice';
import { LegendPayload } from '../../component/DefaultLegendContent';
import { Size } from '../../util/types';
export declare const selectLegendSettings: (state: RechartsRootState) => LegendSettings;
export declare const selectLegendSize: (state: RechartsRootState) => Size;
export declare const selectLegendPayload: (state: RechartsRootState) => ReadonlyArray<LegendPayload>;
