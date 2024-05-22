/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      writingMode: {
        vertical: "vertical-rl",
      },
      textOrientation: {
        upright: "upright",
      },
    },
  },
  plugins: [],
};
