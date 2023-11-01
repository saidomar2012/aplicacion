/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#BDEB00",
        secondary: {
          100: "#004D40",
          900: "#ffffff",
        },
      },
    },
  },
  plugins: [],
}