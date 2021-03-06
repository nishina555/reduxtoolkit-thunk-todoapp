import { combineReducers } from "redux";
import visibilityFilterReducer from "../visibilityFilterSlice";
import todosReducer from "../todosSlice";

export default combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
});
