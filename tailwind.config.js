/** @type {import('tailwindcss').Config} */
module.exports = {
  
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : {
        'main-black' : ' #121212',
        'main-white' : '#FFF5EE',
        'main-gray' : '#696969',
        'main-orange' : '#ff5722',
        'main-blue' : "#03a8f4",
        'main-green' : '#8bc34a',
        'main-amber' : '#FFC107'
      },
      boxShadow : {
        project: " 15px 15px #565c63"
      }
    },
  },
  plugins: [],
}
