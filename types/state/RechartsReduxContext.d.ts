import type { Action, Store } from '@reduxjs/toolkit';
import type { Subscription } from 'react-redux';
import type { CheckFrequency } from 'react-redux/es/hooks/useSelector';
import type { RechartsRootState } from './store';
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
export declare const RechartsReduxContext: import("react").Context<RechartsReduxContextValue>;
