/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      theme: {
        colors: {
          teal: {
            600: '#195F6B',
          },
          blue: {
            100: '#ebf8ff',
          },
          gray: {
            100: '#f7fafc',
            800: '#2d3748',
          },
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
        screens: {
          'xs': '475px',
        },
      },
    },
  },
  plugins: [],
};
