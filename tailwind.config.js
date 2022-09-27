/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans':['Helvetica Neue','Helvetica','Arial']
    },
    extend: {
      colors:{
        'aqua':'#2cb7b0',
        'dark-aqua':'#09646c',
        'red':'#fb565e',
        'black':'#333',
        'white':'#fffefe'
      }
    },
  },
  plugins: [],
}
