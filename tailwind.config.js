module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '0.1':'0.063rem'
      },
      backgroundImage : {
        'mobile-app' : "url(https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png)"
      },
      colors: {
        brandColor: '#4c3398' ,
        primaryBrandColor:'#5d3ebc',
        secondaryBrandColor: '#7849f7',
        brandYellow: '#ffd300'
      }
    },
  },
  plugins: [],
}