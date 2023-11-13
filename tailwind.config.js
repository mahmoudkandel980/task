/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main": "#FB940E",
        "edit": "#34C38F",
        "delete": "#F46A6A",
        "gray": "#C7C7C7",
        "grayText": "#747892"
      }
    },
  },
  plugins: [],
};