import React, { useEffect, useRef } from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggle, onDelete }) {
  const scrollRef = useRef(null);

  // 每次清單改變就自動滾到底
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [todos]);

  return (
    <div
      ref={scrollRef}
      className="max-h-96 overflow-y-auto px-6 mx-auto mt-6 w-full max-w-xl"
    >
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TodoList;
