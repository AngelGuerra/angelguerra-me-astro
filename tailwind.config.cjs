module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        square: "0 5px 0 #000",
        "square-left": "-0.35rem 0.35rem 0 #000",
        "square-right": "0.35rem 0.35rem 0 #000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
