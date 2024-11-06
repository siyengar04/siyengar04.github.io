/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {backgroundImage: {
      'hero': "url('/images/hero.png')",
    }
  },
  },
  plugins: [],
}