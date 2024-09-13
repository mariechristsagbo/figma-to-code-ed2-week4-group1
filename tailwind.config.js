/** @type {import('tailwindcss').Config} */
export const content = [
  "./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./app.vue",
  "./error.vue",
];
export const theme = {
  extend: {
    fontFamily: {},
    borderRadius: {},
    colors: {
      "gray-light": "#CCCCCC",
      "gray-light-medium": "#D9D9D9",
      "gray-lighter": "#E6E6E6",
      "gray-pale": "#F5F5F5",
      "gray-pearl": "#F7F7F7",
      "blue-pale": "#ECF4FD",
      "blue-light": "#F2F7FF",
      "gray-darkest": "#1A1A1A",
      "gray-medium": "#808080",
      blue: "#2F80ED",
      dark: "#111111",
    },
  },
  screens: {
    sm: "375px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};
export const plugins = [];
