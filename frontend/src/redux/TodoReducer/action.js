import { ADD_TODO, DELETE_TODO, UPDATE_TODO, FETCH_TODOS } from "./actionType";

// Action to add a todo
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

// Action to delete a todo by its ID
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

// Action to update a todo by its ID
export const updateTodo = (id, updatedTodo) => ({
  type: UPDATE_TODO,
  payload: { id, updatedTodo },
});

// Action to fetch todos from local data
export const fetchTodos = () => {
  // Example of locally defined todos
  const todos = [
    { id: 1, text: "Learn Redux", completed: false },
    { id: 2, text: "Build Todo App", completed: false },
    { id: 3, text: "Test React Features", completed: false },
  ];

  return {
    type: FETCH_TODOS,
    payload: todos, // Returning the local todos list
  };
};
