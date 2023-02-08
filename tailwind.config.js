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
          
        "mosaique-pattern": 
          "url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cg fill='%23de9b26' fill-opacity='0.4'%3E%3Cpath d='M12 0h18v6h6v6h6v18h-6v6h-6v6H12v-6H6v-6H0V12h6V6h6V0zm12 6h-6v6h-6v6H6v6h6v6h6v6h6v-6h6v-6h6v-6h-6v-6h-6V6zm-6 12h6v6h-6v-6zm24 24h6v6h-6v-6z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E')",
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
