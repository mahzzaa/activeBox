// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'xs': { 'max': '414px' },
      // 'sm':{'max' : '768px'},
      'md':{'min' : '768px'}
      // 'laptop':{ 'min':'1024px'},
      // 'desktop':{ 'min':'1280px'},
    },
    extend: {
      colors: {
        'blue-900': '#276696',
        'blue-1000': '#5f6276',
        'red-1000' :'#e94446',
        'purple-1000':'#51354b',
        'blue-150':'#3b3d63',
        'blue-250':'#313455'
      }
    }
  }
}