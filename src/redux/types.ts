import { VISIBILITY_FILTERS } from "../constants";

export type VisibilityFilterTypes = typeof VISIBILITY_FILTERS[keyof typeof VISIBILITY_FILTERS];

export interface TodoState {
  todoItems: Array<TodoItem>;
}

export interface TodoItem {
  id: number;
  content: string;
  completed: boolean;
}

export interface RootState {
  visibilityFilter: VisibilityFilterTypes;
  todos: TodoState;
}
