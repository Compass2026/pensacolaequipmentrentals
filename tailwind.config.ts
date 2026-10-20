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
          navy: "#1F2D42",
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
      boxShadow: {
        card: "0 1px 2px rgba(17,24,39,0.04), 0 8px 24px -12px rgba(17,24,39,0.12)",
        lift: "0 2px 4px rgba(17,24,39,0.04), 0 24px 48px -16px rgba(17,24,39,0.22)",
        "glow-red": "0 12px 32px -8px rgba(215,78,49,0.55)",
        "glow-blue": "0 12px 32px -8px rgba(0,74,173,0.5)",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: "1" },
          "50.01%, 100%": { opacity: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.9" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "attention": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        marquee: "marquee 40s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 1.8s cubic-bezier(0.2,0.6,0.4,1) infinite",
        "spin-slow": "spin-slow 60s linear infinite",
        attention: "attention 1.6s ease-in-out infinite",
      },
      container: {
        center: true,
        padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2rem" },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1360px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
