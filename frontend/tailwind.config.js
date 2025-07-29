/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'code-black': '#121212',
        'code-white': '#e0e0e0',
        'code-green': '#00ff00', // Optional: terminal green accent
      },
      fontFamily: {
        mono: ['Source Code Pro', 'Courier New', 'monospace'], // hacker vibe
      },
    },
  },
  plugins: [],
}
