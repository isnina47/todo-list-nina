import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
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
          className="flex-1 px-4 py-3 border border-gray-300 bg-white/80 shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300 "
        />
        {/* + 按鈕：使用 SVG 畫出加號 */}
        <button
          onClick={handleAdd}
          aria-label="Add todo"
          className="w-12 h-12 bg-primary hover:brightness-110 transition-all duration-200
        text-white text-3xl font-bold flex items-center justify-center rounded-md shadow"
        >
          <FontAwesomeIcon icon={faPlus} className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
