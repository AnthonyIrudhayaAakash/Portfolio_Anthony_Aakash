/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#232946',
        secondary:'#EEBBC3',
      },

      backgroundColor:{
        primary:'#232946',
        secondary:'#EEBBC2',
        white:'#FFFFFE',
        card_bg:'#B8C1EC'
      },
      boxShadow: {
        custom: '0 4px 6px -1px rgba(35, 41, 70, 0.1), 0 2px 4px -1px rgba(35, 41, 70, 0.06)',
      },
      fontFamily:{
        Montserrat : ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}

