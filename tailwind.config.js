/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
        "roboto-regular": ["Roboto", "sans-serif"],
        "roboto-medium": ["Roboto", "sans-serif"],
        "roboto-bold": ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
