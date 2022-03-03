const { generateRandomInt, SNOW_COUNT } = require("./utils");

const winterAnimations = [...Array(SNOW_COUNT).keys()].map((item) => {
  const randomX = generateRandomInt(1000000) / 10000;
  const randomOffset = generateRandomInt(100000, -100000) / 10000;
  const randomXEnd = randomX + randomOffset;
  const randomXEndYoyo = randomX + randomOffset / 2;
  const randomYoyoTime = generateRandomInt(80000, 30000) / 100000;
  const randomYoyoY = randomYoyoTime * 100;
  const randomScale = generateRandomInt(10000) / 10000;
  const fallDuration = generateRandomInt(30, 10);
  const fallDelay = -generateRandomInt(30);

  return {
    keyframes: {
      [`fall-${item}`]: {
        [`${randomYoyoTime * 100}%`]: {
          transform: `translate(${randomXEnd}vw, ${randomYoyoY}vh) scale(${randomScale})`,
        },
        to: {
          transform: `translate(${randomXEndYoyo}vw, 100vh) scale(${randomScale})`,
        },
      },
    },
    animation: {
      [`fall-${item}`]: `fall-${item} ${fallDuration}s ${fallDelay}s linear infinite`,
    },
    safelist: `animate-fall-${item}`,
  };
});

module.exports = {
  safelist: winterAnimations.map((config) => config.safelist),
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(ellipse at bottom, var(--tw-gradient-stops))",
      },
      keyframes: winterAnimations
        .map((config) => config.keyframes)
        .reduce((object, item) => {
          const key = Object.keys(item)[0];
          const value = Object.values(item)[0];

          return Object.assign(object, { [key]: value });
        }, {}),
      animation: winterAnimations
        .map((config) => config.animation)
        .reduce((object, item) => {
          const key = Object.keys(item)[0];
          const value = Object.values(item)[0];

          return Object.assign(object, { [key]: value });
        }, {}),
    },
  },
};
