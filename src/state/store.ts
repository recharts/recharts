import { Action, combineReducers, configureStore, Dispatch } from '@reduxjs/toolkit';
import { optionsReducer } from './optionsSlice';
import { tooltipReducer } from './tooltipSlice';
import { chartDataReducer } from './chartDataSlice';
import { axisReducer } from './axisSlice';
import { chartLayoutReducer } from './layoutSlice';
import { mouseClickMiddleware, mouseMoveMiddleware } from './mouseEventsMiddleware';
import { reduxDevtoolsJsonStringifyReplacer } from './reduxDevtoolsJsonStringifyReplacer';
import { cartesianAxisReducer } from './cartesianAxisSlice';
import { graphicalItemsReducer } from './graphicalItemsSlice';
import { referenceElementsReducer } from './referenceElementsSlice';
import { brushReducer } from './brushSlice';
import { legendReducer } from './legendSlice';
import { rootPropsReducer } from './rootPropsSlice';

const rootReducer = combineReducers({
  axis: axisReducer,
  cartesianAxis: cartesianAxisReducer,
  brush: brushReducer,
  chartData: chartDataReducer,
  graphicalItems: graphicalItemsReducer,
  layout: chartLayoutReducer,
  legend: legendReducer,
  options: optionsReducer,
  referenceElements: referenceElementsReducer,
  tooltip: tooltipReducer,
  rootProps: rootPropsReducer,
});

export const createRechartsStore = (preloadedState?: Partial<RechartsRootState>, chartName: string = 'Chart') => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat([mouseClickMiddleware.middleware, mouseMoveMiddleware.middleware]),
    devTools: {
      serialize: {
        replacer: reduxDevtoolsJsonStringifyReplacer,
      },
      name: `recharts-${chartName}`,
    },
  });
};

export type RechartsRootState = ReturnType<typeof rootReducer>;
export type AppDispatch = Dispatch<Action>;
