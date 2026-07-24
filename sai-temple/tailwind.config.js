/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#C48A1D",
          light: "#D9A94A",
          dark: "#9C6E15",
        },
        secondary: {
          DEFAULT: "#8B1E1E",
          light: "#A83D3D",
          dark: "#6B1616",
        },
        background: {
          DEFAULT: "#FFF9F2",
        },
        text: {
          DEFAULT: "#2C2C2C",
        },
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
