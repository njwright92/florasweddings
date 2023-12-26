/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#747488", // Light lavender
        secondary: "#FFFFF0", // Ivory
        accent: "#976f00", // Gold
      },
      borderRadius: {
        soft: "0.625rem",
      },
      fontFamily: {
        greatvibes: ["Great Vibes", "cursive"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
