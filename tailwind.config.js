// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'xs':{'min':'375px', 'max':'639px'},
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
    extend: {
      colors: {
        'blue-900': '#276696',
        'blue-1000': '#5f6276',
        'red-1000' :'#e94446',
        'purple-1000':'#51354b',
        'blue-150':'#3b3d63',
        'blue-250':'#313455',
        'white-20':'#d6d6d67b'
      }
    }
  }
}