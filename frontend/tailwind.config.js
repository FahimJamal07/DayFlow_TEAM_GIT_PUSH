/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        status: {
          green: "hsl(var(--status-green))",
          amber: "hsl(var(--status-amber))",
          red: "hsl(var(--status-red))",
          blue: "hsl(var(--status-blue))",
        }
      }
    },
  },
  plugins: [],
}
