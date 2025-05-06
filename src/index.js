import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // ✅ 引入 Tailwind 的 CSS 指令
import App from './App';
// import reportWebVitals from './reportWebVitals'; 用於效能監測，練習用、面試 demo 或單純前端開發，這檔案可以不使用。

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // <React.StrictMode> 是 React 開發環境用來幫助偵測潛在問題的包裝器，建議保留。
);
