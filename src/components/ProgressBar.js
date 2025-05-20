import React from 'react';

/**  ✅ 進度條元件:
 * 接收 todos 陣列作為 props
 */

function ProgressBar({ todos }) {
  const total = todos.length; // 計算總數
  const completed = todos.filter((todo) => todo.done).length; //計算已完成的項目數量
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100); // 計算完成百分比，無資料時為 0，取整數（四捨五入

  return (
    <div className="w-full max-w-xl mx-auto px-6 mt-4">
      {/* ✅ 整個進度條區塊，文字 + 進度條本體 */}
      <div className="flex items-center gap-2 mb-1">
        {/* ✅ 顯示百分比數字 */}
        <span className="text-text font-medium">{percent}%</span>

        {/* ✅ 進度條背景條（白色） */}
        <div className="w-full bg-white rounded-full h-4 shadow ">
          {/* ✅ 實際的紫色進度條，根據 percent 動態設定寬度 */}
          <div
            className="bg-[#FDBA74] h-4 rounded-full transition-all duration-300"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
