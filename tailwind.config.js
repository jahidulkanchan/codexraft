/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#02030b',
        'card-bg': '#06071b',
        'dark-blue': '#001d26',
        'main': '#66a4d4',
        'light-blue': '#3670cf',
        'icon-bg': '#7f97ff',
        'dark-gray': '#636363',
        'light-gray': '#a5aabb',
      },
    },
  },
  plugins: [],
};