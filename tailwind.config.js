/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          400:'#FFEA00',
          300:'#FFDD00',
          200:'#FFD000',
          100:'#FFB700'
        },
        secondary:{
          400:'#E01E37',
          300:'#DA1E37',
          200:'#C71F37',
          100:'#B21E35'
        }
      }
    },
  },
  plugins: [],
}

