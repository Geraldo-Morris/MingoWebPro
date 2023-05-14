/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/**.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      ungu: "#070E16",
      abu: "#555555",
      abu2: "#b5b5b5",
    },
    extend: {
      fontFamily: {
        Ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
