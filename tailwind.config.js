/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gradientColorStops: (theme) => ({
        "purple-600": theme("colors.purple.600"),
        "purple-800": theme("colors.purple.800"),
      }),
      linearGradientColors: (theme) => ({
        purple: [theme("colors.purple.600"), theme("colors.purple.800")],
      }),
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
};
