/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./compoment/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'cardshadow': '0px 2px 8px rgba(40, 41, 61, 0.04), 0px 16px 24px rgba(96, 97, 112, 0.16)',
      }
    },
  },
  plugins: [],
}


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [

//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
