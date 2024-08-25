/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        PrimaryBlue : "#005377",
        SecondaryGreen : "#20B2AA",
        AccentCoral: "#FF6F61",
        BackgroundSand: "#F5F5DC",
        TextCharcoal: "#333333",
      },
    },
  },
  plugins: [],
}