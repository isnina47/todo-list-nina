import { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import ProgressBar from './components/ProgressBar';
import ToggleDoneSort from './components/ToggleDoneSort';
import TodoControls from './components/TodoControls';
import SearchBar from './components/SearchBar';

function App() {
  //  初始化 todos 狀態，優先從 localStorage 讀取資料，如果沒有則設為空陣列
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem('todos');
    return stored ? JSON.parse(stored) : [];
    // 讀取 localStorage 中 key 為 "todos" 的資料
    // 若有資料，透過 JSON.parse 轉成陣列
    // 若沒有，就回傳空陣列
  });
  // 每次 todos 變更時自動儲存 localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // 控制是否將已完成事項排序到列表下方
  const [sortDoneLast, setSortDoneLast] = useState(false);
  // 判斷是否全部事項皆已完成
  const allDone = todos.length > 0 && todos.every((todo) => todo.done);
  // 判斷是否所有項目都已勾選完成（才能刪除全部），啟用 Delete All 按鈕
  const canDelete = todos.length > 0 && todos.every((todo) => todo.done);

  // 根據 sortDoneLast 狀態，決定是否將「已完成的待辦事項排到清單底部」
  const sortedTodos = sortDoneLast
    ? [...todos.filter((todo) => !todo.done), ...todos.filter((todo) => todo.done)]
    : todos;
  // ...A, ...B 將陣列A跟B的所有元素展開 合併成新的陣列

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

  // 刪除單一代辦事項(不馬上刪除，通知 TodoItem 播動畫，動畫播完才真的刪除)
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // 全選
  const handleSelectAll = () => {
    setTodos(todos.map((todo) => ({ ...todo, done: true })));
  };
  //  取消全選
  const handleDeselectAll = () => {
    setTodos(todos.map((todo) => ({ ...todo, done: false })));
  };
  //  刪除全部
  const handleDeleteAll = () => {
    setTodos([]); //清空列表
  };

  // 搜尋相關
  const [inputText, setInputText] = useState(''); // 使用者打字
  const [searchText, setSearchText] = useState(''); // 真正過濾用
  const [noMatch, setNoMatch] = useState(false); // 無結果提示
  // 判斷是否有符合
  const handleSearch = () => {
    const kw = inputText.trim().toLowerCase();
    setSearchText(kw);

    const matched = sortedTodos.filter((t) => t.text.toLowerCase().includes(kw));

    if (matched.length === 0) {
      setNoMatch(true);
    } else {
      setNoMatch(false);
    }
  };
  // 依 searchText 過濾後要顯示的 list
  const displayed = searchText
    ? sortedTodos.filter((todo) => todo.text.toLowerCase().includes(searchText.toLowerCase()))
    : sortedTodos;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFBEA] to-[#fff4c6] py-10">
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 space-y-6 ">
        {/* 頁面標題 */}
        <Header />
        {/* input + search */}
        <TodoInput onAdd={handleAddTodo} />
        <SearchBar inputText={inputText} onInputChange={setInputText} onSearch={handleSearch} />

        {/* 進度條 */}
        <ProgressBar todos={todos} />

        {/* 清單區塊（含勾選與刪除） */}
        <TodoList
          todos={displayed}
          onToggle={handleToggleDone}
          onDelete={handleDelete}
          noMatch={noMatch}
        />

        {/* 控制區：全選、取消全選、刪除全部 + toggle */}
        <TodoControls
          onSelectAll={handleSelectAll}
          onDeselectAll={handleDeselectAll}
          onDeleteAll={handleDeleteAll}
          hasTodos={todos.length > 0}
          allDone={allDone}
          canDelete={canDelete}
        />
        <ToggleDoneSort value={sortDoneLast} onToggle={() => setSortDoneLast(!sortDoneLast)} />
      </div>
    </div>
  );
}

export default App;
