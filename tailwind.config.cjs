const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        brownGr: "linear-gradient(141.38deg, #A14A4A -3.23%, #4B0C0C 97.18%)",
      },
      colors: {
        mahroon: "#A14A4A",
        primary: "#DBDFEC",
      },
    },
  },
  plugins: [],
};
