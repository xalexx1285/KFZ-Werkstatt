/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        void: {
          900: "#030303",
          800: "#0A0A0A",
          700: "#121212",
        },
        ice: {
          DEFAULT: "#00F0FF",
          light: "#80FAFF",
        },
      },
      fontFamily: {
        display: ["Cabinet Grotesk", "sans-serif"],
        body: ["Satoshi", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.3em",
      },
      keyframes: {
        "grain-shift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -5%)" },
          "30%": { transform: "translate(3%, -8%)" },
          "50%": { transform: "translate(-4%, 6%)" },
          "70%": { transform: "translate(6%, 3%)" },
          "90%": { transform: "translate(-3%, -4%)" },
        },
      },
      animation: {
        grain: "grain-shift 8s steps(6) infinite",
      },
    },
  },
  plugins: [],
};
