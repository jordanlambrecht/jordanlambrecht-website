/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      fields: ["var(--font-fields)", "sans-serif"], // Use your font variable
      quasimoda: ["var(--font-quasimoda)", "sans-serif"], // Use your font variable
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-fields)", "sans-serif"], // Use your font variable
        mono: ["var(--font-quasimoda)", "sans-serif"], // Use your font variable
      },
      colors: {
        gray: { 300: "#f3f3f3", 400: "#888", DEFAULT: "#f3f3f3" },

        coral: "rgb(255, 69, 0)",
      },
    },
  },
}
