/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "dark-300": "#121827",
        "green-300": "#55bb7b",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
