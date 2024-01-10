/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:{
          50:"#333333",
          100:"#303030",
          200:"#393939",
          300:"#454545",
          400:'#1E1E1E',
          500:"#262626",
          600:"#282828"
        },
        jeez:{
          100:"#0fada2",
          200:"#0E968D"
        },
        bubble:"#FF00C7"
      }
    },
  },
  plugins: [],
}

