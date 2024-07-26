import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "xs"    : "1.2rem",
      "sm"    : "1.4rem",
      "base"  : "1.6rem",
      "md"    : "1.8rem",
      "lg"    : "2.4rem",
      "xl"    : "3.2rem",
    },
    extend: {
      colors: {
        "black-d": "#090A11",
        "black-l": "#0E101B",
        "white": "#F1F0E1",
        "white-accent": "#B8E6F9",

        "yellow": "#F3F362",
        "red": "#CD3C3C",
        "green-l": "#6DCD3C",
        "green-d": "#28280B",

        "muted": "#606062",
      }
    },
  },
  plugins: [],
};
export default config;
