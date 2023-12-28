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
        primary: "#b2ac88", // Sage green
        secondary: "#fffff0", // Ivory
        accent: "#de5d83", // Blush
        accent2: "#87ceeb", // Sky blue
      },
      borderRadius: {
        soft: "0.625rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
