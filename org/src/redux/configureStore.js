import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './rootReducer';

export default function configureStore(initialState = {}, history) {
  const middleware = [thunk, routerMiddleware(history)];

  const enhancers = [];
  // eslint-disable-next-line no-undef
  if (__DEV__) {
    const { devToolsExtension } = window;
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware), ...enhancers));

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
