/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "matcha": "#74A12E",
        "maintenance": "#e8ac65",
        "down": "#d08c60",
      }
    },
  },
  plugins: [],
}
