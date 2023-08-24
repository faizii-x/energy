/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/*/.{js,ts,jsx,tsx}",
    "./src/app/*/.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      animation: {
        blob: "blob 5s ease-out infinite both",
        // blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "scale(1) translateY(0)",
            transformOrigin: "50% 16%",

            // transform: "translate(30px, 30px) scale(1)",
          },
          // "33%": {
          //   transform: "translate(30px, -50px) scale(1.1)",
          // },
          // "66%": {
          //   transform: "translate(-20px, 20px) scale(1.1)",
          // },
          "100%": {
            transform: "scale(1.15) translateY(-15px)",
            transformOrigin: "top",

            // transform: "translate(30px, -40px) scale(1.1)",
          },
        },
      },
    },
  },
  plugins: [],
};
