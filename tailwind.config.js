/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './index.html',  
  ],
  theme: {
    extend: {
      colors: {
        main:'#FA6402',
        second:"#E8E7E8"
      },
      backgroundImage: {
        "hero-pattern":"url('../images/Oval pattern.png')",
      },
      height: {
        "50": "60rem",
        "1/2":"400px"
      },
    width: {
      "18":"18rem",
    },
    fontFamily: {
      "cairo":'"Cairo", sans-serif'
    }
    },
  },
  plugins: [],
}


