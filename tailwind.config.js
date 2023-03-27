
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'tommi-bk' : "url('/assets/tommisalomaa-bk.jpg')",
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(255, 255, 255, 0.3)',
      },
      
    },
  },
  plugins: [],
}