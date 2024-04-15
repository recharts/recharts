import React, { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import { createRechartsStore, RechartsRootState } from './store';

type RechartsStoreProviderProps = {
  children: ReactNode;
  preloadedState?: Partial<RechartsRootState>;
  reduxStoreName?: string;
};

export function RechartsStoreProvider({ preloadedState, children, reduxStoreName }: RechartsStoreProviderProps) {
  /*
   * Why the ref? Redux official documentation recommends to use store as a singleton,
   * and reuse that everywhere: https://redux-toolkit.js.org/api/configureStore#basic-example
   *
   * Which is correct! Except that is considering deploying Redux in an app.
   * Recharts as a library supports multiple charts on the same page.
   * And each of these charts needs its own store independent of others!
   *
   * The alternative is to have everything in the store keyed by the chart id.
   * Which would make working with everything a little bit more painful because we need the chart id everywhere.
   */
  const storeRef = useRef(null);
  if (storeRef.current == null) {
    storeRef.current = createRechartsStore(preloadedState, reduxStoreName);
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
