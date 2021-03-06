import { TodoState, VisibilityFilterTypes, TodoItem } from "./types";
import { VISIBILITY_FILTERS } from "../constants";

export const getTodosByVisibilityFilter = (
  todos: TodoState,
  visibilityFilter: VisibilityFilterTypes
): Array<TodoItem> => {
  const allTodos = todos.todoItems;
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter((todo) => todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter((todo) => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};
