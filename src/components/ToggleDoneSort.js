import React from 'react';

function ToggleDoneSort({ value, onToggle }) {
  return (
    <div className="flex justify-center mt-4">
      <label className="flex items-center gap-3 text-white font-medium">
        
        Move done things to end?<input
          type="checkbox"
          checked={value}
          onChange={onToggle}
          className="w-5 h-5 accent-purple-600"
        />
      </label>
    </div>
  );
}

export default ToggleDoneSort;
