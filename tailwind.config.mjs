export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem"
      },
      screens: {
        "2xl": "1180px"
      }
    },
    extend: {
      colors: {
        izired: "#cc0000",
        ink: "#050505",
        surface: "#111111",
        card: "#1a1a1a",
        line: "#262626",
        mist: "#d7d7d7",
        muted: "#9b9b9b"
      },
      fontFamily: {
        sans: ["Lato", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 70px rgba(204, 0, 0, 0.28)",
        card: "0 24px 80px rgba(0, 0, 0, 0.36)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseRed: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.75" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseRed: "pulseRed 5s ease-in-out infinite"
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(.2,.8,.2,1)"
      }
    }
  },
  plugins: []
};
