import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./content/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        shell: "#0a1f0a",
        mist: "#ffffff",
        calm: "#a8d5a3",
        glow: "#4ade80",
      },
      backdropBlur: {
        soft: "14px",
      },
      boxShadow: {
        glass: "0 16px 40px -18px rgba(74, 222, 128, 0.25)",
      },
      fontFamily: {
        sans: ["'Space Grotesk'", "'Manrope'", "sans-serif"],
      },
      backgroundImage: {
        sheen: "radial-gradient(circle at 20% 20%, rgba(74, 222, 128, 0.15), transparent 55%), radial-gradient(circle at 80% 0%, rgba(168, 213, 163, 0.12), transparent 40%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        roll: {
          "0%": { transform: "translateX(-100%) rotate(0deg)" },
          "100%": { transform: "translateX(100vw) rotate(360deg)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        roll: "roll 15s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;