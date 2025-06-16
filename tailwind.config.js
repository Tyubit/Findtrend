/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}', // For App directory
      './pages/**/*.{js,ts,jsx,tsx}', // For pages directory (if used)
      './components/**/*.{js,ts,jsx,tsx}', // For components directory (if used)
    ],
    safelist: [],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-inter)'], // sets Inter as default sans
          inter: ['var(--font-inter)'],
        },
        colors: {
          background: 'var(--background)',
          foreground: 'var(--foreground)',
        },
          },
    },
    plugins: [],
  };