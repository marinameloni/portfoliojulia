/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: ['router-link-active'],
  theme: {
    fontFamily: {
      'kaisei': ['Kaisei Opti', 'serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'sans': ['Inter', 'sans-serif'],
      'helvetica': ['Helvetica', 'sans-serif'],
      'helvetica-regular': ['Helvetica Regular', 'sans-serif'],
      'helvetica-thin': ['Helvetica Thin', 'sans-serif'], 
      'future': ['Future', 'sans-serif'],
    },
    extend: {
      colors: {
        'noir': '#141111',
        'paasul-pink2': '#F4E7E8',
        'paasul-pink3': '#EECECA',
      },
      backgroundImage: {
        'custom-bg': "url('../public/img/image1.jpg')", // Add your local image path here
      },
      width: {
        '500px': '500px',
      },
      height: {
        '500px': '500px',
      },
    }
  },
  plugins: []
}

