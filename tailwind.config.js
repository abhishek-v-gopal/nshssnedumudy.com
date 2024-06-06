/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        Primary: '#C35691',  //main color
        Secondary: '#F2F3FE'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
