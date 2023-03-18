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
        hero: 'url("/hero-img.png")',
        blogBanner: 'url("/blog-banner.png")',
        articleOverlay:
          "linear-gradient(180deg, rgba(59, 77, 129, 0) -12.86%, rgba(129, 59, 59, 0.5) 106.85%)",
      },
      colors: {
        mahroon: "#A14A4A",
        primary: "#DBDFEC",
        lightPurple: "#6E80B4",
        darkBlue: "#2C3A61",
        gray: "#889099",
        navyBlue: "#31374D",
        lightBlack: "#1B1D1F",
      },
    },
  },
  plugins: [],
};
