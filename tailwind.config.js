/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'nav': '6.5rem'
      },
      margin: {
        'nav': '6.5rem'
      },
      fontFamily: {
        roboto: ["roboto mono", "sans serif"],
        poppins: ["poppins", "sans serif"]
      },
      colors: {
        primary: "#16157a",
      }
    },
  },
  plugins: [],
}

