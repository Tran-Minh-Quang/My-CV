/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      boxShadow: {
        boxed: "0 0 2px 0 rgba(0, 0, 0, 0.4)",
        doubleBoxed: "0 0 4px 0 rgba(0, 0, 0, 0.6)",
        custom1: "0px 8px 24px rgba(149, 157, 165, 0.2)",
        custom2: "0px 7px 29px 0px rgba(100, 100, 111, 0.2) ",
      },
      aspectRatio: {
        "5/6": "5 / 6",
        "6/5": "6 / 5",
        "5/4": "5 / 4",
        "4/5": "4 / 5",
        "4/3": "4 / 3",
        "3/4": "3 / 4",
        "2/3": "2 / 3",
        "3/2": "3 / 2",
        "2/1": "2 / 1",
        "1/2": "1 / 2",
        "3/1": "3 / 1",
        "1/3": "1 / 3",
        "16/9": "16 / 9",
      },
      width: {
        xs: "560px",
        sm: "630px", //640px
        md: "758px", //768px
        lg: "1014px", //1024px
        xl: "1270px", //1280px
        "2xl": "1350px", //custom from 1366
        "3xl": "1526px", //1536px
        fhd: "1750px", //custom
        origin: "1920px", //1536px
      },
      screens: {
        fhd: "1800px",
      },
      colors: {
        primary: "#0EAF8F",
        "gray-color": "#F9F9F9",
        disable: "#727276",
        "gray-border": "#A5A5A9",
        "primary-bg": "#E8FDF9",
        "secondary-bg": "#F2FFFC",
        danger: "#ef4446",
        label: "#5b5b5b",
        "blue-text": "#0EAF8F",
        "green-text": "#5ebf92",
        "red-text": "#ef4446",
        processing: "#f78707",
        shipping: "#EF5B0C",
        completed: "#00cf19",
        pending: "#0655E3",
        canceled: "#EB1D36",
        "blue-button": "#0EAF8F",
        "blue-blur": "#15cfaa1a",
      },
    },
  },
  plugins: [],
};
