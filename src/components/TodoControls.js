import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
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
      {/* 若有待辦事項 且 尚未全選完成，顯示「Select All」 */}
      {hasTodos && !allDone && (
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={false} // 不綁定狀態，純粹觸發事件
            onChange={onSelectAll}
            className="peer hidden" //隱藏原先checkbox
          />
          <div className="w-5 h-5 rounded border-2 border-done flex items-center justify-center peer-checked:bg-primary transition-colors duration-300">
            {/* 自訂checkbox樣式 不顯示勾勾（未選中） */}
          </div>
          <span className="text-text">Select All</span>
        </label>
      )}
      {/* 取消全選 */}
      {/* 若全部事項都已完成，顯示「Deselect All」 */}
      {hasTodos && allDone && (
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={true}
            onChange={onDeselectAll}
            className="peer hidden" //隱藏原先checkbox
          />
          {/* 自訂checkbox格式 */}
          <div className="w-5 h-5 rounded border-2 border-done flex items-center justify-center peer-checked:bg-primary transition-colors duration-300">
            <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-white" />
          </div>
          <span className="text-text">Deselect All</span>
        </label>
      )}

      {/* 刪除按鈕 */}
      {/* 若允許刪除（使用者手動全選），顯示「Delete All」按鈕 */}
      {canDelete && (
        <button
          onClick={() => {
            Swal.fire({
              title: 'Are you sure?',
              text: 'This will delete all todo items.',
              iconHtml: `<i class="fa-solid fa-exclamation-triangle text-yellow-500 text-7xl"></i>`,
              showCancelButton: true,
              confirmButtonColor: '#d33',
              cancelButtonColor: '#aaa',
              confirmButtonText: 'Yes',
              customClass: {
                icon: 'custom-icon-class', // 讓sweetalert 不套用預設 icon 樣式
              },
            }).then((result) => {
              if (result.isConfirmed) {
                onDeleteAll(); // ⚠️執行刪除
                Swal.fire({
                  title: 'Deleted!',
                  text: 'All todos have been removed.',
                  iconHtml: `<i class="fa-solid fa-trash-can text-lime-500 text-7xl animate-pulse"></i>`,
                  customClass: {
                    icon: 'custom-icon-class',
                  },
                });
              }
            });
          }}
          className="bg-rose-400 hover:bg-rose-500 text-white text-sm px-3 py-1 rounded shadow transition"
        >
          Delete All
          <FontAwesomeIcon icon={faXmark} className="w-4 h-4 pl-1" />
        </button>
      )}
    </div>
  );
}

export default TodoControls;
