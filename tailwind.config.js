/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#22D3EE",
        brand2: "#A78BFA"
      },
    },
  },
  plugins: [],
}
