import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./content/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        shell: "#ffffff",
        mist: "#1f2937",
        calm: "#16a34a",
        glow: "#22c55e",
      },
      fontFamily: {
        sans: ["'Space Grotesk'", "'Manrope'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;