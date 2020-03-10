import React from "react";
import TodoApp from "./TodoApp";
import { useSelector } from "react-redux";
import { RootState } from "../modules";

const TodoAppContainer = () => {
  const todos = useSelector((state: RootState) => state.todoapp);
  return <TodoApp todos={todos} />;
};

export default TodoAppContainer;
