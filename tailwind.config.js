/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fffdf7',
          100: '#fff7e8',
        },
        sun: {
          300: '#ffd76b',
          400: '#ffcb47',
        },
        mint: {
          300: '#96e9c7',
          400: '#45c68d',
        },
        ocean: {
          500: '#1677ff',
        },
        ink: {
          900: '#183153',
        },
        slate: {
          500: '#637188',
        },
        coral: {
          400: '#ff8d7a',
        },
      },
      fontFamily: {
        sans: ['Pretendard Variable', 'Noto Sans KR', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
