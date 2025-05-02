import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import ProgressBar from './components/ProgressBar';
import ToggleDoneSort from './components/ToggleDoneSort';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [sortDoneLast, setSortDoneLast] = useState(false);
  const sortedTodos = sortDoneLast
    ? [...todos.filter((todo) => !todo.done), ...todos.filter((todo) => todo.done)]
    : todos;

  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };
  const handleToggleDone = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-purple-300 py-10">
      <h1 className="text-3xl font-bold text-center text-white drop-shadow mb-4">Todo List</h1>
      <TodoInput onAdd={handleAddTodo} />
      <ProgressBar todos={todos} />
      <TodoList
        todos={sortedTodos} // ✅ 使用處理過的陣列
        onToggle={handleToggleDone}
        onDelete={handleDelete}
      />
      <ToggleDoneSort value={sortDoneLast} onToggle={() => setSortDoneLast(!sortDoneLast)} />
    </div>
  );
}

export default App;
