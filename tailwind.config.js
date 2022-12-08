/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: () => ({
        rerender: {
          '10%': {
            ['border-color']: '#FF0080',
          },
          '40%': {
            ['border-color']: '#FF0080',
          },
        },
        highlight: {
          '10%': {
            background: '#FF0080',
            color: '#FFFFFF',
          },
          '40%': {
            background: '#FF0080',
            color: '#FFFFFF',
          },
        },
        nodata: {
          '10%': {
            color: '#FF0080',
          },
          '40%': {
            color: '#FF0080',
          },
        },
        fade: {
          '0%': { opacity: '0', filter: 'brightness(1) blur(20px)' },
          '10%': { opacity: '1', filter: 'brightness(2) blur(10px)' },
          '100%': { opacity: '1', filter: 'brightness(1) blur(0)' },
        }
      })
    },
  },
  plugins: [],
}
