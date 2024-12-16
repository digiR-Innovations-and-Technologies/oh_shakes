import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#F79031",
        "dark-brown": "#F79031",
        accent: "#FA3E32",
        light: "#FFF8E5",
        "accent-secondary": "#FFD700",
      },
    },
  },
  plugins: [],
};
export default config;
// #F79031