import React, { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import { createRechartsStore, RechartsRootState } from './store';

type RechartsStoreProviderProps = {
  children: ReactNode;
  preloadedState?: Partial<RechartsRootState>;
  reduxStoreName?: string;
};

export function RechartsStoreProvider({ preloadedState, children, reduxStoreName }: RechartsStoreProviderProps) {
  const storeRef = useRef(null);
  if (storeRef.current == null) {
    storeRef.current = createRechartsStore(preloadedState, reduxStoreName);
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
