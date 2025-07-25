import { RechartsRootState } from '../store';
import { TooltipIndex } from '../tooltipSlice';
import { Coordinate, DataKey } from '../../util/types';
export declare const selectTooltipCoordinate: (state: RechartsRootState, tooltipIndex: TooltipIndex, dataKey: DataKey<any> | undefined) => Coordinate | undefined;
