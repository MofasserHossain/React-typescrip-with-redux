import { Todo } from './../../App';
import { Action } from './actions';
import { ActionType } from './actionTypes';

type State = {
  todo: Todo[];
};

const initialState = {
  todo: [],
};

const todoReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_TODO:
      return {
        todo: [...state.todo, action.payload],
      };
    case ActionType.DELETE_TODO:
      return {
        todo: state.todo.filter((todo) => todo.id !== action.payload),
      };
    case ActionType.READ_TODO:
      return {
        todo: state.todo.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
