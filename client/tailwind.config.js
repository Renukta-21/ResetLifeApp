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
        "navigation":"rgb(226, 224, 220)",
        "gym": "rgb(33, 43, 87)",
        'study': 'rgb(109, 169, 210)',
        'exercise': 'rgb(255, 148, 77)',
        'leisure': 'rgb(144, 190, 109)',
        'chores': 'rgb(255, 121, 1)',
        'work': 'rgb(138, 109, 183)',
      },
      fontFamily:{
        sans: ['Kanit', 'sans-serif'],
      },
      backgroundImage:{
        'waterBG': "url('/src/assets/waterBG.webp')",
        'gymBG':"url('/src/assets/gymBG.webp')",
        'kitchenBG':"url('/src/assets/kitchenBG.webp')",
        'wakeUpBG':"url('/src/assets/wakeUpBG.webp')",
      },
      boxShadow:{
        'drop': "5px 5px 0px black"
      }
    },
  },
  safelist:[
    'bg-waterBG',
    'bg-gymBG',
    'bg-wakeUpBG',
    'bg-kitchenBG',
    'bg-work',
    'bg-study',
    'bg-chores',
    'bg-study',
    'bg-leisure',
    'bg-gym',
  ],
  plugins: [],
}