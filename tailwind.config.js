/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    "./src/**/*.{html,js}",
    "*.{html,js}"
    ],
  content: [
    "./src/**/*.{html,js}",
    "*.{html,js}"
    ],
  theme: {
    fontFamily: {
      'inter': ["Inter", "sans-serif"],
      'alata': ["Alata", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
