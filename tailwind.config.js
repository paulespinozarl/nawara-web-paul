/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "calc-64": "calc(100vh - 64px)",
      },
      colors: {
        primary: "#BFEBE5",
        secondary: "#1a2e35",
        tertiary: "#179a9e",
      },
    },
  },
  plugins: [],
};
