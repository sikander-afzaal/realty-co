const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
        publicSans: ["Public Sans"],
        inter: ["Inter"],
      },
      backgroundImage: {
        brownGr: "linear-gradient(141.38deg, #A14A4A -3.23%, #4B0C0C 97.18%)",
        hero: 'url("/hero-img.png")',
        blogBanner: 'url("/blog-banner.png")',
        aboutUsBanner: 'url("/aboutus-banner.png")',
        find: 'url("/find-bg.png")',
        articleOverlay:
          "linear-gradient(180deg, rgba(59, 77, 129, 0) -12.86%, rgba(129, 59, 59, 0.5) 106.85%)",
      },
      colors: {
        mahroon: "#A14A4A",
        primary: "#DBDFEC",
        lightPurple: "#6E80B4",
        darkBlue: "#2C3A61",
        gray: "#889099",
        darkGray: "#5F6765",
        lightGray: "#FAFAFA",
        silver: "#F8F8F8",
        pagination: "#F3F3F3",
        darkSilver: "#434343",
        navyBlue: "#31374D",
        lightBlack: "#1B1D1F",
        blogPara: "#333333",
        mediumGray: "#6D737A",
      },
      boxShadow: {
        thin: "1px 1px 10px rgba(0, 0, 0, 0.15);",
      },
      gridTemplateColumns: {
        blogCol: "5fr 2fr",
      },
    },
  },
  plugins: [],
};
