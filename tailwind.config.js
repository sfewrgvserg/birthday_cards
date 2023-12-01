/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#fae8ff",
        "primary-200": "#f5d0fe",
        "primary-300": "#f0abfc",
        "primary-400": "#e879f9",
        "primary-500": "#d946ef",
        "primary-600": "#c026d3",
        "primary-700": "#a21caf",
        "primary-800": "#86198f",
        "primary-900": "#701a75",
        "grey-50": "#f8fafc",
        "grey-100": "#f1f5f9",
        "grey-200": "#e2e8f0",
        "grey-300": "#cbd5e1",
        "grey-400": "#94a3b8",
        "grey-500": "#64748b",
        "grey-600": "#475569",
        "grey-700": "#334155",
        "grey-800": "#1e293b",
        "grey-900": "#0f172a",
        "red-light": "#f8d7da",
        "red-dark": "#842029",
        "green-light": "#d1e7dd",
        "green-dark": "#0f5132",
      },
    },
  },
  plugins: [],
};
