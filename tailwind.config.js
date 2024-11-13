/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        primary:'#818CF8',
        secondary:'#312E81'
      },
      fontFamily: {
        sans: ['Century Gothic', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

