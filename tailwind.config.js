/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: "#0f172a",
          accent: "#22c55e",
          text: "#e2e8f0",
          muted: "#64748b",
        },
      },
      backgroundImage: {
        "gradient-header": "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      },
    },
  },
  plugins: [],
};
