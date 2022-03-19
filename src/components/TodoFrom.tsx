import React, { Dispatch, FC, FormEvent, SetStateAction } from 'react';

interface Props {
  todo: string;
  setTodo: Dispatch<SetStateAction<string>>;
  handleSubmit: (e: FormEvent) => void;
}

const TodoFrom: FC<Props> = ({ todo, setTodo, handleSubmit }) => {
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="w-100 d-flex">
        <input
          type="text"
          className="flex-1"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <input type="submit" />
      </form>
    </React.Fragment>
  );
};

export default TodoFrom;
