import React, { FC, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import TodoFrom from './components/TodoFrom';
import TodoList from './components/TodoList';
import { RootState } from './store/store';
import { addTodo, removeTodo, viewTodo } from './store/Todo/actions';
export interface Todo {
  id: number;
  value: string;
  isDone: boolean;
}

const App: FC = () => {
  const [todo, setTodo] = useState<string>('');
  const { todo: newTodo } = useSelector((store: RootState) => store.todo);
  console.log(`🦄 ~ file: App.tsx ~ line 17 ~ todo`, newTodo);
  const dispatch: Dispatch<any> = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (todo !== '') {
      const data = { id: Date.now(), value: todo, isDone: false };
      dispatch(addTodo(data));
      setTodo('');
    }
  };

  const handleDelete = (data: Todo) => {
    // console.log(data);
    dispatch(removeTodo(data.id));
    // setTodoList(todoList.filter((todo) => todo.id !== data.id));
  };
  const handleView = (data: Todo) => {
    dispatch(viewTodo(data.id));
    // setTodoList(
    //   todoList.map((todo) =>
    //     todo.id === data.id ? { ...todo, isDone: !todo.isDone } : todo
    //   )
    // );
  };
  return (
    <div>
      <div
        style={{
          maxWidth: '500px',
          margin: '0 auto',
        }}
      >
        <TodoFrom todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
        <TodoList
          todoList={newTodo}
          handleDelete={handleDelete}
          handleView={handleView}
        />
      </div>
    </div>
  );
};

export default App;
