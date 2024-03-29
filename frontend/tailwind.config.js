/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'appBlue': '#0091ff',
      'blueHover': '#1b9bff',
      'appOrange': '#FF8C12'
    },
    extend: {},
  },
  plugins: [],
}

