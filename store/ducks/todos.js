export const Types = {
  ADD: 'todos/ADD',
  DONE: 'todos/DONE',
  REMOVE: 'todos/REMOVE',
};

const INITIAL_STATE = [];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD:
      return [
        ...state,
        {id: Math.random(), text: action.payload.text, done: false},
      ];
    case Types.DONE:
      return state.map((todo) =>
        todo.id === action.payload.id ? {...todo, done: !todo.done} : todo,
      );
    case Types.REMOVE:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
}

export const Creators = {
  addTodo: (text) => ({
    type: Types.ADD,
    payload: {
      text,
    },
  }),

  doneTodo: (id) => ({
    type: Types.DONE,
    payload: {
      id,
    },
  }),
  removeTodo: (id) => ({
    type: Types.REMOVE,
    payload: {
      id,
    },
  }),
};
