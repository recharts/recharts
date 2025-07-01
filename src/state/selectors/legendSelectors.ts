import { createSelector } from 'reselect';
import sortBy from 'es-toolkit/compat/sortBy';
import { RechartsRootState } from '../store';
import { LegendSettings } from '../legendSlice';
import { LegendPayload } from '../../component/DefaultLegendContent';
import { Size } from '../../util/types';

export const selectLegendSettings = (state: RechartsRootState): LegendSettings => state.legend.settings;

export const selectLegendSize = (state: RechartsRootState): Size => state.legend.size;

const selectAllLegendPayload2DArray = (state: RechartsRootState): ReadonlyArray<ReadonlyArray<LegendPayload>> =>
  state.legend.payload;

export const selectLegendPayload: (state: RechartsRootState) => ReadonlyArray<LegendPayload> = createSelector(
  [selectAllLegendPayload2DArray, selectLegendSettings],
  (payloads, { itemSorter }) => {
    const flat = payloads.flat(1);
    return itemSorter ? sortBy(flat, itemSorter) : flat;
  },
);
