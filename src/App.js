import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import ProgressBar from './components/ProgressBar';
import ToggleDoneSort from './components/ToggleDoneSort';
import TodoControls from './components/TodoControls';

function App() {
  //  初始化 todos 狀態，優先從 localStorage 讀取資料，如果沒有則設為空陣列
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem('todos');
    return stored ? JSON.parse(stored) : [];
    // 讀取 localStorage 中 key 為 "todos" 的資料
    // 若有資料，透過 JSON.parse 轉成陣列
    // 若沒有，就回傳空陣列 []
  });

  // 每次 todos 變更時自動儲存 localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // 控制是否將已完成事項排序到列表下方
  const [sortDoneLast, setSortDoneLast] = useState(false);

  // 判斷是否所有項目都已勾選完成（才能刪除全部），啟用 Delete All 按鈕
  const canDelete = todos.length > 0 && todos.every((todo) => todo.done);

  // 根據 sortDoneLast 狀態，決定是否將「已完成的待辦事項排到清單底部」
  const sortedTodos = sortDoneLast
    ? [...todos.filter((todo) => !todo.done), ...todos.filter((todo) => todo.done)]
    : todos;
  // [...A, ...B] 將陣列A跟B的所有元素展開 合併成新的陣列

  // 新增一筆代辦事項
  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(), // 使用 時間戳記 當作唯一 id
      text,
      done: false, //預設為未完成
    };
    setTodos([...todos, newTodo]);
  };

  // 勾選或取消代辦事項
  const handleToggleDone = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  };

  // 刪除單一代辦事項
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 全選：將所有事項標示為已完成
  const handleSelectAll = () => {
    setTodos(todos.map((todo) => ({ ...todo, done: true })));
  };

  //  取消全選：將所有事項取消勾選
  const handleDeselectAll = () => {
    setTodos(todos.map((todo) => ({ ...todo, done: false })));
  };

  //  一鍵清除全部事項
  const handleDeleteAll = () => {
    setTodos([]); //清空列表
  };

  // 判斷是否全部事項皆已完成
  const allDone = todos.length > 0 && todos.every((todo) => todo.done);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFBEA] to-[#fff4c6] py-10">
      {/* 頁面標題 */}
      <Header />
      {/* 輸入新增代辦事項 */}
      <TodoInput onAdd={handleAddTodo} />
      {/* 進度條 */}
      <ProgressBar todos={todos} />
      {/* 清單區塊（含勾選與刪除） */}
      <TodoList todos={sortedTodos} onToggle={handleToggleDone} onDelete={handleDelete} />{' '}
      {/* 控制區：全選、取消全選、刪除全部 */}
      <TodoControls
        onSelectAll={handleSelectAll}
        onDeselectAll={handleDeselectAll}
        onDeleteAll={handleDeleteAll}
        hasTodos={todos.length > 0}
        allDone={allDone}
        canDelete={canDelete}
      />
      {/* 切換已完成項目排序 */}
      <ToggleDoneSort value={sortDoneLast} onToggle={() => setSortDoneLast(!sortDoneLast)} />
    </div>
  );
}

export default App;
