/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '976px',
      xl: '1306px',
    },
    container: {
      center: true,
      padding: '1rem'
    },

    extend: {
      colors: {
        primary: '#8AD9A6',
        primaryDark: '#365B44',
        primaryLight: '#DCF5E5',
        base: '#1B1B1E',
        gray: '#636363',
        white: '#fff',
      },
      fontFamily: {
        body: ['Raleway'],
        sans: ['El Messiri Variable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
