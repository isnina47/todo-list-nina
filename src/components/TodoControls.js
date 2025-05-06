import React from 'react';
import Swal from 'sweetalert2';

/**
 * TodoControls 元件：
 * 控制待辦事項的群組操作，包括：
 * 1. 全選（Select All）
 * 2. 取消全選（Deselect All）
 * 3. 刪除全部（Delete All）
 */

function TodoControls({ onSelectAll, onDeselectAll, onDeleteAll, hasTodos, allDone, canDelete }) {
  return (
    <div className="flex flex-col items-end gap-3 mt-8 px-6 max-w-xl mx-auto text-sm ">
      {/* 全選 */}
      {/* ✅ 若有待辦事項 且 尚未全選完成，顯示「Select All」 */}
      {hasTodos && !allDone && (
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={false} // 不綁定狀態，純粹觸發事件
            onChange={onSelectAll}
            className="w-5 h-5 accent-primary cursor-pointer"
          />
          <span className="text-text">Select All</span>
        </label>
      )}
      {/* 取消全選 */}
      {/* ✅ 若全部事項都已完成，顯示「Deselect All」 */}
      {hasTodos && allDone && (
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={true}
            onChange={onDeselectAll}
            className="w-5 h-5 accent-primary cursor-pointer"
          />
          <span className="text-text">Deselect All</span>
        </label>
      )}

      {/* 刪除按鈕 */}
      {/* ✅ 若允許刪除（使用者手動全選），顯示「Delete All」按鈕 */}
      {canDelete && (
        <button
          onClick={() => {
            Swal.fire({
              title: 'Are you sure?',
              text: 'This will delete all todo items.',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#d33',
              cancelButtonColor: '#aaa',
              confirmButtonText: 'Yes, delete all',
            }).then((result) => {
              if (result.isConfirmed) {
                onDeleteAll(); // ⚠️執行刪除
                Swal.fire('Deleted!', 'All todos have been removed.', 'success');
              }
            });
          }}
          className="bg-red-500 hover:bg-red-400 text-white text-sm px-3 py-1 rounded shadow transition"
        >
          Delete All
        </button>
      )}
    </div>
  );
}

export default TodoControls;
