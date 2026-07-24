/**
 * Global theme tokens for Sri Shirdi Sai Baba Temple website.
 * Mirrors the values configured in tailwind.config.js so that
 * non-Tailwind contexts (inline styles, JS logic, chart libs, etc.)
 * can reference the same design tokens.
 */

export const colors = {
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
  background: "#FFF9F2",
  text: "#2C2C2C",
};

export const fonts = {
  heading: "'Playfair Display', serif",
  body: "'Inter', sans-serif",
};

export const breakpoints = {
  xs: "375px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

const theme = { colors, fonts, breakpoints };

export default theme;
