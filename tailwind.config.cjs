/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1600px",
      },
      colors: {
        primary: "#262626",
        secondery: "#767676",
        third: "#F5F5F3",
        placeholder: "#C4C4C4",
        whiteoff: "rgba(255,255,255,0.7)",
        divid: "#2D2D2D",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
