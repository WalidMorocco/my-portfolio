/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{html,js,jsx}"],
  content: ["./src/**/*.{html,js, jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: '#7D1BBF',
        purple: '#33006F',
        yellow: '#DE9B26',
        grey: '#EDEDED',
        'deep-blue': '#010326',
        'dark-grey': '#757575',
        'opaque-black': 'rgba(0, 0, 0, 0.35)'
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #de9b26 100%)",

        "gradient-rainblue":
          "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",    
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        sourcesanspro: ["Source Sans Pro", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}
