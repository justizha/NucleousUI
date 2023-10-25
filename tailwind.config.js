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
        'font-arch': 'Archivo, sans-serif'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : {
        'main-black' : ' #1E1E1E',
        'main-white' : '#FFF5EE',
        'main-gray' : '#A9A9A9',
        'main-accent' : "#0e118e",
        'main-blue' : "#1d40d2",
      },
      boxShadow : {
        card: "5px 5px 5px 2px #a9a9a9",
        effect : "0 4px 6px  0 1px 1px  0 2px 3px "
      }
    },
  },
  plugins: [],
}
