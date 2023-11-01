/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'arch': 'Archivo, sans-serif'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : {
        'main-black' : '#0E0F1B',
        'main-white' : '#FFF5EE',
        'main-gray' : '#A9A9A9',
        'main-accent' : "#241F75",
        'main-blue' : "#190e5d",
      },
      boxShadow : {
        card: "#a9a9a9",
        effect : "0 4px 6px  0 1px 1px  0 2px 3px "
      }
    },
  },
  plugins: [],
}
