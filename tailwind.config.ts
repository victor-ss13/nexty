import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core Colours from Figma
        burnt: {
          orange: "#BD5216",
          dark: "#9E410E",
        },
        deep: {
          brown: "#593213",
        },
        cream: {
          DEFAULT: "#FFF5EC",
          light: "#FFF9F5",
        },
        sage: {
          DEFAULT: "#828866",
          dark: "#6F7554",
          light: "#DCD6D4",
        },
        // Surfaces & Borders
        warm: {
          white: "#FFFBFA",
        },
        sand: {
          DEFAULT: "#E8D3BE",
          border: "#E3CDB5",
          light: "#F7EFE7",
        },
        blush: "#F1E4D5",
        clay: "#F3DDD0",
        // Text
        body: {
          brown: "#6E4E3A",
        },
        charcoal: "#22201C",
        muted: "#7A746B",
      },
      borderRadius: {
        btn: "14px",
        card: "20px",
        "card-lg": "24px",
      },
      fontFamily: {
        serif: ["var(--font-rufina)", "serif"],
        wordmark: ["var(--font-gabriela)", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        mobile: "393px",
        content: "350px",
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(89, 50, 19, 0.08)",
        elevated: "0 20px 40px -15px rgba(89, 50, 19, 0.12)",
      },
    },
  },
  plugins: [],
} satisfies Config;
