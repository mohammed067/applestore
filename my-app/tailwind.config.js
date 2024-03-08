/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'black-small-blur': '0 2px 4px rgba(0, 0, 0, 0.2)', // Customize the shadow here
      },
    },
  },
  plugins: [],
}

