/** @type {import('tailwindcss').Config} */
module.exports = {
  // 🔍 指定 Tailwind 要掃描的檔案路徑（包含 js, jsx, ts, tsx）
  // 只有這些檔案中有用到的 class 才會被包含進最終 CSS
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FB923C', // 自定義主色（按鈕、主色等用這個）
        text: '#1F2937', // 自定義文字顏色（用在標題、副標題）
        done:'#ADADAD', // 已完成文字 側邊條 checkbox
        primaryhover:'#FACC15'
      },
      borderColor: {
        primary: '#FDE68A', // 自訂邊框顏色
      },
      borderWidth: {
        DEFAULT: '1px', // 設定預設邊框寬度為 1px（Tailwind 預設)
        thick: '2px', // 新增名為 `border-t-thick` 的樣式，其寬度為 2px
      },
    },
  },
  // 📦 Tailwind 外掛擴充區（此處尚未使用任何 plugin）
  plugins: [],
};
