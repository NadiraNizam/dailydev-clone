/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101318",
        panel: "#1d2229",
        line: "#303640",
        muted: "#9aa5b8",
      },
    },
  },
  plugins: [],
};