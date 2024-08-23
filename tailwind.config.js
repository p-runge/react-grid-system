/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // adding calc values directly breaks the order of the media queries in the resulting CSS file
      sm: "382px", // calc(350px + 2rem)
      md: "680px", // calc(648px + 2rem)
      lg: "1312px", // calc(1280px + 2rem)
      xl: "1752px", // calc(1720px + 2rem)
    },
  },
  plugins: [],
};
