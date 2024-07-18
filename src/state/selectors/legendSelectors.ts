import { RechartsRootState } from '../store';
import { LegendState } from '../legendSlice';

export const selectLegendState = (state: RechartsRootState): LegendState => state.legend;
