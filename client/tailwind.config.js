/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "main-gray": "rgb(234, 232, 232)",
        "navigation":"rgb(226, 224, 220)"
      },
      fontFamily:{
        sans: ['Kanit', 'sans-serif'],
      },
      backgroundImage:{
        'waterBG': "url('/src/assets/waterBG.webp')",
        'gymBG':"url('/src/assets/gymBG.webp')"
      }
    },
  },
  safelist:[
    'bg-waterBG',
    'bg-gymBG'
  ],
  plugins: [],
}