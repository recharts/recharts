import { ReactReduxContext } from 'react-redux';
import { useContext } from 'react';
import type { RechartsRootState, AppDispatch } from './store';

const noopDispatch: AppDispatch = (): undefined => {};

export const useAppDispatch = (): AppDispatch => {
  const context = useContext(ReactReduxContext);
  if (context) {
    return context.store.dispatch;
  }
  return noopDispatch;
};

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
  const context = useContext(ReactReduxContext);
  if (context) {
    return selector(context.store.getState());
  }
  return undefined;
}
