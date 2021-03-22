const tailwindcss = require('tailwindcss')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern':
          "url('https://res.cloudinary.com/dqetx7bes/image/upload/v1616338136/shutterstock_736429144_2_chf2lt.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
    },
  },
  plugins: [tailwindcss('./tailwind.js'), require('autoprefixer')],
}
