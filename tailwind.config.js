// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,jsx}"],
//   mode: "jit",
//   theme: {
//     extend: {
//       colors: {
//         dimWhite: "rgba(255, 255, 255, 0.7)",
//         balck: "#2F313C",
//       },
//       fontFamily: {
//         poppins: ["Lato", "sans-serif"],
//       },
//     },
//     screens: {
//       // mobile: "480px",
//       //tablet: "640px",
//       // => @media (min-width: 640px) { ... }
//       //laptop: "1024px",
//       // => @media (min-width: 1024px) { ... }
//       //desktop: "1280px",
//       // => @media (min-width: 1280px) { ... }
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
