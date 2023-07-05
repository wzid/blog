/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html", "./static/**/*.{html,js}"],
  daisyui: {
    darkTheme: "mydarktheme",
    themes: [
      {
        mytheme: {
          primary: "#0072B5",
          secondary: "#e86a92",
          neutral: "#171717",
          "base-100": "#D4D4D4",
          accent: "#737373",
          error: "#C8C8C8",
          info: "#D8DEE4",
        },
      },
      {
        mydarktheme: {
          primary: "#0072B5",
          secondary: "#e86a92",
          neutral: "#D4D4D4",
          "base-100": "#171717",
          accent: "#737373",
          error: "#202021",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "Segoe UI", "sans-serif"],
      },
      colors: {
        text_color: "#171717",
        background: "#D4D4D4",
      },
    },
  },
  variants: {},
  plugins: [require("daisyui")],
};