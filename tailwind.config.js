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
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        accent: '#B8924F',
        ink: '#F5E6D3',
        paper: '#2f2f2f',
        charcoal: '#2f2f2f',
        blackish: '#0a0a0a',
      },
    },
  },
  plugins: [],
}
