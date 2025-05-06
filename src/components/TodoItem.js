import React from 'react';

/**
 * TodoItem 元件：
 * 呈現單一待辦事項，支援完成打勾、刪除、動態樣式。
 *
 * Props:
 * - todo：包含 id, text, done 的待辦項目資料
 * - onToggle：切換完成狀態的函式
 * - onDelete：刪除此項目的函式
 */

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between px-4 py-4 bg-white rounded-md shadow mb-2 relative">
      {/* 左側裝飾線條 根據完成狀態變色（主題色或灰色） */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-md ${
          todo.done ? 'bg-gray-300' : 'bg-primary'
        }`}
      />

      {/* 主體區塊：勾選框 + 文字 */}
      <label className="flex items-center gap-5 pl-2 cursor-pointer">
        {/*  勾選框：已完成會勾選，點擊時呼叫 onToggle */}
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 accent-primary cursor-pointer"
        />
        {/*  待辦文字：已完成時加上刪除線 */}
        <span className={`text-lg ${todo.done ? 'line-through text-text' : 'text-text'}`}>
          {todo.text}
        </span>
      </label>
      {/* ❌ 刪除按鈕：SVG 圖示，滑過會變暗 */}
      <button
        onClick={() => onDelete(todo.id)}
        className="text-[#b7c0f2] hover:brightness-90 transition-all duration-200"
        aria-label="刪除"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={4}
          strokeLinecap="round"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

export default TodoItem;
