/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      "presque-noir": "#1d1d1d",
      "noir": "#000000",
      "bleu-ciel": "#96c3d9",
      "bleu-foncé": "#032659",
      "blanc": "#ffffff",
      "presque-blanc": "#f7f8f8"
    },
    boxShadow: {
      "style-bouton-1": "5px 7px 4px 0px rgba(150,195,217,0.25)"
    },
    borderRadius: {
      "none": "0",
      "xs": "0.1875rem",
      "sm": "0.3125rem",
      "default": "0.4375rem",
      "lg": "0.5729166269302368rem",
      "xl": "2.5625rem",
      "2xl": "4.41341495513916rem",
      "3xl": "4.5rem",
      "full": "9999px"
    },
    fontFamily: {
      opensans: ['Open Sans', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        principal: 'repeat(12, minmax(0, 64px))'
      }
    }
  },
  plugins: []
}
