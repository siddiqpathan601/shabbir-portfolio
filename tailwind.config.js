/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F4F6FA',
          100: '#E8ECF4',
          200: '#CBD5E7',
          300: '#9EB2D1',
          400: '#6C8AB7',
          500: '#47699D',
          600: '#36517E',
          700: '#2C4268',
          800: '#1C283F',
          900: '#0A1128',
          950: '#070B19',
        },
        gold: {
          50: '#FAF8F5',
          100: '#F3EDDF',
          200: '#E6DAC0',
          300: '#D5C097',
          400: '#C3A16D',
          500: '#C5A880',
          600: '#B5945F',
          700: '#875F34',
          800: '#6F4B2A',
          900: '#5C3D23',
          950: '#342011',
        }
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}