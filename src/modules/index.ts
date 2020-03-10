import { combineReducers } from "redux";
import todoapp from "./todoapp";

const rootReducer = combineReducers({
  todoapp
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
