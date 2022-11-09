/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brightRed : "#dc2626",
        brightGreen : "#84cc16",
        lightGray : "#737373",
        darkGray : "#44403c",
        bgGray : "#292524"
      }
    },
  },
  plugins: [],
}
