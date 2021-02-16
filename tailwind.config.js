// tailwind.config.js
module.exports = {
  theme: {
    screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... } 
    
        'md': '768px',
        // => @media (min-width: 768px) { ... }
    
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
    
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
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