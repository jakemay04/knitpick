export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        clay: {
          50:  '#F5EDE7',
          100: '#E8D5CA',
          400: '#C97A5A',
          600: '#8C4A2F',
          700: '#7A3E27',
        },
      },
    },
  },
  plugins: [],
}