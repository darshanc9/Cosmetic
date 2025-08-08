/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      display: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    },
  },
  plugins: [],
}