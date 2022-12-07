import { combineReducers } from "redux";

import filterReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/TodoList/TodosSlice";

const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoListReducer,
});
// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filterReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action),
//   };
// };

export default rootReducer;
