/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins-Regular', 'sans-serif'],
        poppinsBold: ['Poppins-Bold', 'poppins'],
        poppinsSemiBold: ['Poppins-SemiBold', 'poppins'],
        poppinsMedium: ['Poppins-Medium', 'poppins'],
        poppinsLight: ['Poppins-Light', 'poppins'],
        poppinsExtraBold: ['Poppins-ExtraBold', 'poppins'],
        poppinsExtraBoldItalic: ['Poppins-ExtraBoldItalic', 'poppins'],
        poppinsMediumItalic: ['Poppins-MediumItalic', 'poppins'],
        poppinsSemiBoldItalic: ['Poppins-SemiBoldItalic', 'poppins'],
        poppinsItalic: ['PoppinsItalic', 'poppins'],
        aggrandir: ['Agrandir-Regular', 'aggrandir'],
        aggrandirBold: ['Agrandir-Bold', 'aggrandir'],
      },
    },
  },
  plugins: [],
};
