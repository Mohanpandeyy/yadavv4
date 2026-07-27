import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#14b8a6",
          500: "#007a78", // Card Teal Signature Color
          600: "#006361",
          700: "#004d4b",
          800: "#003836",
          900: "#082c2b",
          950: "#031716",
        },
        cardTeal: {
          DEFAULT: "#007a78",
          dark: "#004d4b",
          light: "#e6f4f3",
          deep: "#053432",
        },
        cardAmber: {
          DEFAULT: "#f59e0b",
          dark: "#d97706",
          light: "#fef3c7",
        },
        surface: { light: "#ffffff", dark: "#061817" },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        hindi: ["var(--font-devanagari)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 40px -12px rgba(0, 122, 120, 0.12)",
        glass: "0 4px 24px rgba(0, 122, 120, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
        glow: "0 0 60px -15px rgba(0, 122, 120, 0.4)",
        card: "0 20px 50px rgba(0, 122, 120, 0.18)",
      },
      animation: {
        "gradient-slow": "gradientMove 18s ease infinite",
        float: "float 7s ease-in-out infinite",
      },
      keyframes: {
        gradientMove: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
