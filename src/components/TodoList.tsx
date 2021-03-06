import React, { useEffect } from "react";
import Todo from "./Todo";
import { TodoItem } from "../redux/types";
import { getTodosByVisibilityFilter } from "../redux/selectors";
import { RootState } from "../redux/types";
import { fetchAllTodos } from "../redux/todosSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const todos: TodoItem[] = useSelector((state: RootState) => {
    const todos = state.todos;
    const { visibilityFilter } = state;
    return getTodosByVisibilityFilter(todos, visibilityFilter);
  });

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);

  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo: TodoItem, _) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "No todos, yay!"}
    </ul>
  );
};

export default TodoList;
