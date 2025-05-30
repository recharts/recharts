import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/shim/with-selector';
import { useContext } from 'react';
import { type AppDispatch, type RechartsRootState } from './store';

import { RechartsReduxContext } from './RechartsReduxContext';

const noopDispatch: AppDispatch = a => a;

export const useAppDispatch = (): AppDispatch => {
  const context = useContext(RechartsReduxContext);
  if (context) {
    return context.store.dispatch;
  }
  return noopDispatch;
};

const noop = (): undefined => {};

const addNestedSubNoop = () => noop;

type EqualityFn<T> = (a: T, b: T) => boolean;
const refEquality: EqualityFn<unknown> = (a, b) => a === b;

/**
 * This is a recharts variant of `useSelector` from 'react-redux' package.
 *
 * The difference is that react-redux version will throw an Error when used outside of Redux context.
 *
 * This, recharts version, will return undefined instead.
 *
 * This is because we want to allow using our components outside the Chart wrapper,
 * and have people provide all props explicitly.
 *
 * If however they use the component inside a chart wrapper then those props become optional,
 * and we read them from Redux state instead.
 *
 * @param selector for pulling things out of Redux store; will not be called if the store is not accessible
 * @return whatever the selector returned; or undefined when outside of Redux store
 */
export function useAppSelector<T>(selector: (state: RechartsRootState) => T): T | undefined {
  const context = useContext(RechartsReduxContext);

  return useSyncExternalStoreWithSelector<RechartsRootState | undefined, T | undefined>(
    context ? context.subscription.addNestedSub : addNestedSubNoop,
    context ? context.store.getState : noop,
    context ? context.store.getState : noop,
    context ? selector : noop,
    refEquality,
  );
}
