/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          Cobalt_blue: "hsl(234, 85%, 45%)",
          Green_teal: "hsl(166, 100%, 37%)",
          Light_red: "hsl(0, 100%, 67%)",
          Orangey_yellow: "hsl(39, 100%, 56%)",
        },
        gradients: {
          Light_royal_blue_bg: "hsl(241, 81%, 54%)",
          Light_slate_blue_bg: "hsl(252, 100%, 67%)",
          Persian_blue_circle: "hsla(241, 72%, 46%, 0)",
          Violet_blue_circle: "hsla(256, 72%, 46%, 1)",
        },
        neutral: {
          Dark_gray_blue: "hsl(224, 30%, 27%)",
          Light_lavender: "hsl(241, 100%, 89%)",
          Pale_blue: "hsl(221, 100%, 96%)",
          White: "hsl(0, 0%, 100%)",
        },
      },
      fontFamily: {
        haken_grotesk: ["'Hanken Grotesk', sans-serif"],
      },
      transitionProperty: {
        height: "height",
      },
      transitionDuration: {
        500: "500ms",
      },
    },
  },
  plugins: [],
};
