const ADD_TODO = "todoapp/ADD_TODO" as const;
const REMOVE_TODO = "todoapp/REMOVE_TODO" as const;
const TOGGLE_TODO = "todoapp/TOGGLE_TODO" as const;

export const addTodo = (test: string) => ({ type: ADD_TODO, payload: test });
export const removeTodo = (id: number) => ({ type: REMOVE_TODO, payload: id });
export const toggleTodo = (id: number) => ({ type: TOGGLE_TODO, payload: id });

type TodoappAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof toggleTodo>;

export type Todo = {
  id: number;
  text: string;
  isToggle: boolean;
};

export type Todos = Todo[];

export const initialState: Todo[] = [
  {
    id: 0,
    text: "타입스크립트 투두리스트",
    isToggle: false
  },
  {
    id: 1,
    text: "타입스크립트 리덕스",
    isToggle: false
  }
];

function todoapp(state: Todos = initialState, action: TodoappAction): Todos {
  switch (action.type) {
    case ADD_TODO:
      const id = Math.max(...state.map(todo => todo.id)) + 1;
      return state.concat({
        id,
        text: action.payload,
        isToggle: false
      });
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload
          ? {
              ...todo,
              isToggle: !todo.isToggle
            }
          : todo
      );
    default:
      return state;
  }
}

export default todoapp;
