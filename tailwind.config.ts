import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./**/*.{html,md,liquid}",
    "!./node_modules/**",
    "!./_site/**"
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#6c4bf4" },
        accent:  { DEFAULT: "#22c7b7" }
      },
      borderRadius: {
        token: "var(--radius)"
      },
      keyframes: {
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        slideUp: { from: { opacity: "0", transform: "translateY(30px)" },
                   to:   { opacity: "1", transform: "translateY(0)" } }
      },
      animation: {
        fadeIn: "fadeIn .6s ease-out both",
        slideUp: "slideUp .8s ease-out both"
      }
    }
  },
  plugins: []
} satisfies Config;
