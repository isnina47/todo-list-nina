import React from 'react';
/**
 * ToggleDoneSort 元件：
 * 顯示一個切換開關，用來控制是否將已完成的事項移到列表底部。
 *
 * Props:
 * - value：布林值，代表是否啟用排序
 * - onToggle：當使用者切換開關時呼叫的處理函式
 */

function ToggleDoneSort({ value, onToggle }) {
  return (
    <div className="w-full max-w-xl mx-auto px-6 mt-6">
      {/* 分隔線（粗邊框、主題色、水平置中） */}
      <hr className="border-t-thick border-primary mt-2 mx-auto" />
      {/* 切換區塊：右對齊，橫向排列 */}
      <div className="flex justify-end items-center gap-2 mt-4">
        {/* 說明文字 */}
        <span className="text-text font-medium text-sm">Move done things to end?</span>
        {/* 開關外層標籤：為 checkbox 提供可點擊範圍與樣式 */}
        <label className="relative inline-flex items-center cursor-pointer">
          {/* // sr-only 隱藏視覺，peer 提供狀態給兄弟元素使用 */}
          <input type="checkbox" checked={value} onChange={onToggle} className="sr-only peer" />
          <div className="w-11 h-6 bg-done rounded-full peer peer-checked:bg-primary transition-all duration-400"></div>
          {/* translate-x-5 讓白色圓點在切換時左右滑動，根據 checkbox 狀態移動位置 */}
          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:translate-x-5"></div>
        </label>
      </div>
    </div>
  );
}

export default ToggleDoneSort;
