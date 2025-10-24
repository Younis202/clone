/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#0A0E27',
        'dark-navy-2': '#121736',
        'dark-navy-3': '#1a1f3e',
        'cyan-primary': '#0EE7F6',
        'cyan-secondary': '#0DD4E4',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
