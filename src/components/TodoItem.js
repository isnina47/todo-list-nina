import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white rounded shadow mb-2">
      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 accent-blue-500"
        />
        <span className={`text-lg ${todo.done ? 'line-through text-gray-400' : 'text-gray-800'}`}>
          {todo.text}
        </span>
      </label>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700 font-bold"
      >
        刪除
      </button>
    </div>
  );
}

export default TodoItem;
