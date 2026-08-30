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
        navy: {
          bg: "#0a1120",
          surface: "#0f172a",
          card: "#1e293b",
          border: "#334155",
        },
        gold: {
          accent: "#d4af37",
          hover: "#b89628",
          light: "#fef08a",
          muted: "#a18224",
        },
      },
      fontFamily: {
        heading: ["var(--font-cinzel)", "serif"],
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
