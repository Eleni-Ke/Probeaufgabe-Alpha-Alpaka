/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        custom: "390px", // Adjust the width as needed
      },
    },
  },
  plugins: [],
};
