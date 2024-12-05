import { ADD_TODO, DELETE_TODO, UPDATE_TODO, FETCH_TODOS } from "./actionType";

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload, // Set the todos from the fetch action
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload], // Add new todo
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload), // Delete todo by id
      };

    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, ...action.payload.updatedTodo }
            : todo
        ), // Update the todo by id
      };

    default:
      return state;
  }
};

export default todoReducer;
