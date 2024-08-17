/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        mobile: "100%",
        tablet: "100%",
        desktop: "1290px",
      },
    },
    extend: {
      colors: {
        white: "#fff",
        black: "#0C0F12",
        // primary: "#30434E",
        primary: "#1e2026",
        secondary: "#0F1D30",
        brightgray: "#EAEEE9",
        richblack: "#051118",
      },
    },
    spacing: {
      0: "0px",
      1: "8px",
      2: "16px",
      3: "24px",
      4: "32px",
      5: "48px",
      6: "64px",
      7: "72px",
      8: "100px",
    },
    fontSize: {
      12: "12px",
      13: "13px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      24: "24px",
      32: "32px",
      48: "48px",
      72: "72px",
      96: "96px",
    },
  },
  plugins: [],
}