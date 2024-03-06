import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Todo App</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          style={styles.input}
        />
        <button onClick={addTodo} style={styles.addButton}>
          Add
        </button>
      </div>
      <ul style={styles.todoList}>
        {todos.map((todo, index) => (
          <li key={index} style={styles.todoItem}>
            {todo}
            <button onClick={() => removeTodo(index)} style={styles.removeButton}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    textAlign: 'center',
  },
  title: {
    color: '#333',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
  },
  input: {
    padding: '8px',
    marginRight: '10px',
    width: '200px',
  },
  addButton: {
    padding: '8px',
    cursor: 'pointer',
  },
  todoList: {
    listStyle: 'none',
    padding: '0',
  },
  todoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px',
    border: '1px solid #ddd',
    marginBottom: '8px',
  },
  removeButton: {
    padding: '4px',
    cursor: 'pointer',
    color: 'red',
  },
};

export default TodoApp;