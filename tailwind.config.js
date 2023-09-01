/** @type {import('tailwindcss').Config} */
module.exports = {
  enabled: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
          poppinsRegular: ["Popins Regular"],
          poppinsItalic: ["Popins Italic"],
          poppinsMedium: ["Popins Medium"],
          poppinsMediumItalic: ["Popins MediumItalic"],
          poppinsSemiBold: ["Popins SemiBold"],
          poppinsSemiBoldItalic: ["Popins SemiBoldItalic"],
          poppinsBold: ["Popins Bold"],
          poppinsBoldItalic: ["Popins BoldItalic"],
          poppinsExtraBold: ["Popins ExtraBold"],
          poppinsExtraBoldItalic: ["Popins ExtraBoldItalic"],
          poppinsBlack: ["Popins Black"],
          poppinsBlackItalic: ["Popins BlackItalic"],
          poppinsLight: ["Popins Light"],
          poppinsLightItalic: ["Popins LightItalic"],
          poppinsThin: ["Popins Thin"],
          poppinsThinItalic: ["Popins ThinItalic"],
        },
      colors: {
          fontBlack: '#1c1c1c',
          blue: '#4287f5',
          green: '#0ff288',
          red: '#ff5445',
          yellow: '#ffcc41'
      },
    },
  },
  plugins: [],
}

