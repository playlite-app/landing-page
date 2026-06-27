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
        bg: "#09090f",
        "bg-card": "#0f0f1a",
        "bg-card-2": "#13131f",
        brand: "#7c6af7",
        "brand-dim": "rgba(124, 106, 247, 0.12)",
        "text-1": "#e8e6ff",
        "text-2": "#8a87a8",
        "text-3": "#52506a",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderColor: {
        brand: "rgba(124, 106, 247, 0.15)",
        dim: "rgba(255, 255, 255, 0.06)",
      },
      boxShadow: {
        "brand-glow": "0 0 32px rgba(124, 106, 247, 0.35)",
        mockup: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
      },
      animation: {
        scanline: "scanline 3.5s ease-in-out infinite",
      },
      keyframes: {
        scanline: {
          "0%": { top: "0%", opacity: "0" },
          "5%": { opacity: "0.7" },
          "95%": { opacity: "0.5" },
          "100%": { top: "100%", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
