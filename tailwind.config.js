module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: "#FBFEF9",
      black: "#191923",
      orange: "#FF7F11",
      grey: "#998DA0",
      green: "#307473",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
