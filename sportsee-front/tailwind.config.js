/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
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
