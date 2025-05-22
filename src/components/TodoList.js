import { useRef, useEffect } from 'react';
import TodoItem from './TodoItem';

/**
 * TodoList 元件：
 * 顯示所有待辦項目，支援滾動、打勾完成與刪除功能。
 * 加入了「只在新增項目時才自動滾動到底」的優化行為。
 *
 * Props:
 * - todos：待辦事項陣列
 * - onToggle：勾選切換完成狀態的處理函式
 * - onDelete：刪除單一項目的處理函式
 *
 * * useRef
 * 可以使用 useRef 將 DOM 回傳，而被 useRef 回傳的是一個裡面只有 current 屬性的 ref object，可以得到首次 render 時的 DOM 節點。
 * useRef 也可以用來儲存資料或抓以前的值
 *
 */
function TodoList({ todos, onToggle, onDelete, noMatch }) {
  const scrollRef = useRef(null); // 指向滾動區塊的 DOM
  const prevLength = useRef(todos.length); // 儲存上一次 todos 長度，用來判斷是否為「新增」

  /**
   * useEffect：偵測 todos 的變化
   * 只有在「項目新增」時，才執行 scroll 滾到底
   * 避免在排序或刪除時也觸發 scrollToBottom，影響使用者體驗
   */
  useEffect(() => {
    if (scrollRef.current && todos.length > prevLength.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
    prevLength.current = todos.length; // 更新為目前長度
  }, [todos]);

  return (
    // custom-scrollbar 是自訂 scrollbar 樣式（定義於 index.css）
    // max-h-80 限制最高高度，超過 320px 則出現滾動條
    <div
      ref={scrollRef}
      className="max-h-80 overflow-y-auto px-6 mx-auto mt-6 w-full max-w-xl custom-scrollbar"
    >
      {/*  空清單提示 + 搜尋空結果提示 */}
      {todos.length === 0 && (
        <div className="text-center text-lg text-[#9b9fb2] py-6">
          {noMatch ? 'No matching todos found 😢' : "Let's add your first task!"}
        </div>
      )}

      {/* 使用 map 渲染每個 TodoItem 子元件 */}
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TodoList;
