import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        steel: "#334155",
        slate: "#64748b",
        cloud: "#f8fafc",
        accent: "#0369a1",
      },
    },
  },
  plugins: [],
};

export default config;
