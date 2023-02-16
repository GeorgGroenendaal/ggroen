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
        'primary': {
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
        'dark': '#04110C',
        'light': '#EEFBF6',
        'accent': {
          '50': '#fff4ec',
          '100': '#ffe5d3',
          '200': '#ffc8a7',
          '300': '#ffa16f',
          '400': '#ff6e35',
          '500': '#ff480e',
          '600': '#f42c04',
          '700': '#c91c05',
          '800': '#9f180d',
          '900': '#80170e',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
};

module.exports = config;
