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
        brand: {
          // Exact colors extracted from https://www.bnbcoastalcuts.com/
          blue: "#004AAD",
          "blue-dark": "#185BA6",
          "blue-light": "#004AAD1F",
          red: "#D74E31",
          "red-dark": "#B83B20",
          yellow: "#F5B93F",
          "yellow-dark": "#F3A814",
          black: "#111827",
          charcoal: "#1F2937",
          surface: "#111827",
          "surface-light": "#F8FAFC",
          "surface-border": "#374151",
          gray: "#9CA3AF",
        },
      },
      fontFamily: {
        heading: ["var(--font-geologica)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: "1" },
          "50.01%, 100%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1320px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
