/**  ✅ 進度條元件:
 * 接收 todos 陣列作為 props
 */

function ProgressBar({ todos }) {
  const total = todos.length; // 計算總數
  const completed = todos.filter((todo) => todo.done).length; //計算已完成的項目數量
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100); // 計算完成百分比，無資料時為 0，取整數（四捨五入

  // 根據完成度給不同 emoji
  const emoji =
    percent === 100
      ? '🎉'
      : percent >= 70
        ? '🔥'
        : percent >= 40
          ? '😎'
          : percent > 0
            ? '📈'
            : '📝';

  return (
    <div className="w-full max-w-xl mx-auto px-6 mt-6">
      {/* 文字 + 進度條本體 */}
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>
          {emoji} {completed} of {total} tasks completed
        </span>
        <span className="font-semibold text-gray-700">{percent}%</span>
      </div>

      {/*  進度條背景 */}
      <div className="w-full bg-orange-100 rounded-full h-3 shadow-inner overflow-hidden">
        {/* 根據 percent 動態設定寬度 */}
        <div
          className="bg-[#FDBA74] h-full rounded-full "
          style={{ width: `${percent}%`, transition: 'width 0.5s ease-out' }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
