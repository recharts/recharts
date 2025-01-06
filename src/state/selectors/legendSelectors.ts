import { createSelector } from 'reselect';
import { RechartsRootState } from '../store';
import { LegendState } from '../legendSlice';
import { LegendPayload } from '../../component/DefaultLegendContent';

export const selectLegendState = (state: RechartsRootState): LegendState => state.legend;

const selectAllLegendPayload2DArray = (state: RechartsRootState): ReadonlyArray<ReadonlyArray<LegendPayload>> =>
  selectLegendState(state).payload;

export const selectLegendPayload: (state: RechartsRootState) => ReadonlyArray<LegendPayload> = createSelector(
  [selectAllLegendPayload2DArray],
  payloads => payloads.flat(1),
);
