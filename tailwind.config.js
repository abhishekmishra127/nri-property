/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F4F9',
          100: '#D9E2EE',
          200: '#B8C9DE',
          300: '#8FAACB',
          400: '#5C82B0',
          500: '#3A608F',
          600: '#2A4970',
          700: '#1D3452',
          800: '#122238',
          900: '#0B1B3D',
          950: '#060F23',
        },
        gold: {
          50: '#FDFCF7',
          100: '#FBF8EB',
          200: '#F5ECCB',
          300: '#ECDC9F',
          400: '#DFC46A',
          500: '#C9A83E',
          600: '#B08E2B',
          700: '#8C6E1C',
          800: '#6C5418',
          900: '#544116',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
