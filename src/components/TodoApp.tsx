import React, { useState } from "react";
import { Todos, Todo } from "../modules/todoapp";
import { useDispatch } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "../modules/todoapp";

type TodoAppProps = {
  todos: Todos;
};

const TodoApp = ({ todos }: TodoAppProps) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  const handleClick = (id: number) => {
    dispatch(toggleTodo(id));
  };
  const handleRemove = (id: number) => {
    dispatch(removeTodo(id));
  };
  const done = {
    textDecoration: "line-through"
  };

  return (
    <>
      <div>
        <form onSubmit={e => handleSubmit(e)}>
          <input value={input} onChange={e => setInput(e.target.value)} />
          <button type="submit">등록</button>
        </form>
      </div>
      <div>
        {todos.map((todo: Todo) => {
          const { id, text, isToggle } = todo;
          return (
            <div
              key={id}
              onClick={() => handleClick(id)}
              style={isToggle ? done : undefined}
            >
              {text}
              <button onClick={() => handleRemove(id)}>삭제</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodoApp;
