/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bannerbg': "url('..src/assets/bannerbg.png')",
      }
    },
  },
  plugins: [],
}
