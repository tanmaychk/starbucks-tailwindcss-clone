/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], //add the classes from the content html and js files
  theme: {
    extend: {
      fontSize : {
        sm : ["14px"], //add own font size to the tailwind library
    },
    colors: {
      starGreen: '#D4E9E2',
      darkGreen: "#1E3932",
      lightText: "rgba(0,0,0, .58)",
      titleText: "rgba(0,0,0, .87)",
  },
},
  plugins: [],
}
}