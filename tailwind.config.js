/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "calc-64-px": "calc(100vh - 64px)",
        Phone: "780px",
      },
      colors: {
        primary: "#BFEBE5",
        secondary: "#3FAFA0",
        tertiary: "#F0F0F0",
        quaternary: "#179a9e",
        border: "#1a2e35",
        background: "#000",
      },
    },
  },
  plugins: [],
};
