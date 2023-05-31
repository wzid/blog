/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./templates/**/*.html', './static/**/*.{html,js}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#e86a92",
          "secondary": "#0072B5",
          "neutral": "#292929",
          "base-100": "#f7f7f7",
        },
      }
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        trajan: ["trajan-pro-3", "serif"],
        sans: ["Source Sans Pro", "Segoe UI","sans-serif"],
      },
      colors: {
        text_color: "#292929",
        background: "#f7f9f7",
      },

    }
  },
  variants: {},
  plugins: [require("daisyui")],
};