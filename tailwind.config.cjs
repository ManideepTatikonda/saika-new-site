/** @type {import('tailwindcss').Config} */
// tailwind.config.cjs
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          300: "#00D8E1",
          500: "#00C5CD",
          600: "#00A7AE",
        },
      },
    },
  },
  plugins: [],
};

