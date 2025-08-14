/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    // add more as needed, no leading dots on src folder
  ],
  theme: {
    extend: {
      colors: {
        'sunset-orange-100': '#fff1f0',
        'sunset-orange-500': '#FF6719',
        'sunset-orange-900': '#c94c43',
        'accent-orange': '#FF6719',
        'dark-indigo': '#1e1b4b',
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
       animation: {
        'glitch-move': 'glitchMove 1.5s infinite ease-in-out',
        'glitch-zoom': 'glitchZoom 3s infinite linear',
         'parallax-rgb': 'parallax-rgb 6s ease-in-out infinite',
    'parallax-slow': 'parallax-slow 8s ease-in-out infinite',
    'flicker': 'flicker 0.6s steps(2, start) infinite',
    vhsFlicker: 'vhsFlicker 0.8s linear infinite',
    glitch: 'glitchIcon 0.5s infinite',
      },
      keyframes: {
        glitchMove: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '20%': { transform: 'translate(-2px, 1px)' },
          '40%': { transform: 'translate(2px, -1px)' },
          '60%': { transform: 'translate(-1px, 2px)' },
          '80%': { transform: 'translate(1px, -2px)' },
        },
        glitchZoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
         vhsFlicker: {
          '0%, 100%': { opacity: 1 },
          '10%': { opacity: 0.5 },
          '20%': { opacity: 1 },
          '30%': { opacity: 0.3 },
          '50%': { opacity: 1 },
          '70%': { opacity: 0.7 },
          '90%': { opacity: 0.4 },
        },
         glitchIcon: {
      '0%': { transform: 'translate(0, 0)' },
      '20%': { transform: 'translate(-1px, 1px)' },
      '40%': { transform: 'translate(1px, -1px)' },
      '60%': { transform: 'translate(-2px, 2px)' },
      '80%': { transform: 'translate(2px, -2px)' },
      '100%': { transform: 'translate(0, 0)' },
    },
      },
    
      
      
    },
  },
  plugins: [
   
  ],
};

