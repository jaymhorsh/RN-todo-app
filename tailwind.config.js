/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './<custom-folder>/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#24A19C',
        },
        neutral: {
          primary: '#1B1C1F',
          secondary: '#767E8C',
          line: '#E0E5ED',
          background: '#FFFFFF',
        },
        background: '#24A19C',
      },
      fontFamily: {
        // SF Pro Display font families
        'sf': ['SFProDisplay-Regular', 'System', 'sans-serif'],
        'sf-regular': ['SFProDisplay-Regular', 'System', 'sans-serif'],
        'sf-medium': ['SFProDisplay-Medium', 'System', 'sans-serif'],
        'sf-bold': ['SFProDisplay-Bold', 'System', 'sans-serif'],
        // Fallback for semibold (using medium)
        'sf-semibold': ['SFProDisplay-Medium', 'System', 'sans-serif'],
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px',
      },
    },
  },
  plugins: [],
};
