module.exports = {
  presets: [require("./presets/winter.preset.js")],
  mode: "jit",
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      boxShadow: {
        square: "0 5px 0 #000",
        "square-left": "-0.35rem 0.35rem 0 #000",
        "square-right": "0.35rem 0.35rem 0 #000",
      },
    },
  },
  plugins: [],
};
