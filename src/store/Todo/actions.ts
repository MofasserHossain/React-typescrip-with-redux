import { Dispatch } from 'redux';
import { Todo } from '../../App';
import { ActionType } from './actionTypes';

interface ADD_TODO {
  type: ActionType.ADD_TODO;
  payload: Todo;
}

interface REMOVE_TODO {
  type: ActionType.DELETE_TODO;
  payload: number;
}

interface READ_TODO {
  type: ActionType.READ_TODO;
  payload: number;
}

export type Action = ADD_TODO | REMOVE_TODO | READ_TODO;

// . action

export const addTodo = (data: Todo) => (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.ADD_TODO, payload: data });
};

export const removeTodo = (id: number) => ({
  type: ActionType.DELETE_TODO,
  payload: id,
});

export const viewTodo = (id: number) => ({
  type: ActionType.READ_TODO,
  payload: id,
});
