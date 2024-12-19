/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'below-sm': { 'max': '650px' }, // custom breakpoint for below 600px
      },
      boxShadow: {
        custom: 'inset 0 0 17px 4px rgba(255, 74, 253, 0.09), 0 0 #20202000, 0 0 #20202000',
        "customa": '0 0 30px 5px #b363c133'
      },
    },
  },
  plugins: [],
}