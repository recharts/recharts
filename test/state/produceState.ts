import { produce, WritableDraft } from 'immer';
import { createRechartsStore, RechartsRootState } from '../../src/state/store';

export function produceState(cb: (draft: WritableDraft<RechartsRootState>) => void): RechartsRootState {
  const initialState = createRechartsStore().getState();
  return produce(initialState, cb);
}
