/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#14508d',
        secondary:'#c4c4d6',
        tertiary:'#0c6c12'

      }
    },
  },
  plugins: [],
}

