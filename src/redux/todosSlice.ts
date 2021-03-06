import { createSlice } from "@reduxjs/toolkit";
import { TodoState, TodoItem } from "../redux/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import TodosApiService, { PostTodoItem } from "../api/todos";
import { RootState } from "../redux/types";

export const fetchAllTodos = createAsyncThunk<{ todos: TodoItem[] }>(
  "todos/fetchAllTodos",
  async () => {
    const data = await TodosApiService.getAll();
    return { todos: data };
  }
);

export const postTodo = createAsyncThunk<
  { id: number; content: string },
  string,
  {
    state: RootState;
  }
>("todos/postTodo", async (content, thunkAPI) => {
  const { todos } = thunkAPI.getState();
  const todo: PostTodoItem = {
    content: content,
    completed: false,
  };
  await TodosApiService.post(todo);
  return {
    id: todos.todoItems.length + 1,
    content: todo.content,
  };
});

export const patchTodo = createAsyncThunk<{ id: number }, TodoItem>(
  "todos/patchTodo",
  async (todo) => {
    await TodosApiService.toggle(todo);
    return {
      id: todo.id,
    };
  }
);

const initialState: TodoState = {
  todoItems: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllTodos.fulfilled, (state, action) => {
      state.todoItems = action.payload.todos;
    });
    builder.addCase(postTodo.fulfilled, (state, action) => {
      state.todoItems = [
        ...state.todoItems,
        {
          id: action.payload.id,
          content: action.payload.content,
          completed: false,
        },
      ];
    });
    builder.addCase(patchTodo.fulfilled, (state, action) => {
      const id = action.payload.id;
      const todoItems = state.todoItems.map((todo, index) => {
        if (index === id - 1) {
          return Object.assign({}, todo, { completed: !todo.completed });
        } else {
          return todo;
        }
      });
      state.todoItems = todoItems;
    });
  },
});

export default todosSlice.reducer;
