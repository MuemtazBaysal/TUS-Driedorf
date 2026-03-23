import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./content/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        shell: "#070b16",
        mist: "#dfe7ff",
        calm: "#8ea6d9",
        glow: "#6db7ff",
      },
      backdropBlur: {
        soft: "14px",
      },
      boxShadow: {
        glass: "0 16px 40px -18px rgba(40, 99, 198, 0.45)",
      },
      fontFamily: {
        sans: ["'Space Grotesk'", "'Manrope'", "sans-serif"],
      },
      backgroundImage: {
        sheen: "radial-gradient(circle at 20% 20%, rgba(109, 183, 255, 0.25), transparent 55%), radial-gradient(circle at 80% 0%, rgba(223, 231, 255, 0.22), transparent 40%)",
      },
    },
  },
  plugins: [],
};

export default config;