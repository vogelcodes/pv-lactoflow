import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'green': '#76b1af',
      'red': '#c6302c',
      'red-300': '#f9605b',
      'blue': '#122e49',
      'cream': '#fcfaef'
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
