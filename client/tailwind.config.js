/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-light":
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "custom-dark":
          "0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)",
      },
    },
    flex: {
      1: "110%",
      2: "220%",
      3: "330%",
      4: "440%",
      5: "550%",
      6: "660%",
      7: "770%",
      8: "880%",
    },
  },
  plugins: [require("flowbite/plugin")],
};
