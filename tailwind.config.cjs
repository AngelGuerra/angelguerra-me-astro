module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      keyframes: {
        eye: {
          "0%": { backgroundColor: "#660000", transform: "scale(1)" },
          "20%": { transform: "scale(0.25)" },
          "60%": { transform: "scale(0.5)" },
          "100%": { backgroundColor: "#660000" },
        },

        "glitch-skew": {
          "0%, 60%": { transform: "skew(1deg)" },
          "10%, 100%": { transform: "skew(-3deg)" },
          "20%": { transform: "skew(-2deg)" },
          "30%": { transform: "skew(-1deg)" },
          "40%, 90%": { transform: "skew(-4deg)" },
          "50%": { transform: "skew(3deg)" },
          "70%": { transform: "skew(2deg)" },
          "80%": { transform: "skew(4deg)" },
        },

        "glitch-anim": {
          "0%": {
            clip: "rect(44px, 9999px, 71px, 0)",
            transform: "skew(0.91deg)",
          },
          "5%": {
            clip: "rect(47px, 9999px, 54px, 0)",
            transform: "skew(0.4deg)",
          },
          "10%": {
            clip: "rect(89px, 9999px, 25px, 0)",
            transform: "skew(0.09deg)",
          },
          "15%": {
            clip: "rect(15px, 9999px, 29px, 0)",
            transform: "skew(0.34deg)",
          },
          "20%": {
            clip: "rect(22px, 9999px, 33px, 0)",
            transform: "skew(0.34deg)",
          },
          "25%": {
            clip: "rect(89px, 9999px, 89px, 0)",
            transform: "skew(0.26deg)",
          },
          "30%": {
            clip: "rect(30px, 9999px, 55px, 0)",
            transform: "skew(0.26deg)",
          },
          "35%": {
            clip: "rect(30px, 9999px, 21px, 0)",
            transform: "skew(0.49deg)",
          },
          "40%": {
            clip: "rect(52px, 9999px, 7px, 0)",
            transform: "skew(0.23deg)",
          },
          "45%": {
            clip: "rect(68px, 9999px, 51px, 0)",
            transform: "skew(0.98deg)",
          },
          "50%": {
            clip: "rect(9px, 9999px, 17px, 0)",
            transform: "skew(0.29deg)",
          },
          "55%": {
            clip: "rect(66px, 9999px, 34px, 0)",
            transform: "skew(0.99deg)",
          },
          "60%": {
            clip: "rect(4px, 9999px, 73px, 0)",
            transform: "skew(1deg)",
          },
          "65%": {
            clip: "rect(20px, 9999px, 94px, 0)",
            transform: "skew(0.35deg)",
          },
          "70%": {
            clip: "rect(36px, 9999px, 26px, 0)",
            transform: "skew(0.56deg)",
          },
          "75%": {
            clip: "rect(67px, 9999px, 70px, 0)",
            transform: "skew(0.9deg)",
          },
          "80%": {
            clip: "rect(13px, 9999px, 6px, 0)",
            transform: "skew(0.28deg)",
          },
          "85%": {
            clip: "rect(1px, 9999px, 60px, 0)",
            transform: "skew(0.67deg)",
          },
          "90%": {
            clip: "rect(26px, 9999px, 35px, 0)",
            transform: "skew(0.26deg)",
          },
          "95%": {
            clip: "rect(24px, 9999px, 41px, 0)",
            transform: "skew(0.32deg)",
          },
          "100%": {
            clip: "rect(91px, 9999px, 30px, 0)",
            transform: "skew(0.86deg)",
          },
        },

        "glitch-anim-2": {
          "0%": {
            clip: "rect(41px, 9999px, 25px, 0)",
            transform: "skew(0.8deg)",
          },
          "5%": {
            clip: "rect(14px, 9999px, 91px, 0)",
            transform: "skew(0.76deg)",
          },
          "10%": {
            clip: "rect(71px, 9999px, 29px, 0)",
            transform: "skew(0.46deg)",
          },
          "15%": {
            clip: "rect(49px, 9999px, 25px, 0)",
            transform: "skew(0.85deg)",
          },
          "20%": {
            clip: "rect(32px, 9999px, 87px, 0)",
            transform: "skew(0.87deg)",
          },
          "25%": {
            clip: "rect(20px, 9999px, 7px, 0)",
            transform: "skew(0.47deg)",
          },
          "30%": {
            clip: "rect(47px, 9999px, 97px, 0)",
            transform: "skew(0.48deg)",
          },
          "35%": {
            clip: "rect(27px, 9999px, 39px, 0)",
            transform: "skew(0.33deg)",
          },
          "40%": {
            clip: "rect(5px, 9999px, 27px, 0)",
            transform: "skew(0.84deg)",
          },
          "45%": {
            clip: "rect(90px, 9999px, 55px, 0)",
            transform: "skew(0.46deg)",
          },
          "50%": {
            clip: "rect(77px, 9999px, 43px, 0)",
            transform: "skew(0.22deg)",
          },
          "55%": {
            clip: "rect(100px, 9999px, 7px, 0)",
            transform: "skew(0.86deg)",
          },
          "60%": {
            clip: "rect(63px, 9999px, 35px, 0)",
            transform: "skew(0.95deg)",
          },
          "65%": {
            clip: "rect(26px, 9999px, 34px, 0)",
            transform: "skew(0.21deg)",
          },
          "70%": {
            clip: "rect(57px, 9999px, 7px, 0)",
            transform: "skew(0.61deg)",
          },
          "75%": {
            clip: "rect(28px, 9999px, 37px, 0)",
            transform: "skew(0.08deg)",
          },
          "80%": {
            clip: "rect(59px, 9999px, 38px, 0)",
            transform: "skew(0.13deg)",
          },
          "85%": {
            clip: "rect(34px, 9999px, 95px, 0)",
            transform: "skew(0.18deg)",
          },
          "90%": {
            clip: "rect(39px, 9999px, 22px, 0)",
            transform: "skew(0.64deg)",
          },
          "95%": {
            clip: "rect(55px, 9999px, 75px, 0)",
            transform: "skew(0.31deg)",
          },
          "100%": {
            clip: "rect(49px, 9999px, 17px, 0)",
            transform: "skew(0.69deg)",
          },
        },
      },
      animation: {
        eye: "eye 10s infinite alternate cubic-bezier(0.17, 0.67, 0.83, 0.67)",
        "glitch-skew": "glitch-skew 1s infinite linear alternate-reverse",
        "glitch-anim": "glitch-anim 5s infinite linear alternate-reverse",
        "glitch-anim-2": "glitch-anim-2 1s infinite linear alternate-reverse",
      },
      boxShadow: {
        square: "0 5px 0 #000",
        "square-left": "-0.35rem 0.35rem 0 #000",
        "square-right": "0.35rem 0.35rem 0 #000",
      },
    },
  },
  plugins: [],
};
