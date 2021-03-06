import React from "react";
import cx from "classnames";
import { TodoItem } from "../redux/types";
import { patchTodo } from "../redux/todosSlice";
import { useDispatch } from "react-redux";

interface TodoProps {
  todo: TodoItem;
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const handleToggleTodo = (todo: TodoItem) => {
    dispatch(patchTodo(todo));
  };
  return (
    <li className="todo-item" onClick={() => handleToggleTodo(todo)}>
      {todo && todo.completed ? "👌" : "👋"}{" "}
      <span
        className={cx(
          "todo-item__text",
          todo && todo.completed && "todo-item__text--completed"
        )}
      >
        {todo.content}
      </span>
    </li>
  );
};

export default Todo;
