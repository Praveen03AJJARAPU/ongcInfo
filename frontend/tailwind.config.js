/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robo : "Roboto",
        osw  : "Oswald"
      },
      colors: {
        mainRed: "#e82828"
      }
    },
  },
  plugins: [],
}
