import React, { useState, useRef } from 'react';

/**
 * TodoInput 元件：
 * 提供使用者輸入待辦事項的輸入欄與新增按鈕。
 * 支援點擊 + 按鈕或按 Enter 鍵新增。
 *
 * Props:
 * - onAdd：將輸入的文字傳回父層（新增項目）
 */

function TodoInput({ onAdd }) {
  const [text, setText] = useState(''); //控制輸入框內容
  const inputRef = useRef(null); //點擊後會自動聚焦回輸入框

  // 處理輸入文字改變
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // 新增待辦項目：去除空白後執行 onAdd，並清空欄位
  const handleAdd = () => {
    const trimmedText = text.trim();
    if (trimmedText) {
      onAdd(trimmedText); // 通知父層新增
      setText(''); // 清空輸入欄
      inputRef.current.focus(); // 聚焦回到輸入欄
    }
  };

  // 支援按 Enter 鍵執行新增
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto px-6 mb-10 ">
      {/* 輸入欄標籤 */}
      <label htmlFor="todo-input" className="block text-text text-sm mb-2">
        Add to list
      </label>
      {/* 輸入欄 + 按鈕區塊 */}
      <div className="flex items-center gap-1">
        <input
          id="todo-input"
          ref={inputRef}
          type="text"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="e.g. Learn React, Build a project..."
          className="flex-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-13"
        />
        {/* + 按鈕：使用 SVG 畫出加號 */}
        <button
          onClick={handleAdd}
          className="w-14 h-12 bg-primary hover:bg-primaryhover transition-all duration-200
 text-white text-3xl font-bold flex items-center justify-center rounded-md shadow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round" //讓加號的邊緣圓滑，不是直角
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
