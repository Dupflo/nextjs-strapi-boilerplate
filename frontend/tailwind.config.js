module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
       'primary': '#3490dc',
       'secondary': '#ffed4a',
       'danger': '#e3342f',
    }),
    extend: {
      height: {
        75: '75-vh',
        60: '60-vh',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
      },
    },
      
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
