/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f9f5f2",
        secondary: "#ffffff",
        tertiary: "#91a8ed",
        "f-primary": "#282825",
        "f-secondary": "#52514e",
        "btn-yellow": "#f7cb45",
        "btn-pink": "#ff91e7",
        "btn-green": "#22a094",
      },
    },
  },
  plugins: [],
};
