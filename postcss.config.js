// Only autoprefixer. Exported sites style themselves through styled-components
// and their design system; nothing emitted uses Tailwind, and this matches
// what Misaki Studio's own publish build runs.
module.exports = {
  plugins: {
    autoprefixer: {},
  },
};
