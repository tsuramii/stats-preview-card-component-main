/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily:{
        'inter': ['Inter', 'sans-serif'],
        'lexenddeca': ['Lexend Deca', 'sans-serif']
      },
      colors: {
        'verydarkblue': '	#090b1a',
        'darkdesaturatedblue': '#1b1938',
        'softviolet': '#aa5cdb',
      }
    },
  },
  plugins: [],
}

