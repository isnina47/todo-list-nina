import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

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
  // 負責動畫效果  app.js負責資料刪除操作
  const [isRemoving, setIsRemoving] = useState(false);
  const handleDelete = () => {
    setIsRemoving(true);
    setTimeout(() => onDelete(todo.id), 500); //等動畫播完再刪除
  };

  return (
    <div
      className={`flex items-center justify-between px-4 py-4 rounded-md shadow-sm mb-3 relative bg-white/80 backdrop-blur-sm"
      ${isRemoving ? 'animate-fade-out' : 'animate-zoom-in'}`}
    >
      {/* 左側裝飾線條 根據完成狀態變色（主題色或灰色） */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-md ${
          todo.done ? 'bg-done' : 'bg-primary'
        }`}
      />

      {/* 主體區塊：勾選框 + 文字 */}
      <label className="flex items-center gap-5 pl-2 cursor-pointer">
        {/* 原生 checkbox 隱藏 */}
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
          className="peer hidden"
        />
        {/* 自訂勾選框 + font awesome icon*/}
        <div className="w-5 h-5 rounded border-2 border-done flex items-center justify-center peer-checked:bg-primary transition-colors">
          {todo.done && <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-white" />}
        </div>
        {/*  待辦文字：已完成時加上刪除線 */}
        <span className={`text-lg ${todo.done ? 'line-through text-done' : 'text-text'}`}>
          {todo.text}
        </span>
      </label>
      {/* 刪除icon 滑過會變暗 */}
      <button onClick={handleDelete} aria-label="刪除">
        <FontAwesomeIcon
          icon={faTrash}
          className="w-4 h-4 text-primary hover:brightness-110 transition-all duration-200"
        />
      </button>
    </div>
  );
}

export default TodoItem;
