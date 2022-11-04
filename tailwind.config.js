/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      heading: " Poppins, sans-serif",
      body: "Poppins, sans-serif",
    },
    extend: {
      colors: {
        gray: { 300: "#f3f3f3", 400: "#888", DEFAULT: "#f3f3f3" },

        coral: "rgb(255, 69, 0)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
