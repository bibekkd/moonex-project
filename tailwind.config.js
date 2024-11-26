/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        serif: ['Neue Machina', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        primary: '#071624',
        secondary: '#051422',
        yellow: {
          100: '#FFE68F',
          200: '#EDD955',
          300: '#E4B40D',
        }
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
}

