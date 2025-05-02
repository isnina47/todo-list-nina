import React from 'react';

function ProgressBar({ todos }) {
  const total = todos.length;
  const completed = todos.filter(todo => todo.done).length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="w-full max-w-xl mx-auto px-6 mt-4">
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">完成進度</span>
        <span className="text-white font-medium">{percent}%</span>
      </div>
      <div className="w-full bg-white rounded-full h-4 shadow-inner">
        <div
          className="bg-green-500 h-4 rounded-full transition-all duration-300"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
