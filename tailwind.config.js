/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        screens: {
  
          // -------- Mobile Screens --------
  
          'sm': '390px',
          // => @media (min-width: 576px) { 390×844 ... }
    
          'md': '414px',
          // => @media (min-width: 960px) { 414×896 ... }
  
  
  
          // -------- Tablet Screens --------
  
          'tab':'768px',
          // => @media (min-width: 1280px) { 768×1024 ... }
  
  
  
          // Desktop Screens --------
    
          'lg': '1024px',
          // => @media (min-width: 1024px) { 1024x640 ... }
  
          'xl': '1280px',
          // => @media (min-width: 1280px) {  1280×720 ... }
  
          '2xl': '1440px',
          // => @media (min-width: 1440px) { 1440×900 ... }
  
          '3xl': '1920px',
          // => @media (min-width: 1920px) { 1920×1080 ... }
  
  
        },
        fontFamily: {
          sans: ['var(--font-inter)'],
          header: 'Eczar',
          paris: 'Parisienne'
        },
        colors: {
          //darkBlue: '#003963',
          darkBlue: '#181e20',
          //normalBlue: '#008ec5',
          normalBlue: '#02314d',
          //lightBlue: '#4bc4f1',
          lightBlue: '#045C94',
          skyBlue: '#4bc4f1',
          //yellowT: '#fcd037',
          yellowT: '#ffbb1c',
          //grayT: '#e5e5e5'
          grayT: '#f2f4f5'
        }
    },
  },
  plugins: [],
}
