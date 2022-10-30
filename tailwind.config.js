// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');
module.exports = {
  theme: {
    screens: {
      sm: '380px',
      md: '420px',
      lg: '680px',
      tablet: '1024px',
    },
    colors: {
      background: '#FFF5DB',
      dark: {red: '#971B1E', veryRed: '#771113'},
      orange: '#FFCB05',
      black: '#232323',
      white: '#FFFFFF',
    },
    // fontFamily: {
    //   sfuRegular: 'SFU-Futura-Book',
    //   sfuBold: 'SFU-Futura-Bold',
    //   tuv: 'TUV-Domaine-Regular',
    //   utmGothic: 'UTM-Alter-Gothic',
    //   utmAvo: 'UTM-Avo',
    // },
  },
  plugins: [],
};
