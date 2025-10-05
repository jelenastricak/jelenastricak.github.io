/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Playfair Display"', 'serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        accent: '#B8924F',
        ink: '#F5E6D3',
        paper: '#1C1C1C',
      },
    },
  },
  plugins: [],
}
