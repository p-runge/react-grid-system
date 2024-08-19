/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xs": "390px",
        xs: "475px",
      },
    },
  },
  plugins: [],
};
