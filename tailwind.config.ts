import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: "media",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      green: "#76b1af",
      red: "#c6302c",
      "red-100": "#F9B8AC",
      "red-400": "#F55D4E",
      "red-fura": "#ff3131",
      blue: "#122e49",
      "blue-fura": "#14a3fe",
      "green-fura": "#2adcaa",
      cream: "#fcfaef",
    },
    fontFamily: {
      sans: ['var(--font-gotham)'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
} satisfies Config;
