import { createContext } from 'react';
import type { Action, Store } from '@reduxjs/toolkit';
import type { Subscription } from 'react-redux';
import type { CheckFrequency } from 'react-redux/es/hooks/useSelector';
import type { RechartsRootState } from './store';

/*
 * This is a copy of the React-Redux context type, but with our own store type.
 * We could import directly from react-redux like this:
 * import { ReactReduxContextValue } from 'react-redux/src/components/Context';
 * but that makes typescript angry with some errors I am not sure how to resolve
 * so copy it is.
 */
export type RechartsReduxContextValue = {
  store: Store<RechartsRootState, Action>;
  subscription: Subscription;
  stabilityCheck: CheckFrequency;
  noopCheck: CheckFrequency;
};

/**
 * We need to use our own independent Redux context because we need to avoid interfering with other people's Redux stores
 * in case they decide to install and use Recharts in another Redux app which is likely to happen.
 *
 * https://react-redux.js.org/using-react-redux/accessing-store#providing-custom-context
 */
export const RechartsReduxContext = createContext<RechartsReduxContextValue | null>(null);
