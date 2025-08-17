/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontSize: {
        base: ['18px', '24px'], // [字體大小, 行高]
        lg: ['24px', '32px'],
        xl: ['28px', '36px'],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: '28px',
              lineHeight: '1.3',
            },
            h2: {
              fontSize: '24px',
              lineHeight: '1.4',
            },
            h3: {
              fontSize: '18px',
              lineHeight: '1.4',
            },
          },
        },
        lg: { // ⬅️ 這是關鍵，覆寫 prose-lg
          css: {
            h1: { fontSize: '28px', lineHeight: '1.3' },
            h2: { fontSize: '24px', lineHeight: '1.4' },
            h3: { fontSize: '20px', lineHeight: '1.4' },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // 啟用文章排版樣式
  ],
}

