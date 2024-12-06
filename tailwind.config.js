/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#383c40",
        highlight: "rgba(255,123,22,0.99)",
      },
    },
  },
  plugins: [],
};
