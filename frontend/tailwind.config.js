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
    extend: {},
  },
  variants: {},
  plugins: [
      require('@tailwindcss/forms'),
],
}
