/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#232946',
        secondary:'#EEBBC3'
      },

      backgroundColor:{
        primary:'#232946',
        secondary:'#EEBBC2',
        white:'#FFFFFE'
      },
      fontFamily:{
        Montserrat : ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}

