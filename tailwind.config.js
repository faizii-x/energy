/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
<<<<<<< HEAD
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/*/.{js,ts,jsx,tsx}",
    "./src/app/*/.{js,ts,jsx,tsx}",
=======
    // './src/*/.{js,ts,jsx,tsx,mdx}',
    // './src/pages/*/.{js,ts,jsx,tsx}',


    './src/**/*.{js,ts,jsx,tsx}',
    // './src/app/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // "./pages/*/.{js,ts,jsx,tsx}",
    "./src/pages/*/.{js,ts,jsx,tsx}",
    "./src/component/*/.{js,ts,jsx,tsx}",
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/**/*.{js,ts,jsx,tsx,mdx}',
>>>>>>> 268989c4c21c237e7b986cd0a7335aa27c9c1c82
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
