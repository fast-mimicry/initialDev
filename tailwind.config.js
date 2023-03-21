/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", //Just-in-Time Modeを有効にする
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  //purge:[] //v3でpurgeは設定不要
  theme: {
    extend: {},
  },
  plugins: [],
}
