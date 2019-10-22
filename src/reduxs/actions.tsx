import { createActions } from 'redux-actions';
import { Controller } from '@/types/store.controller';

const { controller } = createActions({
  CONTROLLER: params => params,
});

export { controller };
