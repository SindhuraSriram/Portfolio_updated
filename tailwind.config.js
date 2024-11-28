/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF385C',
          dark: '#E31C5F',
        },
        dark: {
          DEFAULT: '#121212',
          card: '#1E1E1E',
          text: {
            primary: '#FFFFFF',
            secondary: '#E0E0E0',
            muted: '#A0A0A0'
          }
        }
      },
      backgroundColor: {
        dark: '#121212',
        'dark-card': '#1E1E1E',
      }
    },
  },
  plugins: [],
};