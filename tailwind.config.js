/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
      "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {
      colors : {
        "back-color" : "rgb(0, 18, 64)",
        "header-text-color" : "rgb(255, 80, 0)",
        "header-card-color" :"rgb(0, 18, 64)",
      }
    },
  },
  plugins: [],
}
