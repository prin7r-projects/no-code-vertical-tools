import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        border: "var(--border)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        "accent-deep": "var(--accent-deep)",
        warn: "var(--warn)",
        ok: "var(--ok)"
      },
      fontFamily: {
        sans: [
          "Inter Variable",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace"
        ]
      },
      borderRadius: {
        none: "0",
        xs: "2px",
        sm: "4px",
        DEFAULT: "6px",
        md: "6px",
        lg: "10px",
        full: "9999px"
      }
    }
  },
  plugins: []
};

export default config;
