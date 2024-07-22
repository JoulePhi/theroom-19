/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#494436",
        secondary: "#D3D160",
        accent: "#F7DCB9",
      },
      fontFamily: {
        CabinSketch: ["Cabin Sketch"],
      },
      boxShadow: {
        "3xl": "0 10px 50px 3px rgba(0, 0, 0, 0.6)",
      },
      backgroundImage: {
        reservasi: "url('../images/reservasi.png')",
      },
    },
  },
  plugins: [],
};
