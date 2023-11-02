/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        primary: "#212323",
        secondary: {
          100: "#feae22",
          900: "#feae22",
        },
      },
    },
  },
  plugins: [],
}