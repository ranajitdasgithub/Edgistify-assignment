import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  updateTodo,
} from "../redux/TodoReducer/action"; // Assuming actions are correctly imported

const Dashboard = () => {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state.todos);

  // Local state to manage new todo and editing todo
  const [newTodoText, setNewTodoText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodoText, setEditTodoText] = useState("");

  useEffect(() => {
    dispatch(fetchTodos()); // Dispatch action to fetch todos
  }, [dispatch]);

  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      dispatch(
        addTodo({ id: Date.now(), text: newTodoText, completed: false })
      );
      setNewTodoText(""); // Reset input
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id)); // Dispatch delete action
  };

  const handleEditTodo = (id, text) => {
    setIsEditing(true);
    setEditTodoId(id);
    setEditTodoText(text);
  };

  const handleUpdateTodo = () => {
    if (editTodoText.trim()) {
      dispatch(updateTodo(editTodoId, { text: editTodoText }));
      setIsEditing(false);
      setEditTodoId(null);
      setEditTodoText(""); // Reset edit state
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Your Todos</h2>

      {/* Add Todo Section */}
      <div>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Enter new todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      {/* Edit Todo Section */}
      {isEditing && (
        <div>
          <input
            type="text"
            value={editTodoText}
            onChange={(e) => setEditTodoText(e.target.value)}
            placeholder="Edit todo"
          />
          <button onClick={handleUpdateTodo}>Update Todo</button>
        </div>
      )}

      {/* Todo List */}
      <div>
        {Array.isArray(todos) && todos.length > 0 ? (
          todos.map((todo) => (
            <div key={todo.id}>
              <p>{todo.text}</p>
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              <button onClick={() => handleEditTodo(todo.id, todo.text)}>
                Edit
              </button>
            </div>
          ))
        ) : (
          <div>No Todos found</div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
