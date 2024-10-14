import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/img/backgrounds/hero.png')",
      },
      fontFamily: {
        mulish: ["var(--font-mulish)"],
        kharkiv: ["var(--font-kharkiv)"],
      },
      colors: {
        darkest: "hsl(var(--darkest))",
        lightest: "hsl(var(--lightest))",
        accent: "hsl(var(--accent))",
        dark: "hsl(var(--dark))",
        gray: "hsl(var(--gray))",
        lightGray: "hsl(var(--light-gray))",
      },
    },
  },
  plugins: [],
};
export default config;
