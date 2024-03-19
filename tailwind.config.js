
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
    fontFamily: {
      titles: '"Marker Felt", fantasy'
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      xwide: '.3em'
    }
  },
  plugins: [],
}