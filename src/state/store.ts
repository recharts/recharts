import { Action, autoBatchEnhancer, combineReducers, configureStore, Dispatch, Store } from '@reduxjs/toolkit';
import { optionsReducer } from './optionsSlice';
import { tooltipReducer } from './tooltipSlice';
import { chartDataReducer } from './chartDataSlice';
import { chartLayoutReducer } from './layoutSlice';
import { mouseClickMiddleware, mouseMoveMiddleware } from './mouseEventsMiddleware';
import { reduxDevtoolsJsonStringifyReplacer } from './reduxDevtoolsJsonStringifyReplacer';
import { cartesianAxisReducer } from './cartesianAxisSlice';
import { graphicalItemsReducer } from './graphicalItemsSlice';
import { referenceElementsReducer } from './referenceElementsSlice';
import { brushReducer } from './brushSlice';
import { legendReducer } from './legendSlice';
import { rootPropsReducer } from './rootPropsSlice';
import { polarAxisReducer } from './polarAxisSlice';
import { polarOptionsReducer } from './polarOptionsSlice';
import { keyboardEventsMiddleware } from './keyboardEventsMiddleware';
import { externalEventsMiddleware } from './externalEventsMiddleware';
import { touchEventMiddleware } from './touchEventsMiddleware';
import { errorBarReducer } from './errorBarSlice';
import { Global } from '../util/Global';
import { zIndexReducer } from './zIndexSlice';

const rootReducer = combineReducers({
  brush: brushReducer,
  cartesianAxis: cartesianAxisReducer,
  chartData: chartDataReducer,
  errorBars: errorBarReducer,
  graphicalItems: graphicalItemsReducer,
  layout: chartLayoutReducer,
  legend: legendReducer,
  options: optionsReducer,
  polarAxis: polarAxisReducer,
  polarOptions: polarOptionsReducer,
  referenceElements: referenceElementsReducer,
  rootProps: rootPropsReducer,
  tooltip: tooltipReducer,
  zIndex: zIndexReducer,
});

export const createRechartsStore = (
  preloadedState?: Partial<RechartsRootState>,
  chartName: string = 'Chart',
): Store<RechartsRootState> => {
  return configureStore<RechartsRootState>({
    reducer: rootReducer,
    // redux-toolkit v1 types are unhappy with the preloadedState type. Remove the `as any` when bumping to v2
    preloadedState: preloadedState as any,
    // @ts-expect-error redux-toolkit v1 types are unhappy with the middleware array. Remove this comment when bumping to v2
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: !['commonjs', 'es6', 'production'].includes(process.env.NODE_ENV ?? ''),
      }).concat([
        mouseClickMiddleware.middleware,
        mouseMoveMiddleware.middleware,
        keyboardEventsMiddleware.middleware,
        externalEventsMiddleware.middleware,
        touchEventMiddleware.middleware,
      ]),
    /*
     * I can't find out how to satisfy typescript here.
     * We return `EnhancerArray<[StoreEnhancer<{}, {}>, StoreEnhancer]>` from this function,
     * but the types say we should return `EnhancerArray<StoreEnhancer<{}, {}>`.
     * Looks like it's badly inferred generics, but it won't allow me to provide the correct type manually either.
     * So let's just ignore the error for now.
     */
    // @ts-expect-error mismatched generics
    enhancers: getDefaultEnhancers => {
      let enhancers = getDefaultEnhancers;
      if (typeof getDefaultEnhancers === 'function') {
        /*
         * In RTK v2 this is always a function, but in v1 it is an array.
         * Because we have @types/redux-toolkit v1 as a dependency, typescript is going to flag this as an error.
         * We support both RTK v1 and v2, so we need to do this check.
         * https://redux-toolkit.js.org/usage/migrating-rtk-2#configurestoreenhancers-must-be-a-callback
         */
        // @ts-expect-error RTK v2 behaviour on RTK v1 types
        enhancers = getDefaultEnhancers();
      }
      return enhancers.concat(
        autoBatchEnhancer({
          type: 'raf',
        }),
      );
    },
    devTools: Global.devToolsEnabled && {
      serialize: {
        replacer: reduxDevtoolsJsonStringifyReplacer,
      },
      name: `recharts-${chartName}`,
    },
  });
};

export type RechartsRootState = ReturnType<typeof rootReducer>;
export type AppDispatch = Dispatch<Action>;
