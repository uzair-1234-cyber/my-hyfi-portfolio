module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          500: '#ff0058'
        }
      },
      fontSize: {
        '6xl': ['4rem',{lineHeight:'1'}],
        '3xl': ['1.75rem',{lineHeight:'1.2'}]
      }
    },
  },
  plugins: [],
}
