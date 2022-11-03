/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], //add the classes from the content html and js files
  theme: {
    extend: {
      fontsize : {
        sm : ["14px"], //add own font size to the tailwind library
    },
  },
},
  plugins: [],
}