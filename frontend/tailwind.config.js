/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        notesColors: ['#FFD8F4', '#FFEADD', '#D9E8FC', '#B0E9CA', '#FFF9DE'],
      },
    },
  },
  plugins: [],
}

