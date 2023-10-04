/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%, 100%": { filter: "opacity(100%)" },
          "50%": { filter: "opacity(5%)" },
        },
        jigle: {
          "0%,100%": { filter: "drop-shadow(2px 2px 0 pink) opacity(50%)" },
          "25%": { filter: "drop-shadow(-2px 2px 0 blue) opacity(100%)" },
          "75%": { filter: "drop-shadow(-2px -2px 0 green)" },
          "50%": { filter: "drop-shadow(2px -2px 0 red) opacity(50%) " },
        },
      },
      animation: {
        flash: "blink 0.8s step-start infinite",
        degauss: "jigle 1s linear(0, 1, -10, 10, 0, 1) infinite",
        shake: "jigle 1s linear(0.5, 0.5, -0.5, 0.5, 0.5, 0.5) infinite",
      },
    },
  },
  plugins: [
    function ({ addComponents, _theme }) {
      addComponents({
        "*": {
          "a._hotlink": {
            "color": "rgb(34 211 238 / var(--tw-text-opacity))",
          },
          "a:hover._hotlink": {
            "color": "red",
            "animation":
              "jigle 1s linear(0.5, 0.5, -0.5, 0.5, 0.5, 0.5) infinite",
          },
        },
      });
    },
  ],
};
