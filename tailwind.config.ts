import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customOrange: "#f0b37e",
        background: "#F5F5F0",
        foreground: "var(--foreground)",
        primary: "#008080",
        secondary: "#98EC65",
        third: "#FFD6AD",
        textColor: "#333333",
        borderColor: "#4B5563",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
export default config;
