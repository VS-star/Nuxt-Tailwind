const path = require('path')

module.exports = {
  purge: {
    enabled: true,
    content: [
      path.join(__dirname, './pages/**/*.vue'),
      path.join(__dirname, './layouts/**/*.vue'),
      path.join(__dirname, './components/**/*.vue')
    ],
    options: {
      whitelist: ['html', 'body', 'nuxt-progress']
    }
  },
  theme: {
    textColor: {
      'first': '#718096',
      'second': '#4A5568',
      'third': '#319795',
      'title': '#2D3748',
      'login': '#319795',
      'white': '#fff',
    },
    fontSize: {
      '21px': '21px',
      '42px': '42px',
      '75px': '75px',
      '130px': '130px',
    },
    letterSpacing: {
      '0.47px': '0.47px',
      '0.84px': '0.84px',
      '1.26px': '1.26px',
      '2.25px': '2.25px',
    },
    fontFamily: {
      'lato':['Lato']
    },
    boxShadow: {
      'header': '0px 3px 6px #00000029',
      'footer': '0px -1px 3px #00000033',
    },
    backgroundColor: theme => ({
     ...theme('colors'),
     'section': '#81E6D9',
    }),
    gradientColorStops: theme => ({
      ...theme('colors'),
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'third': '#319795',
      'third-g': '#3182CE',
    }),
    extend: {
      backgroundImage: theme => ({
       'pattern-main': "url('@/assets/img/background-main.png')",
      }),
      right:{
        '20px': '20px',
      },
      height:{
        '5px':'5px',
        '67px':'67px',
        '250px': '250px',
        '370px': '370px',
      },
      width:{
        '320px':'320px',
      },
      margin: {
        '-40px': '-40px',
        '-9':'-2.25rem',
        '22px': '22px',
        '65px': '65px',
        '70px': '70px',
        '110px': '110px',
        '120px': '120px',
        '140px': '140px',
        '160px': '160px',
        '182px': '182px',
        '205px': '205px',
        '280px': '280px',
      },
      lineHeight: {
        '50px': '50px',
        '90px': '90px',
      }
    }
  },
  variants: {},
  plugins: [],
}
