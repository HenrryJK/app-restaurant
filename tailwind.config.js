/** @type {import('tailwindcss').Config} */
module.exports = {
  // "./src/app/*.{html,ts}",
  // content: [
  //   // "./src/app/app.component.html",
  //   // "./src/app/pages/home/home.page.html",
  //   // "./src/app/pages/home/home-movil/home-movil.component.html",
  //   // "./src/app/pages/home/dasboard/dasboard.component.html"
  // ],
  content    : ['./src/**/*.{html,scss,ts,css}'],
  theme: {
    extend: {
      fontFamily: {
        notoSerif: ['Noto Serif' , 'Poppins' , 'Raleway']
      },
      colors: {
        menu: {
          100:  '#C5DFF8',
          200:  '#A0BFE0',
          300:   '#7895CB',
          400:   '#4A55A2'
        },
        navApp: '#1f1d2b',
        mainApp: '#262837',
        navItemsUp: '#ec7c6a',
        redTxT: '#b25252'
      },
      customHeight: {
        '2px': '2px'
      },
      customBottom: {
        '2px': '2px'
      }


    },
  },
  plugins: [],
}

