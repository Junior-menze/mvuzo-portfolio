/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        background: '#071C2C',
        surface: '#0A2236',
        primary: '#FFFFFF',
        secondary: '#9FB3C8',
        accent: {
          light: '#00C6FF',
          DEFAULT: '#0099FF',
          dark: '#1DA1F2',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'spin-reverse': 'spinReverse 10s linear infinite',
      },
      keyframes: {
        spinReverse: {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        }
      },
    },
  },
  plugins: [],
}