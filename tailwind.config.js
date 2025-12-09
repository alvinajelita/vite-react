/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'krempdr' : '#FEDCC5',
        'krem' : '#FEDDC6',
        'krempdrr' : '#FDE8CF',
        'orenglp' : '#aa401d',
        'oren' : '#F25019',
      },
      fontFamily:{
        'Latoblack' : ['Latoblack'],
        'Latoreglr' : ['Latoreglr'],
        'Latobold' : ['Latobold'],
      },
    },
  },
  plugins: [],
}

