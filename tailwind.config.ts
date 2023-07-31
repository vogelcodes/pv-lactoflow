import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
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
      "red-300": "#f9605b",
      blue: "#122e49",
      cream: "#fcfaef",
    },
    fontFamily: {
      sans: ["Gotham", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
