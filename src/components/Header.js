
/*
 * Header 元件：顯示網站上方的標題、描述與底線裝飾
 */

function Header() {
  return (
    // text 自訂於 tailwind.config.js 的文字顏色變數
    <div className="w-full max-w-xl mx-auto px-6  text-text mb-6">
      {/* 主標題 */}
      <h1 className="text-4xl mb-1">Todo List</h1>
      {/* 底部水平線：粗邊框（border-t-thick自訂於 tailwind.config.js ） */}
      <hr className="border-t-thick border-primary  mt-2 mx-auto" />
    </div>
  );
}

export default Header;
