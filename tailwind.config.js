/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // must use this to use different font with tailwind and nextJs
        mont: ["var(--font-mont)"],
      },
    },
  },
  plugins: [],
};
