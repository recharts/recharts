import { RechartsRootState } from '../store';
import { AngleAxisForRadar, RadarComposedData } from '../../polar/Radar';
import { BaseAxisWithScale } from './axisSelectors';
import { AxisId } from '../cartesianAxisSlice';
import { DataKey } from '../../util/types';
export declare const selectRadiusAxisForBandSize: (state: RechartsRootState, radiusAxisId: AxisId) => BaseAxisWithScale | undefined;
export declare const selectAngleAxisForBandSize: (state: RechartsRootState, _radiusAxisId: AxisId, angleAxisId: AxisId) => BaseAxisWithScale | undefined;
export declare const selectAngleAxisWithScaleAndViewport: (state: RechartsRootState, _radiusAxisId: AxisId, angleAxisId: AxisId) => AngleAxisForRadar | undefined;
export declare const selectRadarPoints: (state: RechartsRootState, radiusAxisId: AxisId, angleAxisId: AxisId, isPanorama: boolean, radarDataKey: DataKey<any> | undefined) => RadarComposedData | undefined;
