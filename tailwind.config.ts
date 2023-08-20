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
      blue: "#122e49",
      cream: "#fcfaef",
    },
    fontFamily: {
      sans: ['var(--font-gotham)'],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
