/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#111111",
        secondaryColor : "#6047EC",
        extraColor : "rgba(17, 17, 17, 0.60)",
        // Add more custom colors here if needed
      },
    },
  },
  plugins: [require("daisyui")],
};

