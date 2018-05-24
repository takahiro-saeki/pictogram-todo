import { combineReducers } from 'redux';
import todo from './todo';
import modal from './modal';
import select from './select';

const rootReducer = combineReducers({
  todo,
  modal,
  select
});

export default rootReducer;
