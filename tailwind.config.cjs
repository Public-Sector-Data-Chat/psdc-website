/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        sans: ['Public Sans','sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}