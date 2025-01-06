const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      fields: ["var(--font-fields)", "sans-serif"], // Local font variable
      quasimoda: ["var(--font-quasimoda)", "sans-serif"], // Local font variable
    },
    extend: {
      colors: {
        gray: {
          300: "#f3f3f3",
          400: "#888",
          DEFAULT: "#f3f3f3",
        },
        coral: "rgb(255, 69, 0)",
      },
    },
  },
}

export default config
