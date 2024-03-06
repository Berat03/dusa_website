module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  content: [

    "./src/pages/*.{ts,tsx}",
    "./src/components/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom_bg': 'rgb(8,18,26)',
      },
    },
  },
  variants: {},
  plugins: [
      require('@tailwindcss/forms'),
],
}
