const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    extend: {
      fontFamily: {
        serif: ["MerriWeather", ...defaultTheme.fontFamily.serif],
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        light: '#f2f7f3',
        lesslight: '#b8c1b8',
        dark: '#020802',
        'theme': {
          '50': '#eefbf3',
          '100': '#d6f5e1',
          '200': '#b1e9c8',
          '300': '#7ed7a9',
          '400': '#49be84',
          '500': '#26a269',
          '600': '#188354',
          '700': '#136945',
          '800': '#125339',
          '900': '#0f4530',
        },
      }
    },
  },

};

module.exports = config;
