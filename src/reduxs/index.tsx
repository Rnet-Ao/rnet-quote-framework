import Controller from './controller.reducer';
import { combineReducers } from 'redux';
import { History } from 'history';
import { RouterState, connectRouter } from 'connected-react-router';

const rootReducer = (history: History) =>
  combineReducers({
    Controller,
    router: connectRouter(history),
  });

export interface State {
  Controller: object;
  router: RouterState;
}

export default rootReducer;
