/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'verdigris': '#3AA39F',
        'frenchGray': '#D1D1D8'
      },
      borderRadius: {
        'little': '4px'
      },
      colors: {
        'coolGray': '#A2A3B1',
        'space-cadet': '#17183B',
        'veridigris': '#3AA39F',
        'frenchGray': '#D1D1D8',
        'cotton-seed': '#C1BDB3',
        'blue-bayoux': '#58737D',
        'gray33': '#545454',
        'hydrangea-bouquet': '#CBA5A5',
      },
      textColor: {
        'veridigris': '#3AA39F',
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'cambay': ['Cambay'] 
      },
      fontSize: {
        'small': '14px',
        'medium': '16px',
        'med-large': '20px',
        'large': '24px',
        'xxl': '32px',
        'xl': '44px',
      },
      gap: {
        '40': '40px'
      },
      height: {
        'icon': '20px',
        'med': '52px'
      },
      letterSpacing: {
        '0': '0.15px',
        '0.1': '0.1px',
        '2': '2%',
      },
      lineHeight: {
        'base': '16px',
        'tall': '20px',
        'med': '24px',
        'large': '32px',
        'larger' : '39.09px',
        'xl': '44px',
        'xlarge': '56px'
      },
      margin: {
        'medium': '24px',
        'l': '32px',
        'll': '34px',
        'large': '48px',
        'xlarge': '55px',
        'xlarge-top': '76px',
        'xl': '80px',
        'xxl': '111px'
      },
      mixBlendMode: {
        multiply: 'multiply',
      },
      padding: {
        '18': '18px'
      },
      stroke: {
        'verdigris': '#3AA39F',
      },
      width: {
        'icon': '20px',
        'little': '132px',
        'med': '160px',
        'large': '174px'
      }
    },
  },
  plugins: [],
}

