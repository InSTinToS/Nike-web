/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    '!./node_modules'
  ],
  theme: {
    extend: {
      screens: { xs: '475px' },
      fontFamily: {
        futuraCEB: ['FuturaCondensedExtraBold', 'sans-serif']
      }
    }
  }
}
