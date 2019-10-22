//import { controller } from './actions';
import { handleActions } from 'redux-actions';

export default handleActions(
  {
    CONTROLLER: function(state: object, payload: object): object {
      return state;
    },
  },
  {
    isShow: true,
    showData: {},
  }
);
