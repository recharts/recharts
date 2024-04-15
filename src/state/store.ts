import { Action, combineReducers, configureStore, Dispatch } from '@reduxjs/toolkit';
import { optionsReducer } from './optionsSlice';

const rootReducer = combineReducers({
  options: optionsReducer,
});

export const createRechartsStore = (preloadedState?: Partial<RechartsRootState>, chartName: string = 'Chart') => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['legend/addSupplier', 'legend/removeSupplier'],
          ignoredPaths: ['legend.payloadSuppliers'],
        },
      }),
    devTools: {
      serialize: true,
      name: `recharts-${chartName}`,
    },
  });
};

export type RechartsRootState = ReturnType<typeof rootReducer>;
export type AppDispatch = Dispatch<Action>;
