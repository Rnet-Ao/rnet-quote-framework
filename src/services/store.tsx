import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import { routerMiddleware } from 'connected-react-router';
import historyRoute from './history';
import createRootReducer from '@/reduxs';

export default function configureStore(preloadedState: object = {}): any {
  const composeEnhancer: typeof compose =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    createRootReducer(historyRoute),
    preloadedState,
    composeEnhancer(
      applyMiddleware(routerMiddleware(historyRoute), promiseMiddleware)
    )
  );

  return store;
}
