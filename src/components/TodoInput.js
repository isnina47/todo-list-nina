// src/components/TodoInput.js
import React, { useState, useRef } from 'react';

function TodoInput({ onAdd }) {
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  // 處理輸入文字改變
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // 處理新增事項
  const handleAdd = () => {
    const trimmedText = text.trim();
    if (trimmedText) {
      onAdd(trimmedText); // 通知父層新增
      setText('');         // 清空輸入欄
      inputRef.current.focus(); // 回到輸入欄
    }
  };

  // 支援按 Enter 新增
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className="flex items-center justify-center gap-3 mt-6">
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="請輸入待辦事項"
        className="w-2/3 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-xl shadow"
      >
        +
      </button>
    </div>
  );
}

export default TodoInput;
