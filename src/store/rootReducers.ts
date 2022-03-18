import { combineReducers } from 'redux';
import testReducer from './Test/reducer';
import todoReducer from './Todo/reducer';

const rootReducer = combineReducers({
  test: testReducer,
  todo: todoReducer,
});

export default rootReducer;
