/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        appleBg: "#f5f5f7",
        appleText: "#1d1d1f",
        appleMuted: "#86868b",
        appleBorder: "#d2d2d7",
        brandCyan: "#06c"
      }
    }
  },
  plugins: [],
}
