import { Context, createContext } from 'react';
import { ReactReduxContextValue } from 'react-redux/src/components/Context';
import { Action } from '@reduxjs/toolkit';
import { RechartsRootState } from './store';

/**
 * We need to use our own independent Redux context because we need to avoid interfering with other people's Redux stores
 * in case they decide to install and use Recharts in another Redux app which is likely to happen.
 *
 * https://react-redux.js.org/using-react-redux/accessing-store#providing-custom-context
 */
export const RechartsReduxContext: Context<ReactReduxContextValue<RechartsRootState, Action> | null> =
  createContext<ReactReduxContextValue<RechartsRootState, Action> | null>(null);
