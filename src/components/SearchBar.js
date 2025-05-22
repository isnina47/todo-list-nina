import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

/**
 * SearchBar 元件
 * - 顯示搜尋欄位
 * - 透過 props 傳入與回傳搜尋字串
 *
 * Props:
 * - searchText：目前搜尋文字
 * - onSearch：當使用者輸入文字時觸發，回傳新的文字
 */

function SearchBar({ inputText, onSearch, onInputChange }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(); // 按下enter時執行搜尋
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto px-6 mb-8 ">
      {/* 輸入欄標籤 */}
      <label htmlFor="todo-search" className="block text-text text-sm mb-2">
        Search your tasks
      </label>
      {/* 輸入欄 + 按鈕區塊 */}
      <div className="flex items-center gap-1">
        <input
          id="todo-search"
          type="text"
          value={inputText}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search your todo..."
          className="flex-1 px-4 py-3 border border-gray-300 bg-white/80 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
        />
        {/* 放大鏡 搜尋按鈕 */}
        <button
          onClick={onSearch}
          className="w-12 h-12 bg-primary hover:brightness-110 transition-all duration-200
        text-white text-3xl font-bold flex items-center justify-center rounded-md shadow "
          aria-label="Search"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
export default SearchBar;
