import React, { FC } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Todo } from '../Pages/TodoPage';

interface Props {
  todoList: Todo[];
  handleDelete: (data: Todo) => void;
  handleView: (data: Todo) => void;
}

const TodoList: FC<Props> = ({ todoList, handleDelete, handleView }) => {
  return (
    <React.Fragment>
      <ListGroup>
        {todoList?.map((data) => (
          <ListGroupItem
            key={data.id}
            // disabled={data.isDone}
            style={{ cursor: 'pointer' }}
            onClick={() => handleView(data)}
          >
            <span
              className="d-flex justify-content-between"
              style={{ color: data.isDone ? '#ddd' : '#000' }}
            >
              {data.value}{' '}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(data);
                }}
              >
                X
              </span>
            </span>
          </ListGroupItem>
        ))}
      </ListGroup>
    </React.Fragment>
  );
};

export default TodoList;
