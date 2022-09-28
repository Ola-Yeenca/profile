const { NONAME } = require('dns')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // <-- add this line to your config file
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
